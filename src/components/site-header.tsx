// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Link } from "@tanstack/react-router";
// import { ArrowUpRight, Menu, X } from "lucide-react";
// import { useState } from "react";

// const links = [
//   { to: "/sobre", label: "Sobre" },
//   { to: "/servicos", label: "Serviços" },
//   { to: "/portfolio", label: "Portfolio" },
//   { to: "/pacientes", label: "pacientes" },
// ] as const;

// export function SiteHeader() {
//   const [open, setOpen] = useState(false);
//   return (
//     <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
//         <Link
//           to={"/" as any}
//           className="flex items-baseline gap-2"
//           onClick={() => setOpen(false)}
//         >
//           <span className="font-display text-xl font-semibold tracking-tight text-ink">
//             INSIGHT CLINICA
//           </span>
//           <span className="text-xs uppercase tracking-[0.25em] text-stone"></span>
//         </Link>
//         <nav className="hidden items-center gap-10 text-sm text-foreground/70 md:flex">
//           {links.map((l) => (
//             <Link
//               key={l.to}
//               to={l.to as any}
//               className="transition hover:text-ink"
//               activeProps={{ className: "text-ink" }}
//             >
//               {l.label}
//             </Link>
//           ))}
//         </nav>
//         <div className="flex items-center gap-3">
//           <Link
//             to="/contato"
//             className="group hidden items-center gap-2 rounded-sm bg-ink px-4 py-2 text-sm text-primary-foreground transition hover:bg-terracotta md:inline-flex"
//           >
//             Contato
//             <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//           </Link>
//           <button
//             aria-label="Abrir menu"
//             onClick={() => setOpen((v) => !v)}
//             className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-ink md:hidden"
//           >
//             {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//           </button>
//         </div>
//       </div>
//       {open && (
//         <nav className="border-t border-border bg-background md:hidden">
//           <div className="mx-auto flex max-w-7xl flex-col px-6 py-4 lg:px-10">
//             {links.map((l) => (
//               <Link
//                 key={l.to}
//                 to={l.to as any}
//                 onClick={() => setOpen(false)}
//                 className="border-b border-border py-3 text-sm text-foreground/80"
//               >
//                 {l.label}
//               </Link>
//             ))}
//             <Link
//               to="/contato"
//               onClick={() => setOpen(false)}
//               className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-zinc-900 dark:bg-zinc-100 px-4 py-3 text-sm font-medium text-white dark:text-zinc-950 transition hover:bg-orange-700 dark:hover:bg-orange-500 hover:text-white dark:hover:text-white"
//             >
//               Contato <ArrowUpRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }

import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pacientes", label: "Pacientes" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-100 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-baseline gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            INSIGHT CLINICA
          </span>

          <span className="text-xs uppercase tracking-[0.25em] text-stone"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 text-sm text-foreground/70 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition hover:text-ink"
              activeProps={{
                className: "text-ink",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop Contact Button */}
          <Link
            to="/contato"
            className="
              group
              hidden
              items-center
              gap-2
              rounded-sm
              bg-ink
              px-4
              py-2
              text-sm
              text-primary-foreground
              transition
              hover:bg-terracotta
              md:inline-flex
            "
          >
            Contato
            <ArrowUpRight
              className="
                h-4
                w-4
                transition
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="
              inline-flex
              h-10
              w-10
              items-center
              justify-center
              rounded-sm
              border
              border-border
              text-ink
              md:hidden
            "
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4 lg:px-10">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="
                  border-b
                  border-border
                  py-3
                  text-sm
                  text-foreground/80
                  transition
                  hover:text-ink
                "
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="
                mt-4
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-md
                bg-zinc-900
                px-4
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-orange-700
              "
            >
              Contato
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
