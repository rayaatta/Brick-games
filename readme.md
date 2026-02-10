# Landing page - Revive BrickGames

This is a hybrid of a landing page and a passionate proposal to revive brickgames, a nostalgic game machine that was part of my childhood. I made this in order to improve and showcase my coding skills by building projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### What i had to build

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Interact with the page while navigating
- Have some cool visuals and have fun while touring the site

### Links

- Code repo :  [Add live site URL here](https://your-live-site-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- CSS BEM methodology
- Javascript
### Screenshot
![Screenshot of the BrickGames landing page showing a responsive design with a grid-patterned background, navigation menu, hero section featuring the classic brick game aesthetic, and a timeline displaying the evolution of brick games with branching connections and circular nodes. The page demonstrates mobile-first responsive layout with warm brown tones and nostalgic retro styling.](./images/screenshot.png)

### What I learned

I got a chance to use some cool CSS to create a backgroundthat looks like a net to bring out the brickgame feel and I am definitely going to use it again.
here's the code

```css

  background-image: linear-gradient(#ffffff20 1px, transparent 1px),
    linear-gradient(90deg, #ffffff20 1px, transparent 1px);
  background-size: 30px 40px;
```
I also learnt managed to create this branching time line(like a tree that branches as you go down to different sections) which was a lot of hardwork,counting pixels but it worked out in the end.

To create the main tree
```css

.history__main::after {
  content: " ";
  background-image: linear-gradient(45deg, #9d7415, transparent, #9d7415);
  width: 6px;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 13px;
  z-index: -1;
}
```

To create a branch on the tree time line 
```css
.history__main__card::after {
  content: "";
  background: var(--bg1);
  width: 16px;
  height: 16px;
  position: absolute;
  top: -3px;
  left: -41px;
  border-radius: 50%;
  border: 2px solid var(--primary-text);
  z-index: 1;
}
```
I'm definitely going to be using this design technique more often.


## Author

- Frontend Mentor - [@rayaatta](https://www.frontendmentor.io/profile/rayaatta)
- My portfolio - [Rayaatta](https://rayaatta.github.io/My-portfolio/))
