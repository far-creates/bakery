import Image from "next/image";

export default function SiteLogo() {
  return (
    <div>
      <Image
        src={"/Modrino.png"}
        width={87}
        height={99}
        alt="Keithston"
      ></Image>
    </div>
  );
}
