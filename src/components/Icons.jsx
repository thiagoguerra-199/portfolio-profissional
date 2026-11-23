// Ícones em SVG, sem uma biblioteca adicional.
function Icon({ children, size = 20, strokeWidth = 1.7, ...props }) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
}

export function Github(props) {
    return <Icon {...props}>
        <path d="M9 19c-4.5 1.4-4.5-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.7-1.6 6.7-7.3a5.6 5.6 0 0 0-1.5-3.9 5.2 5.2 0 0 0-.1-3.8S17.9 0 15 1.8a13.4 13.4 0 0 0-6 0C6.1 0 4.9.3 4.9.3a5.2 5.2 0 0 0-.1 3.8A5.6 5.6 0 0 0 3.3 8c0 5.7 3.4 6.9 6.7 7.3A3.5 3.5 0 0 0 9 18v4" />
    </Icon>;
}
export function Code2(props) {
    return <Icon {...props}>
        <path d="m7 7-5 5 5 5m10-10 5 5-5 5M14 4l-4 16" />
    </Icon>;
}
export function MapPin(props) {
    return <Icon {...props}>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
    </Icon>;
}
export function Menu(props) {
    return <Icon {...props}>
        <path d="M4 6h16M4 12h16M4 18h16" />
    </Icon>;
}
export function X(props) {
    return <Icon {...props}>
        <path d="m6 6 12 12M6 18 18 6" />
    </Icon>;
}
export function ExternalLink(props) {
    return <Icon {...props}>
        <path d="M14 3h7v7m0-7L10 14m0-10H4v16h16v-6" />
    </Icon>;
}
export function GraduationCap(props) {
    return <Icon {...props}>
        <path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6m4-2v8" />
    </Icon>;
}
export function Terminal(props) {
    return <Icon {...props}>
        <rect x="2" y="3" width="20" height="18" rx="3" />
        <path d="m6 8 4 4-4 4m7 0h5" />
    </Icon>;
}
export function GitBranch(props) {
    return <Icon {...props}>
        <circle cx="6" cy="5" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="19" r="3" />
        <path d="M6 8v8m0-3c8 0 12-1 12-4" />
    </Icon>;
}
export function Braces(props) {
    return <Icon {...props}>
        <path d="M8 3H6v6l-3 3 3 3v6h2m8-18h2v6l3 3-3 3v6h-2" />
    </Icon>;
}
export function Linkedin(props) {
    return <Icon {...props}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4" />
    </Icon>;
}
export function Mail(props) {
    return <Icon {...props}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 6 10 7L22 6" />
    </Icon>;
}
export function MessageCircle(props) {
    return <Icon {...props}>
        <path d="M21 11.5a9 9 0 0 1-13 8L3 21l1.5-5A9 9 0 1 1 21 11.5Z" />
    </Icon>;
}
export function Send(props) {
    return <Icon {...props}>
        <path d="m22 2-7 20-4-9-9-4L22 2ZM11 13 22 2" />
    </Icon>;
}
