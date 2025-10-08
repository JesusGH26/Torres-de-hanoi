# 🧩 Torres de Hanoi - React

Una versión interactiva del clásico rompecabezas matemático **Torres de Hanoi**, desarrollada con **React**. Este proyecto combina lógica, diseño visual y experiencia de usuario para ofrecer una interfaz elegante y funcional.

---

## Cómo jugar

- Haz clic en un pilar para seleccionar el disco superior.
- Luego haz clic en otro pilar para moverlo.
- Solo puedes mover un disco a la vez.
- No puedes colocar un disco grande sobre uno más pequeño.
- Completa el puzzle en el menor número de movimientos posible.
- Al ganar, se muestra un mensaje de victoria 🎉.

---

## Características

- Selector dinámico de número de discos (3 a 7).
- Contador de movimientos.
- Botón para reiniciar el juego.
- Animaciones suaves al mover discos.
- Paleta de colores sobria y elegante.
- Mensaje de victoria al completar el puzzle.
- Código modular y fácil de mantener.

---

## Estructura del proyecto

src/
├─ components/
│  ├─ Controls.js       # Controles de juego (movimientos, reinicio, selector)
│  ├─ Controls.css
│  ├─ Disk.js           # Disco individual con estilos dinámicos
│  ├─ Disk.css
│  ├─ Pillar.js         # Pilar que contiene discos
│  └─ Pillar.css
├─ HanoiGame.js         # Lógica principal del juego
├─ HanoiGame.css
├─ App.js               # Entrada principal de la app
├─ App.css
└─ index.js             # Renderizado en DOM

---

## Instalación

1. Instala las dependencias

   ```bash
   npm install

2. Utilice esto para desplegar en servicios como:
    - Netlify
    - Vercel
    - GitHub Pages
    - Firebase Hosting

   ```bash
   npm run build

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm start

4. Abre en tu navegador el link que te aparecera (o si no quieres instalarlo usa el siguiente link)

   ## https://jesusgh26.github.io/Torres-de-hanoi/

6. Disfruta el juego
