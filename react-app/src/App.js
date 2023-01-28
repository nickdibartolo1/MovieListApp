import React, { useEffect, useState } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import Wrapper from "./UI/Wrapper";


function App() {

  // recieve localStorage
  const keepLocalItems = () => {
    let data = localStorage.getItem('MOVIE_LIST_APP_DATA')

    if (data) {
      return JSON.parse(localStorage.getItem('MOVIE_LIST_APP_DATA'));
    } else {
      return [];
    }
  }

  // Beginning of code

  const [list, setList] = useState(keepLocalItems());

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

  // set localStorage
  useEffect(() => {
    localStorage.setItem('MOVIE_LIST_APP_DATA', JSON.stringify(list))
    console.log(list)
  }, [list])


  return (
    <Wrapper>
      <Form onAddPick={addPickHandler}></Form>
      <List picks={list} onDeletePick={deletePickHandler}></List>
    </Wrapper>
  );
}

export default App;

