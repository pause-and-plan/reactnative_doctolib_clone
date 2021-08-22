import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilSearchPage from "../profilSearch/view/ProfilSearchPage";
import ProfilDetailsPage from "../profilDetails/view/ProfilDetailsPage";
import { RootStackParamList } from "./constants";
import HomePage from "../Home/view/HomePage";

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"ProfilSearch"}
        component={ProfilSearchPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"ProfilDetails"}
        component={ProfilDetailsPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
