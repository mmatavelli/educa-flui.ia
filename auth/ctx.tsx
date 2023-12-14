import React from 'react';
import { useStorageState } from './useStorageState';

type AuthContextData = {
  signIn: ({ email, password }: { email: string; password: string }) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
};

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export function useSession() {
  const value = React.useContext(AuthContext);
  if (!value) {
    throw new Error('useSession must be wrapped in a <SessionProvider />');
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: async () => {
          setSession('xxx');
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
