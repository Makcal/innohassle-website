import { IconProps } from "@/components/icons/IconProps";
import clsx from "clsx";
import Image from "next/image";
import LogoInvertSVG from "./logo-invert.svg";
import LogoSVG from "./logo.svg";

function Logo(props: Omit<IconProps, "fill">) {
  return (
    <>
      <Image
        src={LogoInvertSVG}
        alt="logo"
        {...props}
        className={clsx("flex dark:hidden", props.className)}
      />
      <Image
        src={LogoSVG}
        alt="logo"
        {...props}
        className={clsx("hidden dark:flex", props.className)}
      />
    </>
  );
}

export default Logo;
