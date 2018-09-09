This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


The [Movie DB](https://www.themoviedb.org/account/signup) is used here. API key is required to be inserted in file "src/modules/movie-browser/movie-browser.service.js" at 
const MOVIE_DB_API_KEY = '<API_KEY>';


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
        loader.component.js
        redux.helpers.js
        scroll.helpers.js
      movie-browser/
        movie-card/
          movie-card.component.js
        movie-list/
          movie-list.component.js
        movie-modal/
          movie-modal.actions.js
          movie-modal.container.js
          movie-modal.reducer.js
        movie-browser.actions.js
        movie-browser.container.js
        movie-browser.helpers.js
        movie-browser.reducers.js
        movie-browser.service.js
    App.css
    App.js
    index.css
    index.js
    store.js
```
