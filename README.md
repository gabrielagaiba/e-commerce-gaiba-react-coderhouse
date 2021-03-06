# Proyecto React JS - E-commerce Rabona

Este repositorio contiene el código fuente del **e-commerce de RABONA**

Este proyecto fue desarrollado durante el curso de **React JS** de CoderHouse, dictado por el Profesor **Horacio Gutierrez**. El objetivo del proyecto final es poner en práctica los conocimientos aprendidos en dicho curso.

A continuación se detallan las herramientas utilizadas para el desarrollo y un instructivo que permite descargar e instalar el proyecto localmente.
A su vez, se describe la **Funcionalidad** de la aplicación web, acompañado de un video demostrativo.

Al final de la página se encuentran los datos de la autora.

---

## Funcionalidad

Esta aplicación web presenta al usuario los productos ofrecidos por **Rabona**, el usuario puede ver todo el listado de productos o seleccionarlos según su categoría. 
Sí el usuario lo desea puede ver el detalle de cada producto. En esta vista tiene la opción de elegir la cantidad de unidades del producto que desea. Dicho número tiene que ser positivo, mayor a 0 y menor al stock disponible.
Luego puede decidir si quiere seguir comprando, donde retorna la vista al listado de productos o finalizar la compra, que lo redirigirá a completar un formulario.
En esta vista el usuario puede borrar el elemento o algún elemento de la lista o vaciar el carrito. 
En el caso que desee finalizar su compra deberá completar el formulario correspondiente con su información.
Al confirmar la compra los datos que completó se almacenan en la base de datos, junto con el detalle de la compra y se muestra al usuario el número de orden correspondiente.

---

## Demostración

https://user-images.githubusercontent.com/89227111/152850537-6423af85-dc82-4eb0-8f51-b8fdbab06ce6.mp4

---

## Diseño

<img alt="desktop-1" src="https://user-images.githubusercontent.com/89227111/152852292-c1458744-ba62-45d7-aa31-45d53befc2e4.png" width="40%">
<img alt="desktop-2" src="https://user-images.githubusercontent.com/89227111/152852357-e2960a24-8b12-49c7-ac0e-9fc8957c7335.png" width="40%">
<img alt="desktop-3" src="https://user-images.githubusercontent.com/89227111/152852404-ad6a9a05-18de-407d-b902-11bbfc8894d6.png" width="40%">

---


## Responsive

<img width="25%" alt="responsive" src="https://user-images.githubusercontent.com/89227111/152852508-6a520f32-42d1-4fba-a256-f9eed5e16bb7.png">

---

## Tools

- HTML
- CSS
- Sass
- JavaScript
- React JS
- Babel
- WebPack
- Create-react-app
- React-router-dom
- Firebase
- Firestore
- Git
- GitHub

<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/></a>
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></a>
<a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a>
<a href="https://getbootstrap.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></a>
<a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/></a>
<a href="https://webpack.js.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/></a>
<a href="https://create-react-app.dev/" target="_blank" rel="noreferrer"> <img src="https://seeklogo.com/images/C/create-react-app-logo-BA592B4FB4-seeklogo.com.png" alt="create-react-app" width="40" height="40"/></a>
<a href="https://reactrouter.com/" target="_blank" rel="noreferrer"><img src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png" alt="react-router-dom" width="40" height="40"/></a>
<a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/></a>
<a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://retool.com/integrations-logos/firestore.svg" alt="firestore" width="40" height="40"/></a>
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a>
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png" alt="git-hub" width="40" height="40"/></a>

---

## Instalación

- Pre-requisitos:

    - Instalar [npm](https://nodejs.org/es/download/)
    - Instalar [Git](https://gitforwindows.org/)

1- Clonar el repositorio de GitHub
    
     git clone https://github.com/gabrielagaiba/e-commerce-gaiba-react-coderhouse.git

2- Moverse al directorio del proyecto

    cd e-commerce-gaiba-react-coderhouse

3- Instalar las dependencias del proyecto

    npm install

4- Crear un archivo llamado *.env* en el directorio del proyecto. Dentro de este archivo incluir las variables de entorno recibidas junto con la entrega. Dichas variables son utilizadas para acceder a la Base de Datos de Firebase.

5- Ejecutar el proyecto

    npm start

¡Listo! Esto deberia abrir una pestaña en nuestro navegador en la URL *http://localhost:3000* donde podemos utilizar la aplicación web.


---

## Autora

**Gabriela Gaiba** 

<a href="mailto:gabrielgaiba@gmail.com"><img src="https://user-images.githubusercontent.com/89227111/152853488-f1f92e75-f7df-43d5-b722-00fbe529ddd2.png" alt="email" width="15" height="15"/> gabrielagaiba@gmail.com</a>

<a href="https://github.com/gabrielagaiba" target="_blank" rel="noreferrer"> <img src="https://user-images.githubusercontent.com/89227111/152853419-aedfac6e-420e-4307-8d15-6a010ec4b345.png" alt="git-hub" width="15" height="15"/> https://github.com/gabrielagaiba</a>

<a href="https://www.linkedin.com/in/gabriela-gaiba-12b61487/" target="_blank" rel="noreferrer"> <img src="https://user-images.githubusercontent.com/89227111/152852883-eb4d5d11-fbbd-4d16-86a4-f8eb808e3315.png" alt="git-hub" width="15" height="15"/> https://www.linkedin.com/in/gabriela-gaiba-12b61487/</a>





