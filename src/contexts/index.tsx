import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./Auth";
import { PublicationProvider } from "./Publication";
import { RecipesProvider } from "./Recipes";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <RecipesProvider>
        <PublicationProvider>
          {children}
        </PublicationProvider>
      </RecipesProvider>
    </AuthProvider>
  </ChakraProvider>
);
