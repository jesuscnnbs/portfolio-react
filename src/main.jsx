import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Routes/Home';
import About from './Routes/About';
import Project from './Routes/Project';
import { getFirestore } from 'firebase/firestore';

import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirebaseApp,
} from 'reactfire';
import "./index.css";
import firebaseApp from "./firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "projects/:projectId",
    element: <Project />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <RouterProvider router={router} />
    </FirestoreProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseApp={firebaseApp}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);
