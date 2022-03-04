import React from "react";
import "./App.css";
import Header from "./Components/Header";
import NoteForm from "./Components/Form";
import NotesContainer from "./Components/Container";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Container>
        <NoteForm />
        <NotesContainer />
      </Container>
    </>
  );
}

export default App;
