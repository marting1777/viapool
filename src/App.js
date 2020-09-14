import React from "react";
import Container from "./components/Container";
import Title from "./components/Title";
import Form from "./containers/Form";

function App() {
  return (
    <Container stylesClass="App">
      <Title titleText={"ViaPool Challenge"} />
      <Form />
    </Container>
  );
}

export default App;
