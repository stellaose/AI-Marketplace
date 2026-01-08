/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Loader from "@components/general/Loader";
import { GlobalStyle } from "./styles/GlobalStyle";
import { routes } from "./Pages";
import { useEffect } from "react";
import { useCartStore } from "@store/cartStore";
function App() {
  const init = useCartStore((s) => s.init);

  useEffect(() => {
    init();
  }, []);
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
