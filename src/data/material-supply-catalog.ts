import type { CatalogProduct } from "@/data/dewatering-catalog";
import {
  racorsDewateringAccessories,
  racorsDewateringPumps,
} from "@/data/dewatering-catalog";
import elecAdb363dc from "@/assets/supply/elec-adb3-63dc.webp";
import elecDz58125 from "@/assets/supply/elec-dz58-125.webp";
import elecAdb3125 from "@/assets/supply/elec-adb3-125.webp";
import elecAdb363 from "@/assets/supply/elec-adb3-63.webp";
import elecDz47100 from "@/assets/supply/elec-dz47-100.webp";
import elecAdz7s125 from "@/assets/supply/elec-adz7s-125.webp";
import mechSaws from "@/assets/supply/mech-saws.png";
import mechButtFusion from "@/assets/supply/mech-butt-fusion.png";
import mechHeatingPlate from "@/assets/supply/mech-heating-plate.png";
import mechPipeCutters from "@/assets/supply/mech-pipe-cutters.png";
import mechElectrofusion from "@/assets/supply/mech-electrofusion.png";
import mechHydro from "@/assets/supply/mech-hydro.png";
import ppeHelmet from "@/assets/supply/ppe-helmet.jpg";
import ppeHardhatVisor from "@/assets/supply/ppe-hardhat-visor.jpg";
import ppeFullBrim from "@/assets/supply/ppe-full-brim.jpg";
import ppeCutGloves from "@/assets/supply/ppe-cut-gloves.jpg";
import ppeVest from "@/assets/supply/ppe-vest.jpg";
import ppeN95 from "@/assets/supply/ppe-n95.jpg";
import ltHybrid from "@/assets/supply/lt-mlt-hybrid.jpg";
import ltCtf10 from "@/assets/supply/lt-ctf-10.jpg";
import ltCube from "@/assets/supply/lt-cube.jpg";
import ltPlt240 from "@/assets/supply/lt-plt240.jpg";
import genC18 from "@/assets/supply/gen-c18.jpg";
import genC18Encl from "@/assets/supply/gen-c18-encl.jpg";
import avB35 from "@/assets/supply/av-b35.png";
import avSoundweb from "@/assets/supply/av-soundweb.png";
import avSrx900 from "@/assets/supply/av-srx900.png";
import avAkgCseries from "@/assets/supply/av-control400.png";
import avIntellivox from "@/assets/supply/av-comtech.png";
import audioVisualImg from "@/assets/trading/audio-visual.png";

export const electricalComponents: CatalogProduct[] = [
  {
    model: "ADB3-63DC",
    name: "DC Miniature Circuit Breaker",
    description:
      "Used on DC lines with rated voltage up to 1000V and rated currents up to 63A for overload and short-circuit protection and infrequent operation. Standards: GB/T10963.2, IEC60898-2.",
    image: elecAdb363dc,
  },
  {
    model: "DZ58-125",
    name: "Miniature Circuit Breaker",
    description:
      "Combines protection against short-circuit and overload current with control and isolation. Mainly suitable for the protection of commercial and industrial circuits.",
    image: elecDz58125,
  },
  {
    model: "ADB3-125",
    name: "Miniature Circuit Breaker",
    description:
      "Rail-mounted miniature circuit breaker for overload and short-circuit protection, available in multiple pole configurations for industrial distribution boards.",
    image: elecAdb3125,
  },
  {
    model: "ADB3-63",
    name: "Miniature Circuit Breaker",
    description:
      "Applicable to AC 50/60Hz lines, 230V in single pole and 400V in two, three or four poles, for overload and short-circuit protection with rated current up to 63A.",
    image: elecAdb363,
  },
  {
    model: "DZ47-100",
    name: "Miniature Circuit Breaker",
    description:
      "Compact rail-mounted breaker with reliable performance, high breaking capacity and rapid tripping. Enclosure and components use fire-retarding, shock-resistant materials.",
    image: elecDz47100,
  },
  {
    model: "ADZ7S-125ZFD",
    name: "Automatic Reset Circuit Breaker",
    description:
      "Automatic reset circuit breaker for electricity consumption information collection and management systems. Suitable for AC 50/60Hz, 230/400V applications.",
    image: elecAdz7s125,
  },
];

