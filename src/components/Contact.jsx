import { useState } from "react";
import { Github, Linkedin, Mail, MessageCircle, Send } from "./Icons";
import { profile } from "../data";

export default function Contact() {
    const returnedFromSubmit = new URLSearchParams(window.location.search).get("enviado") === "1";
    const [status, setStatus] = useState(
        returnedFromSubmit ? "Obrigado pelo contato! Sua mensagem foi encaminhada pelo formulário." : ""
    );
    const [sending, setSending] = useState(false);

    function handleSubmit(event) {
        const fields = new FormData(event.currentTarget);
        const name = fields.get("name").trim();
        const message = fields.get("message").trim();

        if (name.length < 2 || message.length < 10) {
            event.preventDefault();
            setStatus("Preencha seu nome e escreva uma mensagem com pelo menos 10 caracteres.");
            return;
        }

        // O navegador envia os campos ao FormSubmit por POST.
        setSending(true);
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
            <form
                action={`https://formsubmit.co/${profile.email}`}
                method="POST"
                onSubmit={handleSubmit}
                className="contact-form"
            >
                <input type="hidden" name="_subject" value="Contato pelo portfólio de Thiago Guerra" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={`${window.location.origin}/?enviado=1#contato`} />
                <label htmlFor="name">Seu nome</label>
                <input id="name" name="name" placeholder="Como posso te chamar?" required minLength={2} maxLength={100} autoComplete="name" />
                <label htmlFor="email">Seu e-mail</label>
                <input id="email" type="email" name="email" placeholder="voce@exemplo.com" required maxLength={200} autoComplete="email" />
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" placeholder="Me conta sobre sua ideia..." required minLength={10} maxLength={3000} rows={4} />
                <input className="honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <button type="submit" className="button primary" disabled={sending}>{sending ? "Enviando..." : "Enviar mensagem"}<Send size={16} />
                </button>
                <p role="status" className="form-status">{status || "Ao enviar, você será direcionado à confirmação do formulário."}</p>
            </form>
        </section>
    );
}
