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
      { name: "Poker", image: "/assets/games/cards.png" },
      { name: "Blackjack", image: "/assets/games/cards.png" },
      { name: "Baccarat", image: "/assets/games/cards.png" },
      { name: "Solitaire", image: "/assets/games/cards.png" },
      { name: "Rummy", image: "/assets/games/cards.png" },
      { name: "Bridge", image: "/assets/games/cards.png" },
      { name: "Hearts", image: "/assets/games/cards.png" },
      { name: "Spades", image: "/assets/games/cards.png" },
      { name: "Euchre", image: "/assets/games/cards.png" },
      { name: "Go Fish", image: "/assets/games/cards.png" },
      { name: "Crazy Eights", image: "/assets/games/cards.png" },
      { name: "War", image: "/assets/games/cards.png" },
    ],
  },
  {
    name: "Popular Sports",
    items: [
      { name: "Football", image: "/assets/games/soccer.webp" },
      { name: "Basketball", image: "/assets/games/soccer.webp" },
      { name: "Baseball", image: "/assets/games/soccer.webp" },
      { name: "Tennis", image: "/assets/games/soccer.webp" },
      { name: "Golf", image: "/assets/games/soccer.webp" },
      { name: "Boxing", image: "/assets/games/soccer.webp" },
      { name: "Cricket", image: "/assets/games/soccer.webp" },
      { name: "Rugby", image: "/assets/games/soccer.webp" },
      { name: "Hockey", image: "/assets/games/soccer.webp" },
      { name: "MMA", image: "/assets/games/soccer.webp" },
      { name: "Motorsport", image: "/assets/games/soccer.webp" },
      { name: "Horse Racing", image: "/assets/games/soccer.webp" },
    ],
  },
  {
    name: "Popular Casino Games",
    items: [
      { name: "Slots", image: "/assets/games/slot.webp" },
      { name: "Roulette", image: "/assets/games/slot.webp" },
      { name: "Blackjack", image: "/assets/games/slot.webp" },
      { name: "Craps", image: "/assets/games/slot.webp" },
      { name: "Baccarat", image: "/assets/games/slot.webp" },
      { name: "Sic Bo", image: "/assets/games/slot.webp" },
      { name: "Keno", image: "/assets/games/slot.webp" },
      { name: "Pai Gow", image: "/assets/games/slot.webp" },
      { name: "Big Six Wheel", image: "/assets/games/slot.webp" },
      { name: "Video Poker", image: "/assets/games/slot.webp" },
      { name: "Red Dog", image: "/assets/games/slot.webp" },
      { name: "Casino War", image: "/assets/games/slot.webp" },
    ],
  },
];
