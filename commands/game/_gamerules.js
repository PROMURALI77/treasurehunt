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

var newGlobalRiddle = Bot.getProperty("globalRiddle")

var myRiddle = newGlobalRiddle.pop()

Bot.setProp("globalRiddle", newGlobalRiddle, "json")

User.setProp("userRiddle", myRiddle, "json")

Bot.sendInlineKeyboard(
  [{ title: "I AGREE & FOLLOW THE RULES ✅", command: "/startconfirm" }],
  gameRules
)

