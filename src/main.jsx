import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";
import "./index.css";
import MainApp from "./MainApp.jsx";
import Modal from "react-modal";
import { persistor } from "./redux/store";
import Loader from "./components/Loader/Loader";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <BrowserRouter>
          <MainApp />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
