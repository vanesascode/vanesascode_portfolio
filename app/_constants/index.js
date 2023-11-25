export const projectsPreviews = [
  {
    url: "promptgenius",
    title:
      "PromptGenius",
    desc: "AI prompts personal repositories",
    img: "/projects/cover-promptgenius.jpg",
    video: "/projects/video-promptgenius.gif",
    link: "https://promptgenius-chi.vercel.app/",
    code: "https://github.com/vanesascode/promptgenius-nextjs-nextauth-mongodb",
    iconsLight: "/projects/icons-promptgenius-light.png",
    iconsDark: "/projects/icons-promptgenius-dark.png",
    paragraph1: "This project demonstrates my skill in backend development using Next.js and MongoDB. Through the exploration of advanced Next.js concepts like server/client components, the app file router, and backend API routes, I have gained valuable experience and successfully built this robust full-stack application.  Additionally, I have also learned to add Google authentication using Next-auth.",

    paragraph2: "This app includes a powerful search feature that allows users to easily find prompts based on content, user, or tag. This search functionality improves the overall user experience and makes it easier for users to discover prompts. Additionally, users have the ability to copy prompts to their clipboard for convenient pasting, as well as share prompts on social media platforms.",

    paragraph3: "Furthermore, prompts can be quickly edited or erased, providing users with the flexibility to modify their prompts to suit their needs. They can do it in their own profile, and also, they can visit other peoples prompts. I prioritize creating applications that are easy to use and provide a positive experience for the user. By doing this, I aim to deliver applications that are smooth and user-friendly.",


  },
  {
    url: "dev-school",
    title:
      "Dev School",
    desc: "Educational & blog website",
    img: "/projects/cover-dev-school.jpg",
    video: "/projects/video-dev-school.gif",
    link: "https://devschool-vanesascode.vercel.app/",
    code: "https://github.com/vanesascode/devschool-vanesascode",
    iconsLight: "/projects/icons-devschool-light.png",
    iconsDark: "/projects/icons-devschool-dark.png",
    paragraph1: "This is a fictional school website, a platform to share real articles about programming, with a subwebsite for job applications. The website has both a backend and a frontend component using Flask full stack.",

    paragraph2: "To store and retrieve data, I integrated MongoDB Atlas. For the frontend, I used Flask's Jinja2 templating engine and created templates to separate the structure of web pages from the Python logic. In the case of the job's page postions, I fetched data from MongoDB and displayed it dynamically using Jinja2's for loop. The blog articles are hardcoded because of the complexity of code teaching examples they required (they are about and use Javascript and Typescript).",

    paragraph3: "To style the website I used CSS and Bootstrap. To customize Bootstrap further, I used SASS. I imported Bootstrap in my SASS file and compiled it into CSS using the Live Sass Compiler extension in VSCode. This allowed me to modify the Bootstrap styles and create a unique look. ",

    paragraph4: "I implemented mailto links for job applications and for contact, which open the user's default email client with pre-filled email address, subject line, and body.",
  },
  {
    url: "lizz-boots",
    title:
      "Lizz Boots",
    desc: "Showcase landing page",
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
    url: "zen-todo-list",
    title:
      "Zen Todo List",
    desc: "Todo list app",
    img: "/projects/cover-todo-list.jpg",
    video: "/projects/video-todo-list.gif",
    link: "https://zen-todo-list-vite-typescript-classes.vercel.app/",
    code: "https://github.com/vanesascode/zen-todo-list-vite-typescript-classes",
    iconsLight: "/projects/icons-zentodolist.png",
    iconsDark: "/projects/icons-zentodolist.png",

    paragraph1: "This is basically a ZEN themed todo-list to practice Typescript. It is esentially using classes, so it was also a good revision of object-oriented programming (OOP). The code follows the principles of encapsulation, singleton pattern, and separation of concerns between different components (Each class is responsible for one specific task, and it does not depend on the other classes. This makes the code more modular and easier to maintain).",

    paragraph2: "The Todo List is created using three classes: ListItem, FullList, ListTemplate. The ListItem class has three properties: id, item, and checked. The id property is a unique identifier for the item, the item property is the text of the item, and the checked property indicates whether the item is checked or not. ",

    paragraph3: "The FullList class is a singleton class, which means that only one instance of it can be created. The FullList class has methods for loading, saving, clearing, adding, and removing items from the list. The ListTemplate class is responsible for rendering the list items on the DOM and handling user interactions. The ListTemplate class has a render method that takes a FullList instance as a parameter and renders the list items based on it. ",

    paragraph4: "The Todo List is initialized in the main.ts file. In the main.ts file, an instance of FullList is created and an instance of ListTemplate is created. Event listeners are added to handle form submissions and button clicks, and the initial data is loaded and rendered.",
  },
  {
    url: "contact-list",
    title:
      "Contact List",
    desc: "4geeks exercise app using restful api",
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
    url: "everyday-zen",
    title:
      "Everyday Zen",
    desc: "Showcase landing page",
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
    url: "seconds-counter",
    title:
      "Seconds Counter",
    desc: "4geeks exercise app",
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



export const blogPills = [
  {
    url: "how-to-write-commits",
    date: "Nov 23, 2023",
    title: "How to write good commits in GitHub",
    subtitle: "Tips to write good commits in GitHub so they follow best practices to ensure clear, concise, and meaningful commit messages.",
    paragraph1: "Well-written commit messages not only help you and your team understand the changes made, but also make it easier for others to contribute and maintain the codebase. In the command line, instead of typing 'git commit -m 'message', you can simply type 'git commit' and press Enter. This way, GitHub will prompt you to write a commit longer message in a new window inside VSCode. You then close and save, and you can continue with the next steps in the command line. Here you have some tips that can help you write good commit messages:",

    gistIdIn: "e983a2406fde27214d779809fa662b11",

    paragraph2: "Start with a concise subject line (up to 50 characters) that summarizes the purpose of the commit. Separate the subject from the body with a blank line. Then, in the commit body, provide more details about the changes made, explaining why they were necessary. Include any relevant context, such as issue numbers or references to related commits.",
    paragraph3: "Write commit messages in the present tense to describe what the commit does, rather than what it did. For example, use 'Add feature' instead of 'Added feature'. In fact, starting the subject line with an imperative verb, such as 'Add', 'Fix', 'Update', or 'Remove', helps to convey the intention of the commit.",
    paragraph4: "Each commit should have a clear and specific purpose. Avoid making unrelated changes in a single commit. If you have multiple changes, consider splitting them into separate commits. And finally,  think of following a consistent style and format for commit messages within your project. This makes it easier for others to understand and review your commits."
  },
  {
    url: "how-to-use-JSDoc-comments",
    date: "Nov 19, 2023",
    title: "How to use JSDoc comments with VS Code",
    subtitle: "Leverage the benefits of static type checking provided by TypeScript while still enjoying the flexibility and expressiveness of JavaScript.",
    paragraph1: "JSDoc is a markup language used to annotate JavaScript code with documentation comments. It allows you to describe the purpose, parameters, return values, and other details of your functions, classes, and variables.",

    gistIdIn: "983c4e20eecddeab80dfe401c37402c9",

    paragraph2: "JSDoc is cool because it allows you to leverage the benefits of static type checking provided by TypeScript while still enjoying the flexibility and expressiveness of JavaScript. And the notes let you remember what your code was about when you completely forget.",


  },
  {
    url: "reusable-components-trick-React",
    date: "Nov 10, 2023",
    title: "Reusable components trick in React",
    subtitle: "How do add especial features to a reusable component to be seen only when you want",
    paragraph1: "In the same app, you may want to reuse a component many times. However, there are times that you may want to add a change to that component, only on certain occasions. In the example below, I am using the <ThreadCard/> component two times. However, the second time I want to add extra bottom margin in one of the classes lines. How to do that?",

    gistIdIn: "7e1fdd41009cc069911893d663ee0ffb",

    paragraph2: "Well, one way is to add a prop to the component (only when you want the modification) that you can add to its code as a condition. If the prop is true, then the changes apply. That simple. In the example, it is the prop ‘isComment’. So you just have to add a condition such as '${isComment && “mb-10}' (see below).",

    gistIdIn2: "1a082cba4ef72ab738f2ae2e89d763cf",
    paragraph3: "JSDoc comments start with /** and end with */, and they can contain tags like @param, @returns, @typedef, and more. JSDoc comments can be used to generate API documentation using tools like JSDoc or typedoc. Then, you can add the line //@ts-check in the file you want (or have a configuration in your `jsconfig.json`file for the whole project), that makes the code complain when a rule you set, just as it would happen with Typescript.",

    paragraph4: "To get automatic templates in VsCode, you just have to type /** before your code and click on the intelliSense suggestion.",
    linkName: "JSDoc docs",
    linkUrl: "https://jsdoc.app/",
  },
  {
    url: "understanding-nextjs-searchParams",
    date: "Nov 7, 2023",
    title: "Next.js searchParams and Pagination",
    subtitle: "How do searchParms work in Next.js and how to apply them to set a Pagination system",
    paragraph1: "Have you ever seen that the main page (Home page) has 'searchParams' as props and you don't know where this prop comes from? That's happened to me so I'll give it try to explain it as better as I can.",

    gistIdIn: "81690a7c0a01786747b2ec00001e618a",

    paragraph2: "The 'searchParams' property is derived from the query parameters in the URL of the browser. So, in the case of the Home component mentioned before, the Next.js router automatically extracts the query parameters from the URL and provides them as an object called searchParams to the page component. And why do we need it? Because we want to pass it to the 'fetchPosts function' in order to get our posts with pagination (see function in the gist below). We are passing the page we are in as a prop, and then the action (the 'fetchPosts' function) can calculate how many posts it has to skip. And also, based on the amount skipped and the total posts and so, can calculate if the variable 'isNext' is true (that there are more posts to show in a next page).",

    gistIdIn2: "f853ed7cd8569cd3c4ca3b6a4b9c3098",
    paragraph3: "Since we are returning, not only the posts, but the 'isNext' variable as well, we can use this variable in the 'Pagination' component to enable or disable the buttons that the client will have to be able to change of page, and the the 'handleNavigation' function, which is responsible for handling the navigation logic based on the button clicked ('Prev' or 'Next') and updating the URL accordingly. ",
    gistIdIn3: "bd7eb728fd0cfeab3f6e04446a2fefe2",

    paragraph4: " The first time, when the app first loads, the number of the pagination is obviously '1', since the searchParams are not receiving any '?page=' value from the URL yet (see: 'searchParams.page ? +searchParams.page : 1'). But when we press the 'Next' button inside the 'Pagination' component, we get the next page thanks to the 'handleNavigation' function doing its logic. However, as mentioned before, we also have to check if the 'isNext' variable is true or false. If it is true, we'll go to a next page. If it is false, there is no next page to go to. From then on, we are working with the '?page=' value in the props thanks to the searchParams. ",



  },

  {
    url: "optional-chaining-operator",
    date: "Nov 5, 2023",
    title: "The optional chaining operator",
    subtitle: "What is and how to use the optional chaining operator in JavaScript",
    paragraph1: "The '?' after 'userInfo' (see example below) is called the 'optional chaining operator' in JavaScript. It is used to safely access nested properties or methods of an object without causing an error if any of the properties or methods are undefined or null. ",

    paragraph2: " In the example below, the code checks if the userInfo object exists and if the onboarded property is truthy. The thing is that when the user is created in the database, it then gets a boolean state of true in the onboarded property. ",
    gistIdIn2: "6440171227c44672b9985d20f39ba8db",
    paragraph3: "So, if userInfo is not onboarded, it means that userInfo itself is either undefined or null. In other words, it means that the userInfo object does not exist. Therefore, the condition if (!userInfo?.onboarded) is checking if the userInfo object does not exist or if the onboarded property of userInfo is falsy. If either of these conditions is true, it means that the user is not onboarded and the code will redirect the user to the '/onboarding' page. ",
    paragraph4: "If the '?' chaining operator wasn't there in the example above, it would throw an error if the userInfo object was null or undefined, and the app could unfortunately crash.",
  },
  {
    url: "authentication-clerk-nextjs",
    date: "Nov 3, 2023",
    title: "Authentication with Clerk",
    subtitle: "How to easily add authentication to your Next.js application without the need to build and manage your own authentication system",
    paragraph1: "Clerk provides a user-friendly interface for user registration, login, and password reset, and also for these user to create communities. It handles user sessions and provides secure authentication tokens for authenticated users. And the developer, as an administrator, has access to your users' data in a very easy and intuitive way. Once you create your account in their website, they give you some secret keys you add to your Next.js' .env.local file. Then you install the library in your project (npm install @clerk/nextjs). You then import it and wrap your app in the <ClerkProvider> component.",
    gistIdIn: "c0e13bb4b9fe281c6ee32dca744e30bb",
    paragraph2: "So you can decide what pages are private and which are public, you create a file in the root of your project called 'middleware', in which you can add the public paths",
    gistIdIn2: "5789915f7fbd734579c514d1be0039cf",
    paragraph3: "You have many other components you can use, such as the 'SignUp' or the 'SignIn' ones, to create your own sign in an sign up pages. Or the 'OrganizationSwitcher' to create a new organization. Find more info in the Docs.",
    linkName: "Clerk.com",
    linkUrl: "https://clerk.com/"
  },
  {
    url: "placeholder-while-content-loading",
    date: "Nov 2, 2023",
    title: "Placeholders while content is loading",
    subtitle: "How to add a nice and dynamic placeholder with Shadcn/iu while the content is loading in Next.js",
    paragraph1: "The Shadcn/ui component you need for this is the 'Skeleton' one, and is very easy to use. After installing Shadcn/ui (npx shadcn-ui@latest init), and then the skeleton component (npx shadcn-ui@latest add skeleton), you create a Next.js 'loading' file. This file renders while the content is loading. And in there you just import the component 'skeleton' that was created while installing Shadcn/ui. Imagine you have 9 cards that must load. Then, in your loading page you render 9 cards too, that are going to fit the future content:",
    gistIdIn: "c82888092a23cbb0941ca1d6c6f7236f",
    paragraph2: "The idea is that you can use this component 'skeleton' as many times as you like, and give them the size and shape you want, in order to imitate the content shape that you are going show when loaded. You can do that in a different component, as a fake card:",
    gistIdIn2: "7a1444e760c943ece89e6b1194594a48",
    paragraph3: "This gives a very professional and natural feeling that the content is being baked before appearing",
    linkName: "Shadcn/ui Skeleton",
    linkUrl: "https://ui.shadcn.com/docs/components/skeleton"
  },
  {
    url: "zod-server-validation",
    date: "Nov 1, 2023",
    title: "Adding server-side validation with Zod",
    subtitle: "How to add server-side validation with Zod and having status responses in Next.js",
    paragraph1: "First you have to validate the body you are sending to the endpoint against the Zod schema you created.",
    gistIdIn2: "60a052c2f0a676b12a8fe8792ad3fe19",
    gistIdIn: "dc7ae781e1b7b6c21e4648fdc910f67d",
    paragraph2: "If the validation fails, make sure you assign the validation errors to the 'errors' variable (in this case 'zodErrors').",
    paragraph3: "However, don't forget to return a JSON response with the zodErrors and a 400 status code, because that is something Zod is not going to do for you.",
  },
  {
    url: "max-lines-text",
    date: "Oct 31, 2023",
    title: "How to limit the lines of a text",
    subtitle: "How to limit the lines of a text having a final ellipsis (...) using CSS.",
    paragraph1: "It was easier than I thought, just using the css property 'line-clamp', which specifies the maximum number of lines to display. Place the class in the same <p> tag.",
    gistIdIn: "55ce52eddbaceb1208c72886650783eb",
    paragraph2: "However, you also need to use 'display: -webkit-box' so the '-webkit-line-clamp' property is enabled. The '-webkit-box-orient' property is set to vertical to arrange the lines vertically, and the 'overflow: hidden' property hides any overflowing text.",
    paragraph3: "Just so you know, the -webkit-line-clamp property is a special property that's not officially recognized by all browsers. It's mainly used in webkit-based browsers like Chrome and Safari. If you want to ensure better browser support, you might need to use JavaScript or other techniques to dynamically truncate the text based on the number of lines you want to display.",
    paragraph4: "If you are using TailwindCSS, the tag is 'line-clamp-1' (from 1 to 6) or 'line-clamp-none'. ",
    linkName: "Can I use -webkit-line-clamp?",
    linkUrl: "https://caniuse.com/?search=%20-webkit-line-clamp"

  },
  {
    url: "disabled-inputs-react",
    date: "Oct 30, 2023",
    title: "Use of disabled form inputs in React",
    subtitle: "How to prevent user interaction during form submission and style disabled buttons with Tailwind CSS.",
    paragraph1: "Today I learned that the disabled attribute is used to disable form inputs. When an input is disabled, it cannot be interacted with by the user. This is useful when you want to prevent users from making changes to a form input while a form is being submitted. To achieve this, you can use the useState hook from React to manage the disabled state of the form inputs. The useState hook allows you to create and update state variables in functional components",
    gistIdIn: "db378e290fdf866d90d8ba1346e613ed",
    paragraph2: "In this example, the isSubmitting state variable is initially set to false. When the form is submitted, the handleSubmit function is called. Inside this function, the isSubmitting state is set to true, which disables the button. After the form submission logic is completed, the isSubmitting state is set back to false, enabling the button again.",
    paragraph3: "Additionally, you can use Tailwind CSS classes to style the disabled button. The 'disabled:opacity-50' class applies an opacity of 50% to the button, making it appear disabled. You can add this class to the button element when the isSubmitting state is true.",

  },

  {
    url: "embed-gist-react",
    date: "Oct 29, 2023",
    title: "How to embed Gists in React",
    subtitle: "What library works to embed GitHub Gists in a React application.",
    paragraph1: "Today I was trying to embed a Gist in my blog. I had done it in the past but in Vanilla Javascript. You just copy the script Github gives you and paste it in the page.",
    gistIdIn: "824d362c029b1f96604616a00682a402",
    paragraph2: "However, in React it wasn't so easy, so I searched for a library that helped me. To my frustration, I tried several that were recommened in forums, such as 'react-gist' or 'react-gist-embed'. The second one finally made the Gist appear, but with lack of elements in it.",
    paragraph3: "I then made a search of less known libraries for this, and guess what, by changing the order of the words to 'gist-react' you can find one that works! You just have to follow the easy instructions to get it up and running. (See them above)",
    linkName: "gist-react",
    linkUrl: "https://www.npmjs.com/package/gist-react"

  },

  {
    url: "use-state-inside-map-function",
    date: "Oct 28, 2023",
    title: "Individual states for mapped elements",
    subtitle: "How to add individual states inside a map function with using the index.",
    paragraph1: "I was working on my portfolio projects' preview page, and really wanted to add an arrow next to the title of each project when it was hovered.",
    gistIdIn: "2d0a67975a788070901e2e29fa08c3cc",
    paragraph2: "I used a useState to set it, but I encountered the problem that when hovering one project, all projects made their arrow appear, since I am rendering the projects from a constants js file with a map function.",
    paragraph3: "So I solved it by adding a new state variable (in the example, called 'hoveredIndex') which keeps track of the index of the pill that is being hovered on. The handleMouseEnter and handleMouseLeave functions update such state accordingly.",
    paragraph4: "Inside the map function, I added a new variable (called 'isHovered') which checks if the current index matches the 'hoveredIndex'. Based on this condition, the opacity of the arrow image is set to either 1 (visible) or 0 (hidden)."
  },
]