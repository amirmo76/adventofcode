const fs = require("node:fs");

const LIMITS = {
  red: 12,
  blue: 14,
  green: 13,
};

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  else {
    const games = data.split("\n");
    let correctGames = 0;

    for (let i = 0; i < games.length; i++) {
      const splitedLine = games[i].split(" ");
      let flag = true;

      for (let j = 0; j < splitedLine.length && flag; j++) {
        if (splitedLine[j].includes("red"))
          if (parseInt(splitedLine[j - 1]) > LIMITS.red) flag = false;
        if (splitedLine[j].includes("blue"))
          if (parseInt(splitedLine[j - 1]) > LIMITS.blue) flag = false;
        if (splitedLine[j].includes("green"))
          if (parseInt(splitedLine[j - 1]) > LIMITS.green) flag = false;
      }

      if (flag) {
        const num = splitedLine[1].split("");
        num.splice(-1, 1);
        correctGames += parseInt(num.join(""));
      }
    }
    console.log(correctGames);
  }
});
