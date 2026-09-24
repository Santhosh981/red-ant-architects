# RED ANT Cinematic Architecture Exhibition

## Goal
Build a single continuous, responsive architecture portfolio that feels like moving through a digital exhibition. The site will use RED ANT’s supplied palette and typography direction, large architectural imagery, controlled GSAP scroll choreography, and two lightweight interactive WebGL installations.

## Build plan

1. **Foundation and visual system**
   - Replace the template page with a client-only RED ANT experience at `/`.
   - Define the supplied black, charcoal, concrete, warm-white, and architectural-red palette as semantic design tokens.
   - Establish editorial grotesque/condensed typography, technical labels, grids, spacing, clipping, and reduced-motion/mobile rules.
   - Add page metadata for RED ANT.

2. **Media and content architecture**
   - Generate a cohesive set of cinematic brutalist/contemporary architecture images with concrete, glass, hard shadows, and restrained red details.
   - Keep projects, locations, statistics, services, process stages, contact details, and editorial statements in centralized typed data for easy replacement.
   - Build reusable image systems: tile reveal, theatre expansion, parallax, zoom-through, circular image, and split image.
   - Build reusable typography systems: split characters, word reveal, letter wave, scatter, and text mask.

3. **Global motion and interaction layer**
   - Install and configure GSAP + ScrollTrigger, Lenis smooth scrolling, Three.js, React Three Fiber, and Drei.
   - Create a centralized GSAP setup with scoped cleanup, responsive media queries, reduced-motion fallbacks, and shared reveal helpers.
   - Add the short loading curtain, fixed navigation, mobile menu, custom contextual cursor, magnetic CTA, cursor-following arrow, image tilt, and smooth anchor navigation.

4. **Continuous exhibition sections**
   - Hero: loading transition, masked image reveal, staggered monumental type, red line draw, and image/type counter-motion.
   - 25+ Years: pinned scale/camera treatment, rotating drawing grid, independent characters, horizontal fragments, and word reveal.
   - Selected Work: six distinct project scenes matching the requested tile, theatre, horizontal, circular, zoom-through, and split-screen systems.
   - 3D Object: interactive concrete/glass/slab composition with subtle emissive red accents, soft shadows, and pointer-reactive camera.
   - Shape Shifter: scroll-controlled transitions among sphere, cube, slab composition, ring, and abstract building form.
   - Services, architectural grid, global presence globe with hover markers, philosophy, full-screen image reveal, process diagrams, final CTA, and exhibition-style footer.

5. **Responsive performance strategy**
   - Desktop gets the complete motion language; tablet reduces geometry and scrub complexity; mobile replaces costly horizontal/pinned scenes with lighter vertical choreography.
   - Cap pixel density, avoid runtime asset fetching, minimize shadow costs, reuse geometry/materials, dispose programmatic WebGL resources, lazy-load imagery, and avoid React state in animation loops.
   - Respect `prefers-reduced-motion` across GSAP, Lenis, cursor effects, and WebGL motion.

6. **Verification**
   - Validate the full page at desktop and mobile widths, including loading completion, navigation, scroll scenes, hover states, WebGL rendering, and no overlapping text.
   - Check console/network output and confirm the 3D scenes remain visible, responsive, and free of hydration errors.

## Technical notes
- This project uses TanStack Start rather than Next.js; the requested React/TypeScript behavior and visual result will be implemented within the project’s supported framework.
- The abstract architecture objects are procedural by design, avoiding unnecessary external 3D models and keeping the exhibition fast.
- True geometry morphing will use layered procedural forms and controlled material/transform transitions for a reliable, polished result across devices.
