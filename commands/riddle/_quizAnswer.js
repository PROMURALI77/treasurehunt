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
var len = comptQ.length
if (len == 11) {
  Bot.runCommand("/finalRiddle")
} else {
  if (message.toLowerCase() == Answer.toLowerCase()) {
    Bot.sendMessage("Correct Answer")
    User.setProp("userQuizAnswer", quizAnswer, "json")
    newQuiz.pop()
    comptQ.push("1")
    User.setProp("userQuiz", newQuiz, "json")
    User.setProp("compRiddle", comptQ, "json")
    User.setProp("riddleQT", newTask.pop(), "string")
    Bot.runCommand("/taskQuestion")
  } else {
    Bot.sendMessage("wrong answer ❌ ")
    Bot.runCommand("/quizQuestion")
  }
}

