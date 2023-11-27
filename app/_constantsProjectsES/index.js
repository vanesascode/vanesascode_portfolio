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

    paragraph2: "Esta aplicación incluye una poderosa función de búsqueda que permite a los usuarios encontrar fácilmente prompts basados en contenido, usuario o etiqueta. Esta funcionalidad de búsqueda mejora la experiencia general del usuario y les facilita descubrir prompts. Además, los usuarios tienen la capacidad de copiar prompts a su portapapeles para pegarlos cómodamente, así como compartir prompts en plataformas de redes sociales.",

    paragraph3: "Además, los prompts se pueden editar o borrar rápidamente, lo que brinda a los usuarios la flexibilidad de modificar sus prompts para adaptarlos a sus necesidades. Pueden hacerlo en su propio perfil y también pueden visitar los prompts de otras personas. Priorizo la creación de aplicaciones que sean fáciles de usar y brinden una experiencia positiva al usuario. Al hacer esto, mi objetivo es ofrecer aplicaciones que sean fluidas y fáciles de usar.",


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
    paragraph1: "Web ficticia de una escuela online: una plataforma para compartir artículos reales sobre programación, con una subpágina para solicitudes de empleo. El sitio web tiene tanto un componente backend como frontend utilizando Flask full stack.",

    paragraph2: "Utilicé el motor de plantillas Jinja2 de Flask y creé plantillas para separar la estructura de las páginas web de la lógica en Python. En el caso de los comentarios del blog, los datos se crean y obtienen de MongoDB y se muestran dinámicamente utilizando el loop 'for' de Jinja2. Los artículos del blog están codificados de forma estática debido a la complejidad de los ejemplos de código que estos enseñan (tratan sobre y utilizan los lenguajes de Javascript y Typescript).",

    paragraph3: "Para estilizar el sitio web, utilicé CSS y Bootstrap. Para personalizar Bootstrap aún más, utilicé SASS. Importé Bootstrap en mi archivo SASS y lo compilé en CSS utilizando la extensión Live Sass Compiler en VSCode. Esto me permitió modificar los estilos de Bootstrap y crear un aspecto único.",

    paragraph4: "Implementé enlaces de 'mailto' para solicitudes de empleo y para contacto, los cuales abren el cliente de correo electrónico predeterminado del usuario con la dirección de correo electrónico, asunto y cuerpo prellenados.",
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

    paragraph1: "Diseñé y construí una landing page para una marca ficticia de botas utilizando React, TypeScript, Tailwind y Vite. De hecho, este proyecto fue una oportunidad para aprender Tailwind en mayor profundidad.",

    paragraph2: "Tailwind CSS se ha convertido en mi framework CSS preferido debido a sus capacidades de desarrollo rápido, sus prácticas 'utility classes' y opciones de configuración flexibles. Me permite estilizar rápidamente elementos y construir interfaces de usuario totalmente responsivas sin necesidad de escribir CSS personalizado.",

    paragraph3: "Incorporé la librería 'React Slick' para crear un componente carrusel. La sección de ofertas la creé con un collage de elementos encima de un fondo estático, y utilicé posiciones relativas-absolutas y porcentajes para un diseño flexible y responsivo. También diseñé e implementé los 'modals', que solo aparecen una vez y se pueden restablecer borrando el 'local storage'.",

    paragraph4: "Vite optimizó el proceso de desarrollo, mejoró la construcción de producción y aumentó el rendimiento de Lizz Boots. Sin embargo, Vite no maneja el renderizado del lado del servidor (SSR) ni proporciona funcionalidad de servidor, por lo que este proyecto es puramente trabajo de frontend, y utilicé Next.js para los siguientes proyectos en los que utilizo React.",
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

    paragraph1: "Básicamente, se trata de una lista de tareas con temática zen para practicar TypeScript. Principalmente utiliza clases, por lo que también es una buena revisión de la programación orientada a objetos (OOP). El código sigue los principios de encapsulamiento, el patrón singleton y la separación de responsabilidades entre diferentes componentes (Cada clase es responsable de una tarea específica y no depende de las otras clases. Esto hace que el código sea más modular y fácil de mantener).",

    paragraph2: "La lista de tareas se crea utilizando tres clases: ListItem, FullList y ListTemplate. La clase ListItem tiene tres propiedades: id, item y checked. La propiedad id es un identificador único para el elemento, la propiedad item es el texto del elemento y la propiedad checked indica si el elemento está marcado o no.",

    paragraph3: "La clase FullList es una clase singleton, lo que significa que solo se puede crear una instancia de ella. La clase FullList tiene métodos para cargar, guardar, borrar, agregar y eliminar elementos de la lista. La clase ListTemplate es responsable de renderizar los elementos de la lista en el DOM y manejar las interacciones del usuario. La clase ListTemplate tiene un método render que recibe una instancia de FullList como parámetro y renderiza los elementos de la lista en base a ella.",

    paragraph4: "La lista de tareas se inicializa en el archivo main.ts. En el archivo main.ts se crea una instancia de FullList y una instancia de ListTemplate. Se añaden listeners de eventos para manejar el envío del formulario y los clics en los botones, y se carga y renderiza los datos iniciales.",
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
    paragraph1: "Este es uno de los muchos proyectos realizados durante el Bootcamp de 4GeeksAcademy. Normalmente utilizábamos una plantilla escolar, pero en esta ocasión tuve la oportunidad de hacer la configuración yo, por lo que pude usar Typescript, Vite y Tailwind  (los cuales no se enseñan durante el Bootcamp).",

    paragraph2: "La aplicación utiliza React Router para la navegación y el enrutamiento entre diferentes páginas. Se utiliza el Context API para la gestión de los estados, permitiendo que los componentes compartan y accedan a los datos. Vite se utiliza como la herramienta de construcción para un desarrollo rápido y 'hot module replacement'.",

    paragraph3: "Como parte de la tarea, tuvimos que conectar la aplicación a una API Restful de la escuela y recoger los datos de ahí. De esta forma, la aplicación puede crear, editar y eliminar diferentes agendas y diferentes contactos dentro de cada agenda.",

    paragraph4: "Por favor, tengan en cuenta que esta API es propiedad de 4GeeksAcademy y su propósito es educativo, por lo que los datos mostrados se borran automáticamente después de algunas horas.",

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
    paragraph1: "Diseñé y construí una landing page para los libros de mi autora zen favorita, utilizando Vanilla Javascript , Bootstrap y Sass. De hecho, en este proyecto profundicé en mi conocimiento de Bootstrap y utilicé muchos de sus componentes.",

    paragraph2: "Dado que los colores principales de Bootstrap no son personalizables, utilicé Sass para cambiar algunos de los colores de clase de Bootstrap y agregar un aspecto único al sitio web.",

    paragraph3: "Creé un archivo llamado 'styles.scss' en la carpeta 'static' de mi proyecto. En este archivo, importé los estilos de Bootstrap usando @import '../node_modules/bootstrap/scss/bootstrap.scss'. Para compilar el código SASS a CSS, instalé la extensión 'Live Sass Compiler' de Ritwick Dey en Visual Studio Code. Hacía clic en el botón 'Watch Sass' y realizaba los cambios necesarios en el archivo 'scss'. Esto activaba el proceso de compilación y generaba el archivo 'styles.css'.",

    paragraph4: "En cuanto a los componentes de Bootstrap, proporcionan un diseño consistente y adaptable en diferentes dispositivos y tamaños de pantalla, lo que ahorra tiempo y esfuerzo en el desarrollo. Sin embargo, no son muy personalizables y creo que pueden resultar difíciles de modificar en el futuro.",
  },

  {
    url: "seconds-counter-es",
    title:
      "Contador de Segundos",
    desc: "Ejercicio 4Geeks",
    img: "/projects/cover-counter.jpg",
    video: "/projects/video-counter.gif",
    link: "https://life-is-just-seconds-vanesascode.vercel.app/",
    code: "https://github.com/vanesascode/life-is-just-seconds-tailwind-react-tsx-vite",
    iconsLight: "/projects/icons-secondscounter-light.png",
    iconsDark: "/projects/icons-secondscounter-dark.png",
    paragraph1: "Este es uno de los muchos proyectos realizados durante el Bootcamp de 4GeeksAcademy. Normalmente utilizabamos una plantilla de la escuela, pero en esta ocasión tuve la oportunidad de configurarlo yo misma, por lo que pude probar a utilizar Typescript, Vite y Tailwind (los cuales no se enseñan durante el Bootcamp).",

    paragraph2: "Tiene un modo oscuro, pero como el estilo del sitio es muy básico, decidí simplemente aplicar clases CSS para implementarlo, en lugar de utilizar la función de modo oscuro propia de Tailwind (que de hecho, no he utilizado hasta la creación de este portafolio personal).",

    paragraph3: "El desafío del proyecto fue crear un contador simple que comienza a contar los segundos una vez que se carga el navegador. Hay muchas formas de hacerlo, pero elegí usar los hooks useState y useEffect, y la función setInterval. Las razones fueron la simplicidad que proporciona useState, la eficiencia del hook useEffect y las actualizaciones en tiempo real que ofrece la función setInterval. Los tres ofrecen flexibilidad para que puedas modificar fácilmente la funcionalidad del contador agregando lógica adicional o modificando la duración del intervalo sin realizar cambios significativos en el código.",

    paragraph4: "También tiene un botón para alternar entre pantalla completa y pantalla normal, que funciona gracias a la API de pantalla completa proporcionada por el navegador.",
  },

];


