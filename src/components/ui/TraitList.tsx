import { traits } from "../../data/portfolio";

export default function TraitList() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2" data-reveal>
      {traits.map((trait) => {
        const Icon = trait.icon;

        return (
          <li
            key={trait.label}
            className="rounded-2xl  border border-navy/8 bg-mist px-4 py-4 transition hover:-translate-y-0.5 hover:border-sky dark:border-white/10 dark:bg-card"
          >
            <Icon className="mx-auto size-6 text-navy dark:text-foam" aria-hidden="true" />
            <p className="text-center mt-3 text-sm font-semibold text-navy dark:text-foam">{trait.label}</p>
          </li>
        );
      })}
    </ul>
  );
}
