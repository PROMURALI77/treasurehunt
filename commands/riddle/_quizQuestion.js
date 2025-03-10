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

var comptQ = User.getProp("compRiddle")
var len = comptQ.length
if (len  == 11 ) {
  Bot.runCommand("/finalRiddle")
  } 
var currentQuiz = User.getProp("riddleQT")



Bot.sendMessage(currentQuiz)
Bot.runCommand("/quizAnswer")
