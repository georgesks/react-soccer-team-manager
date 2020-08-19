import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Juan Carlitos",
      foto:
        "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg",
    },
    {
      id: 2,
      nombre: "Beto Quiroga",
      foto:
        "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg",
    },
    {
      id: 3,
      nombre: "Alejo Garcia",
      foto:
        "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg",
    },
    {
      id: 4,
      nombre: "Fernando Garcia",
      foto:
        "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg",
    },
    {
      id: 5,
      nombre: "Carlos Garcia",
      foto:
        "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg",
    },
    {
      id: 6,
      nombre: "Fernando Morelos",
      foto:
        "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg",
    },
    {
      id: 7,
      nombre: "Quinto Tercero",
      foto:
        "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg",
    },
    {
      id: 13,
      nombre: "Percy Tuncar",
      foto:
        "https://api.ed.team/files/avatars/b0801e8a-8bf0-442f-b2ef-0ddaf6ee7aef.png",
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  if (action.type === "AGREGAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }
  if (action.type === "AGREGAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }
  if (action.type === "QUITAR_TITULAR") {
    return {
      ...state,
      jugadores: state.jugadores.concat(action.jugador),
      titulares: state.titulares.filter((j) => j.id !== action.jugador.id),
    };
  }
  if (action.type === "QUITAR_SUPLENTE") {
    return {
      ...state,
      jugadores: state.jugadores.concat(action.jugador),
      suplentes: state.suplentes.filter((j) => j.id !== action.jugador.id),
    };
  }
  return state;
};

export default createStore(reducerEntrenador);
