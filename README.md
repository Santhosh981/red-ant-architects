# Red Ant Architects

Create a premium, cinematic, highly interactive one-page architecture studio website for a brand called RED ANT.

The website should feel like an award-winning contemporary architecture portfolio — minimal, editorial, cinematic, experimental, and heavily focused on motion, spatial composition, typography, 3D interaction, and architectural photography.

Do NOT create a generic corporate architecture website.

The experience should feel like the visitor is moving through a digital architectural exhibition.

1. TECHNOLOGY
Build the website using:

Next.js

React

TypeScript

GSAP

GSAP ScrollTrigger

Three.js

React Three Fiber where appropriate

@react-three/drei where useful

Lenis or an equivalent smooth-scroll solution

Modern CSS

CSS 3D transforms

WebGL where appropriate

Use reusable React components.

Structure the code cleanly so every major section is an independent component.

The website must be fully responsive for:

Desktop

Laptop

Tablet

Mobile

Create a lighter animation mode for mobile so performance remains excellent.

Respect prefers-reduced-motion.

2. BRAND
Brand name:

RED ANT

Use an architectural visual identity.

Color palette:

Almost black: #080808

Charcoal: #111111

Concrete gray: #B8B5AE

Warm white: #F2F0EA

Architectural red: #E3261E

The red color should be used selectively as an accent rather than covering the entire interface.

Typography should feel like a combination of:

sophisticated architectural editorial typography

large grotesque sans-serif

condensed display typography

small technical labels

Use extremely large typography.

Some headings should occupy most of the viewport.

3. OVERALL EXPERIENCE
The website must be ONE continuous scrolling experience.

Do not make it feel like separate conventional website pages.

Sections should transition into each other using:

scale transformations

clipping

image masks

horizontal movement

3D camera movement

typography transitions

shape morphing

overlapping sections

pinned ScrollTrigger scenes

Use smooth scrolling.

The scroll should feel heavy, fluid and cinematic.

Avoid excessive bouncing or gimmicky animations.

The animation language should feel like architecture: precise, controlled, spatial and sophisticated.

SECTION 01 — CINEMATIC HERO
Create a 100vh / 100svh full-screen hero.

Background:

Use a huge cinematic contemporary architecture image.

The building should have:

brutalist/contemporary architecture

concrete

glass

dramatic geometric forms

strong shadows

subtle red architectural detail

cinematic lighting

Place the image almost edge-to-edge.

Add a subtle dark overlay.

Hero typography
Display:

RED ANT

Then:

ARCHITECTURE
DESIGN
SPACE

Use enormous typography.

Example:

RED
ANT

The typography should partially overlap the architectural image.

Hero animation
On initial page load:

Black screen.

Small RED ANT logo appears in the center.

Logo scales from 0.6 → 1.

Background image slowly reveals through a vertical mask.

Image begins at scale 1.25 and smoothly zooms to scale 1.

Main typography enters from below the viewport.

Letters appear individually with stagger.

Typography moves slightly upward while the image moves downward.

Small navigation elements fade in.

A thin red line draws across the screen.

Use GSAP timeline.

The opening animation should feel like an architectural curtain opening.

Cursor
Create a custom cursor on desktop.

Normal state:

small white/red circle.

When hovering over images:

expand the cursor.

Display:

VIEW

When hovering over project links:

display:

EXPLORE

Use GSAP interpolation so the cursor follows smoothly.

SECTION 02 — INTRO / 25+ YEARS
Create a large black section.

Display a giant:

25+

Then:

YEARS
OF
DESIGN

Use the number as a major visual element.

IMPORTANT:

Treat "25+ years" as placeholder content that can easily be changed later.

Animation
Pin this section during scrolling.

The giant "25+" should initially be very large.

As the user scrolls:

25+ scales down

camera-like movement pushes toward the number

individual characters move independently

background grid slowly rotates

thin architectural lines appear

text fragments move horizontally

Then reveal:

"Architecture shaped by experience, experimentation and a constant pursuit of better spaces."

Animate this paragraph word-by-word.

Use GSAP ScrollTrigger.

SECTION 03 — SELECTED PROJECTS
Create a highly cinematic project showcase.

Title:

SELECTED
WORK

Do NOT use normal cards in a simple grid.

Every project should feel like an individual architectural scene.

Create approximately 6–8 demo projects.

Use placeholder/demo projects such as:

AERIS HOUSE
Dubai / UAE
Private Residence

