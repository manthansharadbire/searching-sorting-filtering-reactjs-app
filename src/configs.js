const USERS= [
    {
      "name": "Jon Snow",
      "city": "Winterfell",
      "age": 25,
      "avatar": "https://i.pravatar.cc/150?img=1"
    },
    {
      "name": "Daenerys Targaryen",
      "city": "Dragonstone",
      "age": 22,
      "avatar": "https://i.pravatar.cc/150?img=2"
    },
    {
      "name": "Arya Stark",
      "city": "Winterfell",
      "age": 18,
      "avatar": "https://i.pravatar.cc/150?img=3"
    },
    {
      "name": "Tyrion Lannister",
      "city": "King's Landing",
      "age": 34,
      "avatar": "https://i.pravatar.cc/150?img=4"
    },
    {
      "name": "Cersei Lannister",
      "city": "King's Landing",
      "age": 40,
      "avatar": "https://i.pravatar.cc/150?img=5"
    },
    {
      "name": "Sansa Stark",
      "city": "Winterfell",
      "age": 20,
      "avatar": "https://i.pravatar.cc/150?img=6"
    },
    {
      "name": "Jorah Mormont",
      "city": "Bear Island",
      "age": 45,
      "avatar": "https://i.pravatar.cc/150?img=7"
    },
    {
      "name": "Bran Stark",
      "city": "Winterfell",
      "age": 16,
      "avatar": "https://i.pravatar.cc/150?img=8"
    },
    {
      "name": "Robb Stark",
      "city": "Winterfell",
      "age": 24,
      "avatar": "https://i.pravatar.cc/150?img=9"
    },
    {
      "name": "Jaime Lannister",
      "city": "King's Landing",
      "age": 38,
      "avatar": "https://i.pravatar.cc/150?img=10"
    },
    {
      "name": "Theon Greyjoy",
      "city": "Pyke",
      "age": 28,
      "avatar": "https://i.pravatar.cc/150?img=11"
    },
    {
      "name": "Samwell Tarly",
      "city": "Horn Hill",
      "age": 25,
      "avatar": "https://i.pravatar.cc/150?img=12"
    },
    {
      "name": "Sandor Clegane",
      "city": "Kings Road",
      "age": 40,
      "avatar": "https://i.pravatar.cc/150?img=13"
    },
    {
      "name": "Petyr Baelish",
      "city": "Harrenhal",
      "age": 42,
      "avatar": "https://i.pravatar.cc/150?img=14"
    },
    {
      "name": "Varys",
      "city": "King's Landing",
      "age": 50,
      "avatar": "https://i.pravatar.cc/150?img=15"
    },
    {
      "name": "Missandei",
      "city": "Naath",
      "age": 23,
      "avatar": "https://i.pravatar.cc/150?img=16"
    },
    {
      "name": "Grey Worm",
      "city": "Astapor",
      "age": 30,
      "avatar": "https://i.pravatar.cc/150?img=17"
    },
    {
      "name": "Brienne of Tarth",
      "city": "Tarth",
      "age": 32,
      "avatar": "https://i.pravatar.cc/150?img=18"
    },
    {
      "name": "Podrick Payne",
      "city": "King's Landing",
      "age": 22,
      "avatar": "https://i.pravatar.cc/150?img=19"
    },
    {
      "name": "Davos Seaworth",
      "city": "Storm's End",
      "age": 52,
      "avatar": "https://i.pravatar.cc/150?img=20"
    },
    {
      "name": "Stannis Baratheon",
      "city": "Dragonstone",
      "age": 47,
      "avatar": "https://i.pravatar.cc/150?img=21"
    },
    {
      "name": "Melisandre",
      "city": "Asshai",
      "age": 40,
      "avatar": "https://i.pravatar.cc/150?img=22"
    },
    {
      "name": "Gendry",
      "city": "Flea Bottom",
      "age": 26,
      "avatar": "https://i.pravatar.cc/150?img=23"
    },
    {
      "name": "Tormund Giantsbane",
      "city": "Beyond the Wall",
      "age": 39,
      "avatar": "https://i.pravatar.cc/150?img=24"
    },
    {
      "name": "Ygritte",
      "city": "Beyond the Wall",
      "age": 27,
      "avatar": "https://i.pravatar.cc/150?img=25"
    },
    {
      "name": "Ramsay Bolton",
      "city": "Winterfell",
      "age": 30,
      "avatar": "https://i.pravatar.cc/150?img=26"
    },
    {
      "name": "Joffrey Baratheon",
      "city": "King's Landing",
      "age": 18,
      "avatar": "https://i.pravatar.cc/150?img=27"
    },
    {
      "name": "Tommen Baratheon",
      "city": "King's Landing",
      "age": 14,
      "avatar": "https://i.pravatar.cc/150?img=28"
    },
    {
      "name": "Margaery Tyrell",
      "city": "Highgarden",
      "age": 24,
      "avatar": "https://i.pravatar.cc/150?img=29"
    },
    {
      "name": "Olenna Tyrell",
      "city": "Highgarden",
      "age": 72,
      "avatar": "https://i.pravatar.cc/150?img=30"
    },
    {
      "name": "Loras Tyrell",
      "city": "Highgarden",
      "age": 25,
      "avatar": "https://i.pravatar.cc/150?img=31"
    },
    {
      "name": "Balon Greyjoy",
      "city": "Pyke",
      "age": 50,
      "avatar": "https://i.pravatar.cc/150?img=32"
    },
    {
      "name": "Euron Greyjoy",
      "city": "Pyke",
      "age": 42,
      "avatar": "https://i.pravatar.cc/150?img=33"
    },
    {
      "name": "The Hound",
      "city": "Kings Road",
      "age": 45,
      "avatar": "https://i.pravatar.cc/150?img=34"
    },
    {
      "name": "Qyburn",
      "city": "King's Landing",
      "age": 50,
      "avatar": "https://i.pravatar.cc/150?img=35"
    },
    {
      "name": "Lancel Lannister",
      "city": "King's Landing",
      "age": 26,
      "avatar": "https://i.pravatar.cc/150?img=36"
    }
  ]
  
  export {USERS};