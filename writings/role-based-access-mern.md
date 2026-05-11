# Role-based access in a MERN e-commerce app

A short walkthrough of how I set up permissions for customers, admins, and store managers in [Grocery Store](https://grocery-store-ruddy-eight.vercel.app/), and the one bug that almost shipped.

---

When I started building Grocery Store I had three kinds of users in mind. Customers who browse the catalog and check out. Store managers who add and edit products. Admins who can do everything plus manage users.

On paper that's a clean three-role hierarchy. In practice it took more than dropping a `role` field on the user model.

## The user model

One field, three values.

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

Customers sign up themselves. Managers and admins get seeded once or promoted later by an existing admin.

## Where the role actually gets checked

In three places, in this order.

**The JWT.** When someone logs in, the role goes into the signed token. Every authenticated request after that carries the role with it, no extra database hit needed.

```js
const token = jwt.sign(
  { id: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
);
```

**Express middleware.** Two thin layers. The first verifies the JWT is real. The second checks the role is one we expect.

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

Routes then almost read like a spec:

```js
router.post('/products',     requireAuth, requireRole('manager', 'admin'), createProduct);
router.delete('/users/:id',  requireAuth, requireRole('admin'),            deleteUser);
```

**React.** A tiny `<RequireRole>` wrapper hides admin links from the navbar and gates admin-only pages.

```jsx
const RequireRole = ({ roles, children }) => {
  const { user } = useAuth();
  if (!user || !roles.includes(user.role)) return null;
  return children;
};
```

The thing I had to keep reminding myself: the UI guard is for UX, not security. If a customer crafts a `DELETE /users/123` request with curl or the browser console, the React wrapper isn't between them and the database. The middleware is. Assume the client is hostile.

## The bug I almost shipped

Early on I had role-based UI but I'd forgotten to add `requireRole('admin')` on a couple of admin-only endpoints. My logic was: if the customer can't see the button, they can't hit the route.

True for honest customers. Anyone with browser dev tools and thirty seconds of curiosity can open the admin's network tab, copy the request as cURL, and replay it from their own session.

A friend caught it in code review. The fix was a one-line middleware add per route. The lesson took longer to sink in: every mutation route needs explicit role enforcement. No exceptions.

## What I'd change next time

The `role` string works for three roles. The moment the product needs something like "managers who can read user emails but not delete them," it falls apart. If I rebuilt today I'd use a `permissions: ['products.write', 'users.read']` array, or a small ACL collection. Scales much better and avoids the impulse to keep adding role strings.

I'd also centralize the policy. Right now `requireRole('admin')` calls are scattered across route files. One `policy.js` mapping every endpoint to the permissions it needs, applied via a single middleware, would be easier to audit and harder to forget.

And an audit log. Every action a manager or admin takes should land in a small append-only collection. I didn't add this and I'd regret it the moment a product person asked "wait, who deleted that record?"

## Takeaway

Role-based access is one of those things that looks trivial. Add a field, check it, ship. It stays trivial as long as you remember the cardinal rule: server enforces, client suggests. Build both layers but never let the UI carry the security weight.

Repo: [github.com/rekha0suthar/grocery-store](https://github.com/rekha0suthar/grocery-store).
Live: [grocery-store-ruddy-eight.vercel.app](https://grocery-store-ruddy-eight.vercel.app/).

---

Next up: build notes from AI Resume Tailor. Prompt design for structured output and the bug Llama 3 keeps trying to slip past me.
