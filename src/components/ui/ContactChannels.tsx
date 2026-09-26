import { useState } from "react";
import { FaArrowRight, FaCheck, FaCopy, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";
import { social } from "../../data/portfolio";

function hostPath(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

const channels: {
  label: string;
  value: string;
  href: string;
  hint: string;
  icon: IconType;
  external: boolean;
  copyValue?: string;
}[] = [
  {
    label: "Email",
    value: social.email,
    href: `mailto:${social.email}`,
    hint: "Escribir",
    icon: FaEnvelope,
    external: false,
    copyValue: social.email,
  },
  {
    label: "GitHub",
    value: hostPath(social.github),
    href: social.github,
    hint: "Ver perfil",
    icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: hostPath(social.linkedin),
    href: social.linkedin,
    hint: "Conectar",
    icon: FaLinkedin,
    external: true,
  },
];

const cardClass =
  "group flex flex-col rounded-3xl border border-navy/8 bg-surface p-6 transition hover:-translate-y-1 hover:border-sky hover:shadow-[0_16px_40px_rgb(30_58_95/0.08)] dark:border-white/10 dark:bg-card dark:hover:shadow-none";

const iconClass =
  "grid size-14 place-items-center rounded-2xl bg-mist text-navy transition duration-200 group-hover:bg-navy group-hover:text-white dark:bg-night dark:text-foam dark:group-hover:bg-sky dark:group-hover:text-night";

export default function ContactChannels() {
  const [copied, setCopied] = useState(false);

  async function copyEmail(value: string) {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const input = document.createElement("textarea");
      input.value = value;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {channels.map((channel) => {
        const Icon = channel.icon;
        const body = (
          <>
            <span className={iconClass}>
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <p className="mt-5 text-sm font-medium text-blue">{channel.label}</p>
            <p className="mt-1 break-all text-lg font-semibold tracking-tight text-navy dark:text-foam">
              {channel.value}
            </p>
          </>
        );

        if (channel.copyValue) {
          return (
            <article key={channel.label} className={cardClass}>
              {body}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={channel.href}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy/70 transition hover:text-blue dark:text-tide dark:hover:text-sky"
                >
                  {channel.hint}
                  <FaArrowRight className="size-3" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => copyEmail(channel.copyValue!)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-navy/15 px-4 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:border-blue hover:text-blue dark:border-sky/40 dark:text-foam dark:hover:text-sky"
                  aria-live="polite"
                >
                  {copied ? <FaCheck className="size-3.5" aria-hidden="true" /> : <FaCopy className="size-3.5" aria-hidden="true" />}
                  {copied ? "Copiado" : "Copiar"}
                </button>
              </div>
            </article>
          );
        }

        return (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.external ? "_blank" : undefined}
            rel={channel.external ? "noopener noreferrer" : undefined}
            className={cardClass}
          >
            {body}
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy/70 transition group-hover:text-blue dark:text-tide dark:group-hover:text-sky">
              {channel.hint}
              <FaArrowRight className="size-3 transition group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </a>
        );
      })}
    </div>
  );
}