export const mechanicalIndustrialTools: CatalogProduct[] = [
  {
    model: "SAW315 / SAW630 / SAW800",
    name: "Pipe Cutting Saws",
    description:
      "Ideally used for precise and perfect angled cutting from 0 to 67.5 degrees for PE, PP, PVDF and PVC pipes, fittings and profiles.",
    image: mechSaws,
  },
  {
    model: "WHDW110M / WHDW160M / WHDW200M",
    name: "Manual Butt Fusion Welding Machine",
    description:
      "Ideally used for butt welding of PE, PP, PB and PVDF non-pressure pipes and fittings from 40–250 mm.",
    image: mechButtFusion,
  },
  {
    model: "HP160 / HP200 / HP250 / HP315",
    name: "Heating Plate",
    description:
      "Non-stick Teflon-coated high-quality heating elements for plastic pipe fusion, available up to 1200 mm and larger sizes.",
    image: mechHeatingPlate,
  },
  {
    model: "PCUT63 / PCUT76T / PCUT127T",
    name: "Plastic Pipe Cutters",
    description:
      "Ideally used for precise cutting of PE, PEX, PB, PVDF and PPR pipes and insulated pipes.",
    image: mechPipeCutters,
  },
  {
    model: "EFSAN110 / EFSAN160 / EFSAN315",
    name: "Electrofusion Machines",
    description:
      "Ideally used for electric welding of HDPE pipes and fittings up to 315 mm for sanitary and low-pressure applications.",
    image: mechElectrofusion,
  },
  {
    model: "EPUMP50",
    name: "Electrical Hydro Test Pump",
    description:
      "Electric-operated hydro test pump for exact and quick compression testing and leak testing on pipework systems, containers, boilers and vessels, available up to 50 bar.",
    image: mechHydro,
  },
];

export const dewateringSupplyItems: CatalogProduct[] = [
  {
    ...racorsDewateringPumps[0],
    description:
      "Large-capacity dewatering pump with frame, suited to high-flow project drainage where a stable, transportable set is required.",
  },
  {
    ...racorsDewateringPumps[3],
    description:
      "12-inch dewatering pump with frame for construction and industrial sites needing dependable flow and head performance.",
  },
  {
    ...racorsDewateringPumps[8],
    description:
      "8-inch dewatering pump for general project dewatering, site drainage and water-management applications.",
  },
  {
    ...racorsDewateringPumps[11],
    description:
      "6-inch piston dewatering pump for demanding applications where a piston configuration is specified.",
  },
  {
    ...racorsDewateringPumps[22],
    description:
      "4-inch dewatering pump for smaller excavations, pits and project water-control duties.",
  },
  {
    ...racorsDewateringAccessories[0],
    description:
      "Flange fittings and connections to complete pump installations on site.",
  },
  {
    ...racorsDewateringAccessories[1],
    description:
      "Layflat and discharge hoses for transferring water from dewatering pumps to discharge points.",
  },
];

