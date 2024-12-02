import { AuthContext } from "@/components/AuthContext";
import { Redirect } from "expo-router";
import { useContext } from "react";
import { StyleSheet } from "react-native";
import Login from "./login";

export default function Index() {
  const { isAuthenticated } = useContext(AuthContext);
  
  if(isAuthenticated)
    return(<Redirect href={{pathname: "/home"}} />);
  else
    return(<Login></Login>);  

}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { backgroundColor: '#e0e0e0', padding: 16, marginVertical: 8, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: 'bold' },
});