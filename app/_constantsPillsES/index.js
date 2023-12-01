export const blogPillsES = [
  {
    url: "viewport-condicionales-react",
    date: "Nov 29, 2023",
    title: "Condicionales de Viewport en React",
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
    url: "opciones-compilacion-typescript",
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
    url: "como-escribir-commits",
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
    url: "como-usar-JSDoc-comentarios",
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
    url: "truco-componentes-reutilizables",
    date: "Nov 10, 2023",
    title: "Truco componentes reutilizables en React",
    subtitle: "Cómo agregar características especiales a un componente reutilizable para que se vean solo cuando lo deseas.",
    paragraph1: "En la misma aplicación, es posible que quieras reutilizar un componente muchas veces. Sin embargo, hay ocasiones en las que puede que quieras añadir un cambio a ese componente, solo en determinadas ocasiones. En el siguiente ejemplo, estoy usando el componente <ThreadCard/> dos veces. Sin embargo, la segunda vez quiero añadir un margen inferior adicional en una de las líneas de clases. ¿Cómo puedo hacerlo?",

    gistIdIn: "7e1fdd41009cc069911893d663ee0ffb",

    paragraph2: "Bueno, una forma es agregar un prop al componente (solo cuando deseas la modificación) que puedes agregar a tu código como condición. Si el prop es verdadero, entonces se aplican los cambios. Así de simple. En el ejemplo, es el prop 'isComment'. Entonces, solo tienes que agregar una condición como '${isComment && 'mb-10'}'(ver abajo).",

    gistIdIn2: "1a082cba4ef72ab738f2ae2e89d763cf",

  },
  {
    url: "paginacion-nextjs-searchParams",
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
    url: "chaining-operator-opcional",
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
    url: "autenticacion-clerk-nextjs",
    date: "Nov 3, 2023",
    title: "Autenticación con Clerk",
    subtitle: "Cómo agregar autenticación de terceros: la forma fácil de agregar autenticación a tu aplicación Next.js",
    paragraph1: "Clerk proporciona una interfaz fácil de usar para el registro de usuarios, el inicio de sesión y el restablecimiento de contraseñas, y también para que estos usuarios creen comunidades. Gestiona las sesiones de los usuarios y proporciona tokens de autenticación seguros para los usuarios autenticados. Y el desarrollador, como administrador, tiene acceso a los datos de sus usuarios de una manera muy fácil e intuitiva. Una vez que crees tu cuenta en su sitio web, te proporcionarán algunas claves secretas que agregarás a tu archivo .env.local de Next.js. Luego, instalas la biblioteca en tu proyecto (npm install @clerk/nextjs). Después lo importas y envuelves tu aplicación con el componente <ClerkProvider>.",
    gistIdIn: "c0e13bb4b9fe281c6ee32dca744e30bb",
    paragraph2: "Para que puedas decidir qué páginas son privadas y cuáles son públicas, creas un archivo en la raíz de tu proyecto llamado 'middleware', en el que puedes añadir las rutas públicas.",
    gistIdIn2: "5789915f7fbd734579c514d1be0039cf",
    paragraph3: "Además, tienes muchos otros componentes que puedes utilizar, como el de 'SignUp' o 'SignIn', para crear tus propias páginas de registro e inicio de sesión. O el de 'OrganizationSwitcher' para crear una nueva organización. Encuentra más información en la documentación.",
    linkName: "Clerk.com",
    linkUrl: "https://clerk.com/"
  },
  {
    url: "placeholder-mientras-contenido-carga",
    date: "Nov 2, 2023",
    title: "Placeholders mientras el contenido se está cargando",
    subtitle: "Cómo agregar un placeholder elegante y dinámico con Shadcn/iu mientras se carga el contenido en Next.js",
    paragraph1: "El componente de Shadcn/ui que necesitas para esto es el 'Skeleton', y es muy fácil de usar. Después de instalar Shadcn/ui (npx shadcn-ui@latest init), y luego el componente skeleton (npx shadcn-ui@latest add skeleton), creas un archivo 'loading' de Next.js. Este archivo se renderiza mientras se carga el contenido. Y ahí solo importas el componente 'skeleton' que se creó al instalar Shadcn/ui. Imagina que tienes 9 tarjetas que deben cargarse. Luego, en tu página de carga, también renderizas 9 tarjetas, que se ajustarán al contenido que se va a cargar después:",
    gistIdIn: "c82888092a23cbb0941ca1d6c6f7236f",
    paragraph2: "La idea es que puedes usar este componente 'skeleton' tantas veces como quieras, y darles el tamaño y la forma que desees, para imitar la forma del contenido que mostrarás cuando se cargue. Puedes hacerlo en un componente diferente, como una tarjeta falsa:",
    gistIdIn2: "7a1444e760c943ece89e6b1194594a48",
    paragraph3: "Esto da una sensación muy profesional y natural de que el contenido se está preparando antes de aparecer.",
    linkName: "Shadcn/ui Skeleton",
    linkUrl: "https://ui.shadcn.com/docs/components/skeleton"
  },
  {
    url: "zod-servidor-validacion",
    date: "Nov 1, 2023",
    title: "Validación desde el servidor con Zod",
    subtitle: "Cómo agregar validación del lado del servidor con Zod y tener respuestas de estado en Next.js",
    paragraph1: "Primero debes validar el body que estás enviando al endpoint usando el esquema Zod que creaste.",
    gistIdIn2: "60a052c2f0a676b12a8fe8792ad3fe19",
    gistIdIn: "dc7ae781e1b7b6c21e4648fdc910f67d",
    paragraph2: "Si la validación falla, asegúrate de asignar los errores de validación a la variable 'errors' (en este caso 'zodErrors').",
    paragraph3: "Sin embargo, no te olvides devolver una respuesta JSON con los 'zodErrors' y un código de estado 400, porque eso es algo que Zod no va a hacer por ti.",
  },
  {
    url: "maximo-lineas-texto",
    date: "Oct 31, 2023",
    title: "Cómo limitar las líneas de un texto",
    subtitle: "Cómo limitar las líneas de un texto con una elipsis final (...) usando CSS",
    paragraph1: "Fue más fácil de lo que pensaba, solo usando la propiedad CSS 'line-clamp', que especifica el número máximo de líneas a mostrar. Coloca la clase en la misma etiqueta <p>.",
    gistIdIn: "55ce52eddbaceb1208c72886650783eb",
    paragraph2: "Sin embargo, también hay que usar 'display: -webkit-box' para que la propiedad '-webkit-line-clamp' esté habilitada. La propiedad '-webkit-box-orient' se establece en vertical para organizar las líneas verticalmente y la propiedad 'overflow: hidden' oculta cualquier texto que sobresale.",
    paragraph3: "La propiedad '-webkit-line-clamp' es una propiedad especial que no está reconocida oficialmente por todos los navegadores. Se usa principalmente en navegadores basados en webkit como Chrome y Safari. Si deseas garantizar un mejor soporte del navegador, es posible que debas usar JavaScript u otras técnicas para truncar dinámicamente el texto según la cantidad de líneas que deseas mostrar.",
    paragraph4: "Si estás utilizando TailwindCSS, la etiqueta es 'line-clamp-1' (de 1 a 6) o 'line-clamp-none'. ",
    linkName: "¿Puedo usar -webkit-line-clamp?",
    linkUrl: "https://caniuse.com/?search=%20-webkit-line-clamp"

  },
  {
    url: "inputs-deshabilitados-react",
    date: "Oct 30, 2023",
    title: "Utilizar inputs deshabilitados en React",
    subtitle: "Cómo evitar la interacción del usuario durante el envío del formulario y estilizar botones deshabilitados con Tailwind CSS",
    paragraph1: "Hoy aprendí que el atributo 'disabled' se usa para deshabilitar los inputs de formulario. Cuando un input está deshabilitado, el usuario no puede interactuar con este. Esto es útil cuando deseas evitar que los usuarios realicen cambios en una entrada de formulario mientras se envía un formulario. Para lograr esto, puedes usar el hook 'useState' de React para administrar el estado deshabilitado de los inputs de formulario. El hook 'useState' te permite crear y actualizar variables de estado en componentes funcionales.",
    gistIdIn: "db378e290fdf866d90d8ba1346e613ed",
    paragraph2: "En este ejemplo, la variable de estado 'isSubmitting' se establece inicialmente en falso. Cuando se envía el formulario, se llama a la función 'handleSubmit'. Dentro de esta función, el estado 'isSubmitting' se establece en verdadero, lo que deshabilita el botón. Una vez completada la lógica de envío del formulario, el estado 'isSubmitting' se vuelve a establecer en falso, habilitando el botón nuevamente.",
    paragraph3: "Además, puedes usar clases de Tailwind CSS para estilizar el botón deshabilitado. La clase 'disabled:opacity-50' aplica una opacidad del 50% al botón, haciéndolo parecer deshabilitado. Puedes agregar esta clase al elemento del botón cuando el estado 'isSubmitting' sea verdadero.",

  },

  {
    url: "incrustar-gist-react-es",
    date: "Oct 29, 2023",
    title: "Cómo incrustar Gists en React",
    subtitle: "¿Qué librería funciona para incrustar GitHub Gists en una aplicación React?",
    paragraph1: "Hoy estaba tratando de incrustar un Gist en mi blog. Lo había hecho en el pasado pero en Vanilla Javascript. Solo tienes que copiar el script que Github te da y pegarlo en la página.",
    gistIdIn: "824d362c029b1f96604616a00682a402",
    paragraph2: "Sin embargo, en React no fue tan fácil, así que busqué una librería que me ayudara. Para mi frustración, probé varias que me recomendaron en foros, como 'react-gist' o 'react-gist-embed'. La segunda finalmente hizo aparecer el Gist, pero con falta de elementos.",
    paragraph3: "Luego hice una búsqueda de librerías menos conocidas, y adivina qué: ¡al cambiar el orden de las palabras a 'gist-react' puedes encontrar una que funciona! Solo tienes que seguir las sencillas instrucciones para ponerlo en marcha. (Ver arriba)",
    linkName: "gist-react",
    linkUrl: "https://www.npmjs.com/package/gist-react"

  },

  {
    url: "use-state-inside-map-function-es",
    date: "Oct 28, 2023",
    title: "Estados individuales para elementos mapeados",
    subtitle: "Cómo agregar estados individuales dentro de una función 'map' usando el index",
    paragraph1: "Estaba trabajando en la página de vista previa de mis proyectos de portafolio y quería agregar una flecha al lado del título de cada proyecto cuando se pasaba el mouse por encima.",
    gistIdIn: "2d0a67975a788070901e2e29fa08c3cc",
    paragraph2: "Probé un useState para configurarlo, pero encontré el problema de que al pasar el ratón sobre un proyecto, todas las flechas de los demás proyectos también aparecían, ya que estoy renderizando los proyectos desde un archivo Javascript de constantes con una función map.",
    paragraph3: "Entonces lo solucioné agregando una nueva variable de estado (en el ejemplo, llamada 'hoveredIndex') que realiza un seguimiento del índice del proyecto sobre el que se está pasando el mouse. Las funciones handleMouseEnter y handleMouseLeave actualizan dicho estado en consecuencia.",
    paragraph4: "Dentro de la función de mapa, agregué una nueva variable (llamada 'isHovered') que verifica si el índice actual coincide con el 'hoveredIndex'. Según esta condición, la opacidad de la imagen de la flecha se establece en 1 (visible) o 0 (oculto)."
  },
]