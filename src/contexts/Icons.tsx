
import { createContext, ReactNode, useContext, useState} from 'react'
import { api } from '../services/api'
import { useAuth } from './Auth'

interface IconsProviderProps {
    children: ReactNode
}

interface IconsContexData {
    loadIcons: () => void
    icons: Icons[]
}

interface Icons {
    id: number
    image: string
}

const IconsContex = createContext<IconsContexData>({} as IconsContexData)

export const IconsProvider = ({children}: IconsProviderProps) => {
    const [icons, setIcons] = useState<Icons[]>([])
    const {accessToken} = useAuth()

    const loadIcons = () => {
        api.get('/icons', {headers: {Authorization: `Bearer ${accessToken}`}})
        .then(res => {
            setIcons(res.data)
        })
    }

    return(
        <IconsContex.Provider
            value={{
                icons,
                loadIcons,
            }}
        >
            {children}
        </IconsContex.Provider>
    )
}

export const useIcons = () => useContext(IconsContex)