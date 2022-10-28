import React, { createContext, ReactNode, SetStateAction } from "react";
import { useState } from "react";

interface Icontext {
    children: ReactNode    
};

interface IcontextProps {
    addButton: boolean
    editButton: boolean
    registerButton: boolean
    id: string | number
    placeholder: string
    setAddButton: React.Dispatch<SetStateAction<boolean>>
    setEditButton: React.Dispatch<SetStateAction<boolean>>
    setRegisterButton: React.Dispatch<SetStateAction<boolean>>
    setId: React.Dispatch<SetStateAction<string>>
    setPlaceholder: React.Dispatch<SetStateAction<string>>
};

export const AddButtonContext = createContext<IcontextProps>({} as IcontextProps);

const AddButtonProvider = ({children}: Icontext) => {

    const [addButton, setAddButton] = useState(false)
    const [editButton, setEditButton] = useState(false)
    const [id, setId] = useState('')
    const [registerButton, setRegisterButton] = useState(false)
    const [placeholder, setPlaceholder] = useState("")

    return (
        <AddButtonContext.Provider value={{addButton, setAddButton, 
        editButton, setEditButton, id, setId,
        registerButton, setRegisterButton, placeholder, setPlaceholder}}>
            {children}
        </AddButtonContext.Provider>
    )
}

export default AddButtonProvider
