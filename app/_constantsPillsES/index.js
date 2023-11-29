export const blogPillsES = [
  {
    url: "viewport-conditionales-react-es",
    date: "Nov 29, 2023",
    title: "Conditionales de Viewport en React",
    subtitle: "Cómo implementar lógica JavaScript en función del ancho del viewport en React",
    paragraph1: "¿Alguna vez has necesitado aplicar diferentes estilos a tu sitio web en función del ancho del viewport? Si es así, es posible que haya intentado utilizar la propiedad 'window.innerWidth'. Sin embargo, esta propiedad te dará un error en la consola si está trabajando con React. Te dirá que 'window' no está definido.",
    paragraph2: "Existe una biblioteca específica para este propósito, llamada 'react-responsive'. Esta biblioteca proporciona un conjunto de componentes React para crear interfaces de usuario responsivas en función del tamaño del viewport. Simplifica el trabajo con los 'media queries' en aplicaciones React. Específicamente, tiene un hook personalizado que funciona de manera similar a 'window.innerWidth', llamado 'useMediaQuery'. El siguiente es un ejemplo real que utilicé en este portafolio:",
    gistIdIn2: "615984aa4ec10c85ff0a9e3693a25de3",
    paragraph3: "El hook useMediaQuery acepta un objeto de opciones donde puedes definir las condiciones de los 'media query'. El objeto de opciones puede tener propiedades como minWidth, maxWidth, minHeight, maxHeight y más. Estas propiedades te permiten especificar los valores mínimo y máximo para el ancho y alto del viewport.",
    paragraph4: "Cuando utilizas el hook 'useMediaQuery' con las opciones especificadas, devuelve un valor booleano que indica si la condición del media query es verdadera o falsa en función del tamaño actual del viewport. Si se cumple la condición del query media, el valor booleano devuelto será verdadero; de lo contrario, será falso.",
    linkName: "react-responsive docs",
    linkUrl: "https://www.npmjs.com/package/react-responsive",
  },
  {
    url: "opciones-compilacion-typescript-es",
    date: "Nov 27, 2023",
    title: "La compilación en TypeScript",
    subtitle: "Cómo mejorar la calidad del código y detectar posibles errores en TypeScript utilizando las opciones de compilación",
    paragraph1: "Cuando estás trabajando con TypeScript, puede ser muy molesto encontrarte con errores debido a tener algunos valores 'any' o 'null' en tu código. La buena noticia es que puedes utilizar las opciones del fichero compilador para lanzar errores y alertarte sobre los posibles problemas en tu código.",
    paragraph2: "Estas opciones del compilador se pueden configurar en un archivo 'tsconfig.json'. Puedes crear uno con el comando 'tsc --init'. Contiene todas las opciones de configuración de compilación TypeScript, y luego puedes elegir cuáles descomentar para que se apliquen.",
    gistIdIn2: "0458d69d53fdd24b10ebd13d6121cb4c",
    paragraph3: "Por ejemplo, puedes descomentar la opción del compilador 'noImplicitAny' para que lance errores cuando tengas valores 'any' en tu código. O puedes descomentar la opción del compilador 'strictNullChecks' para que lance errores cuando tengas valores 'null' en tu código. Esto te ayudará a detectar posibles errores en tu código antes de avanzar más con él.",
    paragraph4: "Ten en cuenta que, de forma predeterminada, la opción del compilador 'strict' está configurada como 'true'. De esta manera, tienes habilitadas todas las opciones de verificación de tipos estrictas. Sin embargo, es útil conocer las diferentes opciones que tienes en el archivo 'tsconfig.json' para tener un mayor control sobre tu código.",
    linkName: "tsconfig.json docs",
    linkUrl: "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",
  },
  {
    url: "como-escribir-commits-es",
    date: "Nov 23, 2023",
    title: "Cómo escribir buenos commits en GitHub",
    subtitle: "Consejos para escribir buenos commits en GitHub, seguir las mejores prácticas y garantizar mensajes claros, concisos y significativos.",
    paragraph1: "Los mensajes de commit bien escritos no solo te ayudan a ti y a tu equipo a comprender los cambios realizados, sino que también facilitan que otros contribuyan y mantengan el código base. En la línea de comandos, en lugar de escribir 'git commit -m 'message', simplemente puedes escribir 'git commit' y presionar Enter. De esta manera, GitHub te pedirá que escribas un mensaje de commit más largo en una nueva ventana dentro de VSCode. Luego, cierra y guarda, y puedes continuar con los siguientes pasos en la línea de comandos. Aquí tienes algunos consejos que pueden ayudarte a escribir buenos mensajes de commit:",

    gistIdIn: "e983a2406fde27214d779809fa662b11",

    paragraph2: "Comienza con una línea de asunto concisa (hasta 50 caracteres) que resuma el propósito del commit. Separa el asunto del cuerpo con una línea en blanco. Luego, en el cuerpo del commit, proporciona más detalles sobre los cambios realizados, explicando por qué fueron necesarios. Incluye cualquier contexto relevante, como números de issue o referencias a commits relacionados.",
    paragraph3: "Escribe en tiempo presente para describir lo que hace el commit, en lugar de lo que hizo. Por ejemplo, usa 'Agregar característica' en lugar de 'Se agregó característica'. De hecho, comenzar la línea de asunto con un verbo imperativo, como 'Agregar', 'Corregir', 'Actualizar' o 'Eliminar', ayuda a transmitir la intención del commit.",
    paragraph4: "Cada commit debe tener un propósito claro y específico. Evita realizar cambios no relacionados en un solo commit. Si tienes varios cambios, considera dividirlos en commits separados. Y finalmente, piensa en seguir un estilo y formato coherentes para los mensajes de commit dentro de tu proyecto. Esto facilita que otros comprendan y revisen tus commits."
  },
  {
    url: "como-usar-JSDoc-comentarios-es",
    date: "Nov 19, 2023",
    title: "Cómo utilizar comentarios JSDoc con VS Code",
    subtitle: "Aprovecha los beneficios de la verificación de tipos estáticos proporcionada por TypeScript mientras disfrutas de la flexibilidad y expresividad de JavaScript.",
    paragraph1: "JSDoc es un lenguaje de marcado utilizado para anotar código JavaScript con comentarios de documentación. Te permite describir el propósito, los parámetros, los valores de retorno y otros detalles de tus funciones, clases y variables.",
    gistIdIn: "983c4e20eecddeab80dfe401c37402c9",
    paragraph2: "JSDoc es genial porque te permite aprovechar los beneficios de la verificación de tipos estáticos que proporciona TypeScript sin dejar de disfrutar de la flexibilidad y expresividad de JavaScript. Y las notas te permiten recordar de qué se trataba tu código cuando lo olvidas por completo.",
    paragraph3: "Los comentarios JSDoc comienzan con /** y terminan con */, y pueden contener etiquetas como @param, @returns, @typedef y más. Los comentarios JSDoc se pueden utilizar para generar documentación API mediante herramientas como JSDoc o typedoc. Luego, puedes agregar la línea //@ts-check al principio del archivo que desees (o tener una configuración en tu archivo jsconfig.json para que se aplique a todo el proyecto), que hace que el código se queje cuando una regla que establezcas no se cumpla, tal como sucedería con TypeScript.",

    paragraph4: "Para obtener plantillas automáticas en VS Code, solo tienes que escribir /** antes de tu código y hacer clic en la sugerencia de IntelliSense que te aparece.",
    linkName: "JSDoc docs",
    linkUrl: "https://jsdoc.app/",
  },
  {
    url: "truco-componentes-reutilizables-es",
    date: "Nov 10, 2023",
    title: "Truco componentes reutilizables en React",
    subtitle: "Cómo agregar características especiales a un componente reutilizable para que se vean solo cuando lo deseas.",
    paragraph1: "En la misma aplicación, es posible que quieras reutilizar un componente muchas veces. Sin embargo, hay ocasiones en las que puede que quieras añadir un cambio a ese componente, solo en determinadas ocasiones. En el siguiente ejemplo, estoy usando el componente <ThreadCard/> dos veces. Sin embargo, la segunda vez quiero añadir un margen inferior adicional en una de las líneas de clases. ¿Cómo puedo hacerlo?",

    gistIdIn: "7e1fdd41009cc069911893d663ee0ffb",

    paragraph2: "Bueno, una forma es agregar un prop al componente (solo cuando deseas la modificación) que puedes agregar a tu código como condición. Si el prop es verdadero, entonces se aplican los cambios. Así de simple. En el ejemplo, es el prop 'isComment'. Entonces, solo tienes que agregar una condición como '${isComment && 'mb-10'}'(ver abajo).",

    gistIdIn2: "1a082cba4ef72ab738f2ae2e89d763cf",

  },
  {
    url: "paginacion-nextjs-searchParams-es",
    date: "Nov 7, 2023",
    title: "Next.js searchParams y Paginación",
    subtitle: "Cómo funcionan los searchParams en Next.js y cómo aplicarlos en un sistema de paginación",
    paragraph1: "¿Alguna vez has visto que la página principal tiene 'searchParams' como props y no sabes de dónde vienen? A mí me ha pasado, así que intentaré explicarlos lo mejor que pueda.",

    gistIdIn: "81690a7c0a01786747b2ec00001e618a",

    paragraph2: "La propiedad 'searchParams' se deriva de los parámetros de consulta en la URL del navegador. Entonces, en el caso de la página principal mencionada anteriormente, el enrutador Next.js extrae automáticamente los parámetros de consulta de la URL y los proporciona como un objeto llamado searchParams a la página. ¿Y por qué lo necesitamos? Porque queremos pasarlo a la función 'fetchPosts' para obtener nuestros posts con paginación, por ejemplo (mira la función en el gist a continuación). Estamos pasando la página en la que estamos como prop, y luego la acción (la función 'fetchPosts') puede calcular cuántas publicaciones tiene que omitir. Y también, en función de la cantidad omitida y el total de publicaciones y demás, puede calcular si la variable 'isNext' es verdadera (es decir, que sí que hay más publicaciones para mostrar en una página siguiente)..",

    gistIdIn2: "f853ed7cd8569cd3c4ca3b6a4b9c3098",
    paragraph3: "Dado que estamos devolviendo, no solo las publicaciones, sino también la variable 'isNext', podemos usar esta variable en el componente 'Pagination' para habilitar o deshabilitar los botones que el cliente tendrá para poder cambiar de página. Y luego la función 'handleNavigation' dentro del componente 'Navigation', que se encarga de manejar la lógica de navegación en función del botón pulsado ('Prev' o 'Next') y actualizar la URL en consecuencia. ",
    gistIdIn3: "bd7eb728fd0cfeab3f6e04446a2fefe2",

    paragraph4: "Cuando la aplicación se carga por primera vez, el número de paginación es obviamente '1', ya que los searchParams aún no reciben ningún valor '?page=' de la URL (ver: 'searchParams.page ? +searchParams.page : 1'). Pero cuando presionamos el botón 'Next' dentro del componente 'Paginación', obtenemos la siguiente página gracias a la función 'handleNavigation' haciendo su lógica. Sin embargo, como se mencionó anteriormente, también tenemos que verificar si la variable 'isNext' es verdadera o falsa. Si es true, iremos a la siguiente página. Si es false, no hay una siguiente página a la que ir. A partir de entonces, estamos trabajando con el valor '?page=' en los props gracias a los searchParams.",
  },

  {
    url: "chaining-operator-opcional-es",
    date: "Nov 5, 2023",
    title: "El 'chaining operator' opcional",
    subtitle: "Qué es y cómo usar el chaining operator opcional en JavaScript",
    paragraph1: "El signo de interrogación '?' después de 'userInfo' (ver ejemplo más abajo) se llama 'optional chaining operator' o 'operador de encadenamiento opcional' en JavaScript. Se utiliza para acceder de forma segura a propiedades o métodos anidados de un objeto sin provocar un error si alguna de las propiedades o métodos es indefinida o nula.",

    paragraph2: "En el ejemplo a continuación, el código verifica si el objeto 'userInfo' existe y si la propiedad 'onboarded' es verdadera. La cuestión es que cuando se crea el usuario en la base de datos, obtiene un estado booleano de verdadero en la propiedad onboarded.",
    gistIdIn2: "6440171227c44672b9985d20f39ba8db",
    paragraph3: "Entonces, si 'userInfo' no está 'onboarded', significa que 'userInfo' en sí tiene un valor indefinido o nulo. En otras palabras, significa que el objeto 'userInfo' no existe. Por lo tanto, la condición if (!userInfo?.onboarded) está comprobando si el objeto 'userInfo' no existe o si la propiedad 'onboarded' de 'userInfo' es falsa. Si alguna de estas condiciones es verdadera, significa que el usuario no está incorporado y el código redirigirá al usuario a la página '/onboarding'.",
    paragraph4: "Si el operador de encadenamiento '?' no estuviera presente en el ejemplo anterior, se produciría un error si el objeto 'userInfo' fuera nulo o indefinido, y la aplicación podría romperse desafortunadamente.",
  },
  {
    url: "authentication-clerk-nextjs-es",
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
    url: "placeholder-while-content-loading-es",
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
    url: "zod-server-validation-es",
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
    url: "max-lines-text-es",
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
    url: "disabled-inputs-react-es",
    date: "Oct 30, 2023",
    title: "Use of disabled form inputs in React",
    subtitle: "How to prevent user interaction during form submission and style disabled buttons with Tailwind CSS.",
    paragraph1: "Today I learned that the disabled attribute is used to disable form inputs. When an input is disabled, it cannot be interacted with by the user. This is useful when you want to prevent users from making changes to a form input while a form is being submitted. To achieve this, you can use the useState hook from React to manage the disabled state of the form inputs. The useState hook allows you to create and update state variables in functional components",
    gistIdIn: "db378e290fdf866d90d8ba1346e613ed",
    paragraph2: "In this example, the isSubmitting state variable is initially set to false. When the form is submitted, the handleSubmit function is called. Inside this function, the isSubmitting state is set to true, which disables the button. After the form submission logic is completed, the isSubmitting state is set back to false, enabling the button again.",
    paragraph3: "Additionally, you can use Tailwind CSS classes to style the disabled button. The 'disabled:opacity-50' class applies an opacity of 50% to the button, making it appear disabled. You can add this class to the button element when the isSubmitting state is true.",

  },

  {
    url: "embed-gist-react-es",
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
    url: "use-state-inside-map-function-es",
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