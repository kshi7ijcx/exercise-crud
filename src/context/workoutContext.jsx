import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

const workoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return { allWorkouts: action.payload };
    case "CREATE_WORKOUT":
      return { allWorkouts: [action.payload, ...state.allWorkouts] };
    case "DELETE_WORKOUT":
      return { allWorkouts: state.allWorkouts.filter((w)=>w._id !== action.payload._id) }
    default:
      return state;
  }
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, { allWorkouts: null });

  return (
    <WorkoutContext.Provider value={{...state,dispatch}}>
        {children}
    </WorkoutContext.Provider>
  )
};
