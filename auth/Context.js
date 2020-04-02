import React, { useReducer, useMemo, useEffect, createContext, useContext } from 'react'
import { AsyncStorage } from 'react-native'

const AuthContext = createContext()

export default AuthContext

export function AuthProvider(props) {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'CHECK_SESSION':
          return {
            ...prevState,
            isLoading: false,
            user: action.user,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            user: action.user,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            user: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      user: null,
    }
  )

  useEffect(() => {
    const check_session = async () => {
      let user;
      try {
        user = await AsyncStorage.getItem("user");
      }
      catch (e) {
        alert("Algo salió mal");
        console.error(e);
      }
      dispatch({ type: "CHECK_SESSION", user: user });
    }
    check_session();
  }, []);


  const value = useMemo(() => ({
    isSignout: state.isSignout,
    isLoading: state.isLoading,
    user: state.user,
    signIn: async (data) => {
      await AsyncStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "SIGN_IN", user: data })
    },
    signOut: async () => {
      await AsyncStorage.removeItem("user");
      dispatch({ type: "SIGN_OUT" });
    }
  }), [state])


  return <AuthContext.Provider value={value} {...props} />
}

export function useAuth() {
  const value = useContext(AuthContext)
  if (!value) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return value
}

export function withAuth(Component) {
  return function ComponentWithAuth(props) {
    return (
      <AuthContext.Consumer>
        {value => {
          if (!value) {
            throw new Error(
              'withAuth must be used within a AuthProvider'
            )
          }
          return <Component {...props} auth={value} />
        }}
      </AuthContext.Consumer>
    )
  }
}