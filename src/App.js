import "./App.css";

import React from "react";

import Form from "./Form.js";
import Header from "./Header.js";
import Preview from "./Preview.js";
import { AppContextProvider } from "./AppContext";


// TODO: Connect form to preview
function App() {
  

  const feedbackPlaceholder =
    "Let us know what we did well or could improve...";

  return (
    <AppContextProvider>
      <div className="app">
        <Header />
        <main className="app-main">
          <section className="app-left">
            <Form feedbackPlaceholder={feedbackPlaceholder} />
          </section>
          <section className="app-right">
            <Preview feedbackPlaceholder={feedbackPlaceholder} />
          </section>
        </main>
      </div>
    </AppContextProvider>
    
  );
}

export default App;
