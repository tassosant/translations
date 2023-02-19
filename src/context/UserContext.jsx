import { createContext } from "react"
//is responsible for managing the user context

//A context relies on two parts, the context object and the context provider
//Context-> exposing (creating the context and then later we can pull out the context's value from this context object)
//provider->managing state

const UserContext = createContext()