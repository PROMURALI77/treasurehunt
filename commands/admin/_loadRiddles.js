/*CMD
  command: /loadRiddles
  help: 
  need_reply: false
  auto_retry_time: 
  folder: admin

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
    "Which company is known as the 'PayPal of China'?",
     "What is the primary purpose of a cryptocurrency wallet?",
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
    "Where do students go to complete their coursework or assignments?",
    "In which lab are computer graphics experiments performed?"
   
],
taskAnswer: [
"7-15", "A 6-12-15-1-18", "20-15","2-3-1-2-10-15-3-11","6-E" 
]
},
{
quiz:[
    " Which tech company is known for the tesla electric car and space missions?",
     "What does the term URL stand for?",
    " Which system is used by banks to detect fraud in real-time transactions?",
     "Which technology allows banks to securely handle and share financial data?",
     "Who is known as the father of the World Wide Web?",

],
quizAnswer: [
    "Tesla Inc", "Uniform Resource Locator","AI","blockchain","Tim Berners-Lee"
],

task: [
    "Crunch and munch, take a seat,This is where your friends you meet!",
    "Stones all around, big and small, move one to find your next call",
    "Where the parked cars are white and neat, look under the nearest seat",
    "Where do students practice computer graphics algorithms and implementations?",
    "Where can students access resources to finish their programs"

],
taskAnswer: [
    "A-6-12-15-1-18","7-15","20-15","6-E","2-3-1-2-10-15-3-11",
]
},
{
quiz: [
    "What does “GPS” stand for in navigation technology?",
    "Which financial technology company is known for offering mobile payments and money transfers?",
    " When was Bitcoin created?",
    " When was the first credit card introduced?",
    "When did online banking first become available?"
],
quizAnswer: [
    "Global Positioning System","Venmo","2009","1950","1990s"
],
task: [
    "Near the entry lane, where cars slow down, your next clue is easily found.",
    "Which lab is used for studying graphical algorithms and rendering techniques",
    "Take me up, drink me down ,I hold your thirst when you re in town!",
    "In a patch of green, the secret lies, where the grass grows tall and wide.",
    "Where can students work on their programs and projects?"
    ],
taskAnswer: [
    "20-15","6-E", "A-6-12-15-1-18","7-15","2-3-1-2-10-15-3-11"
]
},
{
quiz: [
    "What is the purpose of the Reserve Requirement in banking?",
    "What is Machine Learning a subset of?",
    " What does the acronym VPN stand for in network security?",
    "Which company is the creator of the Android operating system?",
    "What programming language was developed by Guido van Rossum in the late 1980s?",
],
quizAnswer: [
    " Liquidity"," Artificial Intelligence (AI)","Virtual Private Network"," Google","Python"
],
task: [
    "In which lab are programs like line drawing and transformations executed?",
    "Follow the line of cars with red, under the closest car is where the clue's spread.",
    "When hunger calls, you’ll find me near,A place for meals, drinks, and cheer.Tables and trays, a busy scene",
    "Where do students go to complete their study programs or projects?",
    "By the garden's edge, where things are neat, search the dirt near the ground’s heartbeat",
],
taskAnswer: [
    "6-E","20-15","A-6-12-15-1-18","2-3-1-2-10-15-3-11","7-15",
]
},
{
quiz: [
    " What is the name of Apple's voice assistant?",
    "Which company invented the first computer mouse?",
    " What does SQL stand for in database management?",
    "What is the term for software that is designed to harm, exploit, or otherwise compromise a computer system?",
    " What is the term for the smallest unit of data in a computer?",
],
quizAnswer: [
    "Siri","Xerox","Structured Query Language"," Malware"," Bit"
],
task:[
    "What is the designated area for vehicles to be stationed temporarily?",
    "Where the grass is short and neat, search beneath the tire's seat.",
    "A break from work, a break from class,This is where you fill your glass.Near the counter or on a chair",
    "Where do students have access to the resources needed to complete their programs",
    "Which lab is used for implementing computer graphics concepts?"
],
taskAnswer: [
    "20-15","7-15","A-6-12-15-1-18","2-3-1-2-10-15-3-11", "6-E"
]
},
{
quiz: [
    "What technology is used for wireless communication between devices over short distances?",
    "Which company developed the first commercially successful microprocessor?",
    "What does the acronym GPU stand for in computer hardware?",
    "What programming language is known as the mother of all languages?",
   "Which of these is a digital currency that was created by Facebook (now Meta)?",
],
quizAnswer: [
    " Bluetooth"," Intel","Graphics Processing Unit","C"," Libra"
],
task:[
    "Break time spot, flavors blend,Find me where the queues don’t end.",
    "Which facility in a city helps drivers stop their cars legally for a period of time?",
    "Where do students complete their program-related tasks?",
    "Im always at your feet, but you rarely look down. Find me where you step the most",
    "Which lab focuses on 2D and 3D graphics programming?"
],
taskAnswer: [
    "A-6-12-15-1-18","20-15","2-3-1-2-10-15-3-11","7-15","6-E"
]
}
]

Bot.setProp("globalRiddle",riddle,"json")

Bot.sendMessage("Riddles Updated & Uploaded ✅ ")
