import { useEffect, useRef, useState } from 'react';
import { HiSparkles, HiXMark, HiPaperAirplane } from 'react-icons/hi2';
import '../styles/ChatAssistant.css';

const SUGGESTIONS = [
  'What AI projects has she built?',
  "What's her tech stack?",
  'Has she contributed to open source?',
];

const HISTORY_LIMIT = 12; // messages sent to the API per request
const MAX_INPUT_CHARS = 500;

const ChatAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const sendMessage = async (text) => {
    const content = text.trim().slice(0, MAX_INPUT_CHARS);
    if (!content || loading) return;

    const userMessage = { role: 'user', content };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      // Send only real conversation turns (no error bubbles), capped.
      const history = nextMessages
        .filter((m) => !m.error)
        .slice(-HISTORY_LIMIT)
        .map(({ role, content: c }) => ({ role, content: c }));

      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      let data = null;
      try {
        data = await res.json();
      } catch {
        // non-JSON response — handled below
      }

      if (data && typeof data.reply === 'string' && data.reply) {
        // Includes the friendly 429 rate-limit message from the server.
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.reply, error: !res.ok },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content:
              "Sorry, I couldn't answer that right now. Please try again in a moment, or reach Rekha via the contact section below.",
            error: true,
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "Sorry, I couldn't connect just now. Please try again in a moment, or reach Rekha via the contact section below.",
          error: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="chat-assistant">
      {open && (
        <div className="chat-panel" role="dialog" aria-label="AI assistant chat">
          <div className="chat-header">
            <span className="chat-header-title">
              Ask me about Rekha <HiSparkles className="chat-header-icon" aria-hidden="true" />
            </span>
            <button
              type="button"
              className="chat-close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <HiXMark />
            </button>
          </div>

          <div className="chat-messages">
            {messages.length === 0 && (
              <div className="chat-empty">
                <p className="chat-empty-text">
                  Hi! I'm an AI assistant trained on this portfolio. Ask me
                  anything about Rekha's projects, skills, or experience.
                </p>
                <div className="chat-suggestions">
                  {SUGGESTIONS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      className="chat-suggestion-chip"
                      onClick={() => sendMessage(q)}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`chat-bubble ${
                  m.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-assistant'
                }${m.error ? ' chat-bubble-error' : ''}`}
              >
                {m.content}
              </div>
            ))}

            {loading && (
              <div className="chat-bubble chat-bubble-assistant chat-typing" aria-label="Assistant is typing">
                <span className="chat-typing-dot" />
                <span className="chat-typing-dot" />
                <span className="chat-typing-dot" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-row" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="chat-input"
              placeholder="Ask about Rekha..."
              value={input}
              maxLength={MAX_INPUT_CHARS}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Your question"
            />
            <button
              type="submit"
              className="chat-send-btn"
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              <HiPaperAirplane />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className={`chat-launcher${open ? ' chat-launcher-open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close AI assistant' : 'Open AI assistant'}
      >
        {open ? <HiXMark /> : <HiSparkles />}
      </button>
    </div>
  );
};

export default ChatAssistant;
