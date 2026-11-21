# Portfolio source material

Project details and credits were checked against the original public posts. Spec campaigns are identified as spec work.

- Armani director’s cut: https://www.youtube.com/watch?v=RXlD5zKnSOQ — six gallery stills extracted from this film.
- Armani crew credits: https://www.instagram.com/p/DcEqMuQj0b_/
- Igazi film post: https://www.instagram.com/p/DR7xMIsj6Cz/
- Igazi trailer: https://www.youtube.com/watch?v=Yk5BjgXHPKU — six gallery stills extracted from the trailer and identified as trailer frames. The post does not specify crew roles; only the verified publishing collaborators are credited.
- The Future / UA Spec film: https://www.youtube.com/watch?v=yv_FIf1wVgA
- UA roles and talent: https://www.instagram.com/p/DPufUdgD1-_/
- Original Drive footage supplied by the user: https://drive.google.com/drive/folders/19nqb221vMhiDuFixEJulwdSu5mNIuGs_
  - coloruavid.mp4 and backlituacolor1.mp4: selected UA production color studies.
  - luminavid1final.mp4: selected daylight beauty portrait.
  - 8mmtest1.mp4: selected monochrome studio portrait.
- NNEXUS sessions, BTS, and portrait source links are retained alongside their entries in app/data/projects.ts.

Gallery images are local assets. Films play on demand through their source provider; visitors can also follow the direct source link. The hero uses the existing local video files with their original proportions.

## Audit updates

- The three On Set images are now selected stills extracted from the original public Instagram reels linked in `app/data/projects.ts`, rather than their small cover previews. Armani’s source is a production/outtake reel; the other selections show camera work and the studio setup.
- About images are resized WebP derivatives of the existing original assets; the originals are retained.
- Hero poster and social preview use a frame from the original Frebruk-only hero playlist.
- Booking email was confirmed by the user as frebfotos@gmail.com. The inquiry form prepares an email draft and offers a copy fallback; it does not claim to send or store inquiries.
- Igazi crew roles remain unlisted unless the original source identifies them.

## Editorial homepage sequence

- Homepage images now have separate roles: the six carousel portraits, one cover per selected collection, three BTS selections, Frebruk’s About images, and one closing football portrait.
- `/portraits` holds the fuller beauty, graduation, and personal-study galleries. The extra Lumina reflection is extracted from the user-supplied `luminavid1final.mp4`; existing graduation originals remain available there.
- The closing football portrait uses the existing `blue-gold-jeans.jpg` asset. The carousel duplication is only the hidden second group required for continuous scrolling.
- Armani and Igazi frame captions describe the visually reviewed scenes; Igazi’s images remain identified as coming from its trailer on the project page.

## Expanded highlight archive — November 19, 2026

Forty distinct saved-story images were selected from the six highlights on `@freb.fotos`. The authenticated Chrome session and user-saved, sanitized media exports supplied the actual image URLs; no browser credentials or export files are included in this repository.

- **BTS:** 20 selections form `/on-set`, grouped into performance, studio, and location work. Three additional campaign photographs from the BTS highlight appear in Armani’s project gallery.
- **Art:** Three selections expand the portrait and personal-study collections.
- **Film:** Four monochrome photographs expand the portrait and personal-study collections.
- **Armani Spec:** Two additional selections join the campaign gallery.
- **Igazi:** Six additional photographs join the trailer frames. The trailer and highlight photographs remain distinguished in the page copy.
- **UA Spec:** Two monochrome selections join the production color studies.

`HIGHLIGHT_SOURCES.json` maps each local WebP to its original highlight and story ID. All source links use stable highlight URLs. Author-created collages remain intact; logo-only slides, tiny embedded reposts, and redundant selections were excluded. Images are resized and encoded as WebP with their original proportions and no generative alterations.

## Latest wedding carousel — November 19, 2026

Eight original photographs from https://www.instagram.com/p/Df7sQsTm-kG/ are optimized locally under `public/images/wedding/`. Original film borders and compositions are preserved. The caption identifies this as a wedding Frebruk assisted on; no lead-photographer credit is inferred. Full set appears in Portraits → Wedding, with separate homepage feature and carousel selections. Stable source and media IDs are recorded in `LATEST_POST_SOURCES.json`.
