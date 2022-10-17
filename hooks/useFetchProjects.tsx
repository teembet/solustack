import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { app, database } from "../firebaseConfig";
import { useRouter } from "next/router";
import { useProjectContext } from "./useProjectContext";
const useFetchProjects = () => {
  const route = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isData, setIsData] = useState(false);
  const [projects, setProjects] = useState(null);
  const [project, setProject] = useState(null);
  const { dispatch } = useProjectContext();

  const getProjects = async () => {
    dispatch({ type: "GET_LOADING", payload: isLoading });
    setError(null);

    try {
      const dbInstance = collection(database, "projects");

      const res = getDocs(dbInstance);

      const response = (await res).docs.map((item) => {
        return { ...item.data(), id: item.id };
      });

      if (response) {
        setProjects(response);
        setIsLoading(false);
        dispatch({ type: "GET_ALL_PROJECTS", payload: response });
        dispatch({ type: "GET_LOADING", payload: isLoading });
      } else {
        setIsLoading(false);
        dispatch({ type: "GET_LOADING", payload: isLoading });
      }
    } catch (error) {
      setIsLoading(false);
      dispatch({ type: "GET_LOADING", payload: isLoading });
      // errorToast(error.message);
      setError(error);
    }
  };

  const getProject = async (id) => {
    dispatch({ type: "GET_LOADING", payload: isLoading });
    console.log(id, "id");
    setError(null);

    try {
      const singleProject = doc(database, "projects", id);
      const data = getDoc(singleProject);

      const response = { ...(await data).data(), id: (await data).id };
      setProject(response);
      if (response) {
        console.log(response, "response");
        setIsLoading(false);
        dispatch({ type: "GET_PROJECT", payload: response });
        dispatch({ type: "GET_LOADING", payload: isLoading });
        route.push(`/project/${id}`);
      } else {
        setIsLoading(false);

        dispatch({ type: "GET_LOADING", payload: isLoading });
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      dispatch({ type: "GET_LOADING", payload: isLoading });
    }
  };

  return {
    isLoading,
    error,
    getProjects,
    getProject,
    projects,
    project,
  };
};

export default useFetchProjects;
