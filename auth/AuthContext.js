import React, { createContext, useReducer, useEffect, useMemo, useContext } from 'react';
import { AsyncStorage } from 'react-native';

const AuthContext = createContext();

export default AuthContext;

export function AuthProvider(props) {
    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case "CHECK_SESSION":
                    return {
                        ...prevState,
                        isLoading: false,
                        user: action.user
                    };
                case "SIGN_IN":
                    return {
                        ...prevState,
                        isSignout: false,
                        user: action.user
                    };
                case "SIGN_OUT":
                    return {
                        ...prevState,
                        isSignout: true,
                        user: null
                    };
            }
        },
        {
            isSignout: false,
            isLoading: true,
            user: null
        }
    );

    useEffect(() => {
        const check_session = async () => {
            let user;
            try {
                user = await AsyncStorage.getItem('user');
            }
            catch (e) {
                alert("Algo salió mal");
                console.log(e);
            }
            dispatch({ type: "CHECK_SESSION", user: user });
        }
        check_session();
    }, []);

    const auth = useMemo(() => ({
        isSignout: state.isSignout,
        isLoading: state.isLoading,
        user: state.user,
        signIn: async (data) => {
            await AsyncStorage.setItem("user", JSON.stringify(data));
            dispatch({ type: "SIGN_IN", user: data });
        },
        signOut: async () => {
            await AsyncStorage.removeItem("user");
            dispatch({ type: "SIGN_OUT" });
        }
    }), [state]);

    return <AuthContext.Provider value={auth} {...props} />
}

export function useAuth() {
    const auth = useContext(AuthContext);
    if (!auth) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return auth;
}

export function withAuth(Component) {
    return function ComponentWithAuth(props) {
        return (
            <AuthContext.Consumer>
                {
                    auth => {
                        if (!auth) {
                            throw new Error("useAuth must be used within a AuthProvider");
                        }
                        return (<Component {...props} auth={auth} />);
                    }
                }
            </AuthContext.Consumer>
        );
    }
}