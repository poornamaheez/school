import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'John Admin',
    email: 'admin@school.edu',
    role: 'admin'
  });
  const [currentRole, setCurrentRole] = useState<UserRole>('admin');

  const login = (userData: User) => {
    setUser(userData);
    setCurrentRole(userData.role);
  };

  const logout = () => {
    setUser(null);
    setCurrentRole('admin');
  };

  return (
    <AuthContext.Provider value={{
      user,
      currentRole,
      setCurrentRole,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};