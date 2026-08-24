import { useState } from 'react';
import { post } from '../services/api';

export default function Assistant() {
  const [open, setOpen] = useState(false); const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ from: 'ai', text: 'Namaste. I can help with darshan, pooja, donations, events and bookings.' }]);
  async function ask(event) { event.preventDefault(); if (!input.trim()) return; const question = input.trim(); setInput(''); setMessages(items => [...items, { from: 'you', text: question }]); try { const result = await post('/ai', { message: question }); setMessages(items => [...items, { from: 'ai', text: result.answer }]); } catch { setMessages(items => [...items, { from: 'ai', text: 'Please explore the services above. I am temporarily offline, but the temple catalogue is still available.' }]); } }
  return <><button className="assistant-trigger" onClick={() => setOpen(true)} aria-label="Open AI Temple Assistant"><span>✦</span><b>Ask the Assistant</b></button>{open && <div className="assistant-panel"><div className="assistant-head"><div><span className="eyebrow">AI TEMPLE ASSISTANT</span><h3>How may I help?</h3></div><button className="icon-button" onClick={() => setOpen(false)} aria-label="Close assistant">×</button></div><div className="chat">{messages.map((message, index) => <div className={`bubble ${message.from}`} key={index}>{message.text}</div>)}</div><form className="chat-form" onSubmit={ask}><input value={input} onChange={event => setInput(event.target.value)} placeholder="Ask about temple services..." /><button aria-label="Send message">↗</button></form></div>}</>;
}
