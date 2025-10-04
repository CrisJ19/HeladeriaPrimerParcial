Heladería Ocaña Mía - Aplicación Web Modularizada
Descripción
Este proyecto es una aplicación web para una heladería ficticia llamada "Heladería Ocaña Mía", inspirada en la cultura de Ocaña, Norte de Santander. Implementa modularización separando HTML, CSS, JavaScript y componentes, cumpliendo con los requisitos de la actividad del curso. La aplicación incluye un formulario de login, páginas navegables (Inicio, Menú, Sobre Nosotros, Contacto), y un catálogo de 15 helados cargados dinámicamente desde un archivo JSON.
Modularización
Fragmentos
Los archivos header.html, footer.html y sidebar.html en la carpeta components/ contienen partes reutilizables de la interfaz (encabezado, pie de página y menú lateral). Estos se cargan dinámicamente en todas las páginas (index.html, menu.html, about.html, contact.html) usando la API Fetch en main.js, permitiendo mantener un diseño consistente y facilitar actualizaciones.
Plantillas
Se utiliza la etiqueta <template> en index.html y menu.html para definir una estructura reutilizable de productos. JavaScript clona esta plantilla para renderizar dinámicamente los 15 helados desde products.json, reduciendo la repetición de código HTML.
Web Components
Se creó un componente personalizado <product-card> con Shadow DOM en components.js. Este componente encapsula la estructura y estilos de cada helado, recibiendo atributos como nombre, precio, descripción e imagen. El Shadow DOM asegura que los estilos no interfieran con el CSS global, promoviendo encapsulación.
Formulario de Inicio de Sesión
Implementado en login.html con validación en login.js. Usa credenciales quemadas (admin/12345) solo para fines educativos. Si las credenciales son correctas, redirige a index.html usando window.location.href; si no, muestra un mensaje de error en la interfaz. Nota: Este enfoque no es seguro para producción; en aplicaciones reales, se usaría autenticación con backend.
Páginas y Navegación

Inicio (index.html): Muestra los 15 helados usando plantillas (<template>) y Web Components (<product-card>).
Menú (menu.html): Lista los mismos 15 helados, reutilizando la lógica de carga de productos.
Sobre Nosotros (about.html): Describe la heladería, destacando su inspiración en la cultura ocañera.
Contacto (contact.html): Incluye un formulario de contacto simulado que muestra un alert al enviar.
Los enlaces en sidebar.html permiten navegar entre estas páginas, cargadas dinámicamente con fetch.

Uso de Datos Externos
Los 15 helados se almacenan en data/products.json, con atributos como nombre, descripción, precio e imagen. Los sabores (por ejemplo, Maracuyá Ocañero, Café Norteño, Breva con Queso) reflejan la cultura de Ocaña. La API Fetch en main.js carga estos datos dinámicamente para renderizarlos en index.html y menu.html.
Buenas Prácticas

Nombramiento: Variables y funciones en camelCase (handleLogin, loadProducts), clases CSS en kebab-case (product-card, form-group).
Organización: Archivos separados por responsabilidad:
HTML: index.html, login.html, menu.html, about.html, contact.html.
CSS: css/styles.css.
JavaScript: js/login.js (lógica de login), js/main.js (carga de fragmentos y productos), js/components.js (Web Component).
Componentes: components/header.html, components/footer.html, components/sidebar.html.
Datos: data/products.json.


Código limpio: Indentación consistente, sin comentarios en el código, como solicitado.
Estilos coherentes: Uso de una paleta de colores fresca (azul claro, verde menta, crema, gris oscuro) definida en :root para mantener consistencia visual.
Colaboración: Evidencia de trabajo en equipo mediante commits, ramas y pull requests en GitHub.

Colaboración en GitHub
El proyecto está alojado en https://github.com/CrisJ19/HeladeriaPrimerParcial.git. Cada integrante creó ramas específicas:

feature/login: Implementación del formulario de login.
feature/products: Carga de productos y Web Component.
feature/pages: Creación de páginas adicionales (Menú, Sobre Nosotros, Contacto).Los commits reflejan tareas específicas (por ejemplo, "Añadir login", "Crear Web Component", "Añadir 15 productos"). Se usaron pull requests para revisar e integrar cambios al main, asegurando colaboración efectiva.

Instalación

Clona el repositorio: git clone https://github.com/CrisJ19/HeladeriaPrimerParcial.git.
Abre el proyecto en VS Code y usa la extensión Live Server para iniciar con login.html (configurado en .vscode/settings.json).
Inicia sesión con usuario admin y contraseña 12345 para acceder a index.html.
Navega entre las páginas usando los enlaces del sidebar.

Tecnologías

HTML5 para la estructura.
CSS3 con variables para estilos consistentes.
JavaScript (ES6) para lógica dinámica.
API Fetch para cargar fragmentos y datos JSON.
Web Components con Shadow DOM para encapsulación.
JSON para almacenamiento de datos de productos.

