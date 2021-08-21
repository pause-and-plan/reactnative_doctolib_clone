import { RANDOM_USER_API_URL } from "../constants";
import User from "../models/user";
import axios from "axios";

interface getUserListProps {
  results?: number;
}

const getUserList = async (props?: getUserListProps): Promise<User[]> => {
  let url = RANDOM_USER_API_URL;
  if (props) url += "?";
  if (props?.results) url += `results=${props.results}`;

  const res = await axios.get(url);
  //@ts-ignore
  const userList = res?.data?.results?.map((item) => new User(item));
  return userList;
};

export default getUserList;
