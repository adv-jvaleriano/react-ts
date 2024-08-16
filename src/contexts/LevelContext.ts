import { Context, createContext } from "react";

export const LevelContext: Context<number> = createContext<number>(0);

LevelContext.displayName = "Level Context";
