import React from 'react'
import Link from "@material-ui/core/Link";

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
          <h1>Oh no, somthing went wrong!</h1>
          
          <div>
            <pre><h3>{state.error.message}</h3></pre>
            <Link href="/login"><h2>Go Back</h2></Link>
          </div>
        </div>
      ) : state.isLoading? <div>Loading...</div> :(  //think about some nice spinner until we get response
        children
      )}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
