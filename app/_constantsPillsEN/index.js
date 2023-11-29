export const blogPillsEN = [
  {
    url: "viewport-conditionals-react",
    date: "Nov 29, 2023",
    title: "Viewport conditionals in React",
    subtitle: "How to perform JavaScript logic based on the viewport width in React",
    paragraph1: "Have you ever needed to apply different styles to your website based on the viewport width? If so, you may have tried to use the 'window.innerWidth' property. However, this property will give you an error in the console if you are working with React. It will tell you that 'window' is not defined.",
    paragraph2: "There's a library for that, and that is 'react-responsive'. This library provides a set of React components for building responsive UIs based on the viewport size. It simplifies working with media queries in React applications. Especifically, it has a custom hook that works just like the 'window.innerWidth', the 'useMediaQuery' hook. The following is a real example I used in this portfolio: ",
    gistIdIn2: "615984aa4ec10c85ff0a9e3693a25de3",
    paragraph3: "The useMediaQuery hook accepts an options object where you can define the media query conditions. The options object can have properties such as minWidth, maxWidth, minHeight, maxHeight, and more. These properties allow you to specify the minimum and maximum values for the viewport width and height.",
    paragraph4: "When you use the useMediaQuery hook with the specified options, it returns a boolean value that indicates whether the media query condition is true or false based on the current viewport size. If the media query condition is met, the returned boolean value will be true, otherwise it will be false.",
    linkName: "react-responsive docs",
    linkUrl: "https://www.npmjs.com/package/react-responsive",
  },
  {
    url: "compiler-options-typescript",
    date: "Nov 27, 2023",
    title: "Compiler options in Typescript",
    subtitle: "How to improve code quality and catch potential errors in Typescript using compiler options",
    paragraph1: "When you are working with Typescript it may be very annoying to encounter errors due to having some 'any' or 'null' values in your code. The good news is that you can use compiler options to throw errors to alert you of the potential problems in your code. ",
    paragraph2: "This compiler options can be set in a 'tsconfig.json' file. You can create one with the command 'tsc --init'. It contains all the configuration options uncommented for the TypeScript compiler, and then you can choose which ones to uncomment to make them apply.",
    gistIdIn2: "0458d69d53fdd24b10ebd13d6121cb4c",
    paragraph3: "For example, you can uncomment the 'noImplicitAny' compiler option to make it throw errors when you have 'any' values in your code. Or you can uncomment the 'strictNullChecks' compiler option to make it throw errors when you have 'null' values in your code. This will help you to catch potential errors in your code before you go any further with it.",
    paragraph4: "Take into account, though, that, by default, the 'strict' compiler option is set to 'true'. That way, you have all strict type-checking options enabled. However, it is useful to know the different options you have in the tsconfig.json file in order to have more control over your code.",
    linkName: "tsconfig.json docs",
    linkUrl: "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",
  },
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
    paragraph3: "JSDoc comments start with /** and end with */, and they can contain tags like @param, @returns, @typedef, and more. JSDoc comments can be used to generate API documentation using tools like JSDoc or typedoc. Then, you can add the line //@ts-check at the beginning of the file you want (or have a configuration in your `jsconfig.json`file so it is applied to the whole project), that makes the code complain when a rule you set is broken, just as it would happen with Typescript.",

    paragraph4: "To get automatic templates in VsCode, you just have to type /** before your code and click on the intelliSense suggestion that appears.",
    linkName: "JSDoc docs",
    linkUrl: "https://jsdoc.app/",

  },
  {
    url: "reusable-components-trick-React",
    date: "Nov 10, 2023",
    title: "Reusable components trick in React",
    subtitle: "How to add especial features to a reusable component to be seen only when you want",
    paragraph1: "In the same app, you may want to reuse a component many times. However, there are times that you may want to add a change to that component, only on certain occasions. In the example below, I am using the <ThreadCard/> component two times. However, the second time I want to add extra bottom margin in one of the classes lines. How can I do that?",

    gistIdIn: "7e1fdd41009cc069911893d663ee0ffb",

    paragraph2: "Well, one way is to add a prop to the component (only when you want the modification) that you can add to its code as a condition. If the prop is true, then the changes apply. That simple. In the example, it is the prop 'isComment'. So you just have to add a condition such as '${isComment && “mb-10}' (see below).",

    gistIdIn2: "1a082cba4ef72ab738f2ae2e89d763cf",

  },
  {
    url: "understanding-nextjs-searchParams",
    date: "Nov 7, 2023",
    title: "Next.js searchParams and Pagination",
    subtitle: "How do searchParms work in Next.js and how to apply them to set a Pagination system",
    paragraph1: "Have you ever seen that the main page has 'searchParams' as props and you don't know where they come from? That's happened to me so I'll give it a try to explain it as better as I can.",

    gistIdIn: "81690a7c0a01786747b2ec00001e618a",

    paragraph2: "The 'searchParams' property is derived from the query parameters in the URL of the browser. So, in the case of the main page mentioned before, the Next.js router automatically extracts the query parameters from the URL and provides them as an object called searchParams to the page. And why do we need it? Because we want to pass it to the 'fetchPosts function' in order to get our posts with pagination, for example (see function in the gist below). We are passing the page we are in as a prop, and then the action (the 'fetchPosts' function) can calculate how many posts it has to skip. And also, based on the amount skipped and the total posts and so, can calculate if the variable 'isNext' is true (which means, that indeed there are more posts to show in a next page).",

    gistIdIn2: "f853ed7cd8569cd3c4ca3b6a4b9c3098",
    paragraph3: "Since we are returning, not only the posts, but the 'isNext' variable as well, we can use this variable in the 'Pagination' component to enable or disable the buttons that the client will have to be able to change of page. And then the 'handleNavigation' function (inside the 'Pagination' component), is responsible for handling the navigation logic based on the button clicked ('Prev' or 'Next') and updating the URL accordingly. ",
    gistIdIn3: "bd7eb728fd0cfeab3f6e04446a2fefe2",

    paragraph4: "When the app first loads, the number of the pagination is obviously '1', since the searchParams are not receiving any '?page=' value from the URL yet (see: 'searchParams.page ? +searchParams.page : 1'). But when we press the 'Next' button inside the 'Pagination' component, we get the next page thanks to the 'handleNavigation' function doing its logic. However, as mentioned before, we also have to check if the 'isNext' variable is true or false. If it is true, we'll go to a next page. If it is false, there is no next page to go to. From then on, we are working with the '?page=' value in the props thanks to the searchParams. ",



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