# Editing the site

Everything you can see on the site is in this folder.
**One `.md` file = one page.** Open the file, follow the comments at the top.

## I want to…

| …do this | …open this file |
|---|---|
| Change the homepage hero or about | `home.md` |
| Add or rename a navbar item | `nav.md` |
| Reorder the Activities dropdown | `nav.md` |
| Change footer links, email, or tagline | `footer.md` |
| Change the browser tab title or SEO description | `site.md` |
| Add or remove a project | `projects.md` |
| Add or remove an alum | `alumni.md` |
| Swap a university or industry logo | `alumni.md` (+ drop the image in `public/reach/universities/` or `public/reach/industry/`) |
| Add or remove an event | `events.md` |
| Swap an event image | `events.md` (+ drop the image in `public/events/`) |
| Add or remove an achievement | `achievements.md` |
| Add or remove an open-source contribution | `opensource.md` |
| Add or remove a publication | `publications.md` |
| Add or remove a startup | `startups.md` |
| Add or remove a sponsor | `support.md` |
| Edit CSR or sponsor copy | `support.md` |
| Change the Activities landing cards | `activities.md` |

## How each file works

Every file starts with a `---` line, then a few comment lines starting with
`#` explaining the file, then the actual content, then another `---`.
**The comments are the documentation** — read them, follow the templates.

Indentation matters. Use **two spaces** for each level. Do not use tabs.

## Adding an image

1. Drop the image in the right folder under `public/`:
   - Event card images → `public/events/`
   - University logos  → `public/reach/universities/`
   - Industry logos    → `public/reach/industry/`
2. Reference it in the `.md` file with a leading `/`:
   `image: /events/my-event.png`

## Allowed values

**Project tags** (used in `projects.md` — case-sensitive):
`Controls`, `Robotics`, `RL`, `Embedded`, `ML`, `Computer Vision`,
`Compilers`, `LLM`, `Computer Architecture`, `Verilog`,
`Mechanical Design`, `PCB Design`, `Operating Systems`,
`Signal Processing`.

**Event categories** (used in `events.md`):
`Eklavya`, `Seminar`, `Workshop`, `SAC`.
To add a new category, also add it to the `categoryOrder:` list in the
same file.

## FAQ

**Q: I made a change, the site didn't update.**
Save the file. The dev server reloads automatically. If you run
`npm run build` the site rebuilds from scratch.

**Q: I'm getting a parse error.**
Almost always indentation. Each level uses **two spaces**, not tabs.
Check that lists (lines starting with `-`) are aligned consistently.

**Q: My URL is being read as something weird.**
Wrap the URL in single quotes: `linkedin: 'https://...'`.

**Q: I want to delete an item — do I delete the whole entry or just blank the fields?**
Delete the whole entry (all the lines from the `- name:` line down to
the next `- name:`).
