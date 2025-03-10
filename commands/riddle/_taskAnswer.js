/*CMD
  command: /taskAnswer
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

var comptQ = User.getProp("compRiddle")
var len = comptQ.length
if (len == 10) {
  Bot.runCommand("/finalRiddle")
} else {
  var taskAnswer = User.getProp("userTaskAnswer")
  var newTask = User.getProp("userTask")
  var Answer = taskAnswer.pop()

  var newQuiz = User.getProp("userQuiz")


  if (message.toLowerCase() == Answer.toLowerCase()) {
    Bot.sendMessage("Correct Answer")
    User.setProp("userTaskAnswer", taskAnswer, "json")
    newTask.pop()
    User.setProp("userTask", newTask, "json")
    comptQ.push("1")
    User.setProp("compRiddle", comptQ, "json")
    User.setProp("riddleQT", newQuiz.pop(), "string")
    Bot.runCommand("/quizQuestion")
  } else {
    Bot.sendMessage("wrong answer ❌ ")
    Bot.runCommand("/taskQuestion")
  }
}

