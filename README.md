# 🦄🦄🦄 Bienvenido a la  API de Unicornios 🦄🦄🦄

Esta API ha sido creada con fines educativos y experimentales. Puedes utilizar la API para hacer peticiones de tipo **GET**, **POST**, **PUT** y **DELETE**, lo que te permitirá practicar un CRUD desde el front end. Esta basada en unicornios porque así lo quise hacer XD más abajo podrás encontrar la documentación para utilizarla correctamente.

# Requisitos ⚙️

Esta api no exige ningún tipo de autenticación por lo tanto lo único necesario a tener en cuenta es la siguiente url base.

###### URL BASE
`https://experimental-unicorns-experimental-org.koyeb.app/api/v1`


## Peticiones 📖


### Crear un unicornio 💾 🦄

##### Metodo 
`POST`
##### path 
`/unicorns`

##### Datos a enviar para crear un unicornio
|    llave       |Tipo de valor                  |¿Es obligatorio?             |
|----------------|-------------------------------|-----------------------------|
|name            |`string`                       |SI                           |
|power           |`string`                       |SI                           |
|image           |`string`                       |SI                           |
|age             |`number`                       |NO                           |

##### Ejemplo de body 
```
{
  "name": "Sky",
  "power": "Encatamineto",
  "image": "https://img.freepik.com/vector-gratis/lindo-unicornio-bebiendo-te-leche-boba-ilustracion-icono-vector-dibujos-animados-arco-iris-icono-bebida-animal_138676-7412.jpg",
  "age": 7
}
```

##### Respuesta
La respuesta de la api sera el objeto del unicornio creado en la base de datos.
##
### Obtener todos los unicornios 🦄🦄🦄

##### Metodo 
`GET`
##### path 
`/unicorns`
##### Respuesta
La respuesta de la api sera un arreglo de objetos de los unicornios.
##
### Obtener un unicornio por su ID 🦄

##### Metodo 
`GET`
##### path 
`/unicorns/:unicornid`

> **Nota:** Recuerda que debes reemplazar `:unicornid` por el ID del unicornio que quieres obtener.
##### Respuesta
La respuesta de la api sera el objeto del unicornio obtenido de la base de datos.
##
### Modificar un unicornio 🔨🦄

##### Metodo 
`PUT`
##### path 
`/unicorns/:unicornid`

> **Nota:** Recuerda que debes reemplazar `:unicornid` por el ID del unicornio que quieres obtener.
##### Datos que puedes modificar del unicornio
|    llave       |Tipo de valor                  |¿Es obligatorio?             |
|----------------|-------------------------------|-----------------------------|
|name            |`string`                       |NO                           |
|power           |`string`                       |NO                           |
|image           |`string`                       |NO                           |
|age             |`number`                       |NO                           |
##### Respuesta
La respuesta de la api sera el objeto del unicornio modificado de la base de datos.
##
### Eliminar un unicornio 💀🦄

##### Metodo 
`DELETE`
##### path 
`/unicorns/:unicornid`

> **Nota:** Recuerda que debes reemplazar `:unicornid` por el ID del unicornio que quieres obtener.
##### Respuesta
La respuesta de la api sera el siguiente mensaje:
``Unicornio eliminado``
