import { cacheLife } from "next/cache";
import { MapPinIcon } from "./icons";

async function getCopyrightYear() {
  "use cache";
  cacheLife("default");
  return new Date().getFullYear();
}

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export async function SiteFooter() {
  const year = await getCopyrightYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-amber-400 font-mono text-sm font-bold text-slate-950">
                GX
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-[0.2em] text-white">GEOMINX</span>
                <span className="mt-1 text-[10px] tracking-[0.35em] text-amber-400">INDIA</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6">
              Building Skills. Empowering Engineers. Transforming Engineering Practices.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                Jabalpur, Madhya Pradesh, India
              </li>
              <li>Email: [Your Official Email Address]</li>
              <li>Phone: [Your Contact Number]</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} GEOMINX INDIA. All rights reserved.</p>
          <p>Engineering Consultancy · Technical Training · Digital Engineering Solutions</p>
        </div>
      </div>
    </footer>
  );
}
