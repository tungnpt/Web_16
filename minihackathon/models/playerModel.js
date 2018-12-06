const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerPropertiesSchema = new Schema({
  Name: {type: String, default: ""},
  SoS: {type: Number, default: 0},
  SoPS: {type: [Number]}
});

const PlayerSchema = new Schema({
  player_1: {
    type: PlayerPropertiesSchema,
  },
  player_2: {
    type: PlayerPropertiesSchema,
  },
  player_3: {
    type: PlayerPropertiesSchema,
  },
  player_4: {
    type: PlayerPropertiesSchema,
  },
}, {
  timestamp: true,
});

module.exports = mongoose.model("Player", PlayerSchema);
