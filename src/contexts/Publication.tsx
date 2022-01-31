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
  addPublication: (publication: CreatePublicationProps) => void;
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

  const addPublication = (publication: CreatePublicationProps) => {
      console.log(publication)
    api
      .post("/publications",publication,  {
        headers: {
          Authorization: `Bearer ${accessToken} `,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const editPublication = (publication: Publication) => {};

  const deletePublication = (publication: Publication) => {};

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
