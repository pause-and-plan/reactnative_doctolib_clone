import UserDate, { UserDateProps } from "./userDate";
import UserLocation, { UserLocationProps } from "./userLocation";
import UserLogin, { UserLoginProps } from "./userLogin";
import Username, { UsernameProps } from "./username";
import UserPicture, { UserPictureProps } from "./userPicture";

interface UserProps {
  gender?: string;
  name?: UsernameProps;
  location?: UserLocationProps;
  email?: string;
  login?: UserLoginProps;
  dob?: UserDateProps;
  registered?: UserDateProps;
  phone?: string;
  cell?: string;
  id?: { name?: string; value?: string };
  picture?: UserPictureProps;
  nat?: string;
}

class User {
  gender: string;
  name: Username;
  location: UserLocation;
  email: string;
  login: UserLogin;
  dob: UserDate;
  registered: UserDate;
  phone: string;
  cell: string;
  id: { name: string; value: string };
  picture: UserPicture;
  nat: string;

  constructor(props?: UserProps) {
    this.gender = props?.gender ?? "";
    this.name = new Username(props?.name);
    this.location = new UserLocation(props?.location);
    this.email = props?.email ?? "";
    this.login = new UserLogin(props?.login);
    this.dob = new UserDate(props?.dob);
    this.registered = new UserDate(props?.registered);
    this.phone = props?.phone ?? "";
    this.cell = props?.cell ?? "";
    this.id = { name: props?.id?.name ?? "", value: props?.id?.value ?? "" };
    this.picture = new UserPicture(props?.picture);
    this.nat = props?.nat ?? "";
  }
}

export { User, UserProps };
export default User;
