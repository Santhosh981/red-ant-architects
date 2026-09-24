import hero from "@/assets/red-ant-hero.jpg";
import courtyard from "@/assets/red-ant-project-02.jpg";
import monolith from "@/assets/red-ant-project-03.jpg";
import desert from "@/assets/red-ant-project-04.jpg";
import northline from "@/assets/red-ant-project-05.jpg";
import canopy from "@/assets/red-ant-project-06.jpg";
import garden from "@/assets/red-ant-project-07.jpg";

export type Project = {
  name: string;
  city: string;
  country: string;
  category: string;
  year: string;
  image: string;
};

export const images = { hero, courtyard, monolith, desert, northline, canopy, garden };

export const projects: Project[] = [
  { name: "AERIS HOUSE", city: "Dubai", country: "UAE", category: "Private Residence", year: "2026", image: hero },
  { name: "RED COURTYARD", city: "Barcelona", country: "Spain", category: "Cultural Centre", year: "2025", image: courtyard },
  { name: "MONOLITH", city: "Singapore", country: "Singapore", category: "Mixed Use", year: "2025", image: monolith },
  { name: "DESERT FRAME", city: "Riyadh", country: "Saudi Arabia", category: "Hospitality", year: "2024", image: desert },
  { name: "NORTHLINE", city: "Copenhagen", country: "Denmark", category: "Commercial Architecture", year: "2024", image: northline },
  { name: "CANOPY 27", city: "Melbourne", country: "Australia", category: "Residential", year: "2023", image: canopy },
  { name: "THE CONCRETE GARDEN", city: "Mumbai", country: "India", category: "Urban Residence", year: "2023", image: garden },
];

export const services = ["ARCHITECTURE", "INTERIOR DESIGN", "URBAN DESIGN", "MASTERPLANNING", "HOSPITALITY", "RESIDENTIAL"];
export const processStages = ["RESEARCH", "CONCEPT", "DEVELOPMENT", "REALIZATION"];