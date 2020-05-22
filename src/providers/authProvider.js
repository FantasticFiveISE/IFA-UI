import React from 'react'

export const AuthContext = React.createContext();

function AuthProvider({children}) {
  const [state, setState] = React.useState({
    isLoading: false,
    error: null,
    user: null,
  })

  return (
    <AuthContext.Provider value={{state, setState}}>
      { state.error != null ? (
        <div>
          Oh no
          <div>
            <pre>{state.error.message}</pre>
          </div>
        </div>
      ) : state.isLoading? <div>Loading...</div> :(  //think about some nice spinner until we get response
        children
      )}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
