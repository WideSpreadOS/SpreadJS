# SpreadJS

## About

A single-page web framework by WideSpread. Includes: templating engine, DOM manipulation, pre-built CSS framework, 3D/VR/AR framework, built-in ORM &amp; ODM, MQTT framework, built-in security, and a Socket &amp; RTC framework. Mix and match anything and everything you need for a seamless application that allows developers to make use of anything connected to the internet. SpreadJS can accomodate most hardware for IoT/IIoT, but for the best user experience WideSpread hardware works best (it was built with SpreadJS in mind). ATTENTION: SpreadJS IS UNDER CONSTRUCTION. PLEASE DO NOT TRY AND IMPLEMENT/INTEGRATE IT INTO YOUR APPLICATION AT THIS TIME.

## Quick Start

*ADD NPM MODULE*
*ADD JS CDN*


## Documentation

### spreadApp Element

The spreadApp element is your core app container. It is used for all the data you would like your users to interact with. It is a fullscreen overlay to your spreadAppBackstage element (which is also fullscreen). The spreadApp element has a transparent or semi-transparent background-color (you may also make it a solid color with no transparency if you wish to hide the spreadAppBackstage element).

### spreadAppBackstage Element

The spreadAppBackstage element is all the data you would like to show that is read-only. You can picture it as having 2 seperate apps piled/layered on top of eachother that also work together.

For example, say your app was a online code editor. your spreadAppBackstage could be a live view of whatever your spreadApp content typed in the code editor (you would have to build a code editor with HTML, CSS, JS... I don't mean VS Code or anything like that).

Another Example, let's use the SpreadInventory System this time. The SpreadInventory would be the spreadAppBackstage showing the user everything currently inside of the selected inventory folder (SpreadInventory Items are pretty much folders that users can add anything to, news article of this, video of that, links, notes, contacts and photos (plus much more) of this that and the other thing.). Then on the spreadApp the user could be exploring anywhere on WideSpread, when they find something they'd like to add to their inventory item... they use the SpreadCard Menu to add it, and it will instantly appear in the spreadAppBackstage. The user could also use the spreadAppBackstage to be able to compare inventory items to their current spreadApp page.

You can allow users to turn on/off the spreadApp display to allow access to spreadAppBackstage. Doing so will allow the user to now interact with the spreadAppBackstage data.