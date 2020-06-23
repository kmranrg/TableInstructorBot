var x, inputText, i;

// Describe this function...
function TableBot(x) {
  Bot.send(["Okay, so you want to learn table of ",x,". Great! Here we go!"].join(''));
  for (i = 1; i <= 10; i++) {
    Bot.send([x," into ",i," equals to ",x * i].join(''));
  }
  Bot.send(["This was the table of ",x,". Wanna learn more?"].join(''));
}



 async function respond (inputText) {
  if (inputText == "hi") {
    Bot.send("Hello, I am your Table Instructor. Wanna learn some tables?");
  } else {
    if (inputText == "no") {
      Bot.send("Thank you and have a nice day !");
    } else {
      if (inputText == "who developed you") {
        Bot.send("I am developed by Kumar Anurag.");
      } else {
        if (inputText == "yes") {
          Bot.send("Okay, tell me. Which table do you want to learn?");
        } else {
          TableBot(inputText);
        }
      }
    }
  }

}