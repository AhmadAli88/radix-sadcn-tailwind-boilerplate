import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./Navigation/RouterConfig";
import { LoaderPageWithoutBG } from "./assets/genericComponents/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />;
  return (
    <Suspense fallback={<LoaderPageWithoutBG />}>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
