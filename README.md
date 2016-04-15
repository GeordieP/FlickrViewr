# gFlickrViewr

## Simple interface to search and view Flickr images.
See it in action at [geordiep.github.io/FlickrViewr](http://geordiep.github.io/FlickrViewr)!

Built using ES6 (Babel), React, Redux, Redux-Router, and SASS. Compiled into one .js file using Webpack.

Decided against using redux-thunk (or similar) middleware, as there's only a few places in this simple application where requests/async actions will happen, and it seemed silly to bundle yet another dependency just for that.

### Some known issues:
* Some images don't appear much larger in the single image view. This is because I only request a few image size URLs from the API, and some images don't provide a few of those sizes, so they fall back to smaller ones. Could be fixed by requesting [flickr.photos.getSizes](https://www.flickr.com/services/api/flickr.photos.getSizes.html) for selected images, but it's a bit overkill for this simple app.


* Refreshing the page on the single image view will break. React-router's hash history is to blame, but it's not worth switching to browser history for this case, as I want it to be as easy as possible to view the page locally (through file:// in your browser; Let's not require a server to be running. That's annoying.)


## Do it yourself

### Run:
Clone this repository and open public/index.html. Easy!

### Dev:
Clone this repository, and run `npm install` inside.

Changes to any code inside /js/ will require `webpack` to be run in the project root, to build a new bundle file.

Changes to any .scss files inside /sass/ will require `gulp styles` to be run in the project root to compile to .css.

I recommend running at least both `webpack --watch` and `gulp` to automatically compile when a change happens!