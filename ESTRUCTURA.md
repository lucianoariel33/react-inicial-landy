# Estructura de la versión didáctica

## Tres responsabilidades

| Qué querés cambiar | Dónde |
| --- | --- |
| Textos, enlaces, imágenes, etiquetas accesibles, ejemplos, título y descripción del sitio | `src/content/site.json` |
| Orden y anidación de las secciones | `src/pages/Home.jsx` |
| Estructura HTML de una sección reutilizable | `src/components/ContentBlock.jsx` |
| Interacción para mostrar u ocultar la pista | `src/components/StateDemo.jsx` |
| Colores, tipografías, espacios y adaptación a pantallas | `src/styles.css` |

## Archivos

```text
index.html                  Punto de montaje; metadatos tomados del JSON por Vite
vite.config.js              Herramienta de desarrollo y metadatos; no hace falta editarla para la práctica
public/                     Ilustraciones y fuentes originales
src/
  index.jsx                 Monta App con createRoot
  App.jsx                   Importa el JSON y compone Header, Home y Footer
  content/site.json         Única fuente de contenido de la interfaz
  styles.css                CSS común, sin bibliotecas de estilos
  pages/Home.jsx            Ordena seis instancias de ContentBlock
  components/
    Header.jsx              Navegación con anclas, sin menú que requiera estado
    Footer.jsx              Cierre y enlace al comienzo
    Container.jsx           Recibe children y limita el ancho
    ContentBlock.jsx        Presenta una sección y recibe children opcionales
    ConceptCard.jsx         Tarjeta reutilizable con título y párrafo
    StateDemo.jsx           Único hook: una llamada a useState
```

## Props, children y estado

`App` importa el contenido y lo pasa a sus hijos por props. `Home` pasa a cada `ContentBlock` los datos de una sección. Si esa sección tiene un arreglo `cards`, el bloque lo recorre con `.map()` y crea un `ConceptCard` por elemento, usando su `id` como `key`.

`Home` coloca `StateDemo` entre las etiquetas de un `ContentBlock`. Ese contenido anidado llega como `children`; `ContentBlock` decide dónde mostrarlo. Las funciones de los componentes se definen fuera de otras funciones componente.

En `StateDemo`, `useState(false)` devuelve el valor `visible` y la función `setVisible`. El evento del botón cambia el booleano y React actualiza el texto, `aria-expanded` y la visibilidad del párrafo. No se guarda nada al recargar. No se usan otros hooks.

## Agregar una sección

1. Agregá un objeto en `site.json`, por ejemplo `equipo`, con `id` único, `eyebrow`, `title` y `paragraphs`.
2. En `Home.jsx`, agregá `<ContentBlock content={content.equipo} />` en el lugar elegido.
3. Opcionalmente agregá `image` (`src`, `alt`), `cards` (cada una con `id`, `title`, `text`), `code` (`caption`, `lines`), `steps` (`id`, `text`), `actions` (`label`, `href`), `note` o `resource` (`label`, `href`).
4. Para incluirla en el menú, agregá un enlace en `header.links` cuyo `href` sea `#` seguido del `id` de la sección.
5. Si personalizás el mapa o los ejemplos que se muestran en la página, actualizalos también en el JSON para que sigan describiendo tu versión.

Una imagen nueva se guarda en `public/img/` y se referencia en el JSON con una ruta que comience en `/img/`. Su texto alternativo describe qué aporta al contenido; usá una cadena vacía cuando sea puramente decorativa.

## Próxima etapa: rutas

Primero comprendemos la composición de esta página. Después, en el mismo proyecto, se podrán crear dos páginas y agregar React Router. Un enlace con `#` apunta a una sección del documento; una ruta permite elegir una página por su URL. No es necesario introducir rutas, carga diferida, traducciones o servicios externos en esta primera etapa.
