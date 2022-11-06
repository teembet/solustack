import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  Timestamp,
} from "firebase/firestore";
import { app, database } from "../firebaseConfig";
import { useRouter } from "next/router";
import { useProjectContext } from "./useProjectContext";

const useSubmitForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isData, setIsData] = useState(false);

  const submitForm = async (name, email, comment, subject?, type?) => {
    setIsLoading(true);
    setError(null);

    try {
      setIsLoading(true);
      // console.log(name, email, comment, subject, type);
      const ref = collection(database, "messages");
      await addDoc(ref, {
        name: name,
        email: email,
        comment: comment,
        date: Timestamp.now().toDate(),
        subject: subject,
        type: type,
      });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error, "error");
      // errorToast(error.message);
      setError(error);
    }
  };

  return {
    isLoading,
    error,
    submitForm,
  };
};

export default useSubmitForm;
