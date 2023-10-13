## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/screenshots/first%20page.png)
![](./assets/screenshots/ss%20of%20button%20when%20hovered.png)
![](./assets/screenshots/ss%20of%20button%20when%20active%20and%20no%20email.png)
![](./assets/screenshots/ss%20of%20invalid%20email.png)
![](./assets/screenshots/second%20page.png)
![](./assets/screenshots/second%20page%20hovered%20button.png)
![](./assets/screenshots/second%20page%20active%20button.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- HTML5 markup
- Flexbox
- CSS Grid

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

```css
@media (max-width: 375px) {
  //content
}; was really interesting
```

```js
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Useful resources

- [Example resource 1](https://www.youtube.com/netninja)

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/reolnatty)
- Twitter - [@reolnatty](https://www.twitter.com/reolnatty)
