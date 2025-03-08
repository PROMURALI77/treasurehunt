/*CMD
  command: /loadRiddles
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var riddle = ["TR", "EA", "SU", "RE", "HU", "NT"]

Bot.setProperty("riddles",riddle,"json")

var prop = Bot.getProperty("riddles")

Bot.sendMessage(prop[0])
