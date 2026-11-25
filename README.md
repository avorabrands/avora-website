# Avora Brands website

Static site: plain HTML, two CSS files and a few small JS files. No build step to deploy.

## Pages
| File | Page |
|---|---|
| `index.html` | Home: hero, three routes, selected work, why one team, reviews, closing CTA |
| `design.html` | Brand & digital: six services in three groups, packages, process, FAQ |
| `print.html` | Print & merch: how ordering works, catalogue and quote list, published prices, gifts, FAQ |
| `growth.html` | Growth plans: plan cards, comparison table, monthly cycle, one-time services |
| `kids.html` | Avora Kids: ordering steps, ages, playground, kits, folk art, parents, FAQ |
| `work.html` / `case.html?p=<id>` | All projects, and one case-study template |
| `about.html` | Story, timeline, principles, team, locations |
| `blog.html` / `post.html?p=<id>` | Insights list and article template |
| `careers.html` | Internships, terms, selection, application form |
| `contact.html` | Start a project form, contact details, FAQ |

## Where to edit
| What | Where |
|---|---|
| Projects, people, timeline, reviews, articles list, article CTAs, internships and their terms, phone, email, hours | `assets/js/data.js` |
| Article text | `assets/js/posts-content.js` |
| Print products, photos, minimums | `assets/js/catalogue.js` |
| Kids kits (age, what parents send) | list `P` in the script at the end of `kids.html` |
| Header, footer, menu, forms, shared behaviour | `assets/js/site.js` |
| Colours, type sizes, radius, spacing | tokens at the top of `assets/css/site.css` |

`site.css` is split into cascade layers: tokens, base, type, layout, components, pages, utilities. `kids.css` loads only on the Kids page.

Optional project fields in `data.js`: `live` (URL), `focus` (image position, e.g. `'left center'`), `quote: { text, name, role }` (shows a client quote on the case study).

## Images
Keep originals in `images/`. Pages load resized WebP copies from `images/opt/`. After adding or replacing an original that a page or data file refers to, run:

```bash
node tools/build-images.mjs
```

It needs `cwebp` (`brew install webp`) on a Mac, and also rewrites `assets/js/images.js`. Images placed by scripts use `pic('images/file.jpg', { alt, sizes })`. For images written directly in HTML, copy an existing `<img>` and change the file name, widths, `width`, `height` and `alt`.

Photos must be real JPEG, PNG or WebP files. `images/about-praveen.jpg` is a HEIC file with a .jpg name, is not used anywhere and can be deleted.

## Forms
| Form | Goes to |
|---|---|
| Start a project (Contact) | Both: emailed through Web3Forms to hello.avorabrands@gmail.com, and WhatsApp opens with the same message for the visitor to send |
| Internship application (Careers) | Same inbox |
| Newsletter (footer, Insights) | Same inbox. You get the address; no automatic welcome email (a paid Web3Forms feature) |
| Print quote list | Fills the Start a project form (email and WhatsApp), or opens WhatsApp directly |
| Kids list | WhatsApp |

**Setup:** the Web3Forms access key is `SITE.web3formsKey` in `assets/js/data.js`. It decides which inbox gets the emails and is meant to be public. If sending fails, the forms keep what the visitor typed and offer WhatsApp or email. If a form works locally but not on the live domain, ask Web3Forms support to approve the domain.

## Print prices
Only the four published prices are shown on the page. `catalogue.js` also holds indicative prices for every product. They are not displayed, but the file is public.

## Before going live
See "Needs Avora's approval" in the hand-over notes: Google reviews, team descriptions, timeline dates, packages, internship hours and stipend, studio photos.

## Preview locally
```bash
python3 -m http.server 5199
```
then open http://localhost:5199
