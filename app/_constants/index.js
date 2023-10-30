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
    url: "disabled-inputs-react",
    date: "Oct 30, 2023",
    title: "Use of disabled form inputs in React",
    subtitle: "How to Prevent User Interaction During Form Submission and Style Disabled Buttons with Tailwind CSS",
    paragraph1: "Today I learned that the disabled attribute is used to disable form inputs. When an input is disabled, it cannot be interacted with by the user. This is useful when you want to prevent users from making changes to a form input while a form is being submitted. To achieve this, you can use the useState hook from React to manage the disabled state of the form inputs. The useState hook allows you to create and update state variables in functional components",
    gistIdIn: "db378e290fdf866d90d8ba1346e613ed",
    paragraph2: "In this example, the isSubmitting state variable is initially set to false. When the form is submitted, the handleSubmit function is called. Inside this function, the isSubmitting state is set to true, which disables the button. After the form submission logic is completed, the isSubmitting state is set back to false, enabling the button again.",
    paragraph3: "Additionally, you can use Tailwind CSS classes to style the disabled button. The 'disabled:opacity-50' class applies an opacity of 50% to the button, making it appear disabled. You can add this class to the button element when the isSubmitting state is true.",

  },

  {
    url: "embed-gist-react",
    date: "Oct 29, 2023",
    title: "How to embed Gists in React",
    subtitle: "What library works to embed GitHub Gists in a React application",
    paragraph1: "Today I was trying to embed a Gist in my blog. I had done it in the past but in Vanilla Javascript. You just copy the script Github gives you and paste it in the page.",
    gistIdIn: "824d362c029b1f96604616a00682a402",
    paragraph2: "However, in React it wasn't so easy, so I searched for a library that helped me. To my frustration, I tried several that were recommened in forums, such as 'react-gist' or 'react-gist-embed'. The second one finally made the Gist appear, but with lack of elements in it",
    paragraph3: "I then made a search of less known libraries for this, and guess what, by changing the order of the words to 'gist-react' you can find one that works! You just have to follow the easy instructions to get it up and running. (See them above)",
    linkName: "gist-react",
    linkUrl: "https://www.npmjs.com/package/gist-react"

  },
]