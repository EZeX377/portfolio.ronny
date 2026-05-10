import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import LinkedInIcon from "./LinkedInIcon";
import { contactMethods } from "./content";

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-block">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-[1.2fr_0.9fr] lg:gap-12 2xl:gap-16">
          <article className="surface-card-soft">
            <h2 id="contact-heading" className="section-heading text-3xl sm:text-4xl">
              Let&apos;s Discuss Delivery-Focused UI/UX and System Design Work
            </h2>
            <p className="section-intro mt-4 max-w-2xl">
              If you want to talk about system design, project delivery, government platforms, dashboard systems, or structured interface work, I&apos;m open to the conversation.
            </p>
            <Link href={`mailto:${contactMethods[0].value}`} className="focus-ring button-secondary mt-6 inline-flex gap-2">
              Send Email <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
 
          <article className="surface-card">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white md:text-2xl">
              Get in touch
            </h3>
            <div className="mt-6 space-y-3">
              {contactMethods.map((method) => (
                <Link
                  key={method.label}
                  href={method.href}
                  target={method.label === "LinkedIn" ? "_blank" : undefined}
                  rel={method.label === "LinkedIn" ? "noreferrer" : undefined}
                  className="focus-ring flex items-center justify-between rounded-2xl border border-neutral-200 bg-white/90 px-4 py-4 transition-colors duration-150 hover:border-indigo-300 dark:border-neutral-700 dark:bg-neutral-800/90 dark:hover:border-indigo-500/70"
                >
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                      {method.label}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-neutral-800 dark:text-neutral-100 sm:text-base">
                      {method.value}
                    </span>
                  </span>
                  {method.label === "Email" ? <Mail className="h-5 w-5 text-neutral-500 dark:text-neutral-400" /> : <LinkedInIcon className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />}
                </Link>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              Open to roles focused on system design, project delivery, and large-scale government or enterprise platforms.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}