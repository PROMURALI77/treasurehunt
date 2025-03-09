/*CMD
  command: /startGame
  help: 
  need_reply: false
  auto_retry_time: 
  folder: riddle

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: start game ▶
  group: 
CMD*/

var userQuiz = User.getProp("userQuiz")

var newQuiz = userQuiz.pop()
User.setProp("riddleQT", newQuiz, "string")
Bot.sendKeyboard("");
Bot.runCommand("/quizQuestion")

