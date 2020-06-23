# <center> PIEDRA PAPEL O TIJERA

### <center> Explicacion del juego

---

En una partida de piedra papel o tijera contra la computadora, el usuario debe elegir entre una de las tres opciones (piedra, papel o tijera), la computadora tambien deberia elegir una de esas tres opciones y empieza la disputa para ver quien gana, el resultado sera uno de los siguientes 3:

1. usuario **Gana**
2. usuario **Pierde**
3. **Empate**

### <center> Reglas

---

Para determinar el ganador las reglas son las siguientes:

|            |           |            |
| ---------- | --------- | ---------- |
| **PAPEL**  | le gana a | **PIEDRA** |
| **PIEDRA** | le gana a | **TIJERA** |
| **TIJERA** | le gana a | **PAPEL**  |

un empate se da cuando tanto usuario como computadora eligen la misma opcion.

### <center> UI // BASICO

---

#### Pagina vista partida

| BOTON  | ACCION            |
| ------ | ----------------- |
| PAPEL  | Inicia la partida |
| PIEDRA | Inicia la partida |
| TIJERA | Inicia la partida |

Mostrar info de:

-   Ganados por usuario

### <center> UI // INTERMEDIO

---

#### Pagina vista partida

| BOTON     | ACCION                     |
| --------- | -------------------------- |
| PAPEL     | Inicia la partida          |
| PIEDRA    | Inicia la partida          |
| TIJERA    | Inicia la partida          |
| **RESET** | **resetea los contadores** |

Mostrar info de:

-   Ganados por usuario
-   **Ganados por computadora**
-   **Empatados**
-   **Contador de partidas**

### <center> UI // AVANZADO

---

#### Pagina vista partida

| BOTON  | ACCION                 |
| ------ | ---------------------- |
| PAPEL  | Inicia la partida      |
| PIEDRA | Inicia la partida      |
| TIJERA | Inicia la partida      |
| RESET  | resetea los contadores |

Mostrar info de:

-   Ganados por usuario
-   Ganados por computadora
-   Empatados
-   Contador de partidas
-   **HISTORIAL que muestra que eligio c/u y quien gano**

### <center> UI // MEJOR DE 3

---

#### Pagina vista partida

| BOTON      | ACCION                 |
| ---------- | ---------------------- |
| PAPEL      | Inicia la partida      |
| PIEDRA     | Inicia la partida      |
| TIJERA     | Inicia la partida      |
| RESET      | resetea los contadores |
| MEJOR DE 3 | on/off cambio logica   |

Mostrar info de:

-   Ganados por usuario
-   Ganados por computadora
-   Empatados
-   Contador de partidas
-   HISTORIAL que muestra que eligio c/u y quien gano
-   **MUESTRA EL MEJOR DE 3**

### <center> VISTAS

---

1. Idle

Aparecen los tres botones de seleccion y el boton de reset.
Aparecen los datos actualizados o en 0 si es la primer partida.
(modo mejor de 3)Aparece boton "Mejor de 3"

2. Selected

A- el usuiario selecciona el boton de reset:
se resetean los datos (todo a 0) y se pasa a la vista Idle.

B- El usuario selecciona una de las tres opciones (piedra, papel o tijera)

Aparecen los tres botones de seleccion y el boton de reset **DESHABILITADOS**.
Aparecen los datos sin modificacion.
Aparece algo que indique que el juego esta en curso, (animacion, 3-2-1, etc)
Se determina ganador, se actualizan los datos y se pasa a la vista Idle.

C- Si el boton "mejor de 3" esta seleccionado se cuenta a partir de esa partida el mejor de 3 y aparece el contador 1/3 2/3 3/3
