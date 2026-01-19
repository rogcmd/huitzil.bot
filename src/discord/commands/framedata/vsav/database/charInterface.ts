interface MoveData {
  name: string;
  command: string;
  startup: string;
  active: string;
  recovery: string;
  onHit?: string;
  onBlock?: string;
  cancel?: string;
  invul?: string;
  guard?: string;
  description?: string;
  image?: string;
}

interface CharacterInfo {
  name: string;
  icon: string;
  moves: MoveData[]
}

interface GameData {
  game: string;
  chars: CharacterInfo[]
}
  
export { MoveData, CharacterInfo, GameData };