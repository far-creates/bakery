import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex relative w-full text-primary">
      <Image
        src={"/HeroImage.png"}
        width={1280}
        height={813}
        alt="bakery"
        className="absolute top-0 h-80 md:h-screen left-0 w-full -z-50 object-cover "
      />
      <div className="static mt-90 md:mt-0 md:absolute top-70 left-20 max-w-150 ">
        <p className="font-inter font-semibold  text-accent text-center text-xl  md:text-left  md:text-2xl ">
          Delicious Cafe
        </p>
        <h1 className=" font-sansita text-center text-6xl text-secondary md:text-primary md:text-left md:text-7xl">
          Sweet Treats, Perfect Eats
        </h1>
        <ul className="flex items-center justify-center md:justify-start gap-6  mt-18 text-xl md:text-2xl">
          <Link
            href="/"
            className="bg-btn font-semibold px-8 py-3 md:px-10 md:py-4 rounded-lg"
          >
            {" "}
            Shop Now{" "}
          </Link>
          <Link
            href="/services"
            className="text-accent font-semibold font-inter "
          >
            {" "}
            Learn More
          </Link>
        </ul>
      </div>
    </div>
  );
}
