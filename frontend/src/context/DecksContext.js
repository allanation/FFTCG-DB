const { createContext, useReducer } = require("react");

export const DecksContext = createContext();

export const decksReducer = (state, action) => {
  switch (action.type) {
    case "SET_DECKS":
      return { decks: action.payload };
    case "CREATE_DECK":
      return { decks: [action.payload, ...state.workouts] };
    case "DELETE_DECK":
      return {
        decks: state.decks.filter((deck) => deck._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const DecksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(decksReducer, { decks: null });
  return (
    <DecksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DecksContext.Provider>
  );
};
