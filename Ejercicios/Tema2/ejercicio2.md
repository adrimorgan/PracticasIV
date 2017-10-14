# Tema 2 - Ejercicio 2

- Para empezar con el testeo de funcionalidades de nuestra aplicación, comenzaremos por el nivel más bajo, **el de las aserciones**. Usaremos la librería estándar de JS (`assert`) tal que así:

```js
var user = require('./models/user.js');
var assert = require('assert');

var new_user = new user.User('Adrian','Morente','adrianmorente');
assert(new_user, "Usuario creado");
assert.equal(new_user.as_string(), "Adrian, Morente, adrianmorente", "Creado");
console.log("Assert da por hecho que algo está bien, así que solo habla cuando no lo está.");
```
