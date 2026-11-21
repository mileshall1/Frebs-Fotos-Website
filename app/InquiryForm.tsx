"use client";

import { useRef, useState } from "react";
import { contactEmail } from "./lib/site";

export default function InquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState("");
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Shoot inquiry\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nShoot: ${data.get("shoot")}\nDate: ${data.get("date") || "Flexible"}\nLocation: ${data.get("location")}\nBudget: ${data.get("budget") || "To discuss"}\n\n${data.get("details")}`;
    setDraft(message);
    setStatus("Your inquiry is ready. Open your email draft or copy it below to send.");
  }
  async function copy() {
    try { await navigator.clipboard.writeText(draft); setStatus("Inquiry copied. Paste it into an email or Instagram message to Frebruk."); }
    catch { setStatus("Select and copy the inquiry text below."); }
  }
  return <form className="inquiry-form" ref={formRef} onSubmit={prepare} onChange={() => { setDraft(""); setStatus(""); }}>
    <div className="inquiry-fields">
      <label>Your name<input name="name" autoComplete="name" placeholder="Your full name" required maxLength={100} /></label>
      <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
      <label>What are we making?<select name="shoot" required defaultValue=""><option value="" disabled>Select a shoot type</option><option>Portrait session</option><option>Commercial / editorial photography</option><option>Film production</option><option>Something else</option></select></label>
      <label>Preferred date <span>(optional)</span><input name="date" type="date" /></label>
      <label>Location<input name="location" autoComplete="address-level2" placeholder="City or location idea" required maxLength={200} /></label>
      <label>Estimated budget <span>(optional)</span><select name="budget" defaultValue=""><option value="">Let’s discuss</option><option>Under $500</option><option>$500–$1,500</option><option>$1,500–$5,000</option><option>$5,000+</option></select></label>
      <label className="inquiry-details">Tell me about the project<textarea name="details" rows={5} required maxLength={3000} placeholder="The idea, the people, and what you’d like to create." /></label>
    </div>
    <p className="inquiry-note">This form prepares an email for you to review and send. Your details aren’t stored on this site.</p>
    <button className="paper-button" type="submit">Prepare inquiry</button>
    <p role="status" className="inquiry-status">{status}</p>
    {draft && <div className="inquiry-preview"><label>Your inquiry<textarea readOnly value={draft} rows={9} /></label><div className="inquiry-actions"><a className="paper-button" href={`mailto:${contactEmail}?subject=${encodeURIComponent("Shoot inquiry — Freb’s Fotos")}&body=${encodeURIComponent(draft)}`}>Open email draft</a><button type="button" className="outline-button" onClick={copy}>Copy inquiry</button></div><p>Prefer a message? <a href="https://www.instagram.com/freb.fotos/" target="_blank" rel="noreferrer">Contact Frebruk on Instagram</a>.</p></div>}
  </form>;
}
