export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

type User = {
  id: number;
  name: string;
};
