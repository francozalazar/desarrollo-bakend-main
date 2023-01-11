# Entrega Proyecto 2

![Imagen de express.js](https://i.imgur.com/ksVYRtt.png)

## Configuracion

- Para poder iniciar el proyecto se debe 

```
git checkout entrega-1
npm install
```

- Ya ejecutado, crear un archivo llamado ".env" y dentro escribir lo siguiente

```
PORT=8080
NODE_ENV=local
NODE_BASE= //Tipo de persistencia de datos que quieras utilizar: "memory|file|mongodb|firestore"

//Estos datos son los datos de configuracion para conectarse a mongodb
MONGO_URL=mongodb://localhost:27017/ecommerce

//Estos datos son los datos de configuracion para conectarse a firebase
apiKey=
authDomain=
projectId=
storageBucket=
messagingSenderId=
appId=
```

- Por ultimo ejecutar los comandos

```
mongod --dbpath ./
npm start
```

En el caso de usar el mongodb, usar la base "mongodb" que deje ya con sus colections

*Se dejara en el repositorio un export de los metodos utilizados para poder hacer llamadas a la API, El archivo es "Collection Desafio 4.postman-collection.json"*
