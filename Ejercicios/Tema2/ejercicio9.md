# Tema 2 - Ejercicio 9

- Todo el contenido referente a este ejercicio (en cuanto a autenticación con Travis, etc.) ya se explicó en el fichero [README.md](../README.md).

- Finalmente, el fichero [`.travis.yml`](https://github.com/adrianmorente/PracticasIV/README.md) contiene lo siguiente:

```yaml
language: node_js
node_js:
 - "6"
 - "node"
 - "lts/*"
before_install:
  - npm install -g mocha
  - npm install
script:
  - npm test
```
