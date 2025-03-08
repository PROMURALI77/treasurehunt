/*CMD
  command: /loadRiddles
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var riddle = [
    {
        quiz: [
            "Which company is known as the 'PayPal of China'?", "What is the primary purpose of a cryptocurrency wallet?",
            "Which of these is a decentralized digital currency?",
            "What does 'KYC' stand for in the fintech industry?",
            "What does 'API' stand for, often used in fintech to connect services?"
        ],
        quizAnswer: [
            "Alipay", "Securely store cryptocurrencies", "Bitcoin", "Know Your Customer", "Application Programming Interface"
        ],
        task: [
            "Where the earth meets your feet, look beneath the place where shadows greet. Dig around where green things grow.",
            "Where hunger meets its tasty fate, Find the place with a serving plate. Hot or cold, your meal is near, Look where snacks and drinks appear!",
            "Find the spot where cars take a rest, under the shade, it's the best.",
            "Where hunger rests and thirst is met, Your next clue is safely set.",
            "Near the wide open spaces, where cars have more room, a clue hides in the gloom"
        ],
    taskAnswer: [
        "1-15", "20-15", "2-3-1 2-10-15-3-11", "A 6-12-15-15-18", "6-E"
    ]
    },
    {
        quiz: [
            "hhhhhhhhhhhhhh Which company is known as the 'PayPal of China'?", "What is the primary purpose of a cryptocurrency wallet?",
            "hhhhhhhhhhhhhh Which of these is a decentralized digital currency?",
            "hhhhhhhhhhhhh What does 'KYC' stand for in the fintech industry?",
            "hhhhhhhhhhh What does 'API' stand for, often used in fintech to connect services?"
        ],
        quizAnswer: [
            "Alipay", "Securely store cryptocurrencies", "Bitcoin", "Know Your Customer", "Application Programming Interface"
        ],
        task: [
            "hhhhhhhhhhhh Where the earth meets your feet, look beneath the place where shadows greet. Dig around where green things grow.",
            "hhhhhhhhhhh Where hunger meets its tasty fate, Find the place with a serving plate. Hot or cold, your meal is near, Look where snacks and drinks appear!",
            "hhhhhhhhhh Find the spot where cars take a rest, under the shade, it's the best.",
            "hhhhhhhhhhhhhh Where hunger rests and thirst is met, Your next clue is safely set.",
            "hhhhhhhhhhhhh Near the wide open spaces, where cars have more room, a clue hides in the gloom"
        ],
    taskAnswer: [
        "1-15", "20-15", "2-3-1 2-10-15-3-11", "A 6-12-15-15-18", "6-E"
    ]
    }
]

Bot.setProperty("globalRiddle",riddle,"json")

Bot.sendMessage("Riddles Updated & Uploaded ✅ ")
