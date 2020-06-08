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
-   [ ] historial de games ganados / perdidos
-   [x] reset para volver a jugar
-   [x]     	- ocultar boton de flip
-   [x]     	- resetear contador
-   [ ]     	- agregar al hisotrial el reslutado
-   [x] (uso RESET) - agregar boton de "volver a jugar"
-   [x] Documentar las posibles vistas **detallando** qué quedaría visible u oculto en cada una (en este archivo)
-   [x] Mostrar y ocultar los elementos dependiendo de la vista actual (p. ej., el botón reset no tiene sentido durante el juego)
-   [x] Mostrar al usuario el resultado de cada ronda anterior del mismo juego, sin crear variables nuevas
-   [x] Hacer la cantidad de rondas por juego configurable (mejor de 1, 3 o 5)
    -   [x] Documentar los cambios en las vistas
    -   [x] Implementarlo
