# Avora Brands — 2026 redesign 

Static site: plain HTML + one CSS file + two JS files. No build step.

## Pages
| File | Page |
|---|---|
| `index.html` | Home — hero, gifts & merch preview, services, work, process, reviews, founder, FAQ, quote form |
| `design.html` | Design Studio — 6 services, packages, work, process, FAQ |
| `print.html` | Print & Merch — best-seller prices, full catalogue (7 categories), process, FAQ |
| `work.html` / `case.html?p=<id>` | 17 case studies (one template, content in `assets/js/data.js`) |
| `about.html` | Story, values, founders, team, milestones, locations |
| `blog.html` / `post.html?p=<id>` | Insights page + 5 articles (Praveen's 2 removed, Vignesh's gifting checklist added) (bodies in `assets/js/posts-content.js`) |
| `careers.html` | Culture, open roles, internship, application form |
| `kids.html` | Avora Kids (kids store): playground (doodle → T-shirt/mug/frame/tote, name puzzle, storybook cover), age filters, 11 creative kits/personalised gifts (list in the page script), drawing-to-toy, folk art kits, parents section. Orders go as a WhatsApp list. |
| `contact.html` | Quote form, contact cards, map, FAQ |

Quote forms (Home, Contact) email the enquiry and also open WhatsApp (+91 90194 40645) with the same message. No backend to run.

## Edit content
- Projects, team, reviews, posts, jobs, phone/email: `assets/js/data.js`
- Colours, fonts, spacing: tokens at the top of `assets/css/site.css`
- Header, footer, logo: `assets/js/site.js`

## Please confirm before going live
- [ ] Design package contents (Starter Brand / Business Launch / Growth Partner)
- [ ] Rewritten founder story on About matches Pavan's voice
- [ ] Milestone dates on About (taken from case-study years)
- [ ] Switch to a domain email (hello@avorabrands.in) in `data.js`

## Preview locally
```bash
python3 serve.py 5199
```
(run from the parent folder), then open http://localhost:5199

## Images
All 140 visuals from the live site are in `images/`, resized to max 1,600 px (about 33 MB instead of 105 MB), so the site no longer depends on avorabrands.in being online.
- Local Service Finder files were renamed (no spaces): `lsf-brand-1..6.jpg`, `lsf-web-1..6.jpg`; `desktop view.jpg` became `desktopview.jpg`.
- Every photo was checked against its section; a few mismatches carried over from the live site were corrected (e.g. "Photo mugs & bottles" now shows personalised mugs/bottles, "Canvas prints" shows the canvas photo).
- Wanderly Travels has only one real visual on the live site (`img-social.jpg`), so its case study shows that cover and no gallery. Add more Wanderly work to `gallery` in `assets/js/data.js` when you have it.

## Forms and email
| Form | Goes to |
|---|---|
| Quote form (Home, Contact) | Emailed to hello.avorabrands@gmail.com, and WhatsApp opens with the same message for the visitor to send |
| Internship application (Careers) | Same inbox |
| Newsletter (footer, Insights) | Same inbox. You get the address; no automatic welcome email (a paid Web3Forms feature) |

Emails go through Web3Forms. The access key is `SITE.web3formsKey` in `assets/js/data.js`; it decides the inbox and is meant to be public. If sending fails, the forms keep what the visitor typed and offer WhatsApp or email.

## Print catalogue prices
Every product in the Print page catalogue shows an indicative price, unit and minimum quantity (the `PRICE` list in `print.html`). Prices were set slightly below typical 2026 Indian online print rates; the live-site prices (₹3 card, ₹19 letterhead, ₹50 brochure, ₹1,850 standee) are kept as they were. **Please review every price before going live.** Format: `name: [price per unit in ₹, unit, minimum qty, step]`.
# avora-website
# avora-website
