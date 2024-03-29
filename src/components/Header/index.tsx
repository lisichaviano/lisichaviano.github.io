import BurgerMenu from "../BurgerMenu";
import Link from "../Link";

export const headerLinks = [
  { href: "/", name: "ABOUT ME" },
  { href: "/resume", name: "RESUME" },
  { href: "/portfolio", name: "PORTFOLIO" },
  { href: "/contact", name: "CONTACT" },
];

export const Header = () => {
  return (
    <header className="w-full sticky top-0 h-[92px] z-20 bg-white border-b border-neutral-300 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="h-[92px] flex md:whitespace-nowrap items-center pl-12 md:w-1/4">
          <Link
            additionalClassNAme="text-lg md:text-2xl font-syne hover:text-black active:text-black"
            href={"/"}
          >
            <div className="flex items-center gap-3">
              <div className="bg-firebrick w-2 h-2 md:w-4 md:h-4 overflow-hidden" />
              Lisandra's Portfolio
            </div>
          </Link>
        </div>

        <div className="md:flex items-end gap-3 pr-12 hidden">
          {headerLinks.map(({ href, name }) => (
            <Link href={href}>{name}</Link>
          ))}
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
};
