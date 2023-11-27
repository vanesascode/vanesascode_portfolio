# Welcome to my portfolio! 👨‍💻

Portfolio in progress...

Here you will find the tools and info about the process I followed in order to build this website.

## 📋 Process:

### Choosing the tools

I started a [draft](https://www.figma.com/file/r7XnJWCM3NpFsQg2ummezz/Portfolio-vanesascode?type=design&node-id=0-1&mode=design&t=vmmyR1jeUsWMg7Bm-0) with `FIGMA`, in order to put on 'paper' the ideas I had been collecting over the previous days, and to start trying some visual structure. Also helped for the structured of pages the website was going to have. It was a basic draft though, since I am not a professional designer.

Then I had to test the framework and languages that will help me build this project. I first wanted to use VITE and Typescript. However, even though I was not very familiar yet with `NEXT`, I prefered to use it best, because of its better configuration and performance, and its great `file based routing`, which is better that react-router.

And also, in the end, I used `Javascript`. This is because I really wanted to use the TSparticles library for this project and it is not very well documented for Typescript, so I spent a lot of time trying to make it work with Typescript but gave up. Also, I thought that this being probably one of my biggest projects, I was going to be more comfortable with Javascript. I will have plenty of time later on to fill this portfolio with other projects using Typescript!

As for `other tools`, the idea of using them came when encountering the challenge of something I had imagined I wanted to implement but didn't really know how when making the draft. So, in the moment I would search for a solution and find the proper code lines or maybe the library that would make it possible.

---

### Design decisions

The dynamic particles background was one of my first decisions and the one that gave place to others after. The fact that the particles are `always different` when you start the site and that they `keep changing` in a way you cannot expect, describe, I think, `the job of the developer` that has to start from a different point everytime and doesn't know what challenges and obstacles he/she will encounter in every project.

I sacrificed performance of the site, though, because the library that builds the particles is quite heavy, but couldn't find any other similar that worked well and was lighter. However, I did in this project because I know, it being a personal portfolio, won't need to be faster that it is now. It would be cool, though, if in the future I had more knowledge and experience in order to build my own library for building artistic tools like this that were more efficient.

I chose the `blue color` becuase of its relation with 'serious' topics, and academic/work topics are. However, I didn't want it to be extremely serious, so I was quite flexible with the language I was using in the texts and the tone of colors choice, that would make it more creative.

However, I was for sure that rounded forms wasn't going to define me. I am quite assertive, especially at work and making things happen, so I used `straight lines` in general, even for the SVG icons I was using across the project.

I was very careful with `consistency`, something that characterizes me in fact, so it ended up being a 'a piece' of work/art, and not a bag of chunks of different cool ideas, but ideas that not match...

Perfectionism is another characteristic that defines me, so I spent hours defining sizes, paddings, widths, etc for all the screen breakpoints, so the design of the website was as `responsive` with all kinds of devices as possible.

---

### Starting the project

So when I had all my `configuration ready` and really started coding, I started by following the Figma strategy, making everything work little by little.

I was aware that, as the project went further, I would have to spend time cleaning the code and using a `state manager` such as `Context Api`, so I wouldn't have to repeat lots of code in different pages. But I wasn't too worry about it until I had what I wanted to be working, to be 'really' working. Of course, at the end of the project, I left the code as `readable and efficient` as possible.

As for the `CSS files`, I added all the animations that were not hovered at any time, which were quite a few, in the `animations.module.css` file. Otherwise, the globals.css file would be too long and confusing. Still, I am adding some of the animations I need in the globals.css file because I found working with the hover pseudo-class easier from there.

### Intro section

In the draft I had imagined lots of `animations` for my website, so I started with that.

In the intro you can see two divs moving in opposite directions, closing the “square brackets”. In the process I realized that I liked the same idea for my `logo`: square brackets wrapping a V, instead of only the V (which is what appears in the Figma draft).

Then using useEffects to remove the intro and make the rest of the home page appear, along with CSS animations, I achieved the results you can see. Lots of testing and trying to make it work.

The particles background added difficulty to what I just explained above, also, thinking that I don’t want the intro to appear every time the component is mounted. So, at that point, I had to rethink how I was to solve this challenge I had defined in the draft.

Having to `rethink the process to achieve the many challenges from the draft`, is something that happened a lot during building the project. I think that in future projects, this may happen less due to more experience with the behaviour of the tools I am using.

---

### Index.js file for organization of components

I have a lot of components of all kinds in the `_components` folder. However, instead of trying to organize them into different subfolders, which would of been a bit confusing too, I prefered to add an file in which I imported and exported them, and in which with only one glimpse you can see all of them, and `organized by sections` of the website. Also, makes `code cleaner` in the components in which they are imported.

---

### BUG

From the beginning of the process I realized there was some intrusive text in the project. There was a `;`symbol at the top of the layout and I was unable to find it, neither using the google tools, or just searching for it in the project in all the files.

Therefore, I had to adjust my work to it...
I started by setting the root `color to transparent`, not to see it. That affected to my code because sometimes it seems I am using too much or even `repeting color css values` (for example: 'text-secondary').

Also, when I created the menu and had to create a page from scratch in there, of course, `I had to add the annoying ";"symbol` at the top so I didn't have to repeat lots of general css settings I had for the navbar and rest.

---

### Working on the Spanish translation - NextJS Error: Hydration failed

When I started working on the Spanish translation of the site, I focused it in the same way that I worked on the dark mode: Having two variables in the Context Api and implementing a text in one language or another depending on the state (which was also saved in local storage). I thought this would also help me reuse most of the components I had already built for the English original site. And that I would only need to create different constants files for each topic/language.

However, when I started with the projects and blog sections, I started encountaring the typical Next Hydration error, which tells you that `Text content does not match server-rendered HTML`. I couldn't understand where it came from, since the English original components worked perfectly, so it couldn't be that I had some html in the server that wouldn't match the html in the client's side.

I searched for it anyway, but couldn't find it. I watched some tutorials and read the docs, but the only the thing that helped, only with some text lines (ones that didn't come from the \_constants folders) was trying to supress the error by adding the attribute `suppressHydrationWarning`, which I found in the Next official Docs. However, it didn't work for all, and still, this solution wouldn't let me deploy the website.

