import { createFileRoute } from "@tanstack/react-router";
import { RedAntExperience } from "@/components/RedAntExperience";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({ meta: [
    { title: "RED ANT — Architecture / Design / Space" },
    { name: "description", content: "RED ANT is a contemporary architecture studio shaping space through material, light and experience." },
    { property: "og:title", content: "RED ANT — Architecture / Design / Space" },
    { property: "og:description", content: "A digital architecture exhibition exploring material, light and space." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <RedAntExperience />;
}
