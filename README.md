## PracticasIV

[![Build Status](https://travis-ci.org/adrianmorente/PracticasIV.svg?branch=master)](https://travis-ci.org/adrianmorente/PracticasIV)

Repositorio dedicado a la recolección de los ejercicios realizados a lo largo de la asignatura, así como del proyecto final realizado, descrito más adelante.

***

# Primer hito

Descripción del proyecto a realizar.

## GitHub Mobile

A falta de una aplicación oficial de GitHub para los smartphones actuales (tanto en la *Play Store* de *Google* como la *App Store* de *Apple*; el proyecto deseado implementará una interfaz de aplicación móvil que permita a los usuarios de GitHub identificarse correctamente y acceder a una versión más limitada de sus repositorios.

De esta forma, el usuario podrá llevar una vista previa de los repositorios que mantiene en su perfil y a los que contribuye, consultar las versiones contenidas en éstos, y si lo quisiera, descargar el contenido de dichos repositorios.

#### Servicios y tecnologías usados

+ Pila **MEAN** (MongoDB, Express, Angular y NodeJS).
+ Contenedores de **Azure** para pruebas y despliegue.
+ **API** de **GitHub**.
+ Integración continua con *TravisCI*.

***

# Segundo hito

Integración continua en el repositorio.

## Trabajando con TravisCI

Para poder trabajar con [Travis CI](https://travis-ci.org/) tan solo tendremos que acceder a su web, autenticarnos con nuestra cuenta de GitHub y ya tendremos acceso a todos nuestros repositorios. Desde nuestro perfil en Travis, activamos los repositorios a los que queremos aplicar integración continua y, a partir de ese momento, Travis someterá dicho repo a los tests que le indiquemos cada vez que subamos un cambio a GitHub.

- **¿Por qué elegimos TravisCI?**: [la elección está difícil](https://stackshare.io/stackups/jenkins-vs-shippable-vs-travis-ci), y aunque ofrece unas características muy similares a *Jenkins*, optaremos por Travis por sencillez de uso, ya que lo hemos visto en clase (y bastantes dolores de cabeza nos dará Javascript de por sí).

#### Mocha, un framework de tests para JS

Lo instalaremos con `npm install --save-dev mocha` de forma local al proyecto, crearemos una carpeta *test* y añadiremos el siguiente contenido a nuestro **package.json**:

```js
"scripts": {
  "test": "mocha"
},
```

Mocha nos provee de soporte para tests asíncronos y opciones para realizar *hooks* antes y/o después de cada build. Además, nos permite usar cualquier librería de aserciones (usaremos `assert`, utilizada en los [ejercicios del tema 2](./Ejercicios/Tema2)).
