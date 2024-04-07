import { v4 as uuidv4 } from "uuid";
import tokyo from "./songs/Tokyo.mp3";
import house from "./songs/House.mp3";
import jazzytown from "./songs/JazzyTown.mp3";
import samurai from "./songs/Samurai.mp3";
import guitarvibe from "./songs/GuitarVibe.mp3";
import summerof80 from "./songs/SummerOf80.mp3";
import nighttimeramen from "./songs/NighttimeRamen.mp3";
import bookstore from "./songs/Bookstore.mp3";
import gasstation from "./songs/GasStation.mp3";
import sunset from "./songs/Sunset.mp3";
import spacetrip from "./songs/SpaceTrip.mp3";

import Tokyo from "./thumbnails/Tokyo.png";
import House from "./thumbnails/House.png";
import Jazz from "./thumbnails/Jazz.png";
import Samurai from "./thumbnails/Samurai.png";
import Guitar from "./thumbnails/Guitar.png";
import Summer from "./thumbnails/Summer.png";
import Ramen from "./thumbnails/Ramen.png";
import Bookstore from "./thumbnails/Bookstore.png";
import Gas from "./thumbnails/Gas.png";
import Sunset from "./thumbnails/Sunset.png";
import Space from "./thumbnails/Space.png";

function loFi() {
  return [
      {
      name: "Tokyo",
      cover:
        (Tokyo),
      artist: "Fantastic Music",
      genre: "Jazz",
      audio: (tokyo),
      color: ["#D94D8A", "#A33DAA"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "House Vol.1",
      cover:
        (House),
      artist: "Kiffen Beats",
      genre: "House",
      audio: (house),
      color: ["#8CBE5F", "#F79B34"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Jazzy Town",
      cover:
        (Jazz),
      artist: "Fantastic Music",
      genre: "Jazz",
      audio: (jazzytown),
      color: ["#205950", "#F3C02D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Samurai",
      cover:
        (Samurai),
      artist: "The Bootleg Boy",
      genre: "Hip Hop",
      audio: (samurai),
      color: ["#F3AB2D", "#F3372D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Guitar Vibe",
      cover:
        (Guitar),
      artist: "Lo-Fi Chill Music",
      genre: "Hip Hop",
      audio: (guitarvibe),
      color: ["#FF985B", "#9B3FAB"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Summer of '80",
      cover:
        (Summer),
      artist: "AmbienceChillz",
      genre: "Synthwave",
      audio: (summerof80),
      color: ["#F10061", "#FFAA00"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nighttime Ramen",
      cover:
        (Ramen),
      artist: "Chillhop",
      genre: "Hip Hop",
      audio: (nighttimeramen),
      color: ["#FFD35B", "#B03FA6"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Escape to the Bookstore",
      cover:
        (Bookstore),
      artist: "The Lofi Van",
      genre: "Hip Hop",
      audio: (bookstore),
      color: ["#EC2C3A", "#4230A8"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Gas Station",
      cover:
        (Gas),
      artist: "LoFi Studio",
      genre: "Synthwave",
      audio: (gasstation),
      color: ["#CF266D", "#0EC7C7"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sunset Ride",
      cover:
        (Sunset),
      artist: "Lofi Portal",
      genre: "Hip Hop",
      audio: (sunset),
      color: ["#1C978A", "#F3C92D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Space Trip",
      cover:
        (Space),
      artist: "Asthenic",
      genre: "Synthwave",
      audio: (spacetrip),
      color: ["#027BB0", "#4505BB"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default loFi;
