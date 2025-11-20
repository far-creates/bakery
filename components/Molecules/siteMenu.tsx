import NavLink from "../atoms/navLink";

export default function SiteMenu() {
  return (
    <ul className="flex gap-[30px] font-poppins font-semibold text-[22px] text-main-color ">
      <NavLink href="/" linkName="Home" exact={true} />
      <NavLink href="/blog" linkName="Blog" exact={false} />
      <NavLink href="/contect-us" linkName="Contact Us" exact={false} />
      <NavLink href="/services" linkName="Services" exact={false} />
    </ul>
  );
}
