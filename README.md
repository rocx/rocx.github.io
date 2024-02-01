# [`rocx·rocks`](https://rocx.rocks)

# It's That Time Again!

This is my Web site.
Mostly intended to be a blog.


# Assets Hierarchy

Each asset type goes in their own folder:

## Styles

Raw, unadulterated CSS.
No Sass!

### Components

Breaks things down into parts that can be included and imported.
Components need to have a template in the `/_layouts/components`
folder as well.

### Fonts

`@font-face` stylesheets go directly into this folder.
The font files they rely on, however, go into their own folder.

### Palettes

While the main color variables are declared in `/assets/styles/rocx.css`,
this folder is where colors are separated into their own modules.
Entire swatches or Rouge/Pygments stylesheets go here.

### Pictures

This folder contains pictures intended solely for stylesheets
(eg. `background-image`).
Not to be confused for `/assets/pictures` which holds pictures
intended for distribution.


# Roadmap

- [ ] Reveal the site's glory unto the unwashed masses
- [ ] Atom feed
- [ ] Microformats in posts
  - [`h-entry`](http://microformats.org/wiki/h-entry)?
