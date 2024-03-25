const fs = require("node:fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  else {
    const games = data.split("\n");
    let sum = 0;

    for (let i = 0; i < games.length; i++) {
      const splitedLine = games[i].split(" ");
      let maxRed = 0;
      let maxGreen = 0;
      let maxBlue = 0;

      for (let j = 0; j < splitedLine.length; j++) {
        if (splitedLine[j].includes("red")) {
          if (parseInt(splitedLine[j - 1]) > maxRed)
            maxRed = parseInt(splitedLine[j - 1]);
        }

        if (splitedLine[j].includes("blue")) {
          if (parseInt(splitedLine[j - 1]) > maxBlue)
            maxBlue = parseInt(splitedLine[j - 1]);
        }

        if (splitedLine[j].includes("green")) {
          if (parseInt(splitedLine[j - 1]) > maxGreen)
            maxGreen = parseInt(splitedLine[j - 1]);
        }
      }

      sum += maxGreen * maxBlue * maxRed;
    }
    console.log(sum);
  }
});
