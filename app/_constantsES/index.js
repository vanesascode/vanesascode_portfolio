export const proyectos = [
  {
    url: "promptgenius-es",
    title:
      "PromptGenius",
    desc: "Repositorios de prompts para la IA",
    img: "/projects/cover-promptgenius.jpg",
    video: "/projects/video-promptgenius.gif",
    link: "https://promptgenius-chi.vercel.app/",
    code: "https://github.com/vanesascode/promptgenius-nextjs-nextauth-mongodb",
    iconsLight: "/projects/icons-promptgenius-light.png",
    iconsDark: "/projects/icons-promptgenius-dark.png",
    paragraph1: "Este proyecto demuestra mi habilidad en el desarrollo backend usando Next.js y MongoDB. A través de la exploración de conceptos avanzados de Next.js, como los componentes de servidor/cliente, el app file router y las rutas API de backend, obtuve una valiosa experiencia y construí con éxito esta aplicación full-stack. Además, también aprendí a agregar la autenticación de Google usando Next-auth.",

    paragraph2: "This app includes a powerful search feature that allows users to easily find prompts based on content, user, or tag. This search functionality improves the overall user experience and makes it easier for users to discover prompts. Additionally, users have the ability to copy prompts to their clipboard for convenient pasting, as well as share prompts on social media platforms.",

    paragraph3: "Furthermore, prompts can be quickly edited or erased, providing users with the flexibility to modify their prompts to suit their needs. They can do it in their own profile, and also, they can visit other peoples prompts. I prioritize creating applications that are easy to use and provide a positive experience for the user. By doing this, I aim to deliver applications that are smooth and user-friendly.",


  },
  {
    url: "dev-school-es",
    title:
      "Dev School",
    desc: "Web y blog educativo",
    img: "/projects/cover-dev-school.jpg",
    video: "/projects/video-dev-school.gif",
    link: "https://devschool-vanesascode.vercel.app/",
    code: "https://github.com/vanesascode/devschool-vanesascode",
    iconsLight: "/projects/icons-devschool-light.png",
    iconsDark: "/projects/icons-devschool-dark.png",
    paragraph1: "This is a fictional school website, a platform to share real articles about programming, with a subwebsite for job applications. The website has both a backend and a frontend component using Flask full stack.",

    paragraph2: "I used Flask's Jinja2 templating engine and created templates to separate the structure of web pages from the Python logic. In the case of the job's page postions, I fetched data from MongoDB and displayed it dynamically using Jinja2's for loop. The blog articles are hardcoded because of the complexity of code teaching examples they required (they are about and use Javascript and Typescript languages).",

    paragraph3: "To style the website I used CSS and Bootstrap. To customize Bootstrap further, I used SASS. I imported Bootstrap in my SASS file and compiled it into CSS using the Live Sass Compiler extension in VSCode. This allowed me to modify the Bootstrap styles and create a unique look. ",

    paragraph4: "I implemented mailto links for job applications and for contact, which open the user's default email client with pre-filled email address, subject line, and body.",
  },
  {
    url: "lizz-boots-es",
    title:
      "Lizz Boots",
    desc: "Landing Page de producto",
    img: "/projects/cover-lizz-boots.jpg",
    video: "/projects/video-lizz-boots.gif",
    link: "https://lizz-boots-vanesascode.vercel.app/",
    code: "https://github.com/vanesascode/lizz-boots-landing-tailwind-react-tsx-vite",
    iconsLight: "/projects/icons-lizzboots-light.png",
    iconsDark: "/projects/icons-lizzboots-dark.png",

    paragraph1: "I designed and built a landing page for a fictional boots brand using React, TypeScript, Tailwind, and Vite. In fact, this project was the opportunity to learn Tailwind in more depth.",

    paragraph2: " Tailwind CSS has become my preferred CSS framework now due to its rapid development capabilities, comprehensive utility classes and flexible configuration options. It enables me to quickly style elements and build totally responsive user interfaces without the need for writing custom CSS.",

    paragraph3: "I incorporated the React Slick library to create a carousel component. The offer section features a collage of elements with a static background, and I used relative-absolute positions and percentages for flexible and responsive design. I also designed and implemented the modals, which only appear once and can be reset by clearing the local storage.",

    paragraph4: "Vite streamlined the development process, optimized production builds, and enhanced the performance of Lizz Boots. However, Vite does not handle server-side rendering (SSR) or provide server-side functionality, so this project is purely frontend work, and I used Next.js for the following projects using React.",
  },
  {
    url: "zen-todo-list-es",
    title:
      "Zen Todo List",
    desc: "Aplicación Todo list ",
    img: "/projects/cover-todo-list.jpg",
    video: "/projects/video-todo-list.gif",
    link: "https://zen-todo-list-vite-typescript-classes.vercel.app/",
    code: "https://github.com/vanesascode/zen-todo-list-vite-typescript-classes",
    iconsLight: "/projects/icons-zentodolist.png",
    iconsDark: "/projects/icons-zentodolist.png",

    paragraph1: "This is basically a zen themed todo-list to practice Typescript. It is esentially using classes, so it was also a good revision of object-oriented programming (OOP). The code follows the principles of encapsulation, singleton pattern, and separation of concerns between different components (Each class is responsible for one specific task, and it does not depend on the other classes. This makes the code more modular and easier to maintain).",

    paragraph2: "The Todo List is created using three classes: ListItem, FullList, ListTemplate. The ListItem class has three properties: id, item, and checked. The id property is a unique identifier for the item, the item property is the text of the item, and the checked property indicates whether the item is checked or not. ",

    paragraph3: "The FullList class is a singleton class, which means that only one instance of it can be created. The FullList class has methods for loading, saving, clearing, adding, and removing items from the list. The ListTemplate class is responsible for rendering the list items on the DOM and handling user interactions. The ListTemplate class has a render method that takes a FullList instance as a parameter and renders the list items based on it. ",

    paragraph4: "The Todo List is initialized in the main.ts file. In the main.ts file, an instance of FullList is created and an instance of ListTemplate is created. Event listeners are added to handle form submissions and button clicks, and the initial data is loaded and rendered.",
  },
  {
    url: "contact-list-es",
    title:
      "Contact List",
    desc: "Ejercicio 4geeks usando restful api",
    img: "/projects/cover-contact-list.jpg",
    video: "/projects/video-contact-list.gif",
    link: "https://contact-list-react-router-context-api-tsx-vanesascode.vercel.app",
    code: "https://github.com/vanesascode/contact-list-react-router-context-api-tsx-tailwind-vite",
    iconsLight: "/projects/icons-contactlist-light.png",
    iconsDark: "/projects/icons-contactlist-dark.png",
    paragraph1: "This is one of the many projects made during the 4GeeksAcademy Bootcamp I took. We normally use a school template, but in this one I had the chance to configure it myself, so I could use Typescript, Vite and Tailwind.",

    paragraph2: "The application uses React Router for navigation and routing between different pages. The Context API is used for state management, allowing components to share and access data. Vite is used as the build tool for fast development and hot module replacement.",

    paragraph3: "As part of the assignment, we had to connect the application to a school Restful Api and display the data. And so, the app can create, edit and remove different agendas and different contacts inside each agenda.",

    paragraph4: "Please note that, this Api is owned by 4GeeksAcademy and its purporse is for learning, so the data displayed is automatically erased after some hours.",

  },
  {
    url: "everyday-zen-es",
    title:
      "Everyday Zen",
    desc: "Landing page de producto",
    img: "/projects/cover-everyday-zen.jpg",
    video: "/projects/video-everyday-zen.gif",
    link: "https://vanesascode.github.io/web-selling-book-with-bootstrap-sass/",
    code: "https://github.com/vanesascode/web-selling-book-with-bootstrap-sass",
    iconsLight: "/projects/icons-everydayzen.png",
    iconsDark: "/projects/icons-everydayzen.png",
    paragraph1: "I designed and built a landing page for the books of my favourite zen author, using Vanilla Javascript, Bootstrap, and Sass. In fact, in this project I deepened my knowledge of Bootstrap and used most of its components.",

    paragraph2: "Since Bootstrap colors are not customizable, I used Sass to change some of the class Bootstrap colors and add a unique look to the website.",

    paragraph3: "I created a file called 'styles.scss' in the 'static' folder of my project. In this file, I imported Bootstrap styles using @import '../node_modules/bootstrap/scss/bootstrap.scss'. To compile the SASS code into CSS, I installed the 'Live Sass Compiler' extension by Ritwick Dey in Visual Studio Code. I clicked on the 'Watch Sass' button and made the necessary changes in the 'scss' file. This triggered the compilation process and generated the 'styles.css' file.",

    paragraph4: "As for the Bootstrap components, they provide a consistent and responsive design across different devices and screen sizes, saving time and effort in development. However, they are not very much customizable and I think that they can be difficult to be modified in the future.",
  },

  {
    url: "seconds-counter-es",
    title:
      "Seconds Counter",
    desc: "Ejercicio 4Geeks",
    img: "/projects/cover-counter.jpg",
    video: "/projects/video-counter.gif",
    link: "https://life-is-just-seconds-vanesascode.vercel.app/",
    code: "https://github.com/vanesascode/life-is-just-seconds-tailwind-react-tsx-vite",
    iconsLight: "/projects/icons-secondscounter-light.png",
    iconsDark: "/projects/icons-secondscounter-dark.png",
    paragraph1: "This is one of the many projects made during the 4GeeksAcademy Bootcamp I took. We normally use a school template, but in this one I had the chance to configure it myself, so I could try using Typescript, Vite and Tailwind (which are not taught during the Bootcamp)",

    paragraph2: "It has a dark mode, but since the style of the site is very basic, I just decided to apply css classes to apply it, instead of the Tailwind own dark mode feature (which in fact, I didn't use it until I created this portfolio).",

    paragraph3: "The challenge of the project was to create a simple counter that starts counting the seconds once the browser is loaded. There are many ways of doing so, but I chose to use the useState and useEffect hooks, and the setInterval function. The reasons were the simplicity the useSates give you, the efficiecy of the useEffect hook and the real-time updates that the setInterval function offers. They three offer flexibility so you can easily modify the functionality of the counter by adding additional logic or modifying the interval duration without making significant changes to the code.",

    paragraph4: "It also has a button to toggle between fullscreen and normal screen, that works thanks to the fullscreen Api provided by the browser.",
  },

];


