export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

export type User = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
};

export type CommentInfo = {
  comment: string;
  rating: number;
};
