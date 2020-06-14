# Cara o ceca

### Vistas (3)

## <center> 1- Inicio del juego

---

##### Mostrar

1. **Mensaje de Bienvenida** al juego y nombre del juego.
1. **Menu desplegable** que determina la **Cantidad de RONDAS** que durara cada Game desde un (1, 3, 5, siendo _3 el default_).
1. **Iniciar Juego** boton que lleva al usuario a la siguiente vista.

## <center> 2- Rondas

---

    -ocultar-
    Los elementos de la vista "Inicio del Juego":
    - Menu de cantidad de rondas
    - boton **Iniciar Juego**

##### Mostrar

1. **2 Radio Buttons** con las opciones: _Cara o Ceca_ (**Seleccion Unica**)

1. **FLIP** Button, es el que activa el comienzo de cada ronda.
1. **Resultado de las Rondas** en forma de **tabla** con cantidad de rondas segun lo seleccionado en el _menu desplegable_ de la vista "Inicio del Juego" punto **2**. (_ver cuadro A_)

##### (A)

|            | Resultaldo Rondas |
| ---------- | ----------------- |
| Ronda 1    | Ganaste           |
| Ronda 2    | Perdiste          |
| Ronda 3    |
| **GAME :** |

## <center> 3- Fin del Game

---

        -ocultar-
        - Radio Buttons (_cara o ceca_)
        - Flip Button

##### Mostrar

1. Tabla con los resultados de las Rondas del ultimo Game y reslultado final del Game. (_Ver Cuadro B_)
1. Mostrar el resultado de los ultimos 3 Games con el ultimo Game destacado. (_Ver Cuadro C_)
1. Boton **Volver a Jugar**, lleva a la vista 2.
1. Boton de **Reset Game** lleva a la vista 1.

##### (B)

|            | Resultaldo Rondas |
| ---------- | ----------------- |
| Ronda 1    | Ganaste           |
| Ronda 2    | Perdiste          |
| Ronda 3    | Ganaste           |
| **GAME :** | **Ganaste**       |

##### (C)

|            | 3 ULTIMOS GAMES |
| ---------- | --------------- |
| Game 1     | Perdiste        |
| Game 2     | Ganaste         |
| **Game 3** | **Ganaste**     |

---

---

## TODOs

-   [x] ver logica de mejor de 3, 2 ganados seguidos = ganador
-   [x] mostrar mensajes partialResult y finalResult
-   [x] historial de games ganados / perdidos
-   [x] reset para volver a jugar
-   [x]     	- ocultar boton de flip
-   [x]     	- resetear contador
-   [x]     	- agregar al hisotrial el reslutado
-   [x] (uso RESET) - agregar boton de "volver a jugar"
-   [x] Documentar las posibles vistas **detallando** qué quedaría visible u oculto en cada una (en este archivo)
-   [x] Mostrar y ocultar los elementos dependiendo de la vista actual (p. ej., el botón reset no tiene sentido durante el juego)
-   [x] Mostrar al usuario el resultado de cada ronda anterior del mismo juego, sin crear variables nuevas
-   [x] Hacer la cantidad de rondas por juego configurable (mejor de 1, 3 o 5)
    -   [x] Documentar los cambios en las vistas
    -   [x] Implementarlo

## Tarea 1

En la forma actual de programar la aplicación estamos viendo algunos problemas. Tratá de escribirlos, mostrando ejemplos o explicando en detalle, en qué situaciones te encontrás con esos problemas y en qué otros problemas pueden derivar. Es necesario que describas todos los problemas o molestias que encuentres o hayas experimentado sin ponerte a pensar si es importante o no. Te dejo algunas ideas típicas (en caso de usarlas deberías explayarte más):

-   Agregar, modificar o eliminar una nueva característica significa que hay que cambiar código por toda la aplicación
-   Es difícil hacer el seguimiento de los cambios del estado y determinar el estado actual, no solo porque el estado está disperso en todo el código sino porque cualquier parte del código lo puede modificar
-   No es clara la dirección de la aplicación, donde empieza y cual es el paso siguiente

### Respuesta tarea 1

-   A medida que va avanzando la aplicacion se va haciendo mas complicado encontrar cada parte dentro del codigo, encontrar por ejemplo donde empieza o termina una vista se hace complicado por eso use ) para las vistas porque el rojo lo veia mas facil ) )) ))) pero tampoco simplifico mucho.
-   En el caso de modificar algo dentro de una vista que ya habia trabajado se me complicaba volver a encontrar toda la secuencia de la vista, de donde venia y lo que generaba.
-   Se me complicaba pensar donde poner las variables y funciones, si las ponia todas arriba al inicio del script o si convenia poner las variables y funciones relativas a cada vista arriba de la funcion principal de cada vista.
-   Es confuso que este todo en en mismo lugar, por ejemplo donde se concluye si el usuario gano o perdio tambien se ejecutan muestran y ocultan cosas, tal vez lo podria hab er hecho en una funcion aparte para mas prolijidad.
-   El ultimo error donde puse "if (selectedRoundsNumber = 5)" en lugar de "(selectedRoundsNumber === 5)" no se si ese error deberia haber podido cambiar ese tipo de variable, lo idal hubiese sido que esa variable, una vez que el usuario elije un numero de rondas, debera ser inmutable por el codigo.

## Tarea 2

Leer parte de la documentación de [Redux](https://redux.js.org/), una librería que implementa el `reducer pattern`.

-   [Motivation](https://redux.js.org/introduction/motivation)
-   [Core Concepts](https://redux.js.org/introduction/core-concepts)
-   [Three Principles](https://redux.js.org/introduction/three-principles)
