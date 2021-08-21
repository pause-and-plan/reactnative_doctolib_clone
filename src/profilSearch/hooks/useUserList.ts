import React, { useState } from "react";
import getUserList from "../../randomUserAPI/logic/getUserList";
import User from "../../randomUserAPI/models/user";

const useUserList = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [error, setError] = useState<string>("");

  const refreshUserList = async () => {
    try {
      const list: User[] = await getUserList({ results: 20 });
      setUserList([...userList, ...list]);
      if (error != "") setError("");
    } catch (_) {
      setError("Echec du chargement des profils");
    }
  };

  const resetUserList = () => {
    setUserList([]);
    setError("");
  };

  return { userList, error, refreshUserList, resetUserList };
};

export default useUserList;
