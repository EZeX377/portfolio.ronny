import { email, linkedinUrl } from "./content";
import LinkedInIcon from "./LinkedInIcon";

export default function Footer() {
  return (
    <footer className="page-shell border-t border-neutral-200/80 py-6 dark:border-neutral-800">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
        <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-neutral-800 dark:text-neutral-100">Ronny Das</span>. UI/UX Developer and Project Lead for Government Systems, Web Applications, and Dashboard Platforms.
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${email}`} className="focus-ring rounded-full px-2 py-1 text-sm font-medium text-neutral-700 transition-colors hover:text-indigo-600 dark:text-neutral-300 dark:hover:text-indigo-400">
            {email}
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="focus-ring rounded-full p-1 text-neutral-700 transition-colors hover:text-indigo-600 dark:text-neutral-300 dark:hover:text-indigo-400"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}