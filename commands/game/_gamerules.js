/*CMD
  command: /gamerules
  help: 
  need_reply: false
  auto_retry_time: 
  folder: game

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var gameRules = "game rules here" // game rules here


var newGlobalRiddle = Bot.getProperty("globalRiddle")  // getting all the riddle from database
var myRiddle = newGlobalRiddle.pop()                  //  taking the one last riddle from database
Bot.setProp("globalRiddle", newGlobalRiddle, "json")  // removing the last riddle from db

User.setProp("userQuiz", myRiddle.quiz, "json")                   // setting quiz question to user in db
User.setProp("userQuizAnswer", myRiddle.quizAnswer, "json")       // setting quiz answer to user in db
User.setProp("userTask", myRiddle.task, "json")                   // setting task to user in db
User.setProp("userTaskAnswer", myRiddle.taskAnswer, "json")       // setting task answer to user in db
var compRiddle = []
User.setProp("compRiddle",compRiddle, "json")

Bot.sendInlineKeyboard(
    [{ title: "I AGREE & FOLLOW THE RULES ✅", command: "/startconfirm" }],
    gameRules
)    // rules agreement 

