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
  category: string;
  description: string;
  id: number;
  date: string;
}

interface CreatePublicationProps {
  userId: number;
  icon: string;
  username: string;
  category: string;
  description: string;
}

interface EditPublicationData {
  description?: string;
  category?: string;
}

interface PublicationContextData {
  publications: Publication[];
  addPublication: (
    publication: CreatePublicationProps,
    onClose: () => void
  ) => void;
  editPublication: (
    publication: Publication,
    editData: EditPublicationData,
    onClose: () => void
  ) => void;
  deletePublication: (publication: Publication) => void;
}

const PublicationContext = createContext<PublicationContextData>(
  {} as PublicationContextData
);

const usePublication = () => useContext(PublicationContext);

const PublicationProvider = ({ children }: PublicationProviderProps) => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const { accessToken } = useAuth();
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
      });
  });

  const addPublication = (
    publication: CreatePublicationProps,
    onClose: () => void
  ) => {
    const date = new Date();
    const dia = String(date.getDate()).padStart(2, "0");
    const mes = String(date.getMonth() + 1).padStart(2, "0");
    const ano = date.getFullYear();
    const actualDate = dia + "/" + mes + "/" + ano;
    const actualPublication = { ...publication, date: actualDate };

    api
      .post("/publications", actualPublication, {
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

  const editPublication = (
    publication: Publication,
    editData: EditPublicationData,
    onClose: () => void
  ) => {
    api
      .patch(`/publications/${publication.id}`, editData, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((_) => {
        toast({
          position: "top",
          title: "Post editado com sucesso!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        onClose();
      })
      .catch((err) =>
        toast({
          position: "top",
          title: "Erro ao editar seu post!",
          description: "Tente novamente.",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      );
  };

  const deletePublication = (publication: Publication) => {
    api
      .delete(`/publications/${publication.id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((_) => {
        toast({
          position: "top",
          title: "Seu post foi deletado com sucesso!",
          description: "A página será atualizada.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
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
