export default function SkillBullet({ children }) {
  return (
    <li className="flex items-start gap-3 text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-300 sm:text-base">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}