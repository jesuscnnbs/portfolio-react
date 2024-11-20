import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Routes/Home';
import About from './Routes/About';
import Project from './Routes/Project';
import Dashboard from './Routes/Dashboard';
import Login from './Routes/Login';
import { getFirestore } from 'firebase/firestore';

import * as reactfire from 'reactfire';
import "./index.css";
import { firebaseApp, auth } from "./firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "projects/:projectId",
    element: <Project />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default function App() {
  const firestoreInstance = getFirestore(reactfire.useFirebaseApp());
  return (
    <reactfire.AuthProvider sdk={auth}>
      <reactfire.FirestoreProvider sdk={firestoreInstance}>
        <RouterProvider router={router} />
      </reactfire.FirestoreProvider>
    </reactfire.AuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <reactfire.FirebaseAppProvider firebaseApp={firebaseApp}>
      <App />
    </reactfire.FirebaseAppProvider>
  </React.StrictMode>
);
