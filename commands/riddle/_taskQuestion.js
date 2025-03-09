/*CMD
  command: /taskQuestion
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

var currentTask = User.getProp("riddleQT")
Bot.sendMessage(currentTask)
Bot.runCommand("/taskAnswer")