So, the only solution that worked for me was to duplicate all the pages and components for the projects and blog sections, and strictly separate both flows, both for the English and the Spanish ones. `It is a pity, because I had to duplicate a lot of code in my project`, but at least for now, I don't think I have an alternative.

---

## 🔧🔨 Tools I used:

### 🔹NEXT.JS

To create a project find info [HERE](https://nextjs.org/docs/getting-started/installation)

### 🔹TAILWIND

To intall it and configure it find info [HERE](https://tailwindcss.com/docs/guides/vite)

#### - DARK MODE:

Find info [HERE](https://tailwindcss.com/docs/dark-mode)

Steps (9-10-2023):

- Add the option to the tailwind.config.js: `"darkMode": "class",`
- Mark your dark classes like this: ` <p className="text-secondary dark:text-black">Home</p>`
- Add the class dark to the DOM document using useState and useEffect. Also add the click action to a button:

```
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
  };
```

### 🔹TS PARTICLES LIBRARY:

Find info [HERE](https://github.com/tsparticles)
[DEMO](https://github.com/tsparticles/react-demo)
[PRESETS](https://particles.js.org/)

[Installation steps (5-10-2023)](https://www.youtube.com/watch?v=uuohRbc18zE&t=15s)

- npm i react-tsparticles
- npm i tsparticles
- npm i tsparticles-slim
- npm i tsparticles-engine

### 🔹 Embedding Gist snippets in the blog

I tried many different libraries, but the only that really worked for me was [THIS ONE](https://www.npmjs.com/package/gist-react)

- npm i gist-react

```
import { Gist } from 'gist-react';

const gistId = 'abcdefg';

const App = () => {
  return <Gist gistId={gistId} />;
};

```
