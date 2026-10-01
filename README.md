# sawaheed.com

The source for my personal site. Plain HTML and CSS — no build step, no framework,
no dependencies. Each page is a single self-contained file, served straight from
GitHub Pages.

## Layout

| File | Purpose |
| --- | --- |
| `index.html` | Landing page — a terminal-style session: intro, projects, about, notes, contact |
| `islamic-inheritance-calculator.html` | Mīrāth (see below) |
| `notes/` | One page per note, listed on the landing page under `ls ~/notes` |
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

1. Copy an existing page in `notes/` to `notes/<slug>.html`. Each note is
   self-contained — its own styles and theme toggle — so nothing else needs to
   change for it to work.
2. Update the `<title>`, the description `<meta>`, the path in the window bar
   (`~/notes/<slug>.md`), the `cat` line, the date and project in the meta line,
   and the body. Write the body as plain `<p>` and `<h2>`; headings pick up their
   `##` prefix from the stylesheet. Use `<em>` for terms and `<code>` for code.
3. Add a row to the `ls ~/notes` listing in `index.html` — copy an existing
   `<a class="nrow">` block.
4. Links inside a note are relative to `notes/`, so home is `../index.html`.

Dates are `YYYY-MM-DD`. A note about a project is dated by that project's
inception: the author date of its first commit.

Every note carries its own copy of the styles, as does the landing page. A visual
change has to be made in each of them, so keep that in mind before restyling.

## Running it

Open any of the HTML files in a browser — that is the whole thing. Nothing is
fetched at runtime except the Urdu and Hindi webfonts, which fall back to system
fonts if they don't load.

## Deploying

Pushing to `main` publishes it. The domain lives in `CNAME`.
