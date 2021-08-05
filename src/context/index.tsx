import { AuthProvider } from "./auth_context";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
