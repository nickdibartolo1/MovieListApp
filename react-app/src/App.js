import React, { useState } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import Wrapper from "./UI/Wrapper";


function App() {

  const [list, setList] = useState([])

  const addPickHandler = (nMovie, nUrgency) => {
    setList((prevList) => {
      return [...prevList, {movie: nMovie, urgency: nUrgency, id: Math.random().toString()}]
    })
  }

  const deletePickHandler = (pickId) => {
    setList((prevList) => {
      const cleanedList = prevList.filter(pick => pick.id !== pickId)
      return cleanedList;
    });
  };


  return (
    <Wrapper>
      <Form onAddPick={addPickHandler}></Form>
      <List picks={list} onDeletePick={deletePickHandler}></List>
    </Wrapper>
  );
}

export default App;

