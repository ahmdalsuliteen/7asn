import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const SnapchatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2c3.3 0 5.5 2 5.5 5.4 0 2 .1 3.4-.3 4.7.4.2 1 .3 1.6.2.5 0 .8.4.6.9-.3.7-1.6 1.1-2.5 1.3.1.4.5 1 1.2 1.6.6.5 1.4.7 2.4.9.5.1.7.6.4 1-.6.7-1.6 1-2.6 1.2-.2.1-.3.3-.3.5-.1.4-.1.8-.4 1-.4.2-.9 0-1.4-.1-1.5-.3-2.5.1-3.4.7-1 .7-2 1.4-3.4 1.4s-2.4-.7-3.4-1.4c-.9-.6-1.9-1-3.4-.7-.5.1-1 .3-1.4.1-.3-.2-.3-.6-.4-1 0-.2-.1-.4-.3-.5-1-.2-2-.5-2.6-1.2-.3-.4-.1-.9.4-1 1-.2 1.8-.4 2.4-.9.7-.6 1.1-1.2 1.2-1.6-.9-.2-2.2-.6-2.5-1.3-.2-.5.1-.9.6-.9.6.1 1.2 0 1.6-.2-.4-1.3-.3-2.7-.3-4.7C6.5 4 8.7 2 12 2z" />
  </svg>
);

const items = [
  { href: "#", label: "Facebook", Icon: Facebook },
  { href: "#", label: "LinkedIn", Icon: Linkedin },
  { href: "#", label: "Instagram", Icon: Instagram },
  { href: "#", label: "Snapchat", Icon: SnapchatIcon },
  { href: "#", label: "X (Twitter)", Icon: Twitter },
];

export default function SocialIcons({
  className = "",
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <Link
            href={href}
            aria-label={label}
            className="text-[#70423F] transition hover:text-gold"
          >
            <Icon width={size} height={size} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
