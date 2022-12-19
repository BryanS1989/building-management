# building-management

Mini applicación para la gestión de un edificio, gestionando las salas de cada planta

## Live Demo

Puedes ver la demo en el siguiente enlace: [Live Demo](https://bryans1989-building-management.netlify.app/).

## Instalación de dependencias del proyecto

```sh
npm install
```

### Compilación para el entorno de Desarrollo

```sh
npm run dev
```

### Compilación para el entorno de Producción

```sh
npm run build
```

### Lint [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Decisiones tomadas

-   Al comienzo del desarrollo se habían añadido los componentes principales directamente en el App.vue, sin embargo para tener el código de manera más ordenada se decide hacer uso de vistas, de esta manera en futuros evolutivos si se han de añadir más funcionalidades no estarán todas añadidas dentro de app y podemos tener un proyecto mucho más ordenado.

-   Para hacer el código más molecular se decide generar un componente específico para la lista de salas de cada planta, dentro del cual también tenemos un componente para mostrar la información de cada una de las salas, de esta manera tenemos componentes reutilizables en otras partes de la aplicación.

-   Por otra parte, se decide hacer uso de VUEX para tener de manera localizada el estado de la aplicación (p.e. la lista de pisos con cada una de sus plantas y la información de estas), de esta manera unificamos el origen de la información y evitamos que diferentes componentes tengan que gestionar la obtención y modificación de la información esencial.

-   Puesto que en los requerimientos no se indicaba nada respecto a cómo se debería mostrar la opción de eliminar salas, y relacionado con el siguiente punto, se decide evitar añadir más acciones en el footer de cada una de las cartas que gestiona la información de la sala. Finalmente se decide añadir un botón (icono) en la parte superior derecha de cada carta para permitir al usuario eliminar salas si es necesario. De esta manera también hacemos más intuitiva la aplicación puesto que los usuarios están acostumbrados a encontrar este tipo de acciones en esta ubicación (p.e. cerrar una ventana)

-   Para hacer la interfaz más amigable se decide hacer uso de librerías de iconos (Fontawesome) y de una librería de animaciones, con esto conseguimos que la interfaz sea más amigable y menos estática.

-   Para unificar el estilo de código del proyecto se decide instalar Prettier, de esta manera sean cuales sean las preferencias de estilo de programación del desarrollador unificaremos el estilo del proyecto.

-   Para facilitar el desarrollo del código CSS se decide hacer uso de la metodología BEM (Block\_\_Element--Modifier)

# Dificultades encontradas

-   Puesto que en los requerimientos no se especificaba nada relacionado con rutas, en un principio se decide gestionar la navegación vía eventos, pero finalmente se decide hacer uso del router, de esta manera damos la sensación al usuario de que están ocurriendo cambios derivados de sus acciones. De esta manera hacemos que los componentes sean más independientes puesto que no necesitan que sea el componente padre quien les comparta la información si no que puede obtener la información directamente de la ruta, como en el caso de la planta seleccionada.

-   Derivado del uso de la librería animate.css para las animaciones se detecta que estas no se iniciaban correctamente al cambiar de plantas puesto que vue reutilizaba los componentes de cartas de salas que ya eran visible, por lo tanto estos no iniciaban la animación al contrario que los componentes carta nuevos. Para solventar esta situación se decide cambiar la clave unica de cada sala añadiendo también el identificador de la sala:

```
# src\components\room\RoomList.vue
<RoomCard
    v-for="room in rooms"
    :key="selectedFloor + room.number"
```

-   Puesto que las especificaciones eran pocas, se hace dificil ver cómo debería ser el flujo de creación y modificación de salas. Personalmente creo que el botón "añadir" debería provocar la aparición de un modal para indicar la información de la sala, de esta manera podríamos validar que la información indicada es correcta para la creación de la sala. Lo mismo pasa con la modificación, se debería cambiar el flujo para que el usuario sepa que la modificación se ha realizado correctamente, por ejemplo un modal de confirmación.
