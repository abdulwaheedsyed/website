# sawaheed.com

The source for my personal site. Plain HTML, CSS and a little JavaScript — no build
step, no framework, no dependencies — served straight from GitHub Pages.

## Layout

| File | Purpose |
| --- | --- |
| `index.html` | Landing page — a terminal-style session: intro, projects, about, notes, contact |
| `islamic-inheritance-calculator.html` | Mīrāth (see below) |
| `notes/` | One page per note, listed on the landing page under `ls ~/notes` |
| `assets/site.css` | Styles shared by the landing page and the notes |
| `assets/site.js` | The light/dark toggle |
| `assets/theme-init.js` | Applies a saved theme before first paint, so it never flashes |
| `assets/favicon.svg` | The site icon |
| `assets/mirath.css` | The calculator's styles, including its webfont rules |
| `assets/mirath.js` | The calculator: the inheritance engine, the three languages and the interface |
| `assets/mirath-favicon.svg` | The calculator's icon |
| `assets/fonts/` | The calculator's self-hosted Urdu and Hindi webfonts, with their licences |
| `CNAME` | The custom domain |

Projects with their own repositories are listed under [Elsewhere](#elsewhere); the
landing page links to them, but their code is not kept here.

## Projects

### Mīrāth — `islamic-inheritance-calculator.html`

Works out how an estate divides among surviving heirs under Sunni law. It gives
each heir's share as a fraction, a percentage and an amount, names the relatives
who are barred and why, and shows the Qurʾanic verse or hadith each portion rests
on.

It covers the Ḥanafī, Mālikī, Shāfiʿī and Ḥanbalī positions, and switching between
them changes the arithmetic where the schools genuinely differ — the grandfather
against the brothers, the return of a surplus, the donkey problem. The classical
problem cases are built in: al-ʿUmariyyatān, al-Akdariyya, al-Mushtaraka, ʿawl,
radd and the distant kindred. Shares are computed in exact fractions rather than
floating point, so a base raised by ʿawl stays exact. Reads in English, Urdu and
Hindi, right-to-left included.

> **Please read this before relying on it.** It is a study aid, not a substitute
> for a qualified *farāʾiḍī* or a competent court. It knows nothing of the facts
> that decide real estates: who predeceased whom, whether a marriage or lineage is
> established, jointly held property, an heir barred by homicide or difference of
> religion, an unborn child, a missing person, or an estate settled under a statute
> that departs from the classical rules. Have any actual distribution confirmed by
> someone qualified.

## Elsewhere

Linked from the landing page, but living in their own repositories.

**[Leafbind](https://github.com/abdulwaheedsyed/leafbind)** — converts PDFs into
Kindle-compatible fixed-layout EPUB 3 books, every page kept exactly. One static
binary with a desktop GUI and a command line, for Linux, macOS and Windows. *Go.*

**[Rowsmith](https://github.com/abdulwaheedsyed/Rowsmith)** — a self-hosted web
workspace for MySQL, MariaDB, PostgreSQL, SQL Server, Oracle, MongoDB, BigQuery
and SQLite. Query, browse, edit and migrate across engines, with SSH tunnels, a
team vault and scheduled queries. One binary. *Go.*

## Adding a project

1. If it is a page, drop the single HTML file at the repo root.
2. Add a row to the `ls -l ~/projects` listing in `index.html` — copy an existing
   `<a class="entry">` block and swap the icon, name, language and description.
   Give each inline `<svg>` a **unique gradient id**; duplicate ids across two
   inline SVGs break the fills. If the project already has its own icon, reuse
   that rather than drawing a new one, and prefix its ids to keep them unique.
3. If it lives in its own repository, point the row's `href` there and add it to
   [Elsewhere](#elsewhere) instead of giving it a section under Projects.

## Adding a note

1. Copy an existing page in `notes/` to `notes/<slug>.html`. It already links the
   shared files in `assets/` and carries the security policy, so nothing else
   needs to change for it to work.
2. Update the `<title>`, the description `<meta>`, the path in the window bar
   (`~/notes/<slug>.md`), the `cat` line, the date and project in the meta line,
   and the body. Write the body as plain `<p>` and `<h2>`; headings pick up their
   `##` prefix from the stylesheet. Use `<em>` for terms and `<code>` for code.
3. Add a row to the `ls ~/notes` listing in `index.html` — copy an existing
   `<a class="nrow">` block.
4. Links inside a note are relative to `notes/`, so home is `../index.html`.

Dates are `YYYY-MM-DD`. A note about a project is dated by that project's
inception: the author date of its first commit.

Styles live in `assets/site.css`. Rules for the landing page only are scoped under
`.page-home` and rules for notes only under `.page-note` — the class on each page's
`<body>` — so a change to shared parts like the window bar applies everywhere.
The Mīrāth calculator is a separate design, with its own `assets/mirath.css`.

## Security

GitHub Pages cannot send custom HTTP headers, so every page carries its security
policy in a `<meta>` tag instead:

```
default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self';
base-uri 'none'; form-action 'none'
```

The calculator's policy adds `font-src 'self'` for its webfonts; the other pages
use system fonts and need no font source at all.

Only files served from this site may run or style a page; nothing third-party
loads. That rules out, deliberately:

- **inline `<script>`, `<style>` and `style="…"`** — put code in `assets/` instead;
- **`data:` URIs**, including for images and icons — use a file;
- **any third-party request** — fonts, analytics, embeds, images from elsewhere. If
  one is ever genuinely needed, add its exact origin to the policy rather than
  loosening it.

A `<meta>` policy cannot set `frame-ancestors`, and GitHub Pages cannot send
`X-Frame-Options`, so the site cannot stop itself being framed. With no forms or
sign-in, there is nothing worth clickjacking.

Scripts must not inject `style="…"` either, through `innerHTML` or `setAttribute`;
the policy refuses those too. Set styles through the style API instead —
`el.style.background = …` is allowed.

The calculator's Urdu and Hindi fonts — Noto Nastaliq Urdu and Noto Serif
Devanagari — are self-hosted in `assets/fonts/` rather than loaded from Google
Fonts, so no visitor's request reaches a third party. Both are under the SIL Open
Font License; the licence texts ship beside the font files, as the licence
requires.

## Running it

Serve the folder over HTTP and open it, the same way GitHub Pages serves it:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`. Opening the files straight from disk is not
reliable: the security policy only allows files from the site's own origin, and
browsers treat files on disk inconsistently, so the shared styles and scripts may
be refused. Nothing is fetched from anywhere else at runtime.

## Deploying

Pushing to `main` publishes it. The domain lives in `CNAME`.
