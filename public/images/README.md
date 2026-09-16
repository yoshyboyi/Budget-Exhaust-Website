# Adding real photos

You do NOT need to edit any code to add photos. Just save your image files
with these EXACT names in these EXACT folders, and they'll automatically
replace the "Image needed" placeholder boxes on the live site.

Accepted format: .jpg (JPEG). Keep files reasonably sized (under ~2MB each,
landscape orientation where noted) for a fast-loading site.

| Where it appears                          | Save the file as                        |
|--------------------------------------------|------------------------------------------|
| Homepage hero                              | `images/hero/hero.jpg`                   |
| Homepage + Performance page hero image     | `images/performance/main.jpg`            |
| Mufflers page image                        | `images/mufflers/main.jpg`               |
| 4WD & Light Truck page image               | `images/4wd/main.jpg`                    |
| About page image                           | `images/about/about.jpg`                 |
| Homepage gallery preview + Gallery page    | `images/gallery/1.jpg` through `9.jpg`   |
| Gallery page - Before/after (job 1)        | `images/gallery/before-1.jpg` / `after-1.jpg` |
| Gallery page - Before/after (job 2)        | `images/gallery/before-2.jpg` / `after-2.jpg` |

Note: the homepage "From the workshop" preview strip reuses `gallery/1.jpg`
through `gallery/4.jpg` automatically - no need to add separate files for it.

## How to add a file
1. Rename your photo exactly as shown above (e.g. `hero.jpg`)
2. Drag it into the matching folder inside `public/images/`
3. Save, then refresh the site (if `npm run dev` is running, it updates instantly)

That's it - no code changes needed.
