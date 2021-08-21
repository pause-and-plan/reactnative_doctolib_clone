interface UserPictureProps {
  large?: string;
  medium?: string;
  thumbnail?: string;
}

class UserPicture {
  large: string;
  medium: string;
  thumbnail: string;

  constructor(props?: UserPictureProps) {
    this.large = props?.large ?? "";
    this.medium = props?.medium ?? "";
    this.thumbnail = props?.thumbnail ?? "";
  }
}

export { UserPicture, UserPictureProps };
export default UserPicture;
