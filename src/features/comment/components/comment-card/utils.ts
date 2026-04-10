import logo0 from "@assets/images/partner/1.png";
import logo1 from "@assets/images/partner/4.png";
import logo2 from "@assets/images/partner/6.png";
import logo3 from "@assets/images/partner/15.png";
import logo4 from "@assets/images/partner/16.png";
import logo5 from "@assets/images/partner/33.png";
import { StaticImageData } from "next/image";

const logoMapper = {
  0: logo0,
  1: logo1,
  2: logo2,
  3: logo3,
  4: logo4,
  5: logo5,
} as Record<number, StaticImageData>;

export const getRandomLogo = () => {
  const index = Math.floor(Math.random() * 6);

  return logoMapper[index];
};
