import { IconProps } from "@/lib/types/IconProps";

function CleaningIcon({ width, height, className, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={width || 48}
      viewBox="0 -960 960 960"
      width={height || 48}
      className={className}
      fill={fill}
    >
      <path d="M420-520h120v-280q0-25-17.25-42.5T480-860q-25.5 0-42.75 17.25T420-800v280ZM180-340h600v-120H180v120Zm-64 240h134v-90q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T310-190v90h140v-90q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-190v90h140v-90q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T710-190v90h134l-50-200H166l-50 200Zm702 60H142q-39 0-63-31t-14-69l55-220v-80q0-33 23.5-56.5T200-520h160v-280q0-50 35-85t85-35q50 0 85 35t35 85v280h160q33 0 56.5 23.5T840-440v80l55 220q10 38-14 69t-63 31Zm-38-420H180h600Zm-240-60H420h120Z" />
    </svg>
  );
}

export default CleaningIcon;
