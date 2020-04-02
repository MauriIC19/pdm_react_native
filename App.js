import React from 'react';
import AuthNavigator from './routes/AuthNavigator';
import { AuthProvider } from './auth/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <AuthNavigator />
    </AuthProvider>
  );
}