MONOLITH
Singapore
Mixed Use

RED COURTYARD
Barcelona / Spain
Cultural Centre

NORTHLINE
Copenhagen / Denmark
Commercial Architecture

DESERT FRAME
Riyadh / Saudi Arabia
Hospitality

CANOPY 27
Melbourne / Australia
Residential

THE CONCRETE GARDEN
Mumbai / India
Urban Residence

Clearly structure the data so the user can replace these projects later.

PROJECT ANIMATION SYSTEM
Every project should have a different reveal.

Do not repeat exactly the same animation.

Project 01 — Vertical Tile Reveal
Split the image into 7 vertical tiles.

Initially:

tiles are separated slightly.

On scroll:

tiles move toward each other

opacity increases

image scale goes from 1.2 → 1

tiles settle into one image

Text appears afterward.

Use staggered GSAP animation.

Project 02 — Theatre Screen Reveal
Create a massive image approximately 90vw wide.

The image initially appears small in the center.

As the user scrolls:

image expands horizontally

image expands vertically

border radius decreases from 40px → 0px

image becomes almost full-screen

surrounding text fades away

It should feel like a cinema screen opening.

Then display:

PROJECT NAME

LOCATION

YEAR

CATEGORY

Project 03 — Horizontal Slide
Create a horizontal scrolling section controlled by vertical scrolling.

As the user scrolls vertically:

projects move horizontally from right → left.

Use GSAP ScrollTrigger pinning.

Images should have subtle parallax.

Typography should move at a different speed from the images.

Project 04 — Circular Motion
Create a large architectural image in the center.

Surround it with small metadata.

As the user scrolls:

image rotates subtly

metadata moves in a circular orbit

image scales slightly

background grid rotates in the opposite direction

Do NOT rotate the actual architectural image excessively.

Keep the motion sophisticated.

Project 05 — Zoom Through Image
Start with an architectural image at scale 1.

As the user scrolls:

scale:

1 → 1.5 → 2.2 → 3

At the same time:

the next project appears underneath.

The user should feel like they are travelling THROUGH the building.

Use layered images to create the transition.

Project 06 — Split Image
Split the screen vertically.

Left side:

image

Right side:

project information

During scroll:

left image moves upward.

right information moves downward.

Then both sides converge into one full-screen image.

SECTION 04 — 3D ARCHITECTURAL OBJECT
Create a dedicated Three.js / React Three Fiber section.

Background:

#080808

Create a large abstract architectural object.

The object should look like:

a combination of:

concrete blocks

architectural slabs

cubes

extruded planes

geometric structures

It should NOT look like a generic spinning 3D cube.

3D interaction
Use:

Three.js
React Three Fiber
Drei

Create:

ambient lighting

directional lighting

soft shadows

subtle red emissive material

concrete material

glass-like elements

Camera should move subtly based on mouse position.

Mouse movement:

X → camera rotates slightly horizontally

Y → camera rotates slightly vertically

Use smooth interpolation.

The object should continuously have extremely subtle movement.

Do not make it spin constantly like a product viewer.

SECTION 05 — SHAPE SHIFTER
Create a large 3D shape-shifting object.

Possible states:

SPHERE
→
CUBE
→
ARCHITECTURAL BLOCK
→
RING
→
ABSTRACT BUILDING FORM

The shape should transform based on scroll progress.

Use GSAP to control the transition.

If true geometry morphing is too expensive, create visually convincing transitions using:

scale

rotation

opacity

overlapping geometries

shader/material transitions

Add a red accent element.

Place text around the object:

FORM

SPACE

MATERIAL

LIGHT

Each word should appear at different stages.

SECTION 06 — SERVICES
Title:

WHAT
WE
DO

Create full-screen service sections.

Services:

01 — ARCHITECTURE
02 — INTERIOR DESIGN
03 — URBAN DESIGN
04 — MASTERPLANNING
05 — HOSPITALITY
06 — RESIDENTIAL

Do not make normal service cards.

Create a large vertical typography interface.

When the user scrolls:

the active service becomes huge.

Example:

ARCHITECTURE

Then the word moves upward and:

INTERIOR DESIGN

enters from below.

Use GSAP SplitText or equivalent character splitting.

Letters should animate individually.

SERVICE TEXT ANIMATION
Use letter-by-letter wave animation.

For example:

A R C H I T E C T U R E

Each character should move vertically using a sine-wave-like stagger.

