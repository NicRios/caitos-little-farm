# Caito’s Little Farm

A responsive, single-page farm website inspired by an airy editorial travel layout. The hero, story, and panoramic sections use finished photographs; the contact section still uses temporary SVG artwork. This guide explains exactly how to replace any image without changing the layout.

## Live site and publishing

- Live site: [nicrios.github.io/caitos-little-farm](https://nicrios.github.io/caitos-little-farm/)
- Deployment workflow: [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)
- GitHub Actions status: [Deploy to GitHub Pages](https://github.com/NicRios/caitos-little-farm/actions/workflows/deploy-pages.yml)
- GitHub Pages settings: [Repository Pages settings](https://github.com/NicRios/caitos-little-farm/settings/pages)

Every change merged into `main` is built and deployed to GitHub Pages automatically. The GitHub Pages path settings live in [`next.config.ts`](next.config.ts), and the final exported files are prepared by [`scripts/prepare-github-pages.mjs`](scripts/prepare-github-pages.mjs).

## Important project files

- [`app/page.tsx`](app/page.tsx) contains all page text, image filenames, image dimensions, and alt text.
- [`app/globals.css`](app/globals.css) controls the layout, colors, image crops, spacing, and responsive behavior.
- [`public/placeholders/`](public/placeholders/) contains the finished photographs, the decorative mountain divider, and the remaining temporary contact image.
- [`app/icon.svg`](app/icon.svg) is the browser-tab icon.
- [`README.md`](README.md) is this editing and publishing guide.

## Run the site locally

Install the project once:

```bash
npm install
```

Start the local preview:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). Leave the command running while editing; the browser should refresh as files change.

## Final image requirements

Use original, high-resolution photographs. Crop and export each photo to the exact pixel size below. A larger export is acceptable only when it uses the same aspect ratio; otherwise the layout will crop part of the photo.

| Page placement | Current image | Image code | Export size | Ratio | Suggested maximum file size |
| --- | --- | --- | ---: | ---: | ---: |
| Full-screen hero | [`hero-caito-home-natural-foliage.jpg`](public/placeholders/hero-caito-home-natural-foliage.jpg) | [`app/page.tsx` lines 52–60](app/page.tsx#L52-L60) | 1600 × 980 px | 80:49 landscape | 700 KB |
| Back image in overlapping pair | [`home-vanity-detail.jpg`](public/placeholders/home-vanity-detail.jpg) | [`app/page.tsx` lines 93–99](app/page.tsx#L93-L99) | 720 × 1080 px | 2:3 portrait | 400 KB |
| Front image in overlapping pair | [`guest-room-portrait.jpg`](public/placeholders/guest-room-portrait.jpg) | [`app/page.tsx` lines 102–108](app/page.tsx#L102-L108) | 720 × 1080 px | 2:3 portrait | 400 KB |
| Full-width farm panorama | [`backyard-farm-panorama-balanced-chickens.png`](public/placeholders/backyard-farm-panorama-balanced-chickens.png) | [`app/page.tsx` lines 130–136](app/page.tsx#L130-L136) | 1600 × 760 px | 40:19 landscape | 3.2 MB |
| Contact-section portrait | [`contact-farm.svg`](public/placeholders/contact-farm.svg) | [`app/page.tsx` lines 170–176](app/page.tsx#L170-L176) | 720 × 960 px | 3:4 portrait | 450 KB |

Recommended export settings:

- Format: WebP is preferred; high-quality JPEG is also fine.
- Color: sRGB.
- Quality: approximately 75–85% for WebP or JPEG.
- Resolution: use the exact export size in the table whenever possible.
- Metadata: remove unnecessary camera and location metadata before publishing.
- Avoid PNG for photographs; it usually creates a much larger file.
- Do not bake headings, logos, borders, or captions into the photos. The website adds those separately.

## Photo-by-photo creative direction

### 1. Hero image

- Current file: [`public/placeholders/hero-caito-home-natural-foliage.jpg`](public/placeholders/hero-caito-home-natural-foliage.jpg)
- Code to update: [`app/page.tsx` lines 52–60](app/page.tsx#L52-L60)
- Required crop: **1600 × 980 px, landscape**

Use a straight-on establishing photograph of the Caito home or another view that immediately communicates the farm. For a house photo, keep the camera centered and perpendicular to the front façade: matching rooflines and window lines should be level, vertical edges should stay vertical, and the left and right sides of the building should not point toward different vanishing points. Soft morning or golden-hour light works well with the current palette.

Composition requirements:

- Keep the central third relatively quiet because the large white headline sits in the middle.
- Keep the main subject away from the extreme left and right edges; mobile screens crop both sides.
- If the home is the subject, show its full front elevation with breathing room on both sides and avoid wide-angle distortion.
- The current hero crop is anchored to the bottom of the photograph and enlarged with `object-position: center bottom`, `transform: scale(1.18) translate(1%, 0)`, and `transform-origin: center bottom` in `.hero-image`. This keeps the sidewalk in view while cropping substantially more sky above the roofline.
- The title and subtitle stay horizontally centered as a group and are intentionally raised 10% above the hero’s vertical midpoint by the inset and flex alignment rules in `.hero-copy`.
- Favor a darker or mid-tone center so the white headline remains readable.
- Avoid a close face, animal, sign, or other essential detail in the center behind the text.
- Review the image on both desktop and mobile before approving the crop.

Example alt text: `Late-afternoon light over the fields at Caito’s Little Farm`.

### 2. Home detail image — back of the overlapping pair

- Current file: [`public/placeholders/home-vanity-detail.jpg`](public/placeholders/home-vanity-detail.jpg)
- Code to update: [`app/page.tsx` lines 93–99](app/page.tsx#L93-L99)
- Required crop: **720 × 1080 px, 2:3 portrait**

Use a close detail that shows texture, work, or care. Strong subjects include hands in soil, seedlings, flowers, eggs, vegetables, a harvest basket, a well-used tool, boots, fur, feathers, or a small architectural detail from the farm.

Composition requirements:

- Choose a simple focal point with visible texture.
- Keep the subject near the center because the image is rotated and partially covered by the front photo.
- Avoid placing the most important detail in the lower-left area; the front image overlaps it.
- Warm natural light and earthy green, wheat, cream, or brown tones fit the current palette.

Example alt text: `Hands planting young lettuce seedlings in dark soil`.

### 3. Home portrait image — front of the overlapping pair

- Current file: [`public/placeholders/guest-room-portrait.jpg`](public/placeholders/guest-room-portrait.jpg)
- Code to update: [`app/page.tsx` lines 102–108](app/page.tsx#L102-L108)
- Required crop: **720 × 1080 px, 2:3 portrait**

Use the more personal or story-driven image of the pair. Good options include Caito working, a farm animal, a person holding a harvest basket, a greenhouse aisle, a doorway, or a vertical view down a crop row.

Composition requirements:

- Keep the main subject in the center 60% of the frame.
- Leave a little breathing room above heads, ears, flowers, or other tall subjects.
- Choose an image that is visually distinct from the detail photo but uses compatible light and color.
- This is the front image, so it should be the stronger of the two photographs.

Example alt text: `Caito carrying a basket of vegetables between garden rows`.

### 4. Panoramic farm image

- Current file: [`public/placeholders/backyard-farm-panorama-balanced-chickens.png`](public/placeholders/backyard-farm-panorama-balanced-chickens.png)
- Code to update: [`app/page.tsx` lines 130–136](app/page.tsx#L130-L136)
- Required crop: **1600 × 760 px, wide landscape**

Use a broad, immersive scene that gives visitors a sense of place. Good options include crop rows, an orchard, a pasture, a barn and surrounding land, a seasonal harvest, or a small gathering photographed from farther away.

Composition requirements:

- Use a strong horizontal composition with a level horizon.
- Leave the lower-right corner relatively quiet for the “Seasonal visits / Come as you are” caption card.
- Keep important people and animals away from the far edges because the section crops more tightly on mobile.
- Avoid a very tall subject that depends on the top or bottom edge remaining visible.

Example alt text: `Wide view across the farm’s garden rows toward the barn`.

### 5. Contact image

- File to replace: [`public/placeholders/contact-farm.svg`](public/placeholders/contact-farm.svg)
- Code to update: [`app/page.tsx` lines 170–176](app/page.tsx#L170-L176)
- Required crop: **720 × 960 px, 3:4 portrait**

Use a warm closing image that feels like an invitation. Good options include an open farm gate, porch, barn door, pathway, bouquet, farm stand, waving host, or another welcoming human-scale detail.

Composition requirements:

- Keep the subject centered with comfortable space around it.
- Favor open, friendly light rather than a dark or distant scene.
- Avoid putting text inside the photo; the italic caption appears directly below it.
- Make the image feel different from the story pair so the contact section has its own visual purpose.

Example alt text: `An open wooden gate leading toward the garden and farmhouse`.

## How to install a final photo

Repeat these steps for any image you want to replace. The hero, both overlapping story frames, and panorama are finished photographs; only the contact image still uses an SVG placeholder.

1. Crop the original photograph to the required aspect ratio and export it at the listed dimensions.
2. Give it a clear matching name, such as `hero-caito-home-natural-foliage.jpg`, `home-vanity-detail.jpg`, `guest-room-portrait.jpg`, `backyard-farm-panorama-balanced-chickens.png`, or `contact-farm.webp`.
3. Add the exported file to [`public/placeholders/`](public/placeholders/).
4. Open [`app/page.tsx`](app/page.tsx) and find the matching `<Image>` block using the links in the table above.
5. Change only the filename and extension inside `assetPath(...)`.
6. Replace the placeholder `alt` text with one concise sentence describing the actual photograph.
7. Keep the existing `width` and `height` values unless the replacement uses a different—but still intentional—aspect ratio and the CSS is also being redesigned.
8. Preview the result locally on a wide screen and a phone-width screen.
9. Once the replacement is confirmed, delete the old SVG placeholder so unused temporary artwork is not left in the repository.

For example, the hero image changes from:

```tsx
src={assetPath('/placeholders/hero-caito-home-natural-foliage.jpg')}
alt="Straight-on view of the red Caito home framed by naturally detailed trees in warm evening light"
```

to:

```tsx
src={assetPath('/placeholders/hero-summer.webp')}
alt="The Caito home and front garden on a bright summer morning"
```

Do not remove `assetPath(...)`. It makes the same image URL work both on localhost and under the `/caitos-little-farm/` GitHub Pages address.

## Check the site before publishing

Run the following checks after replacing images:

```bash
npm run lint
npm run build
```

Then use `npm run dev` and inspect the complete page at these approximate browser widths:

- Desktop: 1440 px wide.
- Tablet: 768–900 px wide.
- Mobile: 375–390 px wide.

Confirm all of the following:

- Every image loads and no placeholder SVG remains visible.
- The hero headline is readable over the final photo.
- Faces, animals, produce, and other focal points are not cut off.
- The two portrait photos overlap cleanly without hiding either main subject.
- The panoramic caption does not cover an important detail.
- Images are sharp but still within the suggested file-size limits.
- Every final photo has accurate alt text.

## Mountain hero divider

The ivory range at the bottom of the hero is a traced silhouette of the supplied two-summit mountain reference, not a photo placeholder. It preserves the reference's small left shoulder, tall first summit, central saddle, tall second summit, smaller right shoulder, and long descending right ridge. Its artwork lives in [`public/placeholders/hero-reference-mountain-divider.svg`](public/placeholders/hero-reference-mountain-divider.svg), its page placement is in [`app/page.tsx` lines 61–70](app/page.tsx#L61-L70), and its displayed height is controlled by [`app/globals.css`](app/globals.css).

- To make the divider taller or shorter, adjust `height` in `.hero-mountain-divider`.
- To reshape the ridge, edit the SVG path while keeping its 1118 × 301 view box, which matches the proportions of the supplied reference image.
- To change its color, edit the single `fill` value in the SVG; it should match the paper-colored story section below.
- Keep the area above the ridge transparent so the hero photograph remains visible around the silhouette.

## Replace the remaining sample contact details

The page still contains sample contact information in [`app/page.tsx`](app/page.tsx):

- Contact detail values: [`app/page.tsx` lines 6–22](app/page.tsx#L6-L22)
- Email button: [`app/page.tsx` lines 154–167](app/page.tsx#L154-L167)

Before sharing the site broadly, replace `hello@example.com`, `By appointment only`, and `Address coming soon`. Update both the visible email address and the `mailto:` link so they match.

## Publish an update

Create a branch, commit the changed photos and code, open a pull request, and merge it into `main`. The [GitHub Pages workflow](.github/workflows/deploy-pages.yml) will build and publish the site automatically. The deployment result and any errors appear on the [Actions page](https://github.com/NicRios/caitos-little-farm/actions/workflows/deploy-pages.yml).
