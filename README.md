This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Folder Structure](#folder-structure)

## Folder Structure

After creation, your project should look like this:

```
movie-catalogue/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    modules/
      common/
        redux.helpers.js
      movie-browser/
        movie-browser.container.js
        movie-browser.reducers.js
        movie-browser.srvice.js
    App.css
    App.js
    index.css
    index.js
    store.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.