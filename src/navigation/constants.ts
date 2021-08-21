import User from "../randomUserAPI/models/user";

export const STACK_NAVIGATOR = "STACK_NAVIGATOR";

export type RootStackParamList = {
  ProfilSearch: undefined;
  ProfilDetails: { profil: User };
};
