# Cómo agregar un nuevo juego Cartoon

Sigue estos pasos detallados para agregar un nuevo cartoon al proyecto:

1. **Crear carpeta y archivo `page.jsx`**

   - Dentro de `app/src/app/`, crea una carpeta con el nombre del cartoon.
   - Dentro de esa carpeta, crea los archivos `page.tsx` y `layout.tsx`, y renderiza el componente ToonTemplate.tsx.

2. **Agregar el cartoon al `cartoonConfig` junto con sus estilos**

   - Abre el archivo de configuración de cartoons (`app/src/cartoonConfig.tsx`).
   - Añade la configuración para el nuevo cartoon.
   - Añade los estilos para el nuevo cartoon en `app/src/global.css`.
     - Theme Variables de Tailwind:
       - `font-{toon_name}`
       - `color-{toon_name}`
     - Utilidades de Tailwind:
     - `@utility bg-toon-{toon_name}`
     - `@utility scrollbar-{toon_name}`

3. **Agregar archivo JSON con la información de los personajes**

   - Crea un archivo JSON en `app/data/` (`{toon_name}.json`) con la información de los personajes del cartoon.

4. **Agregar carpeta con imágenes de los personajes**

   - Dentro de `app/public/`, crea una carpeta con el nombre del cartoon.
   - Coloca allí las imágenes de los personajes en formato `.webp` para optimizar el rendimiento.

5. **Agregar archivos de imagenes para logo y background**

   - Dentro de `app/public/`, agregar una imagen en formato .webp (`{toon_name}_bg.webp`).
   - Dentro de `app/public/`, agregar una imagen en formato .webp (`{toon_name}_logo.webp`).