export const safetyPpeProducts: CatalogProduct[] = [
  {
    model: "Hard Hat",
    name: "Head Protection",
    description:
      "ABS hard hat with 6-point webbing lining and adjustable ratchet. Functions include anti-smashing, anti-piercing and electric insulation. Standards: GB 2811-2007, EN397, ANSI Z89.1, AS/NZS 1801.",
    image: ppeHelmet,
  },
  {
    model: "PHLA425N",
    name: "Hard Hat with Visor",
    description:
      "Hard hat with optional visor, external earmuff and face-screen compatibility. Adjustable size for site head protection.",
    image: ppeHardhatVisor,
  },
  {
    model: "PHLPFB01",
    name: "Full Brim Hard Hat",
    description:
      "Full-brim hard hat for additional coverage in outdoor and construction environments.",
    image: ppeFullBrim,
  },
  {
    model: "PGLCNC05",
    name: "Cut Resistant Gloves",
    description:
      "HPPE cut-resistant work gloves for hand protection in industrial handling and fabrication.",
    image: ppeCutGloves,
  },
  {
    model: "Safety Vest",
    name: "High-Visibility Body Protection",
    description:
      "High-visibility safety vest for body protection on construction and industrial sites, improving worker visibility in project environments.",
    image: ppeVest,
  },
  {
    model: "PDMN95NV",
    name: "N95 Dust Mask",
    description:
      "N95 dust mask for respiratory protection against airborne particulates on site and in industrial workplaces.",
    image: ppeN95,
  },
];

export const generatorsAndTowerLights: CatalogProduct[] = [
  {
    model: "MLT-Hybrid",
    name: "Mobile Light Tower | 5 kW | Hybrid | 26.8 ft | 350 W LED",
    description:
      "Hybrid mobile light tower with extended run time, LED lighting and a compact footprint for industrial and construction sites.",
    image: ltHybrid,
  },
  {
    model: "CTF-10",
    name: "Mobile Light Tower | Electric | 32.8 ft | 240W LED",
    description:
      "Electric mobile light tower with a 32.8 ft mast and 240W LED output for site illumination.",
    image: ltCtf10,
  },
  {
    model: "CUBE",
    name: "Mobile Light Tower | 4.2kW | Diesel | 27.5 ft | 320W LED",
    description:
      "Compact diesel light tower designed for easy setup, operation and maintenance with LED lighting for project sites.",
    image: ltCube,
  },
  {
    model: "PLT240",
    name: "Mobile Light Tower | Electric | 16 ft | 240W LED",
    description:
      "Electric portable light tower with a 16 ft mast and 240W LED for smaller site lighting requirements.",
    image: ltPlt240,
  },
  {
    model: "C18",
    name: "Diesel Generator Set",
    description:
      "Diesel generator set for standby and prime applications, producing reliable power from 706 to 850 kVA at 50 Hz and meeting ISO 8528-5 transient response requirements.",
    image: genC18,
  },
  {
    model: "C18 Enclosed",
    name: "Sound Attenuated Generator Set",
    description:
      "Enclosed diesel generator set configuration for commercial and industrial electric power where weather protection and attenuated operation are required.",
    image: genC18Encl,
  },
];

export const audioVideoSystems: CatalogProduct[] = [
  {
    model: "B35",
    name: "Cardioid Subwoofer",
    description:
      "Cardioid, compact subwoofer designed for focused bass with reduced rear radiation, simplifying deployment without compromising performance.",
    image: avB35,
  },
  {
    model: "Soundweb OMNI",
    name: "DSP and Control Platform",
    description:
      "Networked audio DSP platform with app-defined touch panels for installed professional sound systems.",
    image: avSoundweb,
  },
  {
    model: "SRX900 Series",
    name: "Powered Point-Source Speakers",
    description:
      "Powered point-source loudspeakers and accessories for professional live and installed sound applications.",
    image: avSrx900,
  },
  {
    model: "C-Series",
    name: "Professional Condenser Microphones",
    description:
      "Professional condenser microphones designed for detail and clarity in performance, interview and production use.",
    image: avAkgCseries,
  },
  {
    model: "Intellivox",
    name: "Active Digital Beam Shaping Columns",
    description:
      "Active digital beam-shaping column loudspeakers with networked audio support, IP control and universal power supplies.",
    image: avIntellivox,
  },
  {
    model: "Network Cameras",
    name: "Professional Video Systems",
    description:
      "Network cameras and related video system components for commercial, industrial and project security and monitoring applications.",
    image: audioVisualImg,
  },
];
