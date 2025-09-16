export type CategoryGroup = {
  name: string;
  icon?: string; // optional, for future use
  items: {
    name: string;
    image: string;
  }[];
};

export const category: CategoryGroup[] = [
  {
    name: "Popular Card Games",
    items: [
      { name: "Poker", image: "/src/assets/games/cards.png" },
      { name: "Blackjack", image: "/src/assets/games/cards.png" },
      { name: "Baccarat", image: "/src/assets/games/cards.png" },
      { name: "Solitaire", image: "/src/assets/games/cards.png" },
      { name: "Rummy", image: "/src/assets/games/cards.png" },
      { name: "Bridge", image: "/src/assets/games/cards.png" },
      { name: "Hearts", image: "/src/assets/games/cards.png" },
      { name: "Spades", image: "/src/assets/games/cards.png" },
      { name: "Euchre", image: "/src/assets/games/cards.png" },
      { name: "Go Fish", image: "/src/assets/games/cards.png" },
      { name: "Crazy Eights", image: "/src/assets/games/cards.png" },
      { name: "War", image: "/src/assets/games/cards.png" },
    ],
  },
  {
    name: "Popular Sports",
    items: [
      { name: "Football", image: "/src/assets/games/soccer.webp" },
      { name: "Basketball", image: "/src/assets/games/soccer.webp" },
      { name: "Baseball", image: "/src/assets/games/soccer.webp" },
      { name: "Tennis", image: "/src/assets/games/soccer.webp" },
      { name: "Golf", image: "/src/assets/games/soccer.webp" },
      { name: "Boxing", image: "/src/assets/games/soccer.webp" },
      { name: "Cricket", image: "/src/assets/games/soccer.webp" },
      { name: "Rugby", image: "/src/assets/games/soccer.webp" },
      { name: "Hockey", image: "/src/assets/games/soccer.webp" },
      { name: "MMA", image: "/src/assets/games/soccer.webp" },
      { name: "Motorsport", image: "/src/assets/games/soccer.webp" },
      { name: "Horse Racing", image: "/src/assets/games/soccer.webp" },
    ],
  },
  {
    name: "Popular Casino Games",
    items: [
      { name: "Slots", image: "/src/assets/games/slot.webp" },
      { name: "Roulette", image: "/src/assets/games/slot.webp" },
      { name: "Blackjack", image: "/src/assets/games/slot.webp" },
      { name: "Craps", image: "/src/assets/games/slot.webp" },
      { name: "Baccarat", image: "/src/assets/games/slot.webp" },
      { name: "Sic Bo", image: "/src/assets/games/slot.webp" },
      { name: "Keno", image: "/src/assets/games/slot.webp" },
      { name: "Pai Gow", image: "/src/assets/games/slot.webp" },
      { name: "Big Six Wheel", image: "/src/assets/games/slot.webp" },
      { name: "Video Poker", image: "/src/assets/games/slot.webp" },
      { name: "Red Dog", image: "/src/assets/games/slot.webp" },
      { name: "Casino War", image: "/src/assets/games/slot.webp" },
    ],
  },
];
