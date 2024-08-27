import { createContext, useState } from "react";

type UserContextType = {
  name: string;
  setName: (name: string) => void;
};

export const UserContext = createContext<UserContextType>({
  name: "",
  setName: () => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState<string>("");

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}
