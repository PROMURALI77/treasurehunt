/*CMD
  command: /quizAnswer
  help: 
  need_reply: true
  auto_retry_time: 
  folder: riddle

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var quizAnswer = User.getProp("userQuizAnswer")
var newQuiz = User.getProp("userQuiz")
var Answer = quizAnswer.pop()
var comptQ = User.getProp("compRiddle")
var newTask = User.getProp("userTask")
if (comptQ.length == 10 ) {
  Bot.runCommand("/finalRiddle")
  } else { 
  if ( message.toLowerCase() == Answer.toLowerCase() ) {
    Bot.sendMessage("Correct Answer")
    User.setProp("userQuizAnswer",quizAnswer,"json")
    newQuiz.pop()
    User.setProp("userQuiz",newQuiz,"json")
    User.setProp("compRiddle",,"integer")
    User.setProp("riddleQT",newTask.pop(),"string")
    Bot.runCommand("/taskQuestion")
} else {
Bot.sendMessage("wrong answer ❌ ")
Bot.runCommand("/quizQuestion")

}
}
