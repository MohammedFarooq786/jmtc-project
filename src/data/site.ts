export const company = {
  name: "Mohifar Jahan Trading & Contracting",
  short: "MJTC",
  founded: "2025",
  country: "Kingdom of Bahrain",
  tagline: "Engineering. Contracting. Industrial Trading.",
  subtitle:
    "Delivering reliable engineering, contracting and industrial trading solutions across Bahrain.",
  mission:
    "To be the most trusted engineering and supply partner across the GLOBE and beyond by consistently exceeding client expectations.",
  vision:
    "To be the most trusted engineering and supply partner across the GCC and beyond by consistently exceeding client expectations.",
  phone: "+973 77094567",
  phoneAlt: "+973 33544567",
  whatsapp: "+973 33544567",
  email: "enquiries@mohifar.com",
  emailEnquiries: "enquiries@mohifar.com",
  emailSales: "sales@mohifar.com",
  address:
    "Shop 0, Building 305, Road 52, Block 214, Muharraq, Muharraq Al Muharraq 0214, Bahrain",
  addressLines: [
    "Shop 0, Building 305, Road 52, Block 214, Muharraq",
    "Muharraq Al Muharraq 0214",
    "Bahrain",
  ],
  vatNo: "220025816800002",
  hours: "Sunday – Thursday · 08:00 – 17:00",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contracting", to: "/services" },
  { label: "Trading", to: "/trading" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const stats = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 80, suffix: "+", label: "Industrial Clients" },
  { value: 9, suffix: "", label: "Service Disciplines" },
  { value: 1200, suffix: "+", label: "Products Supplied" },
];

export const tradingCategories = [
  "Trading of All Engineering Products",
  "Electrical Products and Components",
  "Mechanical Industrial Material",
  "Equipment and Machinery Accessories",
  "Industrial Consumables",
  "Safety and PPE Products",
  "Tools",
  "Instrumentation",
  "Rolling Shutter",
  "Racking Storage Solutions",
  "FRP Covers",
  "Audio Visual Equipments",
];

export const brands = [
  "Genesis",
  "Ashok Leyland",
  "Multispan",
  "Andeli",
  "JBL Professional",
  "PAGELE",
  "NexGen",
  "ZHENGHAO",
  "Racors",
  "Vairitas",
  "APG",
  "Wassertek",
];

export const tradingContent = {
  headline: "Your Reliable Partner for Industrial Trading Solutions",
  intro:
    "Mohifar Jahan Trading and Contracting is your dependable partner for innovative, efficient, and high-quality tools, machines, and construction equipment and materials. We provide reliable trading services, sourcing and supplying top-notch products across various industries.",
  body:
    "Our priorities include timely delivery, competitive pricing, and ensuring customer satisfaction. At MJTC, we offer our clients the best products at reasonable prices. Our offerings are designed to meet the rapidly growing and demanding needs of the construction and development sectors. We are committed to achieving the highest levels of customer satisfaction through the quality and reliability of our products and services. Our well-trained staff is always ready to provide prompt assistance to our valued clients.",
};

