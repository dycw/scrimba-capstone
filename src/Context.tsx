import { useState, createContext, Dispatch, SetStateAction } from "react";

type ContextType = {
  value: string;
  setValue?: Dispatch<SetStateAction<string>>;
};
const defaultState = { value: "" };
export const Context = createContext<ContextType>(defaultState);

type Props = {
  children: React.ReactElement;
};

export function ContextProvider(props: Props) {
  const [value, setValue] = useState<string>("");

  return (
    <Context.Provider value={{ value, setValue }}>
      {props.children}
    </Context.Provider>
  );
}
