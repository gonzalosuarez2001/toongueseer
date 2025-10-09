# Cómo agregar un nuevo juego Cartoon

Sigue estos pasos detallados para agregar un nuevo cartoon al proyecto:

1. **Agregar el cartoon a `cartoonList` en `prisma/seed.ts`**

   - Abre el archivo `app/prisma/seed.ts`.
   - Busca la lista `cartoonList` y añade el nombre de tu nuevo cartoon.

2. **Agregar el cartoon al type `Cartoon`**

   - Abre `app/src/types.ts`.
   - Añade el nuevo cartoon al type Cartoon.

3. **Agregar el cartoon en la página raíz**

   - Modifica la página principal (`app/src/app/page.tsx`) para incluir el acceso al nuevo cartoon.

4. **Crear carpeta y archivo `page.jsx`**

   - Dentro de `app/src/app/`, crea una carpeta con el nombre del cartoon.
   - Dentro de esa carpeta, crea el archivo `page.tsx` y renderiza el componente ToonTemplate.tsx.

5. **Agregar el cartoon al `cartoonConfig` junto con sus estilos**

   - Abre el archivo de configuración de cartoons (`app/src/cartoonConfig.tsx`).
   - Añade la configuración para el nuevo cartoon.
   - Añade los estilos para el nuevo cartoon en `app/src/global.css`.
     - Theme Variables de Tailwind:
       - `font-{toon_name}`
       - `color-{toon_name}`
     - Utilidades de Tailwind:
     - `@utility bg-toon-{toon_name}`
     - `@utility scrollbar-{toon_name}`

6. **Agregar archivo JSON con la información de los personajes**

   - Crea un archivo JSON en `app/data/` (`{toon_name}.json`) con la información de los personajes del cartoon.

7. **Agregar carpeta con imágenes de los personajes**

   - Dentro de `app/public/`, crea una carpeta con el nombre del cartoon.
   - Coloca allí las imágenes de los personajes en formato `.webp` para optimizar el rendimiento.
