import { useToast } from "@chakra-ui/react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { useAuth } from "./Auth";

interface PublicationProviderProps {
  children: ReactNode;
}

interface Publication {
  userId: number;
  icon: string;
  username: string;
  photo: string;
  category: string;
  description: string;
  id: number;
}

interface CreatePublicationProps {
  userId: number;
  icon: string;
  username: string;
  photo: string;
  category: string;
  description: string;
}

interface PublicationContextData {
  publications: Publication[];
  addPublication: (
    publication: CreatePublicationProps,
    onClose: () => void
  ) => void;
  editPublication: (publication: Publication) => void;
  deletePublication: (publication: Publication) => void;
}

const PublicationContext = createContext<PublicationContextData>(
  {} as PublicationContextData
);

const usePublication = () => useContext(PublicationContext);

const PublicationProvider = ({ children }: PublicationProviderProps) => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const { accessToken, user } = useAuth();
  const toast = useToast();

  useEffect(() => {
    api
      .get<Publication[]>(`publications`, {
        headers: {
          Authorization: `Bearer ${accessToken} `,
        },
      })
      .then((response) => {
        setPublications(response.data);
      })
      .catch((err) => setPublications(publications));
  }, []);

  const addPublication = (
    publication: CreatePublicationProps,
    onClose: () => void
  ) => {
    console.log(publication);
    api
      .post("/publications", publication, {
        headers: {
          Authorization: `Bearer ${accessToken} `,
        },
      })
      .then((_) => {
        toast({
          position: "top",
          title: "Yummi",
          description: "Seu post foi enviado com sucesso!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        onClose();
        setTimeout(() => {
          document.location.reload();
        }, 3000);
      })
      .catch((err) =>
        toast({
          position: "top",
          title: "Ooops",
          description: "Algo deu errado, tente novamente.",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      );
  };

  const editPublication = (publication: Publication) => {
    api
      .patch(`/publications/${publication.id}`, publication, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => console.log(res))
      .catch((err) =>        toast({
        position: "top",
        title: "Erro ao editar seu post!",
        description: "Tente novamente.",
        status: "error",
        duration: 9000,
        isClosable: true,
      }));
  };

  const deletePublication = (publication: Publication) => {
    api
      .delete(`/publications/${publication.id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res);
        toast({
          position: "top",
          title: "Seu post foi deletado com sucesso!",
          description: "A página será atualizada.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        setTimeout(() => {
          document.location.reload();
        }, 3000);
      })
      .catch((err) =>
        toast({
          position: "top",
          title: "Erro ao deletar seu post!",
          description: "Tente novamente.",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      );
  };

  return (
    <PublicationContext.Provider
      value={{
        publications,
        addPublication,
        editPublication,
        deletePublication,
      }}
    >
      {children}
    </PublicationContext.Provider>
  );
};

export { usePublication, PublicationProvider };