import harmanProfessionalLogo from "@/assets/brands/harman-professional.png";
import jblByHarmanLogo from "@/assets/brands/harman-family/jbl-by-harman.png";
import fluxAudioLogo from "@/assets/brands/harman-family/flux.png";
import akgByHarmanLogo from "@/assets/brands/harman-family/akg.png";
import martinProfessionalLogo from "@/assets/brands/harman-family/martin.png";
import bssByHarmanLogo from "@/assets/brands/harman-family/bss.png";
import crownByHarmanLogo from "@/assets/brands/harman-family/crown.png";
import soundcraftByHarmanLogo from "@/assets/brands/harman-family/soundcraft.png";
import dbxByHarmanLogo from "@/assets/brands/harman-family/dbx.png";
import lexiconByHarmanLogo from "@/assets/brands/harman-family/lexicon.png";
import audioVisualImg from "@/assets/trading/audio-visual.png";
import mepEngineeringHeaderImg from "@/assets/industries/mep-engineering-header.jpg";
import civilEngineeringHeaderImg from "@/assets/industries/civil-engineering-services.jpg";
import civilOfferContractingImg from "@/assets/industries/civil-offer-contracting.jpg";
import civilOfferScaffoldingImg from "@/assets/industries/civil-offer-scaffolding.jpg";
import civilOfferDewatering1Img from "@/assets/industries/civil-offer-dewatering-1.jpg";
import civilOfferDewatering2Img from "@/assets/industries/civil-offer-dewatering-2.jpg";
import civilOfferMechanicalFabricationImg from "@/assets/industries/civil-offer-mechanical-fabrication.jpg";
import mepPageElectricalImg from "@/assets/industries/mep-page-electrical.jpg";
import mepPagePlantImg from "@/assets/industries/mep-page-plant.jpg";
import mepPagePlumbingImg from "@/assets/industries/mep-page-plumbing.jpg";
import mepPageHvacImg from "@/assets/industries/mep-page-hvac.jpg";
import mepServiceMechanicalImg from "@/assets/industries/mep-service-mechanical.jpg";
import industrialProjectsMaintenanceImg from "@/assets/industries/industrial-projects-maintenance.jpg";
import industrialOfferOperationMaintenanceImg from "@/assets/industries/industrial-offer-operation-maintenance.jpg";
import industrialOfferAmcImg from "@/assets/industries/industrial-offer-amc.png";
import industrialOfferUtilityImg from "@/assets/industries/industrial-offer-utility.jpg";
import industrialOfferRollingShutterImg from "@/assets/industries/industrial-offer-rolling-shutter.jpg";
import dewateringPumpsImg from "@/assets/industries/dewatering-pumps.jpg";
import tradingImg from "@/assets/trading.jpg";
import eiaProductsImg from "@/assets/industries/electrical-instrumentation.jpg";
import safetyPpeHeaderImg from "@/assets/industries/safety-ppe.jpg";
import {
  electricalProtectionProducts,
  instrumentationAutomationProducts,
  processControlInstruments,
} from "@/data/eia-catalog";
import {
  audioVideoSystems,
  dewateringSupplyItems,
  electricalComponents,
  generatorsAndTowerLights,
  mechanicalIndustrialTools,
  safetyPpeProducts,
} from "@/data/material-supply-catalog";
import racorsLogo from "@/assets/brands/racors.png";
import {
  safetreeDisposableProducts,
  safetreePpeProducts,
  safetreeRoadSafetyProducts,
} from "@/data/safetree-catalog";
import {
  racorsDewateringAccessories,
  racorsDewateringApplications,
  racorsDewateringPumps,
} from "@/data/dewatering-catalog";
import type { CatalogProduct } from "@/data/dewatering-catalog";
import {
  akgProducts,
  bssProducts,
  crownProducts,
  dbxProducts,
  fluxProducts,
  jblProducts,
  lexiconProducts,
  martinProducts,
  soundcraftProducts,
} from "@/data/harman-catalog";

export type ServiceOfferItem = {
  id: string;
  title: string;
  description: string;
  paragraphs?: string[];
  image?: string;
  images?: string[];
  imageAlt?: string;
  imageContain?: boolean;
};

export type Industry = {
  title: string;
  slug: string;
  /** Short copy shown under the homepage industry card image */
  summary?: string;
  /** Page copy — filled in as content is provided */
  body?: string;
  heading?: string;
  subheading?: string;
  /** Heading shown above the industry page body copy */
  contentHeading?: string;
  logo?: string;
  logoAlt?: string;
  partnerLogos?: { name: string; src: string; href?: string }[];
  headerImage?: string;
  galleryImages?: string[];
  serviceItems?: ServiceOfferItem[];
  paragraphs?: string[];
  closing?: string;
  /** Opening paragraph shown on the industry page body */
  lead?: string;
  approachHeading?: string;
  approach?: string;
  reasonsHeading?: string;
  reasons?: { title: string; description: string }[];
  cinemaExpansion?: {
    eyebrow?: string;
    products?: {
      model: string;
      name: string;
      image: string;
      formats: string[];
    }[];
  };
  catalog?: {
    eyebrow: string;
    intro?: string;
    products: CatalogProduct[];
  }[];
  applications?: string[];
};

