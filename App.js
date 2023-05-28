import { useState } from 'react';
import './App.css';

const App = () => {
  const INITIAL_GAME_STATE = {
    victory: false,
    startTime: null,
    endTime: null
  }

  const [userText, setUserText] = useState('');
  const [snippet, setSnippet] = useState('');
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  const SNIPPETS = [
    'The quick brown fox jumps over the lazy dog.',
    'The five boxing wizards jump quickly.',
    'OThe Taj Mahal is a magnificent monument located in Agra, Uttar Pradesh.',
    'Diwali, also known as the Festival of Lights, is widely celebrated in India.',
    'Yoga is an ancient practice that originated in India for physical and mental well-being.',
    'The Ganges River is considered sacred by Hindus and is a lifeline for millions of people.',
    'Bollywood is the largest film industry in India, producing a wide range of movies.',
    'Mahatma Gandhi, also called the Father of the Nation, played a crucial role in India"s independence movement. ',
    'Rajasthan is a state in India known for its vibrant culture, desert landscapes, and majestic palaces.',
    'India is known for its rich cultural heritage and diverse traditions.',
    'The Indian classical dance forms include Bharatanatyam, Kathak, Odissi, Kathakali, and Manipuri, each with its unique style and repertoire.',
    'The sun was shining brightly in the clear blue sky as a gentle breeze rustled through the leaves. It was a perfect day for a picnic in the park. Sarah and her friends spread out the checkered blanket and unpacked the delicious homemade sandwiches, fresh fruits, and refreshing drinks.'
  ];

  const chooseSnippet = (snippetIndex) => () => {
    setSnippet(SNIPPETS[snippetIndex]);
    setGameState({
      ...gameState,
      startTime: new Date().getTime(),
      victory: false
    })
    setUserText('');
  };

  const updateUserTest = (e) => {
    setUserText(e.target.value);

    if(e.target.value === snippet) {
      setGameState({
        ...gameState,
        victory: true,
        endTime: (new Date().getTime() - gameState.startTime) / 1000
      });
    };

    if(e.target.value === '') {
      setGameState({
        ...gameState,
        victory: false,
        startTime: new Date().getTime()
      });
    };
    console.log(e.target.value)
  };

  return (
    <div>
      <h2>Touch Typing</h2>
      <hr />
      <h3>
        Select text:
      </h3>
      {
        SNIPPETS.map((SNIPPET, index) => (
          <button onClick={chooseSnippet(index)} key={index}>
            {SNIPPET.substring(0, 10)}...
          </button>
        ))
      }
      <hr />
      <h3>Text</h3>
      <p>
        {snippet}
      </p>
      <input
        value={userText}
        onChange={updateUserTest}
      />

      <h4>
        {gameState.victory ? `Congrats!! Time: ${gameState.endTime} seconds` : 'Start Typing'}
      </h4>
      
    </div>
  );
}

export default App;