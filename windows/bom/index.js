// ==========================
//  BOM Properties:
// ==========================

// Window Properties: 🔄

//? window.console:
// Represents the browser's debugging console.
// Allows logging messages using methods like log(), warn(), & error().

//? window.innerWidth / window.innerHeight:
// Provides the width and height of the browser's content area     (excluding toolbars and scrollbars).

//? window.scrollX / window.scrollY:
// Represents the number of pixels that the document is currently scrolled horizontally and vertically.

//? window.outerWidth / window.outerHeight:
// Provides the width and height of the whole browser window(including toolbars and borders).

//? window.localStorage:
// Provides a way to store key-value pairs persistently on the user's device.
// Allows storing data beyond the lifetime of a single page session.

//* Functions alert/confirm/prompt are also a part of BOM !
// They are directly not related to the document, but represent pure browser methods of communicating with the user.

//? window Object:
//? Represents the global window containing the BOM.
// Example: window.location, window.innerWidth, window.innerHeight.

//? navigator Object:
// provides information about the browser.
// Example: navigator, userAgent, navigator.language

//? location Object:
// Represents the current URL of the browser
// Example: window.location.href, window.location.hostname

//? history Object:
// Represents the browser's history of visited pages.
// Example: window.history.back(), window.history.forward()

//? screen  Object:
// Provides information about the user's screen.
// Example: window.screen.width, window.screen.height.

//? window.localStorage, window.sessionStorage
// Provides a way to store key-value pairs persistently on the user's device.

//? document Object
// Represents the DOM of the currently displayed document.


//* navigator Object:
// The JavaScript navigator Object is used for browser detection. It can be used to get browser information such as appName, appCodeName, userAgent etc !

//? navigator.userAgent (property):
// Returns the user agent string of the browser.
// Example: console.log(navigator.userAgent).


//? navigator.language (property):
// Returns the language preference of the user's browser.
// Example: console.log(navigator.language).


//? navigator.cookieEnabled (property):
// indicates whether cookies are enabled in the browser.
// Example: console.log(navigator.cookieEnabled).

//? navigator.platform (property):
// Returns the platform on which the browser is running
// Example: console.log(navigator.platform).

//? navigator.online (property):
// Indicates whether the browser is online
// Example: console.log(navigator.online).


// * History Object:

// The JavsScript history object represents an array of URLs visited by the user. By using this object, you can load previous, forward or any particular page.

//* Location Object:

// window.location.href (property):
// Returns the URL of the current page.
// Example: console.log(window.location.href).

// window.location.hostname (property):
// Returns the domain name of the web host.
// Example: console.log(window.location.hostname).

// window.location.assign(url) (Method):
// Navigates to the specified URL
// Example: window.location.assign("https://www.example.com")

// window.location.reload(forceReload) (Method):
// Reloads the current page.
// Example: window.location.reload(true)

// window.location.search (property):
// Returns the query string part of the URL.
// Example: console.log(window.location.search)

// * screen Object:

//? window.screen.width and window.screen.height (properties):
//  Represent the width and height of the user's screen.
// Example: console.log(window.screen.width)

//? window.screen.availwidth and window.screen.availheight (properties):
//  Represent the available width and height of the user's screen (excluding taskbars).
// Example: console.log(window.screen.availwidth)

//? window.screen.colorDepth (property):
// Returns the number of bits used to represent the color of each pixel.
// Example: console.log(window.screen.colorDepth)

//? window.screen.orientation (property):
// Returns the current orientation of the user's screen.
// Example: console.log(window.screen.orientation)

//? window.screen.pixelDepth (property):
// Returns the number of bits used to represent eaxh pixel
// Example: console.log(window.screen.pixelDepth).