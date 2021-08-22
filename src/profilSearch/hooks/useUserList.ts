import React, { useState } from "react";
import getUserList from "../../randomUserAPI/logic/getUserList";
import User from "../../randomUserAPI/models/user";
import { useToast } from "native-base";
import { Colors } from "../../theme/colors";

const useUserList = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [error, setError] = useState<string>("");
  const toast = useToast();

  const refreshUserList = async (results?: number) => {
    try {
      const list: User[] = await getUserList({ results: results ?? 20 });
      setUserList([...userList, ...list]);
      if (error != "") setError("");
    } catch (_) {
      const errorMessage = "Echec du chargement des profils";
      setError(errorMessage);
      toast.show({
        title: errorMessage,
        status: "error",
      });
    }
  };

  const resetUserList = () => {
    setUserList([]);
    setError("");
  };

  return { userList, error, refreshUserList, resetUserList };
};

export default useUserList;
