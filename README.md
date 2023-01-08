# SLZB-06 MANUAL

This repository contains the [SLZB-06](https://smlight.tech/manual/slzb-06) documentation.

It is based on [VuePress v2](https://v2.vuepress.vuejs.org/).

## Directory-Structure

* `docs`: The actual documentation.
* `docs/.vuepress`: VuePress enhancements.
* `public`: Static assets like static images.
* `navbar.ts`: Tom menu navigation bar - configuration file.
* `sidebar.ts`: Side menu (sidebar) - configuration file.
* `vuepress.config.ts`: The [VuePress config file](https://v2.vuepress.vuejs.org/reference/config.html).


## VuePress installation

```bash
# Install Vuepress dependencies
npm ci
```

## Compilling static web pages

```bash
# Run Vuepress build command to generate static pages
npm run build
```

Compilled web-resource will be stored at the `dist` directory. 