Use GSAP.

The animation should feel organic.

Not like a basic fade-in.

SECTION 07 — ARCHITECTURAL GRID
Create a full-screen grid.

Thin white/gray lines.

The grid represents an architectural drawing.

As the user scrolls:

lines draw themselves

intersections appear

rectangles expand

red points appear

project images appear inside selected grid cells

Use SVG or Canvas for the grid.

Animate line drawing using GSAP.

Then transform the grid into the next section.

SECTION 08 — GLOBAL PRESENCE
Create a worldwide architecture section.

Title:

BUILT
AROUND
THE WORLD

Use a dark background.

Create an interactive 3D globe using Three.js.

The globe should be dark/charcoal.

Use subtle glowing red points for project locations.

Example locations:

Dubai
Singapore
Barcelona
Copenhagen
Riyadh
Melbourne
Mumbai

IMPORTANT:

These are demo project locations and should be easy to replace.

Globe animation
The globe should:

slowly rotate

respond to mouse movement

zoom slightly when scrolling

show red project markers

display a small tooltip when hovering a marker

When a marker is hovered:

show:

PROJECT NAME
CITY
CATEGORY

Use subtle red glow.

SECTION 09 — PHILOSOPHY
Create an extremely minimal section.

Large text:

WE
DESIGN
FOR
PEOPLE.

Then:

WE
BUILD
FOR
TIME.

Each sentence occupies almost the entire viewport.

Use enormous typography.

Animation
As the user scrolls:

letters separate.

For example:

DESIGN

D moves left

E moves slightly right

S moves upward

I moves downward

G moves right

N moves left

Then the letters reunite.

Use GSAP.

Add subtle background architectural imagery.

Images should appear through text masks.

SECTION 10 — FULLSCREEN IMAGE TRANSITION
Create a cinematic full-screen image section.

The image should initially appear as a narrow horizontal strip.

On scroll:

the strip expands vertically.

Then:

scale 1.3 → 1

The image fills the entire viewport.

Overlay a small line:

RED ANT / ARCHITECTURE / 2026

Then slowly fade it away.

SECTION 11 — PROCESS
Title:

FROM
IDEA
TO
SPACE

Create 4 stages:

01 RESEARCH
02 CONCEPT
03 DEVELOPMENT
04 REALIZATION

Display them as architectural diagrams.

Use animated lines connecting each stage.

As the user scrolls:

stage 01 appears

then transforms into stage 02

then stage 03

then stage 04.

Use SVG line animations and GSAP.

SECTION 12 — FINAL CTA
Create a huge black/red final section.

Display:

LET'S BUILD
SOMETHING
EXTRAORDINARY.

Make:

EXTRAORDINARY.

extremely large.

As the user scrolls:

the word starts slightly below the viewport.

It rises upward.

Then letters spread horizontally.

Then the entire word scales down.

At the end reveal:

RED ANT

ARCHITECTURE / DESIGN / SPACE

Add:

START A PROJECT →

Make the arrow subtly follow the cursor.

SECTION 13 — FOOTER
Minimal footer.

Large:

RED ANT

Navigation:

WORK
SERVICES
ABOUT
CONTACT

Contact:

hello@redant.studio

Social:

Instagram
LinkedIn
Behance

Add a small red circle that morphs continuously between:

circle
→ square
→ architectural block

The footer should feel like the end of an exhibition.

GLOBAL GSAP ANIMATION SYSTEM
Create a centralized animation system.

Use GSAP timelines and ScrollTrigger.

Animations required throughout the website:

fade up

fade down

fade left

fade right

scale in

scale out

clip-path reveal

mask reveal

image zoom

image parallax

horizontal movement

vertical movement

circular movement

character stagger

word stagger

letter wave

tile reveal

image splitting

image merging

3D rotation

3D camera movement

shape transformation

blur → sharp

opacity transitions

Use scrub: true for cinematic scroll-driven animations where appropriate.

Use pinning for major scenes.

Avoid excessive use of ScrollTrigger pinning because the page must remain smooth.

IMAGE EFFECT SYSTEM
Create reusable image effects.

Component examples:

<ImageReveal />

<ImageTileReveal />

<ImageZoom />

<ImageParallax />

<TheatreImage />

<SplitImage />

<CircularImage />

Each component should accept props for:

image

speed

direction

animation type

intensity

This will make the site easy to expand.

