import type { CatalogProduct } from "@/data/dewatering-catalog";
import elecAm9 from "@/assets/eia/elec-am9.webp";
import elecAdm6rt from "@/assets/eia/elec-adm6rt.webp";
import elecAdm5dc from "@/assets/eia/elec-adm5dc.webp";
import elecAdw3 from "@/assets/eia/elec-adw3.webp";
import elecAdsf from "@/assets/eia/elec-adsf.webp";
import elecAout1 from "@/assets/eia/elec-aout1.webp";
import pciPtc from "@/assets/eia/pci-ptc.jpg";
import pciMsl from "@/assets/eia/pci-msl.jpg";
import pciFlow from "@/assets/eia/pci-flow.png";
import pciIso from "@/assets/eia/pci-iso.jpg";
import pciLoad from "@/assets/eia/pci-load.png";
import pciJumbo from "@/assets/eia/pci-jumbo.jpg";
import apgDcr from "@/assets/eia/apg-dcr.webp";
import apgDdd from "@/assets/eia/apg-ddd.webp";
import apgDst from "@/assets/eia/apg-dst.webp";
import apgFlx from "@/assets/eia/apg-flx.webp";
import apgHu from "@/assets/eia/apg-hu.webp";
import apgIru from "@/assets/eia/apg-iru.webp";

export const electricalProtectionProducts: CatalogProduct[] = [
  {
    model: "AM9",
    name: "Moulded Case Circuit Breaker",
    description:
      "MCCB for industrial or commercial power and lighting at AC 50/60Hz, rated working voltage up to AC600V/DC250V and rated current up to 630A. An economical breaker with stable and reliable performance.",
    image: elecAm9,
  },
  {
    model: "ADM6RT/T",
    name: "Thermally Adjustable Molded Case Circuit Breaker",
    description:
      "Thermally adjustable MCCB developed for general distribution, with overload and short-circuit protection for industrial power circuits.",
    image: elecAdm6rt,
  },
  {
    model: "ADM5DC",
    name: "DC Special Circuit Breaker",
    description:
      "DC circuit breaker for rated voltage DC250V–DC1500V and working current 63A–800A, with overload long-delay and short-circuit protection for DC power-grid circuits.",
    image: elecAdm5dc,
  },
  {
    model: "ADW3-1600",
    name: "Intelligent Universal Circuit Breaker",
    description:
      "Intelligent universal circuit breaker for general and new-energy distribution systems, multi-energy distribution networks, inverters and distributed power applications.",
    image: elecAdw3,
  },
  {
    model: "ADSF-63 / ADSF-125",
    name: "Changeover Switch",
    description:
      "Changeover switch for transferring supply between sources in industrial and commercial electrical installations.",
    image: elecAdsf,
  },
  {
    model: "AOUT-1",
    name: "Over-Voltage & Under-Voltage Release",
    description:
      "Voltage-release accessory for circuit protection against over-voltage and under-voltage conditions.",
    image: elecAout1,
  },
];

export const processControlInstruments: CatalogProduct[] = [
  {
    model: "PTC-352",
    name: "Process Indicators / Process Controllers",
    description:
      "4-digit process indicator with universal analog configurable input, alarm output and inbuilt sensor supply. Optional retransmission and RS-485 Modbus communication.",
    image: pciPtc,
  },
  {
    model: "MSL-14",
    name: "Scanners & Data Loggers",
    description:
      "Multi-channel universal temperature and analog configurable input, with programmable relay for alarm and tripping, built-in USB data-logging and optional RS-485 Modbus communication.",
    image: pciMsl,
  },
  {
    model: "Flow Totalizer",
    name: "Flow Rate and Totalizer",
    description:
      "Bright LED and LCD display with 4–20mA DC or pulse input and built-in sensor supply. Relay programmable on flow rate and totalizer, with optional analog retransmission and RS-485 Modbus.",
    image: pciFlow,
  },
  {
    model: "Isolator",
    name: "Signal Isolator",
    description:
      "Compact DIN-rail isolator with analog, temperature, AC and DC voltage and current input. Available in single and dual output with 3-way isolation between input, output and supply.",
    image: pciIso,
  },
  {
    model: "LD-1252A-M1",
    name: "Load Cell Indicators",
    description:
      "High-accuracy load-cell indicator with 5-digit LED display, 2-relay alarm/load switching and built-in load-cell excitation supply. Optional analog retransmission and RS-485 Modbus.",
    image: pciLoad,
  },
  {
    model: "Jumbo Display",
    name: "Jumbo Display Indicator",
    description:
      "Bright red LED jumbo display in 4 or 6 digits with 4-inch and 8-inch digit sizes. Accepts analog, temperature, humidity, pulse and RS-485 Modbus input, with optional alarm relay.",
    image: pciJumbo,
  },
];

export const instrumentationAutomationProducts: CatalogProduct[] = [
  {
    model: "DCR-1006A",
    name: "Programmable Controller",
    description:
      "Programmable controller for ultrasonic sensors with four relays, 4–20 mA output and RS-485 Modbus. NEMA 4X / IP66 enclosure for level and flow monitoring without complex infrastructure.",
    image: apgDcr,
  },
  {
    model: "DDD",
    name: "DIN Mounted Digital Display",
    description:
      "DIN-mounted digital panel meter for process display and monitoring in control panels.",
    image: apgDdd,
  },
  {
    model: "DST",
    name: "Mid Range Pump Control Ultrasonic Level Sensor",
    description:
      "Ultrasonic level sensor for mid-range pump control and tank level measurement.",
    image: apgDst,
  },
  {
    model: "FLX",
    name: "Hazardous Location Multi-Point Level Switch",
    description:
      "Multi-point level switch rated for hazardous-area instrumentation applications.",
    image: apgFlx,
  },
  {
    model: "HU1502I",
    name: "Hammer Union Pressure Transmitter",
    description:
      "Recalibratable Incoloy hammer-union pressure transmitter for industrial pressure sensing.",
    image: apgHu,
  },
  {
    model: "IRU-2420",
    name: "Mid-Range Ultrasonic Level Sensor: 25 Feet",
    description:
      "Ultrasonic level sensor with a 25-foot range for tanks, sumps and process level measurement.",
    image: apgIru,
  },
];
