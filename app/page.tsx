import { Link } from "@nextui-org/link";

import { title, subtitle } from "@/components/primitives";
import { RightArrow } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Connect, discuss, build.
        </div>
      </div>

      <div className="my-8">
        <p>SERVICES</p>
        <h1 className="text-2xl font-bold">WHAT WE SERVED</h1>
      </div>

      <div className="flex bg-customColor-100 bg-opacity-20 max-w-full gap-4 rounded-lg p-4">
        <div className="flex flex-col justify-between bg-customColor-100 bg-opacity-30 rounded-lg p-4 min-h-40">
          <h2 className="text-2xl font-bold">IT CONSULTANT</h2>
          <p>
            Lorem ipsum dolor site amet, Lorem ipsum dolor site amet, Lorem
            ipsum dolor site amet
          </p>
          <Link
            className="text-foreground items-end gap-2 hover:text-customColor-300"
            href="/"
          >
            READ MORE
            <RightArrow />
          </Link>
        </div>
        <div className="flex flex-col justify-between bg-customColor-100 bg-opacity-30 rounded-lg p-4 min-h-40">
          <h2 className="text-2xl font-bold">WEB DEVELOPMENT</h2>
          <p>
            Lorem ipsum dolor site amet, Lorem ipsum dolor site amet, Lorem
            ipsum dolor site amet
          </p>
          <Link
            className="text-foreground items-end gap-2 hover:text-customColor-300"
            href="/"
          >
            READ MORE
            <RightArrow />
          </Link>
        </div>
        <div className="flex flex-col justify-between bg-customColor-100 bg-opacity-30 rounded-lg p-4 min-h-40">
          <h2 className="text-2xl font-bold">UI/UX DESIGN</h2>
          <p>
            Lorem ipsum dolor site amet, Lorem ipsum dolor site amet, Lorem
            ipsum dolor site amet
          </p>
          <Link
            className="text-foreground items-end gap-2 hover:text-customColor-300"
            href="/"
          >
            READ MORE
            <RightArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
