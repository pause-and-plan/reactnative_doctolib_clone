interface UserLocationProps {
  street?: { name?: string; number?: string };
  city?: string;
  state?: string;
  postcode?: string;
  coordinates?: { latitude?: string; longitude?: string };
  timezone?: { offset?: string; description?: string };
}

class UserLocation {
  street: { name: string; number: string };
  city: string;
  state: string;
  postcode: string;
  coordinates: { latitude?: string; longitude?: string };
  timezone: { offset?: string; description?: string };

  constructor(props?: UserLocationProps) {
    this.street = {
      name: props?.street?.name ?? "",
      number: props?.street?.number ?? "",
    };
    this.city = props?.city ?? "";
    this.state = props?.state ?? "";
    this.postcode = props?.postcode ?? "";
    this.coordinates = props?.coordinates ?? { latitude: "", longitude: "" };
    this.timezone = props?.timezone ?? { offset: "", description: "" };
  }
}

export { UserLocation, UserLocationProps };
export default UserLocation;
