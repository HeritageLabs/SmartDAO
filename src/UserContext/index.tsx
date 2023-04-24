import { createContext } from "react";
import { IContextType } from "../types";

export const UserContext = createContext<IContextType | null>(null);