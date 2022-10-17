import { ProjectContext } from "../context";
import { useContext } from "react";

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error(
      "usePostContext must be used within an PostContextProvider"
    );
  }

  return context;
};
