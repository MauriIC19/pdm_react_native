import React from 'react';
import { AuthProvider } from './auth/Context'
import Router from './routes/MainNavigator'

export default function App() {
  return (
      <AuthProvider>
        <Router />
      </AuthProvider>
  );
}