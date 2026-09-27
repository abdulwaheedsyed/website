# sawaheed.com

The source for my personal site. Two pages, no build step, no framework — plain
HTML and CSS, served straight from GitHub Pages.

## What's here

**`index.html`** — the landing page.

**`islamic-inheritance-calculator.html`** — *Mīrāth*, a calculator that works out
how an estate divides among surviving heirs under Sunni law. It gives each heir's
fixed share as a fraction, a percentage and an amount, names the relatives who are
barred and why, and shows the Qurʾanic verse or hadith each portion rests on.

It covers the Ḥanafī, Mālikī, Shāfiʿī and Ḥanbalī positions, and switching between
them changes the arithmetic where the schools genuinely differ — the grandfather
against the brothers, the return of a surplus, the donkey problem. The classical
problem cases are built in: al-ʿUmariyyatān, al-Akdariyya, al-Mushtaraka, ʿawl,
radd, and the distant kindred. Shares are computed in exact fractions rather than
floating point, so a base raised by ʿawl stays exact.

It reads in **English, Urdu and Hindi**, right-to-left included.

## Running it

Open either file in a browser. That's the whole thing — each page is one
self-contained document, and nothing is fetched at runtime except the Urdu and
Hindi webfonts, which fall back to system fonts if they don't load.

## Please read this about the calculator

It is a study aid, not a substitute for a qualified *farāʾiḍī* or a competent
court. It knows nothing of the facts that decide real estates: who predeceased
whom, whether a marriage or lineage is established, jointly held property, an heir
barred by homicide or difference of religion, an unborn child, a missing person, or
an estate settled under a statute that departs from the classical rules. Have any
actual distribution confirmed by someone qualified.

## Deploying

Pushing to `main` publishes it. The domain lives in `CNAME`.
