import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useAuth } from "./Auth";

interface PublicationProviderProps {
    children: ReactNode
}

interface Publication {
    userId: number
    icon: string
    username: string
    photo: string
    category: string
    description: string
    id: number   
}

interface PublicationContextData {
    publications: Publication[]
    addPublication: (publication: Publication) => void
    editPublication: (publication: Publication) => void
    deletePublication: (publication: Publication) => void
}

const PublicationContext = createContext<PublicationContextData> ({} as PublicationContextData)

const usePublication = () => useContext(PublicationContext)

const PublicationProvider = ({ children }: PublicationProviderProps ) => {
    
    const [publications, setPublications] = useState <Publication[]> ([])
    
    const { accessToken, user } = useAuth()

    useEffect(() => {
        api 
        .get(`publications`, {
            headers: {
                Authorization: `Bearer ${accessToken} `
            },
        })
        .then((response) => {
            setPublications(response.data)
        })
        .catch(err => setPublications(publications))
    }, [])

    const addPublication = (publication: Publication) => {}

    const editPublication = (publication: Publication) => {}

    const deletePublication = (publication: Publication) => {}

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
    )
}

export { usePublication, PublicationProvider }