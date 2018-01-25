[![Build Status](https://travis-ci.org/adrianmorente/PracticasIV.svg?branch=master)](https://travis-ci.org/adrianmorente/PracticasIV)
[![Coverage Status](https://coveralls.io/repos/adrianmorente/PracticasIV/badge.svg?branch=master)](https://coveralls.io/r/adrianmorente/PracticasIV?branch=master)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0)
[![Neglect](https://img.shields.io/badge/neglect-200%25-red.svg?style=flat-square)](https://github.com/adrianmorente/PracticasIV)
[![GitHub language count](https://img.shields.io/github/languages/count/badges/shields.svg?style=flat-square)]()

# Ejercicios DYNAsystem

## PracticasIV

Repositorio dedicado a la recolección de los ejercicios realizados a lo largo de la asignatura, así como del proyecto final realizado, descrito más adelante.

***

# Primer hito

Descripción del proyecto a realizar.

## Ejercicios Dynasystem

[Dynasystem](https://www.dynasystem.es/) es un dispositivo revolucionario que persigue el máximo rendimiento deportivo además de un control clínico para el deportista. Se trata de un centro de alto rendimiento que reúne las máquinas de entrenamiento más exitosas del mercado, permitiendo integrar el dispositivo en cualquier ambiente. Además de *all in one*, Dynasystem recopila datos del entrenamiento en tiempo real y los muestra en pantalla, permitiendo al deportista o al especialista clínico orientarse con el tratamiento, así como perfeccionar el rendimiento al máximo nivel.

Este proyecto versa sobre la creación y predefinición en el servidor de una serie de ejercicios preconfigurados sobre el dispositivo. Con este microservicio, Dynasystem será capaz de almacenar ejercicios predefinidos personalmente por cada usuario, eliminarlos, consultarlos o simplemente añadirlos a la rutina correspondiente.

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

El tercer hito consiste en utilizar *PaaS (Plataforma como servicio)* sobre las que despleguemos nuestros microservicios y/o aplicaciones de forma más o menos automática. En [los ejercicios del Tema 3](./Ejercicios/Tema3) tenemos una guía con la configuración y ejemplos seguidos para este fin.

#### ¿Y qué PaaS utilizo?

Podemos elegir entre Heroku y Openshift como más destacados; o también tenemos `Zeit.co` con la particularidad de que permite solamente aplicaciones de HTML estático, de NodeJS o contenedores de Docker. Por mi parte, ya que utilizo NodeJS y que me gusta probar cosas fuera del guión utilizaré éste último. Insisto, la configuración correspondiente está en los ejercicios.

A modo de spoiler, cabe destacar que podremos desplegar esta aplicación sobre Zeit con su herramienta `now` de dos formas:

- Sea lanzando `$ now` desde el directorio donde exista un `package.json` de proyecto.
- O bien ejecutando `$ now adrianmorente/PracticasIV`, que buscaría el repositorio en GitHub, BitBucket y GitLab e intentaría lanzarlo.

Despliegue: https://dynasystem-exercises-gvjtxnlwcp.now.sh/

***

# Cuarto hito

El cuarto hito consiste en desplegar nuestras aplicaciones sobre contenedores, **Docker**, concretamente. Utilizando `now` como en el hito anterior, podemos elegir si desplegamos en Zeit a partir del archivo `package.json` o a partir del archivo [`Dockerfile`](./Dockerfile) (que escribiremos para esta parte del desarrollo).

Para esta elección, elegimos el 1 en el tercer hito, y en esta ocasión utilizamos la 2ª. Una imagen de muestra la tenemos [aquí](./images/deploy-now-npm-docker.png). El resultado se desplegará en un contenedor similar al indicado a continuación:

Contenedor: https://dynasystemexercises-ycbytgmupy.now.sh/

Por otro lado, habremos generado una `Automated Build` enlazada con este repositorio de Github; de forma que cada vez que hagamos un `push` aquí, se actualizará el repo de Docker y se desplegará en un nuevo contenedor.

Docker Hub: https://hub.docker.com/r/adrianmorente/practicasiv/

Podemos descargar la imagen completa del repositorio con la orden:

```bash
docker pull adrianmorente/practicasiv
```

***

# Quinto hito

Iremos definiendo de forma consecutiva los pasos a seguir durante un desarrollo *DevOps*, empezando por predefinir perfectamente la arquitectura que utilizaremos (esto es, por ejemplo, elegir los sistemas operativos utilizados en las máquinas virtuales, así como su provisionamiento). A continuación, continuaremos con la gestión automática de la configuración de dichas máquinas, de forma que se despliegue esta configuración a tantas instancias como decidamos en un momento dado. Para finalizar, mecanizaremos ambos puntos automatizándolos en uno solo; acabando por desplegar dicha arquitectura final, con la aplicación funcionando.

***

Una parte importante es la instalación del cliente en terminal de Azure, cuyo proceso podemos seguir [aquí](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest#install-with-apt-package-manager). Mediante esta herramienta gestionaremos la creación de máquinas virtuales en lugar de lidiar con su bonita y liosa interfaz gráfica a través de la web.

#### 1. Arquitectura planteada

Puesto que las funcionalidades de esta aplicación se basan en un servicio web, a través del cual crear, borrar y/o modificar ejercicios Dynasystem para el usuario autenticado; por el momento bastará con una máquina virtual que concentre el servicio de nuestro microservicio API REST así como el servicio de base de datos (en la que almacenar dichos ejercicios).

La implementación futura (desde aquí hasta la presentación del proyecto, y con vistas al TFG) será una infraestructura en la que cada máquina virtual concentre los diversos módulos del microservicio separados en **diferentes contenedores Docker**. Es decir, en cada instancia virtual de una máquina, podrán desplegarse diferentes instancias del servidor web y/o del servidor de bases de datos. Esto permite flexibilidad. Podríamos tener sobre la misma máquina tres instancias de servicio web y solo una de base de datos; y *"en un apuro"*, levantar otra máquina virtual con una instancia adicional de base de datos para satisfacer algún aluvión de consultas y/o solicitudes.

Sin embargo, para este caso práctico, y de forma temporal hasta la presentación, cada máquina virtual contendrá un solo contenedor con la aplicación clonada del repositorio.

Sobre esta máquina, podremos fácilmente instalar Docker para simplemente descargarse desde *DockerHub* la aplicación. Esta imagen de aplicación se actualiza automáticamente en DockerHub con cada `push` exitoso al repositorio en GitHub (este éxito depende de los tests para su integración continua con `TravisCI`).

#### 2. Sistemas operativos utilizados

Existe un grandísimo número de sistemas operativos que podríamos utilizar para un servidor, pero tanto por facilidad de uso como por experiencia, así como por la familiaridad con su gestor de paquetes, **optaré por Ubuntu Server**. Existen otras alternativas punteras como OpenSUSE o CentOS, pero me son menos convencionales, **lo que no les resta profesionalidad**, pero tras haber leído opiniones y visto algunas estadísticas, no existe un líder claro, así que optaré por el más familiar.

En Ubuntu Server podremos instalar Docker fácilmente para satisfacer las necesidades vistas en el apartado anterior.

#### 3. Administración de infraestructuras - ¿Chef vs Ansible?

Ambas herramientas son excelentes en automatización de tareas, despliegue simultáneo de servicios y aplicaciones en varios servidores y/o provisionamiento de éstos. Chef, al igual que Puppet, se trata de una herramienta más antigua (2009) lo que le confiere una más completa documentación además de, según he leído, una mayor estabilidad para su uso en empresas y entornos similares. Por otro lado, Ansible es un *"recién llegado al juego"* (2012) y pese a tener una documentación más pobre, parece ser una herramienta más ligera y con mayor facilidad para un desarrollador que se inicia en la materia.

Además, Chef obliga al usuario a utilizar Ruby, mientras que Ansible utiliza Python. Ruby no está presente en todas las distribuciones de Linux mientras que Python, sí. En este caso, optaré por utilizar Ansible.

***

En cuanto al provisionamiento con Ansible, en un procedimiento normal deberían cumplirse las siguientes directivas:

- Actualización de los repositorios presentes en la máquina virtual.
- Si procede, instalación del lenguaje de programación utilizado en la aplicación. Lenguajes como `Python` ya figuran en las distribuciones de Linux. Como en este caso se usa `NodeJS`, habrá que ordenar su instalación.
- Instalación de un gestor de paquetes, también si procede. Por ejemplo, con `Python` se utiliza `pip`; mientras que con `NodeJS`, `npm`. Deberán instalarse conjuntamente.
- Podemos utilizar también para NodeJS un gestor de procesos como `pm2`, que permite lanzar y monitorizar cómodamente estos diferentes programas de nuestra máquina virtual.
- Clonado del repositorio en GitHub o donde se encuentre el código.

***

Sin embargo... Ya controlábamos la integración del repositorio y su despliegue automático en forma de imagen de DockerHub. Además, en el fichero `Dockerfile` que genera dicha imagen ya controlamos la instalación de `NodeJS` y `npm`; por lo que han de instalarse en el contenedor y no sobre el sistema operativo anfitrión de la máquina virtual. Es decir, la configuración que deberá realizar Ansible será más simple:

- Actualización de los repositorios presentes en la máquina virtual.
- Instalación de Docker.
- Clonado de la imagen de aplicación de DockerHub con `$ docker pull adrianmorente/practicasiv`.

Sin embargo, por problemas de instalación y ejecución con Docker en la máquina virtual, no he conseguido realizar esto así que me limitaré a los pasos descritos en la enumeración anterior a esta última.

La definición del fichero se encuentra en la ruta [provision/ansible.yml](./provision/ansible.yml).

#### 4. Automatización de los puntos anteriores... ¡Vagrant!

Seguimos el tutorial de Azure con Vagrant [alojado en GitHub](https://github.com/Azure/vagrant-azure). No repetiré los pasos porque sería absurdo, pero simplemente destacaré que los pasos a realizar mediante línea de comandos satisfacen las siguientes directivas:

- Añadir máquina virtual remota en Azure. Esto generará unos datos que utilizaremos más adelante con Vagrant.
- Utilizamos la plantilla de fichero `Vagrantfile` rellenándolo con los datos obtenidos en el paso anterior.
- Ahora con Vagrant mediante línea de comandos, especificamos la máquina virtual que será utilizada (que será un IaaS sobre el que se instala Ubuntu vacío, y se configura y provisiona de cero).
- Instalamos el plugin de Vagrant con Azure y levantamos la máquina especificando el proveedor de destino.

Para terminar, habremos de realizar el aprovisionamiento al final del fichero [`Vagrantfile`](./Vagrantfile). Esto hará referencia a la configuración definida con Ansible previamente.

#### 5. Plan de vuelo... ¡Despegue! Digo, ***¡despliegue!***

Tras provisionar la máquina con Vagrant, podemos utilizar `flightplan.js` para lanzar la ejecución de la aplicación en la máquina virtual especificada. La configuración se encuentra en [despliegue/flightplan.js](despliegue/flightplan.js).

Básicamente, su código configura para una máquina en desarrollo `(staging)` o en producción `(production)` la máquina virtual a utilizar; especificando el nombre de dominio (o `DNS Label Prefix`, como dice Vagrant), el usuario y el modo de agente (SSH, por ejemplo).

Además, permite ejecutar comandos en local y/o en remoto, para instalar los paquetes con `npm` (para lo que lo uso en mi caso) y para lanzar la aplicación con el gestor `pm2` antes mencionado.

También permite mostrar mensajes de *log* que informen sobre el estado de la máquina y el despliegue.

### Proceso de ejecución

1. Clonado del repo: `git clone https://github.com/adrianmorente/PracticasIV`.
2. Provisionar la máquina con Vagrant: `vagrant up --provider=azure`.
3. Si cambian la IP y/o el DNS, modificar el dominio en el archivo `flightplan.js`.
4. Desplegar con `fly staging` dentro del directorio `./despliegue`.

Despliegue final: 40.118.214.208

***