TYPOGRAPHY EFFECT SYSTEM
Create reusable components:

<SplitText />

<LetterWave />

<WordReveal />

<CharacterScatter />

<TextMask />

Use GSAP for all typography animation.

Large headings should have tight letter spacing.

Small labels should use generous letter spacing.

3D DESIGN LANGUAGE
The 3D world should use:

dark concrete

brushed metal

glass

translucent surfaces

architectural slabs

thin glowing red lines

subtle ambient lighting

soft shadows

Avoid:

colorful gaming aesthetics

neon cyberpunk

excessive particles

generic rotating cubes

flashy gradients

cartoon-like 3D

The visual reference should feel closer to:

high-end architecture visualization + contemporary art installation + luxury editorial website.

MICROINTERACTIONS
Add subtle interactions:

Magnetic buttons

Cursor-following arrows

Image tilt on hover

Text distortion on hover

Underline animation

Red line expansion

Menu reveal animation

Smooth navigation

Project hover preview

3D object reaction to cursor

Button text sliding

Cursor changes based on context

Do not overuse these effects.

NAVIGATION
Create a minimal fixed navigation.

Left:

RED ANT

Right:

WORK
STUDIO
SERVICES
CONTACT

Add a menu icon on mobile.

Navigation should be transparent over the hero.

When scrolling:

navigation should transition into a dark semi-transparent background.

Use blur/glass effect subtly.

Clicking navigation items should smoothly scroll to sections.

LOADING SCREEN
Create a sophisticated loading screen.

Black background.

Center:

RED ANT

Below:

ARCHITECTURE / DESIGN / SPACE

Add a progress indicator:

00 — 100

Animate the percentage.

Then:

the logo moves upward

the hero image reveals

loading screen disappears.

Do not make the loading screen unnecessarily long.

PERFORMANCE
Performance is extremely important.

Implement:

lazy loading images

optimized images

responsive image sizes

WebGL cleanup

disposal of Three.js objects

avoid unnecessary React re-renders

requestAnimationFrame only when necessary

GPU-friendly transforms

transform/opacity instead of layout-heavy animations

mobile animation reduction

reduced-motion support

Use will-change carefully.

Do not sacrifice usability for effects.

RESPONSIVE BEHAVIOR
Desktop:

Full cinematic experience.

Tablet:

Reduce 3D complexity and particle count.

Mobile:

Keep:

smooth reveals

typography animations

image zooms

vertical tiles

simple parallax

Reduce or disable:

expensive 3D scenes

complex WebGL effects

excessive horizontal scrolling

heavy mouse interactions

The website must still look premium on mobile.

CONTENT STYLE
The writing style should be:

minimal
architectural
confident
editorial
intelligent

Avoid generic agency phrases such as:

"We are passionate about..."

Instead use short statements such as:

"WE SHAPE SPACE."

"FORM FOLLOWS EXPERIENCE."

"ARCHITECTURE IS A JOURNEY."

"DESIGNING WHAT COMES NEXT."

Use these as visual copy, not as claims about actual company philosophy unless confirmed.

IMPORTANT IMPLEMENTATION REQUIREMENTS
Do NOT create:

generic Bootstrap-style layouts

standard card grids

huge rounded cards everywhere

excessive gradients

generic SaaS UI

template-looking sections

unnecessary icons

stock-dashboard design

excessive shadows

repetitive animations

The website must feel bespoke.

The first impression should immediately communicate:

ARCHITECTURE + ART + TECHNOLOGY + MOTION.

Prioritize visual quality over having lots of content.

Make the first viewport spectacular.

Make scrolling itself part of the experience.

Every section should feel like entering a new architectural space.

FINAL GOAL
The finished website should feel like:

"A digital architecture exhibition built with WebGL."

It should be:

cinematic,
minimal,
experimental,
architectural,
immersive,
high-end,
responsive,
fast,
and technically polished.

Build the complete working website rather than just creating a visual mockup.

Use real React components and functional GSAP/Three.js interactions.

Make all project content, images, locations, statistics, contact information, and text easy to replace later.

Tip: If Lovable starts producing a conventional website instead of the immersive experience, give it the prompt above first, then follow up with: “Now focus only on the animation/interaction layer. Replace generic CSS transitions with GSAP ScrollTrigger timelines, implement the Three.js architectural scene, and make every section scroll-driven and cinematic.”

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4bcd7fe5-1e05-5986-880c-b552145b4b82).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
