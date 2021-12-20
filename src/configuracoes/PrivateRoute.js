// import React, { useContext, createContext, useState } from "react";
// import { auth } from "/pweb/src/configuracoes/Firebase";
// import {signInWithEmailAndPassword} from "firebase/auth"
// import { Route, Navigate } from "react-router-dom";

// // export default function AuthExample() {
// //   return (
// //     <ProvideAuth>
// //       <Router>
// //         <div>
// //           <AuthButton />

// //           <ul>
// //             <li>
// //               <Link to="/public">Public Page</Link>
// //             </li>
// //             <li>
// //               <Link to="/protected">Protected Page</Link>
// //             </li>
// //           </ul>

// //           <Switch>
// //             <Route path="/public">
// //               <PublicPage />
// //             </Route>
// //             <Route path="/login">
// //               <LoginPage />
// //             </Route>
// //             <PrivateRoute path="/protected">
// //               <ProtectedPage />
// //             </PrivateRoute>
// //           </Switch>
// //         </div>
// //       </Router>
// //     </ProvideAuth>
// //   );
// // }

// const fakeAuth = {
//   isAuthenticated: false,
//   signin(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// const authContext = createContext();

// export function ProvideAuth({ children }) {
//   const auth = useProvideAuth();
//   return (
//     <authContext.Provider value={auth}>
//       {children}
//     </authContext.Provider>
//   );
// }

// function useAuth() {
//   return useContext(authContext);
// }

// function useProvideAuth() {
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");

//   const signin = cb => {
//     return signInWithEmailAndPassword(auth, email, senha)
//   };

//   // const signout = cb => {
//   //   return fakeAuth.signout(() => {
//   //     setUser(null);
//   //     cb();
//   //   });
//   // };

//   // return {
//   //   user,
//   //   signin,
//   //   signout
//   // };
// }

// // function AuthButton() {
// //   let history = useHistory();
// //   let auth = useAuth();

// //   return auth.user ? (
// //     <p>
// //       Welcome!{" "}
// //       <button
// //         onClick={() => {
// //           auth.signout(() => history.push("/"));
// //         }}
// //       >
// //         Sign out
// //       </button>
// //     </p>
// //   ) : (
// //     <p>You are not logged in.</p>
// //   );
// // }

// // A wrapper for <Route> that redirects to the login
// // screen if you're not yet authenticated.
// export default function PrivateRoute({ children, ...rest }) {
//   let auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth.user ? (
//           children
//         ) : (
//           <Navigate to="/login" state={{ from: location }} />
//         )
//       }
//     />
//   );
// }

// // function PublicPage() {
// //   return <h3>Public</h3>;
// // }

// // function ProtectedPage() {
// //   return <h3>Protected</h3>;
// // }

// // function LoginPage() {
// //   let history = useHistory();
// //   let location = useLocation();
// //   let auth = useAuth();

// //   let { from } = location.state || { from: { pathname: "/" } };
// //   let login = () => {
// //     auth.signin(() => {
// //       history.replace(from);
// //     });
// //   };

// //   return (
// //     <div>
// //       <p>You must log in to view the page at {from.pathname}</p>
// //       <button onClick={login}>Log in</button>
// //     </div>
// //   );
// // }
