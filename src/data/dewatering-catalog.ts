import pump14Frame from "@/assets/dewatering/14-inch-dewatering-pump-with-frame.webp";
import pump14 from "@/assets/dewatering/14-inch-dewatering-pump.webp";
import pump12WaterCooled from "@/assets/dewatering/12-inch-dewatering-pump-with-water-cooled-engine.webp";
import pump12Frame from "@/assets/dewatering/12-inch-dewatering-pump-with-frame.webp";
import pump12Special from "@/assets/dewatering/12-inch-special-edition.webp";
import pump12 from "@/assets/dewatering/12-inch-dewatering-pump.webp";
import pump8Sy from "@/assets/dewatering/8-inch-sy-dewatering-pump.webp";
import pump8Electric from "@/assets/dewatering/8-inch-electric-pump.webp";
import pump8 from "@/assets/dewatering/8-inch-dewatering-pump.webp";
import pump6Electric from "@/assets/dewatering/6-inch-electric-pump.webp";
import pump6PistonCanopy from "@/assets/dewatering/6-inch-piston-canopy-dewatering-pump.webp";
import pump6Piston from "@/assets/dewatering/6-inch-piston-dewatering-pump.webp";
import pump6Canopy from "@/assets/dewatering/6-inch-canopy-type-dewatering-pump.webp";
import pump6Sy from "@/assets/dewatering/6-inch-sy-type-dewatering-pump.webp";
import pump6ElectricDewatering from "@/assets/dewatering/6-inch-electric-dewatering-pump.webp";
import pump6Frame from "@/assets/dewatering/6-inch-frame-type-dewatering-pump.webp";
import pump6Special from "@/assets/dewatering/6-inch-special-edition.webp";
import pump6Vs from "@/assets/dewatering/6-inch-vs-dewatering-pump.webp";
import pump6Op from "@/assets/dewatering/6-inch-op-dewatering-pump.webp";
import pump6Hd from "@/assets/dewatering/6-inch-hd-dewatering-pump.webp";
import pump6Ss from "@/assets/dewatering/6-inch-ss-dewatering-pump.webp";
import pump6 from "@/assets/dewatering/6-inch-dewatering-pump.webp";
import pump4 from "@/assets/dewatering/4-inch-dewatering-pump.webp";
import pump3Jetting from "@/assets/dewatering/3inch-jetting-pump.webp";
import flangeFittings from "@/assets/dewatering/flange-fittings.webp";
import layflatHose from "@/assets/dewatering/layflat-hose.webp";
import pumpSpares from "@/assets/dewatering/pump-spares.webp";
import engineSpares from "@/assets/dewatering/engine-spares.webp";

export type CatalogProduct = {
  model: string;
  name: string;
  image: string;
  description?: string;
};

export const racorsDewateringPumps: CatalogProduct[] = [
  { model: "14 inch", name: "Dewatering Pump With Frame", image: pump14Frame },
  { model: "14 inch", name: "Dewatering Pump", image: pump14 },
  { model: "12 inch", name: "Dewatering Pump with Water Cooled Engine", image: pump12WaterCooled },
  { model: "12 inch", name: "Dewatering Pump with Frame", image: pump12Frame },
  { model: "12 inch", name: "Special Edition", image: pump12Special },
  { model: "12 inch", name: "Dewatering Pump", image: pump12 },
  { model: "8 inch", name: "Sy Dewatering Pump", image: pump8Sy },
  { model: "8 inch", name: "Electric Pump", image: pump8Electric },
  { model: "8 inch", name: "Dewatering Pump", image: pump8 },
  { model: "6 inch", name: "Electric Pump", image: pump6Electric },
  { model: "6 inch", name: "Piston Canopy Dewatering Pump", image: pump6PistonCanopy },
  { model: "6 inch", name: "Piston Dewatering Pump", image: pump6Piston },
  { model: "6 inch", name: "Canopy Type Dewatering Pump", image: pump6Canopy },
  { model: "6 inch", name: "Sy Type Dewatering Pump", image: pump6Sy },
  { model: "6 inch", name: "Electric Dewatering Pump", image: pump6ElectricDewatering },
  { model: "6 inch", name: "Frame Type Dewatering Pump", image: pump6Frame },
  { model: "6 inch", name: "Special Edition", image: pump6Special },
  { model: "6 inch", name: "VS Dewatering Pump", image: pump6Vs },
  { model: "6 inch", name: "OP Dewatering Pump", image: pump6Op },
  { model: "6 inch", name: "HD Dewatering Pump", image: pump6Hd },
  { model: "6 inch", name: "SS Dewatering Pump", image: pump6Ss },
  { model: "6 inch", name: "Dewatering Pump", image: pump6 },
  { model: "4 inch", name: "Dewatering Pump", image: pump4 },
  { model: "3 inch", name: "Jetting Pump", image: pump3Jetting },
];

export const racorsDewateringAccessories: CatalogProduct[] = [
  { model: "Fittings", name: "Flange fittings and connections", image: flangeFittings },
  { model: "Hoses", name: "Layflat and discharge hoses", image: layflatHose },
  { model: "Pump Spares", name: "Pump spare parts and components", image: pumpSpares },
  { model: "Engine Spares", name: "Engine spare parts", image: engineSpares },
];

export const racorsDewateringApplications = [
  "Construction",
  "Oil & Gas",
  "Mining & Quarry",
  "Marine & Offshore",
  "Municipalities",
  "Irrigation",
  "Flood Control",
];
