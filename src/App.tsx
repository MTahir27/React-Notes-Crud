import React from "react";
import "./App.css";
import Header from "./Components/Header";
import CardComponent from "./Components/Card";
import NoteForm from "./Components/Form";

function App() {
  return (
    <>
      <Header />
      <NoteForm />
      <CardComponent />

    </>
  );
}

export default App;
