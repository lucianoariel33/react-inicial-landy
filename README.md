# React inicial · Aprender explorando Landy

Este proyecto forma parte de un **trayecto de aprendizaje de React**. Es una primera parada para reconocer la estructura de una aplicación, entender sus componentes y animarse a modificarla antes de incorporar rutas.

La propuesta es aprender con el proyecto abierto: **instalarlo, recorrer sus archivos, comparar el código con la página y hacer cambios propios**. No hace falta comprender todo de una vez. Elegí una pieza, investigá cómo funciona y observá qué ocurre cuando la transformás.

## Ver la demo

**[Abrir el proyecto publicado en Vercel](https://react-inicial-landy.vercel.app)**

Recorrelo primero en el navegador. Después descargalo y compará lo que ves con sus componentes y su contenido en JSON.

## Qué vas a encontrar

Una página en español, adaptada a partir de Landy, con seis secciones que reutilizan el mismo componente. El recorrido presenta:

- React y JSX: cómo describimos una interfaz.
- Componentes, anidación y composición con `children`.
- Props: cómo pasan los datos de un componente a otro.
- Contenido en JSON, estructura en JSX y presentación en CSS.
- Listas con `.map()` y claves con `key`.
- Un único hook, `useState`, para mostrar y ocultar una pista.

La propia página explica estos conceptos y propone pequeñas exploraciones sobre su código.

## Descargar e instalar

Necesitás **Node.js 22.12 o superior dentro de la rama 22, o Node.js 24 o superior**, con npm. Si vas a clonar el repositorio, también necesitás Git.

```sh
git clone https://github.com/lucianoariel33/react-inicial-landy.git
cd react-inicial-landy
npm ci
npm run dev
```

Abrí en el navegador la dirección que muestre Vite en la terminal. Dejá esa terminal abierta mientras trabajás; para detener el servidor, presioná `Ctrl+C`.

También podés usar **Code → Download ZIP** en GitHub. Descomprimí el archivo, abrí una terminal dentro de la carpeta que contiene `package.json` y ejecutá `npm ci` y `npm run dev`.

`npm ci` instala las versiones registradas en `package-lock.json`. `npm run dev` inicia el servidor local y permite ver los cambios al guardar los archivos.

## Recorré la estructura

```text
index.html                    Punto de montaje de la aplicación
src/
  index.jsx                   Monta App con React
  App.jsx                     Reúne Header, Home y Footer
  pages/
    Home.jsx                  Ordena las secciones de la página
  components/
    Header.jsx                Encabezado y navegación entre secciones
    Footer.jsx                Pie de página
    Container.jsx             Contenedor que recibe children
    ContentBlock.jsx          Estructura reutilizable de una sección
    ConceptCard.jsx           Tarjeta que se repite con distintos datos
    StateDemo.jsx             Interacción con useState
  content/
    site.json                 Contenido de la interfaz
  styles.css                  Estilos, adaptación a pantallas y animaciones
public/                       Imágenes, iconos y fuentes
```

Seguí este recorrido con el editor y el navegador abiertos:

1. Buscá el punto de montaje en `index.html` y seguí hasta `src/index.jsx` y `App.jsx`. ¿Cómo llega la página a la pantalla?
2. Abrí `src/pages/Home.jsx`. Compará el orden de sus componentes con el orden de las secciones que ves.
3. Leé `ContentBlock.jsx`. ¿Qué parte de la estructura se reutiliza? ¿Qué datos recibe mediante la prop `content`?
4. Seguí un título desde `site.json` hasta la pantalla. Después buscá cómo `.map()` genera las tarjetas `ConceptCard`.
5. Encontrá `StateDemo` dentro de `ContentBlock`. Observá cómo esa anidación llega a través de `children`.
6. Probá el botón de la pista y leé `StateDemo.jsx`. Relacioná cada cambio visible con el valor del estado.

En [ESTRUCTURA.md](./ESTRUCTURA.md) tenés un mapa más detallado y los pasos para agregar una sección.

## Hacé tus primeras modificaciones

Elegí un tema propio: tu perfil, un equipo, una actividad o una propuesta. Usá este proyecto como punto de partida y transformalo con cambios pequeños que puedas explicar.

| Probá cambiar… | Trabajá en… | Observá… |
| --- | --- | --- |
| El título de la portada (`intro.title`) | `src/content/site.json` | Cómo cambia el contenido sin tocar el componente |
| El orden de dos secciones | `src/pages/Home.jsx` | Cómo el JSX organiza la página |
| Una tarjeta del arreglo `cards` | `src/content/site.json` | Cómo `.map()` reutiliza `ConceptCard`; usá un `id` único |
| El texto de la pista (`state.demo.hint`) | `src/content/site.json` | Cómo cambia el mensaje y se conserva la interacción |
| Un color o un espaciado | `src/styles.css` | Cómo los estilos modifican la presentación |
| Una sección nueva | JSON y `Home.jsx` | Cómo reutilizar `ContentBlock`, siguiendo `ESTRUCTURA.md` |

Guardá después de cada cambio y revisá el resultado. Si editás JSON, cuidá las comillas dobles y las comas; no admite comentarios. Al terminar, probá también una pantalla angosta y la navegación con teclado.

Preguntate: **¿modifiqué los datos, la composición, el comportamiento o los estilos? ¿Qué componente intervino?** Poder contarlo es parte del aprendizaje.

## Contenido y estructura, por separado

Todos los textos de la interfaz, enlaces, referencias y descripciones de imágenes, etiquetas accesibles, ejemplos de código y metadatos están en `src/content/site.json`. Los archivos de imagen se guardan en `public/`.

JSX define los componentes, su orden y su comportamiento. CSS define su presentación. Así podés cambiar lo que cuenta la página sin reescribir su estructura, y reutilizar un mismo componente con datos distintos.

## Un primer hook: useState

En `StateDemo.jsx` se usa una sola vez:

```jsx
const [visible, setVisible] = useState(false);
```

`visible` recuerda si la pista está a la vista. `setVisible` permite actualizar ese valor. Al pulsar el botón, `setVisible(!visible)` alterna entre `true` y `false`, y React actualiza lo que muestra el componente. Al recargar, el estado vuelve a `false`.

Los textos siguen llegando desde el JSON. El estado sólo guarda la decisión de mostrar u ocultar la pista. No se usan otros hooks.

## El lugar de este proyecto en el trayecto

Esta etapa se concentra en estructura básica, componentes, anidación, props, contenido, algunos estilos y una primera interacción. **Todavía no incluye React Router**: los enlaces con `#` se desplazan entre secciones de la misma página.

El siguiente paso será ampliar este mismo proyecto con dos páginas y sus rutas. Primero, buscá sentirte cómodo recorriendo y modificando estas piezas.

Las animaciones de entrada están sólo en CSS. La portada entra al cargar; las demás secciones se animan con el scroll en navegadores compatibles y, en los demás, al cargar. Se desactivan cuando está activada la preferencia de movimiento reducido.

## Comprobar tu versión

```sh
npm run build
npm run preview
```

`build` genera la carpeta `dist/`. `preview` sirve esa compilación para revisarla localmente. Estos comandos no publican el sitio en Internet.

## Seguí investigando

- [Pensar en React, en español](https://es.react.dev/learn/thinking-in-react): una guía para reconocer componentes, trabajar con datos y decidir qué necesita estado. La página incluye una síntesis propia aplicada a este proyecto.
- [Tu primer componente](https://es.react.dev/learn/your-first-component).
- [Referencia de useState](https://es.react.dev/reference/react/useState).

Volvé a estas lecturas después de modificar una sección: relacionar la documentación con algo que ya probaste ayuda a formular nuevas preguntas.

## Sobre la plantilla

Esta es una adaptación didáctica de la plantilla Landy recibida como base. Se conservaron sus ilustraciones y fuentes locales; la adaptación no atribuye su autoría ni modifica las condiciones de uso de esos recursos.
