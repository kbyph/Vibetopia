import { v4 as uuidv4 } from "uuid";
import samurai from "./songs/Samurai.mp3";
import jazzytown from "./songs/JazzyTown.mp3";
import rnbmix from "./songs/RnbMix.mp3";
import house from "./songs/House.mp3";
import guitarvibe from "./songs/GuitarVibe.mp3";
import tokyo from "./songs/Tokyo.mp3";
import summerof80 from "./songs/SummerOf80.mp3";
import nighttimeramen from "./songs/NighttimeRamen.mp3";
import bookstore from "./songs/Bookstore.mp3";
import gasstation from "./songs/GasStation.mp3";
import sunset from "./songs/Sunset.mp3";
import spacetrip from "./songs/SpaceTrip.mp3";


function loFi() {
  return [
    {
      name: "Samurai",
      cover:
        "https://i3.ytimg.com/vi/jrTMMG0zJyI/maxresdefault.jpg",
      artist: "The Bootleg Boy",
      genre: "Hip Hop",
      audio: (samurai),
      color: ["#F3AB2D", "#F3372D"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Jazzy Town",
      cover:
        "https://i3.ytimg.com/vi/u4ENF5OCtkY/maxresdefault.jpg",
      artist: "Fantastic Music",
      genre: "Jazz",
      audio: (jazzytown),
      color: ["#205950", "#F3C02D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Chill Mix Vol.1",
      cover:
        "https://i3.ytimg.com/vi/9WEmH7GbrBM/maxresdefault.jpg",
      artist: "THAIBEATS",
      genre: "R&B",
      audio: (rnbmix),
      color: ["#9B3FAB", "#437AA8"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "House Vol.1",
      cover:
        "https://i3.ytimg.com/vi/XCazyTAZpcU/maxresdefault.jpg",
      artist: "Kiffen Beats",
      genre: "House",
      audio: (house),
      color: ["#8CBE5F", "#F79B34"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Guitar Vibe",
      cover:
        "https://i3.ytimg.com/vi/njjBbKpkmFI/maxresdefault.jpg",
      artist: "Lo-Fi Chill Music",
      genre: "Hip Hop",
      audio: (guitarvibe),
      color: ["#FF985B", "#9B3FAB"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Tokyo",
      cover:
        "https://i3.ytimg.com/vi/4ZDhE82OO04/maxresdefault.jpg",
      artist: "Fantastic Music",
      genre: "Jazz",
      audio: (tokyo),
      color: ["#D94D8A", "#A33DAA"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Summer of '80",
      cover:
        "https://i3.ytimg.com/vi/S7i3ugniyjg/maxresdefault.jpg",
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
        "https://i3.ytimg.com/vi/iEGFFyv0MH4/maxresdefault.jpg",
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
        "https://i3.ytimg.com/vi/Ar18V8jaZzY/maxresdefault.jpg",
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
        "https://i3.ytimg.com/vi/h9g8JXotdjo/maxresdefault.jpg",
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
        "https://i3.ytimg.com/vi/iCy1NTEd2EU/maxresdefault.jpg",
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
        "https://i3.ytimg.com/vi/aE_G2IBWIs4/maxresdefault.jpg",
      artist: "Asthenic",
      genre: "Synthwave",
      audio: (spacetrip),
      color: ["#027BB0", "#4505BB"],
      id: uuidv4(),
      active: false,
    },
    // {
    //   name: "",
    //   cover:
    //     "",
    //   artist: "",
    //   genre: "",
    //   audio: (),
    //   color: ["#FFFFFF", "#FFFFFF"],
    //   id: uuidv4(),
    //   active: false,
    // },
    // {
    //   name: "",
    //   cover:
    //     "",
    //   artist: "",
    //   genre: "",
    //   audio: (),
    //   color: ["#FFFFFF", "#FFFFFF"],
    //   id: uuidv4(),
    //   active: false,
    // },
    // {
    //   name: "",
    //   cover:
    //     "",
    //   artist: "",
    //   genre: "",
    //   audio: (),
    //   color: ["#FFFFFF", "#FFFFFF"],
    //   id: uuidv4(),
    //   active: false,
    // },
    // {
    //   name: "",
    //   cover:
    //     "",
    //   artist: "",
    //   genre: "",
    //   audio: (),
    //   color: ["#FFFFFF", "#FFFFFF"],
    //   id: uuidv4(),
    //   active: false,
    // },
    // {
    //   name: "",
    //   cover:
    //     "",
    //   artist: "",
    //   genre: "",
    //   audio: (),
    //   color: ["#FFFFFF", "#FFFFFF"],
    //   id: uuidv4(),
    //   active: false,
    // },
    // {
    //   name: "",
    //   cover:
    //     "",
    //   artist: "",
    //   genre: "",
    //   audio: (),
    //   color: ["#FFFFFF", "#FFFFFF"],
    //   id: uuidv4(),
    //   active: false,
    // },
  ];
}

export default loFi;
