## PracticasIV

[![Build Status](https://travis-ci.org/adrianmorente/PracticasIV.svg?branch=master)](https://travis-ci.org/adrianmorente/PracticasIV)

Repositorio dedicado a la recolección de los ejercicios realizados a lo largo de la asignatura, así como del proyecto final realizado, descrito más adelante.

***

# Primer hito

Descripción del proyecto a realizar.

## Dynasystem exercises

[Dynasystem](https://www.dynasystem.es/) es un dispositivo revolucionario que persigue el máximo rendimiento deportivo además de un control clínico para el deportista. Se trata de un centro de alto rendimiento que reúne las máquinas de entrenamiento más exitosas del mercado, permitiendo integrar el dispositivo en cualquier ambiente. Además de *all in one*, Dynasystem recopila datos del entrenamiento en tiempo real y los muestra en pantalla, permitiendo al deportista o al especialista clínico orientarse con el tratamiento, así como perfeccionar el rendimiento al máximo nivel.

Este proyecto versa sobre la creación y predefinición en el servidor de una serie de ejercicios preconfigurados sobre el dispositivo. Con este microservicio, Dynasystem será capaz de almacenar ejercicios predefinidos personalmente por cada usuario, eliminarlos, consultarlos o simplemente añadirlos a la rutina correspondiente.

*[Este microservicio será uno de los integrantes de la aplicación final, que será mi Trabajo de Fin de Grado.]*

#### Servicios y tecnologías usados

+ Pila **MEAN** (MongoDB, Express, Angular y NodeJS).
+ Zeit.co y/o contenedores de **Azure** para pruebas y despliegue.
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

***

# Tercer hito

En construcción...
