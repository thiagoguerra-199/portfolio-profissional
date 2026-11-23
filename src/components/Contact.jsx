import { useState } from "react";
import { Github, Linkedin, Mail, MessageCircle, Send } from "./Icons";
import { profile } from "../data";

export default function Contact() {
    const [status, setStatus] = useState("");
    const [sending, setSending] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const fields = new FormData(form);
        const name = fields.get("name").trim();
        const email = fields.get("email").trim();
        const message = fields.get("message").trim();

        if (name.length < 2 || message.length < 10) {
            setStatus("Preencha seu nome e escreva uma mensagem com pelo menos 10 caracteres.");
            return;
        }

        setSending(true);
        setStatus("");

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    _subject: "Contato pelo portfólio de Thiago Guerra",
                    _template: "table",
                    _honey: fields.get("_honey")
                }),
                signal: AbortSignal.timeout(20000)
            });

            const result = await response.json();

            if (!response.ok || (result.success !== true && result.success !== "true")) {
                throw new Error("Falha no envio");
            }

            // A primeira submissão pode exigir a confirmação do destinatário.
            setStatus("Mensagem encaminhada. Obrigado pelo contato!");
            form.reset();
        } catch {
            setStatus("Não foi possível enviar agora. Tente novamente em alguns instantes.");
        } finally {
            setSending(false);
        }
    }

    return (
        <section id="contato" className="section reveal contact-section">
            <div className="contact-copy">
                <p className="eyebrow">CONTATO</p>
                <h2>Vamos conversar<span>?</span>
                </h2>
                <p>Estou procurando um estágio em desenvolvimento de software. Se quiser conversar sobre uma oportunidade ou algum dos meus projetos, pode me chamar por aqui.</p>
                <div className="social-links">
                    <a href={profile.github} target="_blank" rel="noreferrer">
                        <Github size={19} /> GitHub</a>
                    {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">
                        <Linkedin size={19} /> LinkedIn</a>}
                    {profile.email && <a href={`mailto:${profile.email}`}>
                        <Mail size={19} /> E-mail</a>}
                    {profile.whatsapp && <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
                        <MessageCircle size={19} /> WhatsApp</a>}
                </div>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Seu nome</label>
                <input id="name" name="name" placeholder="Como posso te chamar?" required minLength={2} maxLength={100} autoComplete="name" />
                <label htmlFor="email">Seu e-mail</label>
                <input id="email" type="email" name="email" placeholder="voce@exemplo.com" required maxLength={200} autoComplete="email" />
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" placeholder="Me conta sobre sua ideia..." required minLength={10} maxLength={3000} rows={4} />
                <input className="honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <button type="submit" className="button primary" disabled={sending}>{sending ? "Enviando..." : "Enviar mensagem"}<Send size={16} />
                </button>
                <p role="status" className="form-status">{status || "O formulário usa o FormSubmit para encaminhar a mensagem ao meu e-mail."}</p>
            </form>
        </section>
    );
}
