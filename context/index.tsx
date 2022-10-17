import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useReducer,
} from "react";

interface ContextInterface {
  projects: [];
  project: any;
  isLoading: boolean;
  dispatch: ({}) => void;
}
export const ProjectContext = createContext<ContextInterface | null>(null);

export const projectReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };

    case "GET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    case "GET_PROJECT":
      return {
        ...state,
        project: action.payload,
      };

    default:
      return state;
  }
};

type Props = {
  children: ReactNode;
};
export const ContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(projectReducer, {
    projects: [],
    project: {},
    isLoading: false,
  });

  return (
    <ProjectContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};
