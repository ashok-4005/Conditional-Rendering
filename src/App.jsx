import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Joke} from './joke.jsx';

import datas from './jokeData.js'
import Header from './header.jsx';

const App = () =>{

  const dataFrom = datas.map(data =>{
      return(
        <Joke
            key = {data.id}
            setup = {data.setup}
            punchline = {data.punchline}
        />
      );
  });

  return(
    <>
      <Header/>
      {dataFrom}
    </>
  )

 
}

export default App
