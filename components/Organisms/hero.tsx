import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex relative  w-full text-primary">
      <Image
        src={"/HeroImage.png"}
        width={1280}
        height={813}
        alt="bakery"
        className="absolute top-0 lg:max-h-screen left-0 w-full -z-50 object-cover "
      />
      <div className="absolute top-70 ml-20 max-w-150 ">
        <p className="text-accent font-inter text-2xl font-semibold">
          Delicious Cafe
        </p>
        <h1 className="text-7xl font-sansita">Sweet Treats, Perfect Eats</h1>
        <ul className="flex items-center gap-6 mt-18">
          <Link
            href="/"
            className="bg-btn text-2xl font-semibold px-10 py-4 rounded-lg"
          >
            {" "}
            Shop Now{" "}
          </Link>
          <Link
            href="/services"
            className="text-accent font-semibold font-inter text-2xl"
          >
            {" "}
            Learn More
          </Link>
        </ul>
      </div>
    </div>
  );
}
