import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  username: string;
  email: string;
  id: string;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  accessToken: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signUp: (credentials: SignInCredentials) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@FindRecipes: accessToken");
    const user = localStorage.getItem("@FindRecipes: user");

    if (accessToken && user) {
      return {
        accessToken,
        user: JSON.parse(user),
      };
    }
    return {} as AuthState;
  });

  const signUp = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("/users", { email, password });

    const { accessToken, user } = response.data;

    localStorage.setItem("@FindRecipes: accessToken", accessToken);
    localStorage.setItem("@FindRecipes: user", JSON.stringify(user));

    setData({} as AuthState);
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("/login", { email, password });

    const { accessToken, user } = response.data;

    localStorage.setItem("@FindRecipes: accessToken", accessToken);
    localStorage.setItem("@FindRecipes: user", JSON.stringify(user));

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
