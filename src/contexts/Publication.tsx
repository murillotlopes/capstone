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


  interface EditPublicationData{
   
      description?: string;
      photo?:string;
      category?:string;
    }
  

interface PublicationContextData {
  publications: Publication[];
  addPublication: (
    publication: CreatePublicationProps,
    onClose: () => void
  ) => void;
  editPublication: (publication : Publication) => void;
  deletePublication: (publication: Publication) => void;
  setEditPublicationData:(arg: EditPublicationData) => void;
  editPublicationData: EditPublicationData;
}

const PublicationContext = createContext<PublicationContextData>(
  {} as PublicationContextData
);

const usePublication = () => useContext(PublicationContext);

const PublicationProvider = ({ children }: PublicationProviderProps) => {
  const [editPublicationData, setEditPublicationData] = useState<EditPublicationData>({} as EditPublicationData)
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
    const date = new Date();
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();
    const actualDate = dia + '/' + mes + '/' + ano;
    const actualPublication = {...publication, date: actualDate}

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

  const editPublication = (publication : Publication) => {
    
    console.log(editPublicationData)
    api
      .patch(`/publications/${publication.id}`, editPublicationData, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) =>{
        console.log(res)
        setEditPublicationData({} as EditPublicationData)
      })
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
        editPublicationData,
        setEditPublicationData,
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
