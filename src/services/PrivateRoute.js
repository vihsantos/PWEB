// import React, { createContext, useContext } from "react";
// import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";

// function ProvideAuth({ children }) {
//   const auth = useProvideAuth();
//   return (
//     <authContext.Provider value={auth}>
//       {children}
//     </authContext.Provider>
//   );
// }

// function useAuth() {
//     return useContext(authContext);
// }

// function PrivateRoute({ children, ...rest }) {
//     let auth = useAuth();
//     return (
//       <Route
//         {...rest}
//         render={({ location }) =>
//           auth.user ? (
//             children
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: location }
//               }}
//             />
//           )
//         }
//       />
//     );
//   }