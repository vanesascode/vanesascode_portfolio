export const blogPillsEN = [
  {
    url: "sending-emails-with-resend",
    date: "Dec 31, 2023",
    title: "Sending emails with Next.js and Resend",
    subtitle: "How to send emails from Next.js using 'Resend' and a server action",
    paragraph1: "At some point, in one of your apps, you are going to want to send emails when the user takes some action. I am not just talking about the typical email you send to yourself when you have a contact form, but also about the email you send to your customers when they have purchased something, or when they have subscribed to a newsletter, or in my case (and you will see the example below), to let know to your user that another has commented one of their posts. I am going to show you how to send emails from your code in Next.js using the email API 'Resend'.",
    gistIdIn: "",
    paragraph2: "First you have to create an account at resend.com and get your API key. Then, the docs in the website will show you how to build an API endpoint so the emails can be sent from your code. Instead I will show you how I configured it in Fils, a social media app I built, using a server action:",
    gistIdIn2: "02c6e8f533c0779a476c5a084b0b526f",
    paragraph3: 'In the docs, they do not show you the "text" property, but it is necessary, even if it is empty. You will notice because otherwise you will get an error in the code. Then, inside the same async function that is posting the comment, I just added the function: "await postEmail(email, firstName);". The template of the email can be added into another component: ',
    gistIdIn3: "54b9b582d4c818c7ca11e2fe5293b756",
    paragraph4: "As you can see, I don't have the emails hardcoded but in a dynamic variable. You are able to send emails to different addresses like this only when you have a domain that you have linked to your Resend account. Then, you can change the sender email address as you like, as long as it ends with your domain ending (for example, if my domain is 'fils.com, then I can use 'no-reply@fils.com', or 'fils@fils.com', etc.). This way, you can send your emails to any address and for free. For more information, check the official docs: ",
    linkUrl: "https://resend.com/docs/send-with-nextjs",
    linkName: "Resend docs",
  },
  {
    url: "nullish-coalescing-operator",
    date: "Dec 29, 2023",
    title: "The nullish coalescing operator",
    subtitle: "What is and how to use the JavasScript nullish coalescing operator",
    paragraph1: "The '??' operator is the nullish coalescing operator. It provides a concise way to check for null or undefined values and fallback to a default value if the operand on the left-hand side is nullish. However, it doesn't consider falsy values as nullish.",
    gistIdIn: "a94687034e53320de8a222ff9ea00d55",
    paragraph2: "Here you have some code of my app Fils using the '??' operator: ",
    gistIdIn2: "f6a1b49908a497a40570c82c49f8640d",
    paragraph3: 'The line -- name: userInfo ? userInfo?.name : user.firstName ?? "" -- assigns the name property from the userInfo object to the name property of userData, if userInfo is not null or undefined. If userInfo is null or undefined, it checks if the user.firstName property is null or undefined. If it is, the name property will be an empty string. Otherwise, it will be assigned the value of the user.firstName property.',
    gistIdIn3: "",
    paragraph4: "",
    linkUrl: "",
    linkName: "",
  },
  {
    url: "inline-fold-extension",
    date: "Dec 26, 2023",
    title: "VS Code Inline Fold extension",
    subtitle: "How to keep your code cleaner while developing when you have a lot of CSS lines",
    paragraph1: "If you are using a framework such as TailwindCSS and you use a lot of utility classes, sometimes you may find that such thick lines may remove readability and make it difficult to see the code logic clearly in order to continue implementing what you are building. Then, you can use a VS Code extension called 'Inline Fold'",
    gistIdIn: "",
    paragraph2: "Inline Fold extension mimics VS Code's folding experience for inline code. You can expand the folds by clicking on them. You can also configure the extension to target specific attributes in your markup. The characters used as a mask can be configured in the settings and you can update the regex expression to match any code pattern you want. The extension also enables folding of attribute values within HTML/JSX tags. It makes your code tidy and easier to navigate.",
    gistIdIn2: "d6b9ca84d3935636e67660fcc50f95aa",
    linkUrl: "https://marketplace.visualstudio.com/items?itemName=moalamri.inline-fold",
    linkName: "Inline fold site",

  },

  {
    url: "react-speech-recognition",
    date: "Dec 21, 2023",
    title: "Speech recognition in React",
    subtitle: "How to add the speech recognition feature your React app",
    paragraph1: "You may have a text input in your app you want to take to the next level. One way is adding speech recognition so the user doesn't even have to type what the want to say. Think of any search bar in a big platform such as Google or Youtube. You press the microphone, say something, and the text appears in the search bar. Then you can modify it if it didn't get exactly what you wanted to say or to add extra info",
    gistIdIn: "",
    paragraph2: "Really handy. But how to add it in React? and how to use it in TypeScript? There is a cool library called 'react-speech-recognition' that can help you do it. It manages the global state of the Web Speech API, exposing functions to turn the microphone on and off. ",
    gistIdIn2: "20a69680232449cb8d9ee87287f39a38",
    paragraph3: "After installing the library, if you are using ECMAScript 6 generator functions, async/await syntax, and other ECMAScript features that require transformation or polyfills, you may also need to install 'regenerator-runtime'. If you are working with Typescript, you will need this types library too: @types/react-speech-recognition. Then, you can start with code above and build from there to implement it in your app",
    gistIdIn3: "",
    paragraph4: "However, without a polyfill, the Web Speech API is only supported by Google browsers. A polyfill is something more complicated to handle, since you have to find or create a speech recognition service and combine it with react-speech-recognition. Think that Web Speech API in Chrome uses Google's speech recognition servers, so if you want to use this library with other browsers, you should have to replicate this speech recognition service elsewhere.",
    linkUrl: "https://www.npmjs.com/package/react-speech-recognition",
    linkName: "react-speech-recognition docs",

  },

  {
    url: "mismatch-react-onclick-typescript",
    date: "Dec 17, 2023",
    title: "Typescript error with onClick",
    subtitle: "How to solve the type mismatch in React's onClick Event Handler when using TypeScript",
    paragraph1: "In TypeScript development with React, it's common to encounter issues related to type mismatches when working with event handlers. One such issue is the type mismatch in the onClick event handler, which occurs specifically when using TypeScript. ",
    gistIdIn: "",
    paragraph2: "The onClick event handler in React expects a function that takes a MouseEvent as a parameter. However, when using TypeScript, it's easy to inadvertently pass a function that doesn't match this signature, resulting in a type mismatch error. One example is when using a function provided by a library or API, such as SpeechRecognition.startListening",
    gistIdIn2: "7c1a144d01158466466f3c0d9ae17ad2",
    paragraph3: "To resolve the type mismatch error in TypeScript, we can use an arrow function to wrap the function that doesn't match the expected signature. This ways, we create a new function that doesn't take any parameters. This new function matches the expected signature for the onClick event handler in TypeScript, resolving the type mismatch error.",
    gistIdIn3: "",
    paragraph4: "So, in the snippet above, in JavaScript, this code would work without any issues. However, when using TypeScript, the SpeechRecognition.startListening function doesn't match the expected signature for the onClick event handler, causing a type mismatch error. But by using the arrow function, we can invoke the desired functionality without causing a TypeScript error.",

  },

  {
    url: "revalidate-path-next",
    date: "Dec 12, 2023",
    title: "Revalidate a url path in Next.js",
    subtitle: "How to retrieve fresh data on-demand for a specific path in Next.js",
    paragraph1: "The 'revalidatePath' function in Next.js allows you to purge cached data on-demand for a specific path. Purging cached data for a specific path typically involves removing the cached data from the cache storage or marking it as invalid. This forces the application to retrieve fresh data for that path the next time it is accessed. Instead of relying solely on automatic background revalidation processes, you have the control to initiate the revalidation process explicitly and immediately",

    paragraph2: "See the following code, which is part of my app 'Fils' (a microblogging and networking platform). It is a server action that creates a new thread document, updates the User model with the created thread ID, and then, calls the revalidatePath() function with the url path of the page where the new thread is created (accessed as a parameter).",
    gistIdIn2: "fefdad24aebbadbb56ad9bea51fcdee2",
    paragraph3: "When the thread is created, the page redirects you to the home page, where all threads creasted so far are. If the revalidate function was not called, you would not see the new thread. But by calling it, the changes to the database are seen automatically on the client side without having to refresh the page.",
    paragraph4: "You can easily get the path by importing 'usePathname' from 'next/navigation' in the component where the server action is being called, and so assigning it to a variable  thanks to the usePathname function, like this: 'const pathname = usePathname();'.",
    linkName: "Next.JS docs",
    linkUrl: "https://nextjs.org/docs/app/api-reference/functions/revalidatePath",
  },
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

    paragraph2: " In the following example, the code checks if the 'userInfo' object exists and if the 'onboarded' property is truthy. The thing is that when the user is created in the database, it then gets a boolean state of true in the onboarded property. ",
    gistIdIn2: "6440171227c44672b9985d20f39ba8db",
    paragraph3: "So, if 'userInfo' is not 'onboarded', it means that 'userInfo' itself is either undefined or null. In other words, it means that the 'userInfo' object does not exist. Therefore, the condition if (!userInfo?.onboarded) is checking if the 'userInfo' object does not exist or if the 'onboarded' property of 'userInfo' is falsy. If either of these conditions is true, it means that the user is not onboarded and the code will redirect the user to the '/onboarding' page. ",
    paragraph4: "If the '?' chaining operator wasn't there in the example above, it would throw an error if the userInfo object was null or undefined, and the app could unfortunately crash.",
  },
  {
    url: "authentication-clerk-nextjs",
    date: "Nov 3, 2023",
    title: "Authentication with Clerk",
    subtitle: "How to Add Third-Party Authentication: The Easy Way to Add Authentication to Your Next.js App",
    paragraph1: "Clerk provides a user-friendly interface for user registration, login, and password reset, and also for these user to create communities. It handles user sessions and provides secure authentication tokens for authenticated users. And the developer, as an administrator, has access to your users' data in a very easy and intuitive way. Once you create your account in their website, they give you some secret keys you add to your Next.js' .env.local file. Then you install the library in your project (npm install @clerk/nextjs). You then import it and wrap your app in the <ClerkProvider> component.",
    gistIdIn: "c0e13bb4b9fe281c6ee32dca744e30bb",
    paragraph2: "So you can decide what pages are private and which are public, you create a file in the root of your project called 'middleware', in which you can add the public paths.",
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
    paragraph1: "The Shadcn/ui component you need for this is the 'Skeleton' one, and is very easy to use. After installing Shadcn/ui (npx shadcn-ui@latest init), and then the skeleton component (npx shadcn-ui@latest add skeleton), you create a Next.js 'loading' file. This file renders while the content is loading. And in there you just import the component 'skeleton' that was created while installing Shadcn/ui. Imagine you have 9 cards that must load. Then, in your loading page you render 9 cards too, that are going to fit the future that is going to load later:",
    gistIdIn: "c82888092a23cbb0941ca1d6c6f7236f",
    paragraph2: "The idea is that you can use this component 'skeleton' as many times as you like, and give them the size and shape you want, in order to imitate the content shape that you are going show when loaded. You can do that in a different component, as a fake card:",
    gistIdIn2: "7a1444e760c943ece89e6b1194594a48",
    paragraph3: "This gives a very professional and natural feeling that the content is being baked before appearing.",
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
    paragraph3: "The -webkit-line-clamp property is a special property that's not officially recognized by all browsers. It's mainly used in webkit-based browsers like Chrome and Safari. If you want to ensure better browser support, you might need to use JavaScript or other techniques to dynamically truncate the text based on the number of lines you want to display.",
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
    paragraph3: "I then made a search of less known libraries, and guess what: by changing the order of the words to 'gist-react' you can find one that works! You just have to follow the easy instructions to get it up and running. (See them above)",
    linkName: "gist-react",
    linkUrl: "https://www.npmjs.com/package/gist-react"

  },

  {
    url: "use-state-inside-map-function",
    date: "Oct 28, 2023",
    title: "Individual states for mapped elements",
    subtitle: "How to add individual states inside a map function with using the index.",
    paragraph1: "I was working on my portfolio projects' preview page, and wanted to add an arrow next to the title of each project when it was hovered.",
    gistIdIn: "2d0a67975a788070901e2e29fa08c3cc",
    paragraph2: "I tried a useState to set it, but I encountered the problem that when hovering one project, all the other projects made their arrow appear too, since I am rendering the projects from a constants Javascript file with a map function.",
    paragraph3: "So I solved it by adding a new state variable (in the example, called 'hoveredIndex') which keeps track of the index of the project that is being hovered on. The handleMouseEnter and handleMouseLeave functions update such state accordingly.",
    paragraph4: "Inside the map function, I added a new variable (called 'isHovered') which checks if the current index matches the 'hoveredIndex'. Based on this condition, the opacity of the arrow image is set to either 1 (visible) or 0 (hidden)."
  },
]