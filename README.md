# Sistema Integral de Gestión y Seguridad para Aeropuertos

Desarrollar un sistema integral de gestión y seguridad para aeropuertos que optimice la experiencia de los pasajeros, garantice la seguridad de las operaciones y mejore la eficiencia de las operaciones aeroportuarias.

## Administradores:

Las cuentas de ambos administradores, tendran su propio dashboard para sus respectivas funciones. Oh puede ser unicamente uno, con un menu que cuente con 2 opciones, las cuales son:

- Registrar pasajeros y crear su perfil
- Registrar vuelos

  > `Nota:` Si se crea un solo dashboard, se puede implementar reconocimiento facial al momento de que un administrador desee entrar a su respectiva funcion, ahora si se crean dos dashboards para cada admin, el reconocimiento facial, sera en el login.

  ### Funciones

  - **Administrador 1 (Crear perfil a pasajeros):** Este se encargara de tomar los datos de los pasajeros y registrarlos en el sistema, debe ingresar tentativamente:

    - Nombre
    - Apellido
    - Edad
    - Correo
    - No. Pasaporte
    - Nacionalidad
    - Numero de telefono
    - (Puede ser tambien foto de perfil, pero ahi ustedes me dicen)

  - **Administrador 2 (Registrar vuelos):** Este se encargara unicamente de registar los vuelos y los destinos, para ello tendra que ingresar el dia que saldra el vuelo, el numero de vuelo, el destino (En este caso solo el pais) del vuelo, y la descripcion del vuelo (`Esta va ser escrita en español pero para cada pasajero debemos traducirla al idioma del pasajero, para que el pasajero entienda las restricciones y descripciones de los vuelos`) y tendra que ingresar por lo menos 3 lugares de dicho pais, los cuales son las ciudades que un pasajero puede visitar en cierto pais, para cada ciudad simplemente se ingresa el nombre de la ciudad y una imagen.

    - Con rekognition extraemos los tags de cada imagen de ciudad ingresada y los guardamos en un parrafo, o simplemente los tags, dependiendo como los devuelva, esto para que cuando el pasajero ingrese a su perfil pueda ver las descripciones de las ciudades en su idioma, las podemos traducir con el traslate.
    - La descripcion va servir para presentarsela a los pasajeros en dado caso el vuelo por ejemplo tenga algun retraso, o esta lleno, o saldra tal dia, o cualquier cosa que pongamos

> `NOTA:` Podemos agregar mas funcionalidades pero ahi podemos cranearlas en el camino digo yo, por el momento que sea asi

## Pasajeros:

Basicamente los pasajeros tendran su dashboard en el que podran reservar un vuelo, entonces para eso se les presentara la lista de los vuelos que el administrador ingreso, y ya con eso una vez que el pasajero decida algun pais, se le muestra en pantalla (`Puede ser asi como un carousell de imagenes`), las ciudades que estan disponibles en ese pais, y puede ser que al seleccionar la imagen de esa ciudad se le muestren los tags que extrajo rekognition y la descripcion de la ciudad.

- Como la descripcion fue escrita por el administrador en español, entonces la debemos traducir o que haya un boton ahi para que el aux vea que si usamos el translate, que diga traducir, y tambien que haya otro boton que diga leer. Y podemos usar esa onda de Polly para que alguna voz le lea la descripcion de la ciudad.

- Y si no, creo que podemos usar las dos al mismo tiempo, que sea un boton que diga Traducir y Leer, y entonces le traduce la descripcion que no va aparecer va obviamente para que no pueda leerla con texto y sea unicamente con los servicios de translate y polly (Ahi ustedes me dicen cual les parece o de otra manera)

  > `Nota:` La verdad que eso solo lo hacemos para ahorrarnos trabajo con lo del chatbot, o sea usamos lo de polly en vez de lex.

- Obviamente los tags tambien deben traducirse, y entonces una vez que el usuario vea todas las ciudades que quiera ver o que esten disponibles. Abajo o en alguna parte que ya se encuentre una lista de la ciudad a la que desea reservar el viaje y pues ya se le reserva su viaje.

- Si queremos agregamos un modal o algo ahi, un mensaje para que el usuario vea la informacion de su vuelo reservado y si no ha reservado nada, entonces que solo se muestre algo como "Sin reservacion".

## Servicio Extra

Para el servicio extra, estaba pensando en usar una onda que se llama Amazon SNS (Simple Notificacion Service), que basicamente es esto:

![alt text](image.png)

### Uso:

Esto funciona basicamente como subscriptores y publicadores, hasta el momento no se si se puede enviar publicar mensajes unicamente a un subscriptor en concreto o el mensaje se publica para todos los subscriptores, tengo que investigar eso. Pero como funciona:

- Lo que pensaba era basicamente que al registrar un pasajero pues este ingresa su correo entonces al ingresar su correo se registra el pasajero en el sistema pero tambien se subcribe su correo electronico al SNS, y al hacer esto, esta onda literalmente manda un correo en donde dice que acepte la subscripcion y asi, como para verificar que ya esta en el sistema, va y una vez hace eso quedara como subcriptor en el tema.

- Entonces la otra funcion de esto va ser que al momento que algun maje reserve un vuelo con el publicador le podemos mandar un correo con cualquier mensaje que queramos, entonces ahi podemos enviarle tipo como la informacion de su vuelo al correo y eso seria nomas, no es tan complicado, almenos en python ya lo vi en un video y son bien pocas lineas, supongo que para Nest va ser igual de facil.

</br>
</br>

```
BASICAMENTE ESA ES LA PROPUESTA, AHI CREO QUE YA ESTAMOS IMPLEMENTANDO TODOS LOS SERVICIOS, ENTONCES SI LES PARECE DE TODAS MANERAS AHI APORTAN IDEAS USTEDES TAMBIEN O COSAS QUE PODAMOS CAMBIAR Y COSAS ASI PARA QUE NO SEA TAN DIFICIL Y EFICIENTE
```
