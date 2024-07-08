import { useState } from 'react'
import Card from './pages/Card'

function App() {
  let data = [
    {
        "name": "Alice",
        "text": "Hello, this is Alice.",
        "profile_pic": "https://example.com/images/alice_profile_pic.jpg"
    },
    {
        "name": "Bob",
        "text": "Hi, I'm Bob.",
        "profile_pic": "https://example.com/images/bob_profile_pic.jpg"
    },
    {
        "name": "Charlie",
        "text": "Good day, Charlie here.",
        "profile_pic": "https://example.com/images/charlie_profile_pic.jpg"
    },
    {
        "name": "Diana",
        "text": "Hello, Diana speaking.",
        "profile_pic": "https://example.com/images/diana_profile_pic.jpg"
    },
    {
        "name": "Eve",
        "text": "Hi there, Eve here.",
        "profile_pic": "https://example.com/images/eve_profile_pic.jpg"
    }
]


  return (
    data.map((X) => <Card name={X.name} text={X.text}/>)
  )
}

export default App
