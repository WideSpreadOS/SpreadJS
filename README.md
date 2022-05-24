<head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Gruppo&family=Roboto:ital,wght@0,100;0,400;0,500;0,700;1,100&display=swap" rel="stylesheet">

</head>


<style>
    body {
        background-color: #000;
        color: #fff;
        font-family: Gruppo;
        overflow-x: hidden;
        padding: 0;
        margin: 0;
    }
    #bgImg {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-160%, -50%);
        width: 30vw;
        height: 30vw;
        opacity: 0.5;
        filter: drop-shadow(0 0 10px #fff);
    }
    h1 {
        margin-top: 30px;
        text-align: center; 
        font-weight: bold; 
        font-size: 3rem; 
        color: lightskyblue;
    }
    h2 {
        font-size: 2.5rem; 
        background-color: rgba(135, 206, 250, 0.5);
        backdrop-filter: blur(5px);
        padding-left: 16px; 
        border-radius: 4px;
        margin-top: 30px;
        box-shadow: 0 0 10px rgba(255, 255,  255, 0.75);
    }
    p {
        color: #fff;
        font-size: 1.2rem;
        margin-top: 20px;
        margin-bottom: 20px;
        text-indent: 10px;
        padding: 20px;
    }
    ol, ul {
        margin-top: 20px;
        width: 50%;
        margin-inline: auto;
    }
    li {
        font-size: 1.2rem;
    }
    li::marker {
        color: lightskyblue;
        font-size: 2rem;
    }
    hr {
        margin-top: 60px;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0 0 15px lightskyblue;
        border-radius: 50%;
        
    }

    #spreadAppContainer {
        position: relative;
        width: 100vw;
        height: 100vh;
        max-width: 100vw;
        overflow-x: hidden

    }
    #spreadApp {
        position: absolute;
        right: 10px;
        top: 0;
        max-width: calc(100vw - 250px);
    }
    .doc-header {
        padding 30px;
    }
    #spreadMenu {
        width: 200px;
        background: rgba(51, 51, 51, 0.75);
        backdrop-filter: blur(5px);
        border-right: solid 3px lightskyblue;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
    }
    .spread-menu-header p {
        text-align: center;
        width: 50%;
        margin: 0 auto;
        border-bottom: solid 1px lightskyblue;
        padding-bottom: 0;
        font-size: 2rem;
        font-weight: bold;
        text-shadow: 0 0 5px lightskyblue;
    }
    .spread-menu-body ul {
        list-style: none;
        color: lightskyblue;
        width: 100%;
    }
    .spread-menu-body li:hover {
        color: #fff;
        cursor: pointer;
    }
</style>

<img id="bgImg" src="frontend/public/assets/favicon_1a1a1a.png">


<div id="spreadAppContainer">
    <div id="spreadMenu">
        <div class="spread-menu-header">
            <p>Menu</p>
        </div>
        <div class="spread-menu-body">
            <ul>
                <li>About</li>
                <li>Quick Start</li>
                <li>Documentation</li>
                <li>Example App</li>
                <li>Resources</li>
            </ul>
        </div>


</div>
<div id="spreadApp">
<h1>SpreadJS</h1>

<h2>About</h2>


<p>A single-page web framework by WideSpread. Includes: templating engine, DOM manipulation, pre-built CSS framework, 3D/VR/AR framework, built-in ORM &amp; ODM, MQTT framework, built-in security, and a Socket &amp; RTC framework. Mix and match anything and everything you need for a seamless application that allows developers to make use of anything connected to the internet. SpreadJS can accomodate most hardware for IoT/IIoT, but for the best user experience WideSpread hardware works best (it was built with SpreadJS in mind). ATTENTION: SpreadJS IS UNDER CONSTRUCTION. PLEASE DO NOT TRY AND IMPLEMENT/INTEGRATE IT INTO YOUR APPLICATION AT THIS TIME.</p>

## Quick Start

- *ADD NPM MODULE*
- *ADD JS CDN*


<h1 class="doc-header">Documentation</h1>



## Dev Dependencies

- parcel-bundler ^1.3.1
- sass ^1.52.1


## Dependencies

- express ^4.18.1 


---
<br>
<br>



## spreadApp Element

The spreadApp element is your core app container. It is used for all the data you would like your users to interact with. It is a fullscreen overlay to your spreadAppBackstage element (which is also fullscreen). The spreadApp element has a transparent or semi-transparent background-color (you may also make it a solid color with no transparency if you wish to hide the spreadAppBackstage element).

## spreadAppBackstage Element

The spreadAppBackstage element is all the data you would like to show that is read-only. You can picture it as having 2 seperate apps piled/layered on top of eachother that also work together.

For example, say your app was a online code editor. your spreadAppBackstage could be a live view of whatever your spreadApp content typed in the code editor (you would have to build a code editor with HTML, CSS, JS... I don't mean VS Code or anything like that).

Another Example, let's use the SpreadInventory System this time. The SpreadInventory would be the spreadAppBackstage showing the user everything currently inside of the selected inventory folder (SpreadInventory Items are pretty much folders that users can add anything to, news article of this, video of that, links, notes, contacts and photos (plus much more) of this that and the other thing.). Then on the spreadApp the user could be exploring anywhere on WideSpread, when they find something they'd like to add to their inventory item... they use the SpreadCard Menu to add it, and it will instantly appear in the spreadAppBackstage. The user could also use the spreadAppBackstage to be able to compare inventory items to their current spreadApp page.

You can allow users to turn on/off the spreadApp display to allow access to spreadAppBackstage. Doing so will allow the user to now interact with the spreadAppBackstage data.

</div>
</div>