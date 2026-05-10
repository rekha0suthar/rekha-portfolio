# Role-based access in a MERN e-commerce app

*A short walkthrough of how I structured permissions for customers, admins, and store managers in [Grocery Store](https://grocery-store-ruddy-eight.vercel.app/) — what worked, what I'd change, and the one bug that taught me to never trust the client.*

---

When I started building Grocery Store, I had three user types in mind:

- **Customers** — browse the catalog, add to cart, check out.
- **Store managers** — add or edit products, manage inventory.
- **Admins** — everything a store manager can do, plus user management.

That sounds like a clean three-role hierarchy on paper. In practice, getting it right takes more than dropping a `role` field on the user model. Here's how I structured it, and the rough edges I ran into along the way.

## The user shape

The `User` model carries a single `role` field with one of three values:

```js
// models/User.js
const userSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['customer', 'manager', 'admin'],
    default: 'customer',
  },
});
```

Single source of truth. Customers self-sign up; managers and admins are seeded or promoted by an existing admin.

## Three places permissions are enforced

**1. JWT payload.** When a user logs in, the role goes into the signed JWT, so every authenticated request carries it without an extra DB lookup:

```js
const token = jwt.sign(
  { id: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
);
```

**2. Express middleware.** Two layers — `requireAuth` checks the token is valid, then `requireRole` checks it carries the right role:

```js
// middleware/auth.js
export const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Not authorized' });
  }
};

export const requireRole = (...allowed) => (req, res, next) => {
  if (!allowed.includes(req.user.role)) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
};
```

Routes then read like a permission spec:

```js
router.post('/products',  requireAuth, requireRole('manager', 'admin'), createProduct);
router.delete('/users/:id', requireAuth, requireRole('admin'),         deleteUser);
```

**3. React UI.** A small `<RequireRole roles={['admin']}>` wrapper hides admin-only links from the navbar and gates whole admin pages:

```jsx
const RequireRole = ({ roles, children }) => {
  const { user } = useAuth();
  if (!user || !roles.includes(user.role)) return null;
  return children;
};
```

The key insight: **the UI guard is for UX, not security.** If a customer crafts a request to `DELETE /users/123`, the React wrapper isn't between them and the database. The middleware is. Always assume the client is hostile.

## The bug that taught me that

Early on I had role-based UI but not role-based middleware on a couple of admin endpoints. I assumed: *"if the button isn't rendered, the customer can't reach the endpoint."* True for honest customers. Anyone with browser dev tools and 30 seconds of curiosity can copy the request from the admin's network tab and replay it themselves.

Caught it in code review with a friend. The fix was a one-line `requireRole('admin')` add. The lesson — *every* mutation route needs explicit role enforcement, full stop — was worth more than the bug took to fix.

## What I'd change next time

**Use a permission flag, not a role string.** `role: 'admin'` works for three roles. The moment the product needs "managers who can read user emails but not delete them," the role field collapses. A `permissions: ['products.write', 'users.read']` array — or a small ACL table — scales better. I'd start there if I rebuilt today.

**Centralize the policy.** My current code spreads `requireRole('admin')` calls across routes. Better: one `policy.js` file mapping every route to required permissions, applied via a single middleware. One place to audit, one place to change.

**Audit log.** Every action a manager or admin takes should land in an audit collection. I didn't add this and I'd regret it the moment a real product manager said "wait, who deleted that?".

## Takeaway

Role-based access is one of those things that *looks* trivial — add a field, check it, done — and stays trivial as long as you remember the cardinal rule: **the server enforces, the client suggests.** Build both layers, but never let the UI carry the security weight.

Repo: [github.com/rekha0suthar/grocery-store](https://github.com/rekha0suthar/grocery-store) · Live: [grocery-store-ruddy-eight.vercel.app](https://grocery-store-ruddy-eight.vercel.app/)

---

*Next up: build notes from the AI Resume Tailor — prompt design for structured output and streaming UX in React.*
