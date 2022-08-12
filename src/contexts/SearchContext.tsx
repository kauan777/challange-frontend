import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../services/api";


type SearchContextProviderProps = {
    children: ReactNode
}

type SearchContextData = {
    textSearch: string;
    setTextSearch: React.Dispatch<React.SetStateAction<string>>

    clickInSearch: boolean;
    setClickInSearch: React.Dispatch<React.SetStateAction<boolean>>

    user: User | null;
    getUserById:() => void;
}

interface User {
    email: string;
    fullName: string;
    nickName: string;
    userName: string;
    permName: string;
    imageId: string;
    messageAwayOrBusy: string;
    enterprises: Entreprise[] | []
    phoneNumbers: Phone[]
}

interface Phone{
  id: string;
  number: string;
}

interface Entreprise {
  id: string;
  name: string;
  socialReazon: string;
}

export const SearchContext = createContext({} as SearchContextData);    

export function SearchContextProvider({children}: SearchContextProviderProps){
  
  const [textSearch, setTextSearch] = useState("")  
    const [user, setUser] = useState<User | null>(null)
    const [clickInSearch, setClickInSearch] = useState(false)

    console.log(user)
    const getUserById = async () => {

      if(textSearch == ""){
        toast.error("Campo vazio.")
        return;
      }

      try{
        const { data } = await api.get(`/users/by-id/${textSearch}`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_APP_AUTHORIZATION_KEY_BEARER}`,
            b1012cc01979aeab712c99924ed4c3e3433d072: `${import.meta.env.VITE_APP_SECOND_KEY}`,
          },
        });
        setUser(data.result);
        setClickInSearch(true);

        }catch(err){
          toast.error("Usuário não encontrado.")
        }
      };
    
    return (
        <SearchContext.Provider
            value={{
                textSearch,
                setTextSearch,
                user,
                getUserById,
                clickInSearch,
                setClickInSearch
            }}>
            {children}
        </SearchContext.Provider>
        )
}

export const useSearch = () => useContext(SearchContext)