import { MoveData, CharacterInfo } from "../charInterface.js";

const moMoveset: MoveData[] = [
  // normals
  {
    name: "Standing LP (5LP)",
    command: "5lp",
    startup: "5",
    active: "3",
    recovery: "7",
    onHit:"6",
    onBlock:"5",
    invul:"—",
    guard: "Mid",
    description: "The hitbox is pretty high which makes it whiff most crouching characters. Advantageous on hit/block and gains a renda bonus. Primarily used for keeping people from dashing/hopping in, or for guard breaking. It has very few follow up routes.",
    image: "https://wiki.gbl.gg/images/f/f9/Vsav-MO-5-lp-hitbox.png",
  },
  {
    name: "Standing MP (5MP)",
    command: "5mp",
    startup: "3",
    active: "5",
    recovery: "6",
    description: "** **",
  },
  {
    name: "Standing HP (5HP)",
    command: "5hp",
    startup: "3",
    active: "5",
    recovery: "6",
    description: "** **",
  },
  
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

export const morrigan: CharacterInfo = {
  name: "Morrigan",
  icon: "https://wiki.gbl.gg/images/7/7f/Vsav-nav-portrait-morrigan.gif",
  moves: moMoveset,
};