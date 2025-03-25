import React from 'react'

function App() {

const USERS =[
    {
      "name": "Jon Snow",
      "city": "Winterfell",
      "age": 25,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Daenerys Targaryen",
      "city": "Dragonstone",
      "age": 22,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Arya Stark",
      "city": "Winterfell",
      "age": 18,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Tyrion Lannister",
      "city": "King's Landing",
      "age": 34,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Cersei Lannister",
      "city": "King's Landing",
      "age": 40,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Sansa Stark",
      "city": "Winterfell",
      "age": 20,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Jorah Mormont",
      "city": "Bear Island",
      "age": 45,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Bran Stark",
      "city": "Winterfell",
      "age": 16,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Robb Stark",
      "city": "Winterfell",
      "age": 24,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Jaime Lannister",
      "city": "King's Landing",
      "age": 38,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Theon Greyjoy",
      "city": "Pyke",
      "age": 28,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Samwell Tarly",
      "city": "Horn Hill",
      "age": 25,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Sandor Clegane",
      "city": "Kings Road",
      "age": 40,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Petyr Baelish",
      "city": "Harrenhal",
      "age": 42,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Varys",
      "city": "King's Landing",
      "age": 50,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Missandei",
      "city": "Naath",
      "age": 23,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Grey Worm",
      "city": "Astapor",
      "age": 30,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Brienne of Tarth",
      "city": "Tarth",
      "age": 32,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Podrick Payne",
      "city": "King's Landing",
      "age": 22,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Davos Seaworth",
      "city": "Storm's End",
      "age": 52,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Stannis Baratheon",
      "city": "Dragonstone",
      "age": 47,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Melisandre",
      "city": "Asshai",
      "age": 40,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Gendry",
      "city": "Flea Bottom",
      "age": 26,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Tormund Giantsbane",
      "city": "Beyond the Wall",
      "age": 39,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Ygritte",
      "city": "Beyond the Wall",
      "age": 27,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Ramsay Bolton",
      "city": "Winterfell",
      "age": 30,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Joffrey Baratheon",
      "city": "King's Landing",
      "age": 18,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Tommen Baratheon",
      "city": "King's Landing",
      "age": 14,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Margaery Tyrell",
      "city": "Highgarden",
      "age": 24,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Olenna Tyrell",
      "city": "Highgarden",
      "age": 72,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Loras Tyrell",
      "city": "Highgarden",
      "age": 25,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Balon Greyjoy",
      "city": "Pyke",
      "age": 50,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Euron Greyjoy",
      "city": "Pyke",
      "age": 42,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "The Hound",
      "city": "Kings Road",
      "age": 45,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Qyburn",
      "city": "King's Landing",
      "age": 50,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    },
    {
      "name": "Lancel Lannister",
      "city": "King's Landing",
      "age": 26,
      "avatar": "https://www.freepik.com/free-photos-vectors/avatar"
    }
  ]

  return (
    <div className='text-center bg-blue-500 p-2 shadow-lg'>
      <h1 className='text-3xl mt-2 mb-2 text-white'>Search, Sort & Filter Application</h1>
    </div>
  )
}

export default App;
