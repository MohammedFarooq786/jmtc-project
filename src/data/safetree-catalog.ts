import type { CatalogProduct } from "@/data/dewatering-catalog";
import ppe01 from "@/assets/ppe/ppe-01.webp";
import ppe02 from "@/assets/ppe/ppe-02.webp";
import ppe03 from "@/assets/ppe/ppe-03.webp";
import ppe04 from "@/assets/ppe/ppe-04.webp";
import ppe05 from "@/assets/ppe/ppe-05.webp";
import ppe06 from "@/assets/ppe/ppe-06.webp";
import ppe07 from "@/assets/ppe/ppe-07.webp";
import ppe08 from "@/assets/ppe/ppe-08.webp";
import ppe09 from "@/assets/ppe/ppe-09.webp";
import ppe10 from "@/assets/ppe/ppe-10.webp";
import ppe11 from "@/assets/ppe/ppe-11.webp";
import ppe12 from "@/assets/ppe/ppe-12.webp";
import disp01 from "@/assets/ppe/disp-01.webp";
import disp02 from "@/assets/ppe/disp-02.webp";
import disp03 from "@/assets/ppe/disp-03.webp";
import disp04 from "@/assets/ppe/disp-04.webp";
import disp05 from "@/assets/ppe/disp-05.webp";
import disp06 from "@/assets/ppe/disp-06.webp";
import disp07 from "@/assets/ppe/disp-07.webp";
import disp08 from "@/assets/ppe/disp-08.webp";
import road01 from "@/assets/ppe/road-01.webp";
import road02 from "@/assets/ppe/road-02.webp";
import road03 from "@/assets/ppe/road-03.webp";
import road04 from "@/assets/ppe/road-04.webp";
import road05 from "@/assets/ppe/road-05.webp";
import road06 from "@/assets/ppe/road-06.webp";
import road07 from "@/assets/ppe/road-07.webp";
import road08 from "@/assets/ppe/road-08.webp";

export const safetreePpeProducts: CatalogProduct[] = [
  {
    model: "Height Work Helmet",
    name: "ANSI Z89.1 / EN397",
    description:
      "Safety helmet with EPS inner shell and PC visor for construction and height work.",
    image: ppe01,
  },
  {
    model: "Safety Goggles",
    name: "ANSI Z87.1",
    description: "Safety spectacles and goggles with cords for eye protection.",
    image: ppe02,
  },
  {
    model: "Foldable Earmuff",
    name: "EN352-2 · SNR 34dB",
    description: "Head-banded foldable earmuff for hearing protection on site.",
    image: ppe03,
  },
  {
    model: "Face Shield",
    name: "EN166 / ANSI Z87",
    description: "ABS headgear with PC visor for face protection.",
    image: ppe04,
  },
  {
    model: "Latex Coated Gloves",
    name: "EN388",
    description: "10-gauge polycotton gloves with latex coating for general handling.",
    image: ppe05,
  },
  {
    model: "Leather Work Gloves",
    name: "EN388",
    description: "Cow-split leather gloves with cotton back for hand protection.",
    image: ppe06,
  },
  {
    model: "Nitrile Chemical Gloves",
    name: "Lab & Chemical Use",
    description: "33cm green nitrile gloves for chemical and laboratory work.",
    image: ppe07,
  },
  {
    model: "High-Vis Vest",
    name: "EN471",
    description: "Reflective vest with radio, ID and cargo pockets.",
    image: ppe08,
  },
  {
    model: "FR Coverall",
    name: "Flame Retardant",
    description: "Reflective cotton coverall, flame retardant and anti-static.",
    image: ppe09,
  },
  {
    model: "Full Body Harness",
    name: "EN361",
    description: "Polyester fall-arrest harness with back support.",
    image: ppe10,
  },
  {
    model: "S5 Wellington Boots",
    name: "EN ISO 20345",
    description: "Waterproof PVC safety gumboots with steel toe.",
    image: ppe11,
  },
  {
    model: "S3 Safety Boots",
    name: "EN ISO 20345",
    description: "Waterproof ankle-high leather safety boots for construction use.",
    image: ppe12,
  },
];

export const safetreeDisposableProducts: CatalogProduct[] = [
  {
    model: "Clear Safety Goggles",
    name: "Eye Protection",
    description: "Transparent protective work safety glasses and goggles.",
    image: disp01,
  },
  {
    model: "7500 Respirator",
    name: "EN140",
    description: "Half-face respirator with cartridges for gas and vapour protection.",
    image: disp02,
  },
  {
    model: "Disposable Coverall",
    name: "Microporous",
    description: "Economical non-woven microporous disposable coverall.",
    image: disp03,
  },
  {
    model: "Hair Net",
    name: "Disposable",
    description: "Nylon hair net covers for hygiene-controlled workplaces.",
    image: disp04,
  },
  {
    model: "Shoe Covers",
    name: "Anti-Slip",
    description: "Non-woven PP disposable shoe covers with anti-slip sole.",
    image: disp05,
  },
  {
    model: "Nitrile Exam Gloves",
    name: "EN374 / EN420",
    description: "Powder-free disposable nitrile examination gloves.",
    image: disp06,
  },
  {
    model: "Type 4/5 Coverall",
    name: "Medical / Sterile",
    description: "Disposable coverall for chemical splash and particulate protection.",
    image: disp07,
  },
  {
    model: "PC Face Shield",
    name: "With Headgear",
    description: "Eye and face protective shield with PC visor and headgear.",
    image: disp08,
  },
];

export const safetreeRoadSafetyProducts: CatalogProduct[] = [
  {
    model: "Warning Triangle",
    name: "Emergency",
    description: "Vehicle emergency warning triangle for roadside use.",
    image: road01,
  },
  {
    model: "Convex Mirror",
    name: "Traffic Safety",
    description: "Unbreakable acrylic convex mirror for outdoor traffic visibility.",
    image: road02,
  },
  {
    model: "Barricade Tape",
    name: "Caution / Danger",
    description: "Non-adhesive caution and danger barricade tapes.",
    image: road03,
  },
  {
    model: "Traffic Cone 70cm",
    name: "PVC",
    description: "Orange PVC road-safety cone, 70cm height.",
    image: road04,
  },
  {
    model: "Delineator Post",
    name: "Flexible",
    description: "Yellow and red flexible warning post for traffic delineation.",
    image: road05,
  },
  {
    model: "Traffic Cone 90cm",
    name: "PVC",
    description: "Orange PVC road-safety cone, 90cm height.",
    image: road06,
  },
  {
    model: "Warning Tape 300m",
    name: "75mm",
    description: "Red/white polyethylene warning tape, 75mm x 300m.",
    image: road07,
  },
  {
    model: "Safety Net",
    name: "HDPE",
    description: "Orange HDPE barricade and warning safety net.",
    image: road08,
  },
];
