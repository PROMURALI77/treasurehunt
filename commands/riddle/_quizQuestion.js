/*CMD
  command: /quizQuestion
  help: 
  need_reply: false
  auto_retry_time: 
  folder: riddle

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var currentQuiz = User.getProp("riddleQT")
var comptQ = User.getProp("compRiddle")
if (comptQ.length == 10 ) {
  Bot.runCommand("/finalRiddle")
  } 
Bot.sendMessage(currentQuiz)
Bot.runCommand("/quizAnswer")
