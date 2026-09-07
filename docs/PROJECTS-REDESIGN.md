# Projects redesign

## Direction

Use the six existing projects to present web development and automation work to clients and recruiters. Keep `/projects` and its All, Web Dev, and Automation filters. Replace long project rows with a compact visual gallery; each project opens a dedicated, shareable detail page. Preserve factual copy, screenshots, and supplied external links.

## Visual system

Reuse the site's theme tokens: dark background #050505, light background #f4f4f5, dark foreground #fafafa, light foreground #09090b, dark border #27272a, and dark interactive accent #38bdf8. Light-theme equivalents remain governed by existing tokens. Geist Sans handles titles and reading text; Geist Mono identifies technologies. Text is left aligned. Screenshots are the main visual feature, shown uncropped without added mockups, decorative gradients, or card chrome.

Desktop gallery:

```text
Projects
Short description
All    Web Dev    Automation
[Project image]   [Project image]
Title             Title
Short summary     Short summary
View project      View project
```

Desktop detail:

```text
Back to projects
Title / summary / supplied links
[Project image]   How it works
Caption           Capabilities
                  Built with
Browse projects / Contact
```

Mobile uses one column. Keep controls at least 44px high, reading text comfortable, and section gaps 20–32px. Do not hide long content behind fixed heights. The gallery omits repeated feature and stack previews; details hold complete content.

## Delivery and verification

1. Rebuild gallery, header, and footer.
2. Add static project routes, metadata, and unknown-project handling.
3. Verify category membership, keyboard navigation, all six detail pages, external links, and return navigation.
4. Inspect mobile and desktop screenshots in both themes; test overflow and image loading.
5. Run unit tests, lint, formatting, and production build. Keep changes uncommitted.
