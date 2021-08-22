import React, { useState } from "react";
import User from "../../randomUserAPI/models/user";

interface useSearchFilterProps {
  profilList: User[];
}

const useSearchFilter = (props: useSearchFilterProps) => {
  const [filter, setFilter] = useState("");
  const resetFilter = () => setFilter("");

  const filterProfilList = () => {
    return props.profilList.filter((profil) => {
      const { first, last } = profil.name;
      const name = `Dr ${first} ${last}`;
      const regex = new RegExp(filter, "gi");
      if (name.match(regex)) return true;
    });
  };

  let filteredProfilList = props.profilList;
  if (filter !== "") filteredProfilList = filterProfilList();

  return { filteredProfilList, filter, setFilter, resetFilter };
};

export default useSearchFilter;
