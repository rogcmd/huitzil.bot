import { MoveData, CharacterInfo } from "../charInterface.js";

const moMoveset: MoveData[] = [
  // normals
  {
    name: "Standing LP",
    command: "5LP",
    startup: "5",
    active: "3",
    recovery: "8",
    onHit:"5",
    onBlock:"4",
    cancel: "yes",
    invul:"—",
    guard: "Mid",
    description: "** **",
    image: "https://wiki.gbl.gg/images/f/f9/Vsav-FE-5-lp-hitbox.png",
  },
  {
    name: "Standing MP",
    command: "5MP",
    startup: "5",
    active: "3",
    recovery: "18",
    onHit:"0",
    onBlock:"1",
    cancel: "yes",
    invul:"—",
    guard: "Mid",
    description: "** **",
    image:"https://mizuumi.wiki/w/File:Vsav-FE-5-mp.png",
  },
  {
    name: "Standing HP",
    command: "5HP",
    startup: "7",
    active: "2(4)3,2",
    recovery: "22",
    onHit:"3",
    onBlock:"2",
    cancel: "no",
    invul:"—",
    guard: "Mid",
    description: "** **",
    image: "https://mizuumi.wiki/w/File:Vsav-FE-5-lk.png"
  },
  {
    name: "Standing LK",
    command: "5LP",
    startup: "5",
    active: "4",
    recovery: "7",
    onHit:"5",
    onBlock:"4",
    cancel: "yes",
    invul:"—",
    guard: "Mid",
    description: "** **",
  },
  {
    name: "Standing MK",
    command: "5Mk",
    startup: "7",
    active: "3",
    recovery: "19",
    onHit:"2",
    onBlock:"1",
    cancel: "no",
    invul:"—",
    guard: "Mid",
    description: "** **",
     image: "https://mizuumi.wiki/w/File:Vsav-FE-2-mk.png"
  },
  {
    name: "Standing HK",
    command: "5HK",
    startup: "8",
    active: "3(4)3",
    recovery: "24",
    onHit:"-2",
    onBlock:"-3",
    cancel: "no",
    invul:"—",
    guard: "Mid",
    description: "** **",
    image: "https://mizuumi.wiki/w/File:Vsav-FE-5-hk.png"
  }
  // close normals
  // crouch normals
  // jumping normals
  // especial moves
  // ex moves
  // throws
  // guard cancel
  // pursuit
  // dark force
];

export const felicia: CharacterInfo = {
  name: "Felicia",
  icon: "https://mizuumi.wiki/images/thumb/b/ba/Vsav-nav-portrait-felicia.gif/105px-Vsav-nav-portrait-felicia.gif",
  moves: moMoveset,
};