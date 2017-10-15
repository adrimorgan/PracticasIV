# Tema 2 - Ejercicio 4

- Ya va siendo hora de instalarse un gestor de versiones que nos facilite desplegar un microservicio en un servidor sin tener que lidiar con permisos y/o rutas de instalación.

- Para empezar, desecho la idea de usar `n`, ya que aunque en un principio parecía cómodo, la documentación no me convence; porque aunque proclama que todo se pueda hacer desde el nivel de usuario normal, se necesitan permisos de superusuario para instalar nuevas versiones; **cosa que no nos interesa para automatizar un despliegue**. Por otro lado tenemos `nave` pero `nvm` parece más popular, así que optaremos por ese.

- Para instalar `nvm` basta con ejecutar la línea de comandos que dictan en [su repositorio](https://github.com/creationix/nvm#install-script):

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
```

- Los comandos más relevantes son:
  - `nvm install`: seguido de la versión que queramos instalar (`node` representa la última y `stable` pues eso, la *estable*).
  - `nvm use`: seguido de la versión a utilizar. Dicha versión se almacena en la variable de entorno de la terminal y se mantiene a lo largo de la sesión (o hasta que la cambies por otra, claro).
  - `nvm run`: seguido de la versión y el comando a ejecutar. Por ejemplo, `nvm run node -v` mostraría la versión 8.7.0 (la última a día de hoy).
