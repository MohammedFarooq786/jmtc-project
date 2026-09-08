import type { CatalogProduct } from "@/data/dewatering-catalog";
import jblB35 from "@/assets/av-brands/jbl-b35.webp";
import jblDs115d from "@/assets/av-brands/jbl-ds115d.webp";
import jblSrx912 from "@/assets/av-brands/jbl-srx912.webp";
import fluxSpat from "@/assets/av-brands/flux-spat.webp";
import fluxMira from "@/assets/av-brands/flux-mira.webp";
import fluxEvo from "@/assets/av-brands/flux-evo.webp";
import akgC414 from "@/assets/av-brands/akg-c414.webp";
import akgC214 from "@/assets/av-brands/akg-c214.webp";
import akgK371 from "@/assets/av-brands/akg-k371.webp";
import martinMac from "@/assets/av-brands/martin-mac.webp";
import martinElp from "@/assets/av-brands/martin-elp.webp";
import martinMacula from "@/assets/av-brands/martin-macula.webp";
import bssVe610 from "@/assets/av-brands/bss-ve610.webp";
import bssVe330 from "@/assets/av-brands/bss-ve330.webp";
import bssUd210 from "@/assets/av-brands/bss-ud210.webp";
import crownCtd from "@/assets/av-brands/crown-ctd.webp";
import crownItech from "@/assets/av-brands/crown-itech.webp";
import crownDci from "@/assets/av-brands/crown-dci.webp";
import dbxVenu from "@/assets/av-brands/dbx-venu.webp";
import dbx676 from "@/assets/av-brands/dbx-676.webp";
import dbx560 from "@/assets/av-brands/dbx-560.webp";
import lexPcm92 from "@/assets/av-brands/lex-pcm92.webp";
import lexPcm96 from "@/assets/av-brands/lex-pcm96.webp";
import lexPcm96s from "@/assets/av-brands/lex-pcm96s.webp";
import scUi24r from "@/assets/av-brands/sc-ui24r.webp";
import scPerformer from "@/assets/av-brands/sc-performer.webp";
import scImpact from "@/assets/av-brands/sc-impact.webp";

export const jblProducts: CatalogProduct[] = [
  {
    model: "VTX B35",
    name: "Arrayable Subwoofer",
    description: "High-output arrayable subwoofer for large-scale JBL VTX sound reinforcement.",
    image: jblB35,
  },
  {
    model: "Intellivox DS115D",
    name: "Digitally Steerable Loudspeaker",
    description: "Digitally steerable column loudspeaker for speech intelligibility in challenging rooms.",
    image: jblDs115d,
  },
  {
    model: "SRX912M",
    name: "Powered Stage Monitor",
    description: "Powered 12-inch stage monitor from the SRX900 series.",
    image: jblSrx912,
  },
];

export const fluxProducts: CatalogProduct[] = [
  {
    model: "SPAT Revolution",
    name: "Immersive Mixing",
    description: "Object-based immersive mixing and live sound spatialization software.",
    image: fluxSpat,
  },
  {
    model: "MiRA Live",
    name: "Live Analysis",
    description: "Live audio analysis and measurement software for system alignment.",
    image: fluxMira,
  },
  {
    model: "EVO Series",
    name: "Channel Strip",
    description: "Analog-modeled channel strip plugins for mixing and production.",
    image: fluxEvo,
  },
];

export const akgProducts: CatalogProduct[] = [
  {
    model: "C414 XLII",
    name: "Reference Condenser Microphone",
    description: "Multi-pattern large-diaphragm condenser for studio and broadcast.",
    image: akgC414,
  },
  {
    model: "C214",
    name: "Condenser Microphone",
    description: "Cardioid condenser microphone for vocals and instruments.",
    image: akgC214,
  },
  {
    model: "K371",
    name: "Closed-Back Headphones",
    description: "Over-ear closed-back headphones for mixing, tracking and monitoring.",
    image: akgK371,
  },
];

export const martinProducts: CatalogProduct[] = [
  {
    model: "MAC",
    name: "Moving Head Lighting",
    description: "Moving-head fixtures for concert, theatre and event lighting.",
    image: martinMac,
  },
  {
    model: "ELP",
    name: "LED Profile",
    description: "LED profile fixtures for theatrical and architectural lighting.",
    image: martinElp,
  },
  {
    model: "Macula",
    name: "LED Wash",
    description: "LED wash lighting for stages, studios and live production.",
    image: martinMacula,
  },
];

export const bssProducts: CatalogProduct[] = [
  {
    model: "OMNI-VE-610",
    name: "Video Encoder",
    description: "Network AV encoder for professional video distribution.",
    image: bssVe610,
  },
  {
    model: "OMNI-VE-330",
    name: "Video Encoder",
    description: "Compact encoder for Dante AV and networked video workflows.",
    image: bssVe330,
  },
  {
    model: "OMNI-UD-210",
    name: "USB Device",
    description: "USB AV endpoint for conferencing and capture applications.",
    image: bssUd210,
  },
];

export const crownProducts: CatalogProduct[] = [
  {
    model: "CTD-8125",
    name: "ComTech DriveCore Amplifier",
    description: "Multi-channel amplifier for installed sound and commercial systems.",
    image: crownCtd,
  },
  {
    model: "I-Tech 4x3500HD",
    name: "Touring Amplifier",
    description: "Four-channel high-power touring amplifier with DSP.",
    image: crownItech,
  },
  {
    model: "DCi 8|600DA",
    name: "DriveCore Install Amplifier",
    description: "Eight-channel installation amplifier with Dante audio networking.",
    image: crownDci,
  },
];

export const dbxProducts: CatalogProduct[] = [
  {
    model: "DriveRack VENU360",
    name: "Loudspeaker Management",
    description: "Complete loudspeaker management system for installed and live sound.",
    image: dbxVenu,
  },
  {
    model: "676",
    name: "Tube Microphone Preamp",
    description: "Tube microphone preamp and channel strip for studio and live use.",
    image: dbx676,
  },
  {
    model: "560A",
    name: "Compressor / Limiter",
    description: "500 Series compressor/limiter for dynamics control.",
    image: dbx560,
  },
];

export const lexiconProducts: CatalogProduct[] = [
  {
    model: "PCM92",
    name: "Reverb Processor",
    description: "Stereo reverb and effects processor for studio and live sound.",
    image: lexPcm92,
  },
  {
    model: "PCM96",
    name: "Reverb Processor",
    description: "High-resolution reverb processor with classic Lexicon algorithms.",
    image: lexPcm96,
  },
  {
    model: "PCM96 Surround",
    name: "Surround Reverb",
    description: "Surround reverb processor for film, post and immersive mixing.",
    image: lexPcm96s,
  },
];

export const soundcraftProducts: CatalogProduct[] = [
  {
    model: "Ui24R",
    name: "Digital Mixer",
    description: "Rackmount digital mixer with remote control for live and installed sound.",
    image: scUi24r,
  },
  {
    model: "Si Performer 3",
    name: "Digital Console",
    description: "Digital mixing console with integrated lighting control.",
    image: scPerformer,
  },
  {
    model: "Si Impact",
    name: "Digital Console",
    description: "Compact digital mixing console for live performance and rental.",
    image: scImpact,
  },
];
