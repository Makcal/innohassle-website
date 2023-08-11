import { IconProps } from "@/lib/types/IconProps";

export function BootcampIcon({ width, height, className, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || 48}
      viewBox="0 -960 960 960"
      width={width || 48}
      className={className}
      fill={fill}
    >
      <path d="M77.609-75.935V-262.76l360.13-487.174-67.717-91.195 55.695-39.783L480-806.87l55.043-74.043 54.935 39.783-66.717 91.195 359.13 487.174v186.826H77.609ZM480-692 145.978-239.891v95.826h136.87L480-420.174l197.152 276.109h136.87v-95.826L480-692ZM367.131-144.065h225.738L480-303.065l-112.869 159ZM480-420.174l197.152 276.109L480-420.174 282.848-144.065 480-420.174Z" />
    </svg>
  );
}
