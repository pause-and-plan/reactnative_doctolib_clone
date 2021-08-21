interface UserLoginProps {
  uuid?: string;
  username?: string;
  password?: string;
  salt?: string;
  md5?: string;
  sha1?: string;
  sha256?: string;
}

class UserLogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;

  constructor(props?: UserLoginProps) {
    this.uuid = props?.uuid ?? "";
    this.username = props?.username ?? "";
    this.password = props?.password ?? "";
    this.salt = props?.salt ?? "";
    this.md5 = props?.md5 ?? "";
    this.sha1 = props?.sha1 ?? "";
    this.sha256 = props?.sha256 ?? "";
  }
}

export { UserLogin, UserLoginProps };
export default UserLogin;