export const industries: Industry[] = [
  {
    title: "MEP & Utility Services",
    slug: "mep-engineering-services",
    summary:
      "Reliable electrical, mechanical, air conditioning, and utility services tailored to project requirements.",
    headerImage: mepEngineeringHeaderImg,
    contentHeading: "Mechanical, Electrical, and Plumbing Engineering Services",
    galleryImages: [
      mepPagePlantImg,
      mepPageHvacImg,
      mepPageElectricalImg,
      mepPagePlumbingImg,
    ],
    serviceItems: [
      {
        id: "mechanical",
        title: "Mechanical",
        description:
          "HVAC systems, air conditioning, mechanical equipment installation, chilled water systems, and related mechanical works.",
        image: mepServiceMechanicalImg,
      },
      {
        id: "air-conditioning-systems",
        title: "Air Conditioning Systems",
        description:
          "Professional HVAC and air-conditioning installation, maintenance, ductwork, ventilation, and chilled water solutions.",
        image: mepPageHvacImg,
      },
      {
        id: "fire-fighting-services",
        title: "Fire Fighting Services",
        description:
          "Firefighting systems, fire protection pipework, pumps, valves, and associated installation and testing.",
        image: mepPagePlantImg,
      },
      {
        id: "electrical",
        title: "Electrical",
        description:
          "LV electrical installations, electrical containment, control panels, lighting systems, and ELV solutions.",
        image: mepPageElectricalImg,
      },
      {
        id: "pipework-surface-and-underground",
        title: "Pipework Surface and Underground",
        description:
          "Plumbing, water supply, drainage, stormwater, sewerage, and surface and underground pipework installations.",
        image: mepPagePlumbingImg,
      },
    ],
    paragraphs: [
      "Mohifar Jahan Trading and Contracting delivers integrated MEP and infrastructure solutions across mechanical, electrical, plumbing, and specialized building systems. Our expertise includes HVAC, firefighting, FM-200, piping, chilled water, LV electrical systems, lighting, ELV, BMS, fire alarms, plumbing, drainage, stormwater, and sewerage works, supported by infrastructure services such as dewatering, excavation, sheet piling, substations, street lighting, and telecommunications.",
      "We combine technical expertise, quality workmanship, safety, and reliable project execution to deliver practical engineering solutions for commercial, industrial, and infrastructure projects.",
    ],
  },
  {
    title: "Civil Engineering Contracting Works",
    slug: "civil-engineering-services",
    summary:
      "Professional civil engineering and contracting services focused on reliable project execution and quality workmanship.",
    headerImage: civilEngineeringHeaderImg,
    subheading: "Reliable Contracting. Quality Execution.",
    lead:
      "We provide professional civil engineering contracting services tailored to project requirements, with a strong focus on quality, safety, and timely delivery. Our approach combines technical capability, professional execution, and responsive project support to meet the needs of our clients.",
    approachHeading: "Our Approach",
    approach:
      "From project requirements through execution, we focus on delivering reliable contracting solutions while maintaining high standards of quality and safety. Our team works closely with clients to ensure efficient coordination and dependable project delivery.",
    reasonsHeading: "Why Choose Our Civil Contracting Services?",
    reasons: [
      {
        title: "Quality Execution",
        description:
          "Professional contracting with attention to project requirements and standards.",
      },
      {
        title: "Safety Focused",
        description:
          "Safety is integrated into our project execution and working practices.",
      },
      {
        title: "Timely Delivery",
        description:
          "We are committed to efficient execution and dependable project completion.",
      },
      {
        title: "Client Focused",
        description:
          "Solutions are tailored to client needs with responsive project support.",
      },
    ],
    closing:
      "Building reliable project outcomes through professional contracting, quality execution, and dependable service.",
    serviceItems: [
      {
        id: "civil-engineering-contracting-works",
        title: "Civil Engineering Contracting Works",
        description:
          "We provide professional civil engineering contracting services tailored to the specific requirements of each project. Our approach focuses on quality workmanship, safe working practices, efficient coordination, and reliable project execution. We work closely with clients to understand project requirements and deliver practical contracting solutions with a strong commitment to service quality and timely completion.",
        paragraphs: [
          "We provide professional civil engineering contracting services tailored to the specific requirements of each project. Our approach focuses on quality workmanship, safe working practices, efficient coordination, and reliable project execution. We work closely with clients to understand project requirements and deliver practical contracting solutions with a strong commitment to service quality and timely completion.",
          "Our contracting capabilities are supported by technical expertise and experience across industrial project environments, enabling us to provide dependable support throughout the execution process. From planning and coordination to on-site execution and project support, we maintain a client-focused approach designed to deliver consistent and reliable results.",
        ],
        image: civilOfferContractingImg,
        imageAlt: "MJTC engineer on a civil contracting construction site",
      },
      {
        id: "scaffolding-services",
        title: "Scaffolding Services",
        description:
          "Our scaffolding services are designed to provide dependable temporary access and support for construction and maintenance activities across industrial and commercial projects. We understand that effective scaffolding plays an important role in maintaining safe and efficient site operations, allowing project teams to carry out work with better accessibility and coordination. Our services are delivered with careful attention to project requirements, professional execution, safety, and overall site efficiency.",
        paragraphs: [
          "Our scaffolding services are designed to provide dependable temporary access and support for construction and maintenance activities across industrial and commercial projects. We understand that effective scaffolding plays an important role in maintaining safe and efficient site operations, allowing project teams to carry out work with better accessibility and coordination. Our services are delivered with careful attention to project requirements, professional execution, safety, and overall site efficiency.",
          "By integrating scaffolding support with our wider contracting capabilities, we help clients maintain smooth project progress while meeting the required quality and safety expectations.",
        ],
        image: civilOfferScaffoldingImg,
        imageAlt: "MJTC scaffolding on a construction site with safety-first site practice",
      },
      {
        id: "dewatering-pump-rental-and-supply",
        title: "Dewatering Pump Rental & Supply",
        description:
          "We provide dependable dewatering pump rental and supply solutions to support industrial, construction, and project requirements. Our range of dewatering equipment is selected to deliver efficient water removal and reliable performance across different applications. With a focus on quality, responsive service, and practical project support, we help clients maintain effective site operations and minimize water-related disruptions.",
        image: civilOfferDewatering1Img,
        images: [civilOfferDewatering1Img, civilOfferDewatering2Img],
        imageAlt: "Dewatering pump in use on an MJTC construction site",
      },
      {
        id: "mechanical-works-and-fabrication",
        title: "Mechanical Works & Fabrication",
        description:
          "We provide professional mechanical works and fabrication services tailored to industrial and project requirements. Our capabilities support construction, maintenance, and industrial operations, with a focus on quality workmanship, reliable execution, and efficient project delivery. We work closely with clients to understand their requirements and provide practical mechanical solutions that support smooth and dependable operations.",
        paragraphs: [
          "We provide professional mechanical works and fabrication services tailored to industrial and project requirements. Our capabilities support construction, maintenance, and industrial operations, with a focus on quality workmanship, reliable execution, and efficient project delivery. We work closely with clients to understand their requirements and provide practical mechanical solutions that support smooth and dependable operations.",
          "Our mechanical contracting capabilities are supported by our wider industrial trading and technical services, enabling us to coordinate project requirements and provide responsive support throughout execution. With a strong commitment to quality, safety, and customer satisfaction, we aim to deliver reliable results across every project.",
        ],
        image: civilOfferMechanicalFabricationImg,
        imageAlt: "MJTC technicians welding and fabricating industrial pipework on site",
      },
    ],
  },
  {
    title: "Industrial Projects & Maintenance",
    slug: "industrial-engineering-maintenance-services",
    summary:
      "Reliable operation, maintenance, and support services for industrial projects and plant facilities.",
    headerImage: industrialProjectsMaintenanceImg,
    serviceItems: [
      {
        id: "operation-and-maintenance",
        title: "Operation & Maintenance",
        description:
          "We provide reliable operation and maintenance services to support the continued performance and efficiency of industrial facilities and project operations. Our services are focused on maintaining equipment and systems, addressing operational requirements, and supporting safe and dependable day-to-day performance. With a professional and responsive approach, we work to help clients maintain smooth operations, reduce disruptions, and achieve consistent service reliability.",
        image: industrialOfferOperationMaintenanceImg,
        imageAlt: "MJTC technician operating industrial water treatment and membrane systems",
      },
      {
        id: "annual-maintenance-contracting-services",
        title: "Annual Maintenance Contracting Services",
        description:
          "Our annual maintenance contracting services are designed to provide dependable ongoing support for client facilities and operational requirements. We focus on consistent service, timely maintenance, safety, and professional coordination to help maintain reliable day-to-day operations. Through structured maintenance support and responsive service, we work to minimize disruptions and support the continued performance of client facilities.",
        image: industrialOfferAmcImg,
        imageAlt: "Annual maintenance contracting across mechanical, electrical, HVAC, and facility systems",
        imageContain: true,
      },
      {
        id: "industrial-projects-and-plant-maintenance",
        title: "Industrial Projects & Plant Maintenance",
        description:
          "We provide maintenance and contracting support for industrial projects and plant facilities, with a focus on reliable execution, safety, and efficient project coordination. Our approach is tailored to project requirements and supports clients throughout ongoing maintenance and operational activities. We combine technical capability with responsive service to help maintain smooth and dependable industrial operations.",
        image: industrialOfferAmcImg,
        imageAlt: "Industrial projects and plant maintenance across mechanical, electrical, HVAC, and facility systems",
        imageContain: true,
      },
      {
        id: "mechanical-works-and-fabrication-industrial",
        title: "Mechanical Works & Fabrication",
        description:
          "Our mechanical works and fabrication services support a range of industrial and project requirements, with an emphasis on quality workmanship, safety, and reliable execution. We provide practical mechanical contracting support tailored to specific project needs while maintaining professional standards throughout the work. Our focus is on delivering dependable results and supporting efficient project completion.",
      },
      {
        id: "general-electrical-works",
        title: "General Electrical Works",
        description:
          "We provide general electrical works as part of our integrated contracting services, supporting project and facility requirements with a focus on safety, quality, and reliable execution. Our electrical support is tailored to client requirements and coordinated with other project activities to promote efficient and dependable operations.",
      },
      {
        id: "utility-services",
        title: "Utility Services",
        description:
          "Our utility services support the operational and project requirements of industrial and commercial facilities. We provide dependable contracting support with attention to safety, efficiency, and timely execution, helping clients maintain essential facility operations and project progress.",
        image: industrialOfferUtilityImg,
        imageAlt: "MJTC technician servicing a utility pump and piping system",
      },
      {
        id: "rolling-shutter-installation-and-maintenance",
        title: "Rolling Shutter Installation & Maintenance",
        description:
          "We provide rolling shutter installation and maintenance services as part of our contracting capabilities, supporting reliable access and continued operation of shutter systems. Our services focus on professional installation, maintenance support, safety, and responsive service to meet client requirements and maintain dependable performance.",
        image: industrialOfferRollingShutterImg,
        imageAlt: "MJTC technician installing and servicing an industrial rolling shutter",
      },
    ],
  },
  {
    title: "Dewatering Equipment & Rental",
    slug: "equipment-renting-service",
    summary:
      "Reliable dewatering pump supply, rental, and project support for industrial and construction applications.",
    heading: "Dewatering Equipment & Rental",
    subheading: "Official Racors Dewatering Pump Representative in Bahrain",
    logo: racorsLogo,
    logoAlt: "Racors — Sales, Rentals, Dewatering Projects",
    headerImage: dewateringPumpsImg,
    paragraphs: [
      "Mohifar Jahan Trading and Contracting is the official representative in Bahrain for Racors dewatering pumps, and we supply the accessories needed to support dewatering operations on site.",
      "Mohifar Jahan Trading and Contracting provides dewatering pump rental and supply solutions for a wide range of project and water-management requirements. Our offering includes Racors dewatering pumps ranging from 2-inch to 24-inch, with different configurations available to suit varying flow and head requirements. The equipment range is designed for dependable operation, durability, efficiency, and ease of maintenance across demanding dewatering applications.",
      "Alongside pump supply and rental, we provide the required accessories, fittings, hoses, pump spares, and related equipment needed to support dewatering operations. This allows us to provide a more complete equipment solution based on the requirements of each project.",
    ],
    applications: racorsDewateringApplications,
    catalog: [
      {
        eyebrow: "Racors Dewatering Pumps",
        products: racorsDewateringPumps,
      },
      {
        eyebrow: "Accessories & Spares",
        products: racorsDewateringAccessories,
      },
    ],
    closing:
      "Mohifar Jahan Trading and Contracting — Official Racors Dewatering Pump Representative in Bahrain.",
  },
  {
    title: "Industrial Material Supply",
    slug: "material-supply",
    summary:
      "Reliable supply of industrial materials and equipment to support diverse project and operational requirements.",
    heading: "Industrial Material Supply",
    headerImage: tradingImg,
    contentHeading: "What We Supply",
    paragraphs: [
      "We provide a broad range of industrial materials, equipment, and components to support the requirements of commercial, industrial, and project-based applications. Our trading portfolio includes electrical components, mechanical industrial materials, dewatering pumps and accessories, safety and PPE products, mechanical valves and couplings, generators and tower lights, as well as audio and video systems.",
      "Our focus is on supplying dependable products from established manufacturers while maintaining product quality, competitive pricing, timely delivery, and responsive customer service. We work closely with clients to understand their requirements and provide suitable products for their specific applications, supporting everything from individual equipment requirements to broader project needs.",
    ],
    catalog: [
      {
        eyebrow: "Electrical Components",
        intro: "Electrical supplies and components for industrial applications.",
        products: electricalComponents,
      },
      {
        eyebrow: "Mechanical Industrial Tools",
        intro:
          "Mechanical materials and related products for industrial and project requirements.",
        products: mechanicalIndustrialTools,
      },
      {
        eyebrow: "Dewatering Pumps & Accessories",
        intro:
          "Dewatering equipment and supporting accessories for project applications.",
        products: dewateringSupplyItems,
      },
      {
        eyebrow: "Safety & PPE Products",
        intro:
          "Safety equipment and PPE supporting workplace protection requirements.",
        products: safetyPpeProducts,
      },
      {
        eyebrow: "Generators & Tower Lights",
        intro:
          "Power-generation and lighting equipment for project and site requirements.",
        products: generatorsAndTowerLights,
      },
      {
        eyebrow: "Audio & Video Systems",
        intro: "Professional audio, video, and related system components.",
        products: audioVideoSystems,
      },
    ],
  },
  {
    title: "Electrical, Instrumentation & Automation",
    slug: "structural-engineering-services",
    summary:
      "Integrated electrical, instrumentation, and automation solutions designed for efficient industrial operations.",
    heading: "Electrical, Instrumentation & Automation",
    headerImage: eiaProductsImg,
    contentHeading: "What We Supply",
    paragraphs: [
      "We provide electrical, instrumentation, and automation solutions to support industrial, commercial, and infrastructure requirements. Our portfolio includes a wide range of electrical components, instrumentation devices, sensors, transmitters, switches, controllers, displays, and monitoring solutions, helping clients meet the technical and operational needs of their projects.",
      "Our instrumentation and automation offering covers applications such as level measurement, pressure sensing, remote monitoring, control systems, and hazardous-area instrumentation, while our electrical range includes components for protection, switching, measurement, and control. We work with established manufacturers and provide products selected to meet project requirements with a focus on quality, reliability, and responsive service.",
    ],
    catalog: [
      {
        eyebrow: "Electrical Components",
        intro:
          "Components for protection, switching, measurement, and control in industrial and commercial electrical systems.",
        products: electricalProtectionProducts,
      },
      {
        eyebrow: "Process Control Instruments",
        intro:
          "Equipment for measuring and controlling industrial process variables, including indicators, scanners, totalizers, isolators and displays.",
        products: processControlInstruments,
      },
      {
        eyebrow: "Instrumentation & Automation",
        intro:
          "Sensors, transmitters, switches, controllers and displays for level, pressure, monitoring and control applications.",
        products: instrumentationAutomationProducts,
      },
    ],
  },
  {
    title: "Audio & Video Systems",
    slug: "professional-sound-and-engineering",
    summary:
      "Professional audio and video solutions, including sound systems, visual equipment, and integrated AV solutions.",
    heading: "HARMAN Professional Solutions",
    subheading: "Official HARMAN Professional Solutions Representative in Bahrain",
    logo: harmanProfessionalLogo,
    logoAlt: "HARMAN, a Samsung company",
    partnerLogos: [
      { name: "JBL", src: jblByHarmanLogo, href: "https://jblpro.com/en" },
      { name: "FLUX", src: fluxAudioLogo, href: "https://www.flux.audio/" },
      { name: "AKG", src: akgByHarmanLogo, href: "https://www.akg.com/country-selector?geoip=false" },
      { name: "Martin", src: martinProfessionalLogo, href: "https://www.martin.com/en" },
      { name: "BSS", src: bssByHarmanLogo, href: "https://bssaudio.com/en" },
      { name: "Crown", src: crownByHarmanLogo, href: "https://www.crownaudio.com/en" },
      { name: "dbx", src: dbxByHarmanLogo, href: "https://dbxpro.com/en" },
      { name: "Lexicon", src: lexiconByHarmanLogo, href: "https://lexiconpro.com/en/product_families" },
      { name: "Soundcraft", src: soundcraftByHarmanLogo, href: "https://www.soundcraft.com/en" },
    ],
    headerImage: audioVisualImg,
    paragraphs: [
      "Mohifar Jahan Trading and Contracting is proud to be the official representative of HARMAN Professional Solutions in Bahrain, providing access to world-class professional audio and AV solutions from some of the industry's most trusted brands.",
      "Our portfolio includes JBL Professional, FLUX::AUDIO, AKG, Martin Professional, BSS, Crown, dbx, Lexicon, and Soundcraft, offering solutions for commercial, hospitality, entertainment, corporate, and other professional applications.",
      "With HARMAN's globally recognized technology and our local expertise, we provide customers in Bahrain with reliable products, professional support, and tailored audio solutions designed to meet the demands of modern projects.",
    ],
    closing: "Mohifar Jahan Trading and Contracting — Your Trusted HARMAN Partner in Bahrain.",
    catalog: [
      { eyebrow: "JBL Professional", products: jblProducts },
      { eyebrow: "FLUX::AUDIO", products: fluxProducts },
      { eyebrow: "AKG", products: akgProducts },
      { eyebrow: "Martin Professional", products: martinProducts },
      { eyebrow: "BSS Audio", products: bssProducts },
      { eyebrow: "Crown Audio", products: crownProducts },
      { eyebrow: "dbx", products: dbxProducts },
      { eyebrow: "Lexicon", products: lexiconProducts },
      { eyebrow: "Soundcraft", products: soundcraftProducts },
    ],
  },
  {
    title: "Safety PPE & Engineering Consumables",
    slug: "infrastructure",
    summary:
      "Quality safety equipment, PPE, and engineering consumables supporting safe and efficient project operations.",
    heading: "Safety PPE & Engineering Consumables",
    headerImage: safetyPpeHeaderImg,
    paragraphs: [
      "We supply a comprehensive range of safety PPE and engineering consumables designed to support workplace protection across industrial, commercial, and project environments. Our product range includes eye, face, respiratory, foot, head, hearing, hand, and body protection, helping clients meet the safety requirements of different working conditions.",
      "Our safety offering includes safety glasses, welding goggles, face shields, welding hand shields, masks, half and full-face masks, SCBA equipment, safety shoes and boots, safety helmets, climbing helmets, fire helmets, ear plugs, ear muffs, cotton and latex gloves, fingertip gloves, safety vests, high-visibility jackets, and disposable coveralls.",
      "We focus on providing practical safety solutions suited to project and operational requirements, with an emphasis on product quality, reliable supply, and responsive service. This allows us to support clients with essential PPE and safety products across a wide range of work environments.",
    ],
    catalog: [
      { eyebrow: "Personal Protective Equipment", products: safetreePpeProducts },
      { eyebrow: "Disposable Items", products: safetreeDisposableProducts },
      { eyebrow: "Road Safety", products: safetreeRoadSafetyProducts },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export const aboutContent = {
  headline: "Empowering projects. Elevating Industry",
  intro:
    "Founded in 2025, Mohifar Jahan Trading & Contracting (MJTC) is an independent Bahrain-based company providing integrated trading, engineering, contracting, and industrial services to industrial, utility, commercial, and government clients across the Kingdom. Our expertise spans construction, engineering, design, industrial maintenance, equipment rental, and the supply of high-quality materials and industrial products. By combining advanced technology, innovative design, technical expertise, and disciplined project management, we deliver efficient, reliable, and high-quality solutions tailored to the unique requirements of every project. Our commitment to excellence enables us to execute diverse and complex projects with precision, professionalism, and a strong focus on safety and quality. At MJTC, we strive to exceed client expectations by delivering practical solutions, dependable service, and outstanding performance while building long-term relationships based on trust, integrity, and mutual success. Through our engineering expertise, dedicated team, and unwavering commitment to client satisfaction, MJTC transforms ideas and visions into successful, lasting results.",
  trustedTitle: "Trusted by Leading Industries, Chosen for Excellence",
  trustedBody:
    "At Mohifar Jahan Trading and Contracting, businesses across diverse sectors rely on us for dependable contracting services and high-quality industrial supplies. Our reputation is built on consistent performance, timely delivery, and unmatched value. From construction and infrastructure to maintenance and industrial trading, we provide end-to-end solutions backed by technical expertise and a commitment to long-term success.",
};

export const whyChooseUs = [
  {
    title: "Experienced Team",
    desc: "Our team brings years of hands-on experience in MEP and fire safety, ensuring dependable, professional execution from planning to commissioning.",
  },
  {
    title: "Assured Quality",
    desc: "At Mohifar, quality is not an option — it's a commitment. We ensure accuracy, compliance, and excellence in every phase of your project.",
  },
  {
    title: "Reliable Solutions",
    desc: "We deliver solutions you can count on — on time, every time. From planning to delivery, reliability is at the core of what we do.",
  },
  {
    title: "Regulatory Compliance",
    desc: "Our processes align with industry regulations and safety standards, assuring you of seamless approvals and audit-ready documentation.",
  },
  {
    title: "Scalable Execution",
    desc: "Whether it's a high-rise tower, industrial complex, or commercial fit-out, our services are designed to adapt and scale with your project's needs.",
  },
  {
    title: "Smart & Efficient",
    desc: "Our approach combines precision engineering with cost-effective solutions, giving you high-value output without compromising quality.",
  },
];

export const processSteps = [
  { step: "01", title: "Consultation", desc: "We listen, scope and align on outcomes before anything else." },
  { step: "02", title: "Planning", desc: "Engineering, safety, procurement and schedule modelled up front." },
  { step: "03", title: "Procurement", desc: "Sourcing from vetted OEMs and stocked inventory when time matters." },
  { step: "04", title: "Execution", desc: "Certified crews delivering to specification, safely and on time." },
  { step: "05", title: "Inspection", desc: "Documented QA/QC, testing and third-party verification." },
  { step: "06", title: "Delivery", desc: "Structured handover with as-built documentation and training." },
  { step: "07", title: "Support", desc: "Ongoing maintenance, AMCs and rapid-response service." },
];

export const testimonials = [
  {
    quote:
      "MJTC brought engineering discipline and speed to our plant maintenance program. Their team is our first call for critical work.",
    author: "Plant Manager",
    role: "Industrial Manufacturing, Bahrain",
  },
  {
    quote:
      "Reliable supply of mechanical and electrical materials with real technical support. That combination is rare in the market.",
    author: "Procurement Lead",
    role: "Utilities Sector",
  },
  {
    quote:
      "From HVAC retrofit to civil works, MJTC delivered a coordinated scope on schedule. Communication was excellent throughout.",
    author: "Facilities Director",
    role: "Commercial Group",
  },
];
