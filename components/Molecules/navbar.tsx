import SiteLogo from "../atoms/siteLogo";
import SiteMenu from "./siteMenu";

export default function Navbar() {
  return (
    <div className="flex relative">
      <nav className="absolute z-50 flex items-center gap-42 mt-5 ml-17">
        <SiteLogo />
        <SiteMenu />
      </nav>
    </div>
  );
}
