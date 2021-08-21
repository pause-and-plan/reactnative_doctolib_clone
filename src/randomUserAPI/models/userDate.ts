interface UserDateProps {
  date?: string;
  age?: number;
}

class UserDate {
  date: string;
  age: number;
  constructor(props?: UserDateProps) {
    this.date = props?.date ?? "";
    this.age = props?.age ?? 0;
  }
}

export { UserDate, UserDateProps };
export default UserDate;
