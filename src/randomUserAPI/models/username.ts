interface UsernameProps {
  title?: string;
  first?: string;
  last?: string;
}

class Username {
  title: string;
  first: string;
  last: string;

  constructor(props?: UsernameProps) {
    this.title = props?.title ?? "";
    this.first = props?.first ?? "";
    this.last = props?.last ?? "";
  }
}

export { Username, UsernameProps };
export default Username;
