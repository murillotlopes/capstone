import { useToast } from "@chakra-ui/react";
import axios from "axios";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { useHistory } from "react-router-dom";

import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  username: string;
  email: string;
  id: string;
  profile: string;
  password?: string
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
  profile: string;
}

interface AuthContextData {
  user: User;
  accessToken: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signUp: (credentials: SignUpCredentials) => Promise<void>;
  signOut: () => void;
  signUpdate: (Ndata: SignUpCredentials, onClose: () => void) => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@FindRecipes:accessToken");
    const user = localStorage.getItem("@FindRecipes:user");

    if (accessToken && user) {
      return {
        accessToken,
        user: JSON.parse(user),
      };
    }
    return {} as AuthState;
  });

  const history = useHistory();

  const signUp = useCallback(
    async ({ username, email, password, profile }: SignUpCredentials) => {
      await axios.post(
        "https://capstone-json.herokuapp.com/users",
        { username, email, password, profile }
      );

      history.push("/signin");
    },
    []
  );

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("/login", { email, password });

    const { accessToken, user } = response.data;

    localStorage.setItem("@FindRecipes:accessToken", accessToken);
    localStorage.setItem("@FindRecipes:user", JSON.stringify(user));

    setData({ accessToken, user } as AuthState);
  }, []);

  const signOut = useCallback(() => {
    localStorage.clear()

    setData({} as AuthState);
  }, []);

  const toast = useToast()

  const signUpdate = (Ndata: SignUpCredentials, onEditProClose: () => void) => {

    api.patch(`users/${data.user.id}`, Ndata, {headers: {Authorization: `Bearer ${data.accessToken}`}})
    .then( response => {

      const profile = {username: response.data.username, email: response.data.email , profile: response.data.profile , id: response.data.id}

      localStorage.setItem("@FindRecipes:user", JSON.stringify(profile))
  
      setData({accessToken: data.accessToken, user: profile} as AuthState)

      toast({
          position: "top",
          title: `Profile atualizado`,
          description: "Caso queira, estamos aqui",
          status: "success",
          duration: 9000,
          isClosable: true,
      });
      onEditProClose()
  })



  }

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signIn,
        signUp,
        signOut,
        signUpdate
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
