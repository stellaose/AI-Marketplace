import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Loader from "@components/general/Loader";
import { GlobalStyle } from "./styles/GlobalStyle";
import { routes } from "./Pages";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <GlobalStyle />
        <RouterProvider router={routes} />
      </Suspense>
    </>
  );
}

export default App;
