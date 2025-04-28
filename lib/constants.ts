export const NAV_THEME = {
  light: {
    background: "hsl(0 0% 100%)", // background
    border: "hsl(240 5.9% 90%)", // border
    card: "hsl(0 0% 100%)", // card
    notification: "hsl(0 84.2% 60.2%)", // destructive
    primary: "hsl(240 5.9% 10%)", // primary
    text: "hsl(240 10% 3.9%)", // foreground
  },
  dark: {
    background: "hsl(240 10% 3.9%)", // background
    border: "hsl(240 3.7% 15.9%)", // border
    card: "hsl(240 10% 3.9%)", // card
    notification: "hsl(0 72% 51%)", // destructive
    primary: "hsl(0 0% 98%)", // primary
    text: "hsl(0 0% 98%)", // foreground
  },
};

export type SelectTravlersT = {
  id: number;
  title: string;
  desc: string;
  icon: string;
  people: string;
};

export const SelectTravlers: SelectTravlersT[] = [
  {
    id: 1,
    title: "Just me",
    desc: "A solo traveler, wanderlust",
    icon: "🧳",
    people: "1",
  },
  {
    id: 2,
    title: "Couple",
    desc: "Traveling with a partner",
    icon: "❤️",
    people: "2",
  },
  {
    id: 3,
    title: "Family",
    desc: "A family trip with loved ones",
    icon: "👨‍👩‍👧‍👦",
    people: "3+",
  },
  {
    id: 4,
    title: "Friends",
    desc: "Exploring with friends",
    icon: "🎉",
    people: "2+",
  },
  {
    id: 5,
    title: "Group",
    desc: "A group adventure",
    icon: "🚌",
    people: "5+",
  },
];
