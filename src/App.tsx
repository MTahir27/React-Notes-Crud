import React from "react";
import "./App.css";
import Header from "./Components/Header";
import NoteForm from "./Components/Form";
import CardComponent from "./Components/Card";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Container>
        <NoteForm />
        <CardComponent />
      </Container>
    </>
  );
}

export default App;
