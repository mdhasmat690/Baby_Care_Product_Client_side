import { useContext } from "react";
import { AuthContext } from "../Contex/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
