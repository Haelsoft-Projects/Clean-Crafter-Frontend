"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>("hello word");
type Namer={type:string,  city:string, street:string, job_decription:string}
export function Appwrapper({ children }: { children: React.ReactNode }) {
const [name, setName] = useState<Namer>({type:"",  city:"", street:"", job_decription:""});
  return (
    <AppContext.Provider
      value={{
        name,
        setName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
