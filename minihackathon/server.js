const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const mongoose = require("mongoose");
const app = express();

const playerModel = require("./models/playerModel");

// playerModel.find({}, (err, players) => {
//   if (err) console.log(err)
//   else console.log("List question: ", players);
// })

mongoose.connect(
  "mongodb://localhost/ScoreKeeper", {
    useNewUrlParser: true
  },
  (err) => {
    if (err) console.log(err)
    else console.log("DB connect success!");
  });

app.use(bodyParser.urlencoded({
  extended: false
}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/view/index.html");
})

app.get("/games/:gameId", (req, res) => {
	res.sendFile(__dirname + "/client/view/round.html");
});

app.post("/", (req, res) => {
  //console.log(req);
  playerModel.create({
    player_1: {Name: req.body.player_1},
		player_2: {Name: req.body.player_2},
		player_3: {Name: req.body.player_3},
		player_4: {Name: req.body.player_4},

  }, (err, questionCreated) => {
    if (err) console.log(err)
    else {
      // console.log(questionCreated);
      playerModel.count({}, (err, count) => {
        if(err) console.log(err)
        else {
          const gameId = Math.floor(Math.random()*count) + 1;
          res.redirect("/games/" + gameId);
        }
      })
      //res.redirect("/");
    }
  })
})

app.get("/newestGame", (req, res) => {
  // playerModel.count({}, (err, count) => {
  //   if(err) console.log(err)
  //   else {
  //
  //   }
  // })
  const gameId = Math.floor(Math.random()*count) + 1;
  questionModel.findOne({}, null, { skip: gameId }, (err, newestGame) => {
				if(err) console.log(err)
				else res.json({ game: newestGame });
	});
})

app.use(express.static("views"));

app.listen(8080, (err) => {
  if (err) console.log(err)
  else console.log("Success!");
});
