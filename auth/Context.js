import React, { useReducer, useMemo, useEffect, createContext, useContext } from 'react'
import { AsyncStorage } from 'react-native'

const AuthContext = createContext()

export default AuthContext

export function AuthProvider(props) {
    const [state, dispatch] = useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'RESTORE_TOKEN':
              return {
                ...prevState,
                userToken: action.token,
                isLoading: false
              };
            case 'SIGN_IN':
              return {
                ...prevState,
                userToken: action.token,
                isSignout: false
              }
            case 'SIGN_OUT':
              return {
                ...prevState,
                userToken: null,
                isSignout: true
              }
          }
        },
        {
          isLoading: true,
          userToken: null,
          isSignout: true
        }
      )
    
      useEffect(() => {
        const auth = async () => {
          let userToken;
          try {
            userToken = await AsyncStorage.getItem("user");
          }
          catch (e) {
            alert("Algo salió mal");
            console.error(e);
          }
          dispatch({ type: "RESTORE_TOKEN", token: null });
        }
        auth();
      }, []);
    
    
      const value = useMemo(() => ({
        isLoading: state.isLoading,
        isSignout: state.isSignout,
        signIn: (data) => {
          //Haríamos la autenticación
          dispatch({ type: 'SIGN_IN', token: "dummy_token" })
        },
        signOut: () => {
          dispatch({ type: 'SIGN_OUT', token: null });
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