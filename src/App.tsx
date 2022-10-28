import "./App.css";
import React from "react";
import RoutesMain from "./routes/RoutesMain";
import GlobalStyle from "./style/GlobalStyle";
import ModalProvider from "./providers/ModalProvider";
import ToastProvider from "./providers/ToastyProvider/ToasyProvider";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <ModalProvider>
          <GlobalStyle />
          <RoutesMain />
        </ModalProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
