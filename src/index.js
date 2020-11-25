/* import { Welcome } from './components/Welcome.js';

ReactDOM.render(<Welcome nombre="Juan" />, document.getElementById('react-app')); */

// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );

// import { LikeButton } from './components/LikeButton.js';

// ReactDOM.render(<LikeButton />, document.getElementById('react-app'));

// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));

/* import { Tarjeta } from './tarea/Tarea1.js';

ReactDOM.render(
  <Tarjeta
    nombre="Juan Pablo Navarro"
    titulo="Programador Front End"
    imagen="https://avatars1.githubusercontent.com/u/72494590?s=460&u=7bac058df7a17a2207378fc54adf31deba77775d&v=4"
  />,
  document.getElementById('react-app')
); */

/* import { BlogPost } from './tarea/Tarea1.js'

ReactDOM.render(
  <BlogPost
  titulo="Ardillas"
  parrafos={`Hoy vi una ardilla.
La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
  autor={{
    nombre: "Juan Pablo Navarro",
    titulo: "Programador Front End",
    imagen: "https://avatars1.githubusercontent.com/u/72494590?s=460&u=7bac058df7a17a2207378fc54adf31deba77775d&v=4"
  }}
/>,
document.getElementById('react-app')
) */

/* import { MatchNombre } from './tarea/Tarea2.js'

ReactDOM.render(
  <MatchNombre
  nombre = "Juan"
  />, 
  document.getElementById('react-app')
) */

/* import { PasswordInput } from './tarea/Tarea2.js'

ReactDOM.render(
  <PasswordInput
  minLenght = {6}
  />, 
  document.getElementById('react-app')
) */

/* import { ValidationInput } from './tarea/Tarea2.js'

function validateLength(value) {
  return (value.length >= 8)
}

function validateSpacing(value) {
  return (!value.match(" "))
}

function validateEmail(value) {
  return (value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
}

ReactDOM.render(
  <ValidationInput
    validation = {validateEmail}
    isPassword = {false}
  />,
  document.getElementById('react-app')
) */

/* import { UncontrolledCheckbox } from './tarea/Tarea3.js'

ReactDOM.render(
  <UncontrolledCheckbox
    name = 'casilla'
    initialValue = {true}
  />,
  document.getElementById('react-app')
) */

import { CheckboxList } from './tarea/Tarea3.js'

ReactDOM.render(
  <CheckboxList
    items={{
      uno: false,
      dos: true,
      tres: false,
    }}
  />,
  document.getElementById("react-app")
);
