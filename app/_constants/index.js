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
    paragraph1: "This project demonstrates my proficiency in backend development using Next.js. By exploring advanced Next.js concepts like server/client components, app file router, and backend API routes, I gained valuable experience in building robust full-stack applications. Additionally, I successfully integrated Next-auth for Google authentication and utilized MongoDB with Mongoose for efficient database management.",

    paragraph2: "One of the notable features of this project is the comprehensive search functionality. Users can effortlessly search for prompts based on prompt content, user, or tag, enhancing the overall user experience and facilitating prompt discovery.",

    paragraph3: "Furthermore, I have successfully implemented key features such as prompt editing and deletion, providing users with the flexibility to modify their prompts to suit their needs. This attention to detail and focus on user experience underscores my commitment to delivering seamless and user-friendly applications.",


  },
  {
    url: "dev-school",
    title:
      "Dev School",
    desc: "Educational & blog website",
    img: "/projects/cover-dev-school.jpg",
    video: "/projects/video-dev-school.gif",
    link: "https://devschool-vanesascode.vercel.app/"
  },
  {
    url: "lizz-boots",
    title:
      "Lizz Boots",
    desc: "Showcase landing page",
    img: "/projects/cover-lizz-boots.jpg",
    video: "/projects/video-lizz-boots.gif",
    link: "https://lizz-boots-vanesascode.vercel.app/"
  },
  {
    url: "zen-todo-list",
    title:
      "Zen Todo List",
    desc: "Todo list app",
    img: "/projects/cover-todo-list.jpg",
    video: "/projects/video-todo-list.gif",
    link: "https://zen-todo-list-vite-typescript-classes.vercel.app/"
  },
  {
    url: "everyday-zen",
    title:
      "Everyday Zen",
    desc: "Showcase landing page",
    img: "/projects/cover-everyday-zen.jpg",
    video: "/projects/video-everyday-zen.gif",
    link: "https://vanesascode.github.io/web-selling-book-with-bootstrap-sass/"
  },
  {
    url: "contact-list",
    title:
      "Contact List",
    desc: "4geeks exercise app using restful api",
    img: "/projects/cover-contact-list.jpg",
    video: "/projects/video-contact-list.gif",
    link: "https://contact-list-react-router-context-api-tsx-vanesascode.vercel.app"
  },
  {
    url: "seconds-counter",
    title:
      "Seconds Counter",
    desc: "4geeks exercise app",
    img: "/projects/cover-counter.jpg",
    video: "/projects/video-counter.gif",
    link: "https://life-is-just-seconds-vanesascode.vercel.app/"
  },

];

export const blogPills = [

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