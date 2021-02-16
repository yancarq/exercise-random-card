<<<<<<< HEAD
# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32)  Random Card Dealer in Javascript, HTML and CSS

<p align="center">
<img height="200px" src="https://github.com/breatheco-de/exercise-random-card/blob/master/preview.gif?raw=true" />
</p>

In this project you will learn how to change your website styles during the runtime using [VanillaJS](https://stackoverflow.com/questions/20435653/what-is-vanillajs) (plain normal js).

## 📝 Instructions

Create an algorithm that randomly builds a card on every refresh:

1. Every time the website refreshes a new random card needs to show.
2. The card must have one of the possible suits: Hearts, Spades, Clubs and Diamonds.
3. The card value must be one of the following: 1 to 10, King, Queen, Jack or Ace, (no joker).

In the end, the project needs to look similar to [this demo](https://github.com/breatheco-de/exercise-random-card/blob/master/preview.gif?raw=true).

### 💡Hints

- Remember that the first event of a website lifecycle is [onLoad (your code starts running there)](https://www.w3schools.com/jsref/event_onload.asp). You should generate a random number between 1 and 4 to pick a suit and another random number between 0 and 12 to pick a card number.
- Create a general **.card** class that applies the general styles to each card, and one additional CSS class for each suit: .spade, .club, .heart & .diamond.
- Apply the .card class to the entire div but only apply one of the suit classes at a time, depending on what suit you want to apply. For example, a 3 of Hearts will have this HTML declaration:
```
    <div class='card heart'></div>
```
- You can use images, [https://fontawesome.com/icons?d=gallery](icons) or HTML character entities to generate the suit symbol into the HTML. [Here you can find the character entities](https://brajeshwar.github.io/entities/).

HTML	| Simbolo	| Numérico	| Descripción	                    | Hex	        | CSS (ISO) | JS (Octal)|
--------|-----------|-----------|-----------------------------------|---------------|-----------|-----------|
&loz;	| ◊	        | &#9674;	| lozenge	                        | u+25CA ISOpub	| \25CA	    | \u25ca    |
&spades;| ♠	        | &#9824;	| black spade suit                  | u+2660 ISOpub	| \2660	    | \u2660    |
&clubs;	| ♣	        | &#9827;	| black club suit, a.k.a. shamrock  | u+2663 ISOpub	| \2663	    | \u2663    |
&hearts;| ♥	        | &#9829;	| black heart suit, a.k.a. valentine| u+2665 ISOpub	| \2665	    | \u2665    |
&diams;	| ♣	        | &#9830;	| black diamond suit                | u+2663 ISOpub	| \2666	    | \u2666    |
=======
# Hello World with Vanilla JS

Start coding in 30 seconds by opening this template in gitpod:
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/vanillajs-hello.git)

### Manual Installation

1) Remember to install the npm packages first:
```
$ npm install
```

2) Build and Start coding!

Build the application for the first time...

```
$ npm run start
```

And start coding your Vanilla.js application, update the `src/index.html`, `src/index.scss` or `src/index.js` depending on your needs.

## FAQ

#### 1) How do I run my code?

- Type on the command line `$ npm run start` and type localhost on the browser.

#### 2) Where do I write my code?
It depends on the language, but you have `./src/js/index.js`, `./src/style/index.scss` and `./isrc/index.html` respectively, you can add new `.html` as you please, just make sure to include import it on the index.js.

__Note:__ remember that the JS workflow starts inside `window.onload`.

#### 3) I don't see my changes.

Everytime you change any file inside the `./src` folder the website public URL will automatically refresh the changes (it's a process called hot deploy)
Remember also to refresh cleaning the cache (command+shift+r on mac, control+shift+r on pc & linux)

#### 4) How do I include more images on my project?
Add them inside the `./src/assets/img` folder and import them from any of your JS files. E.g: `import "../assets/img/rigo-baby.jpg";`

#### 5) How do I include more JS files?
Just add the files into the JS folder and import the file/variables into your index.js. E.g: `import myVar from "./file2.js"`

#### 6) How do I publish the website?

This boilerplate is 100% compatible with the free github pages hosting. Publish your website by running:
```sh
$ npm run deploy
```

Very easy and in just one step!  Push to your __master__ branch and use the free hosting that comes with [GitHub pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages), the project is ready to be published. Remember to choose to run the Github Page from your master branch.
>>>>>>> 42442e2c8c55ed0421e221a32a4f634f7855eae6
