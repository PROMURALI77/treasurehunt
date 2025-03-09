/*CMD
  command: /cleardb
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

User.deleteProp("userQuiz")
User.deleteProp("userQuizAnswer")
User.deleteProp("userTask")
User.deleteProp("userTaskAnswer")
Bot.deleteProp("globalRiddle")
Bot.sendMessage("database cleared")
User.deleteProp("compRiddle")
User.deleteProp("riddleQT")
