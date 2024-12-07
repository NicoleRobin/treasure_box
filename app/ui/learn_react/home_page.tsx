'use client';

import {useState} from "react";
import Header from './header'

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    console.log("increment like count")
    setLikes(likes + 1)
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick} className={`bg-blue-500`}>Like({likes})</button>
    </div>
  );
}