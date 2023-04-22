import { createContext } from "react";
import { IContextType } from "../types/inext";

export const UserContext = createContext<IContextType | null>(null);