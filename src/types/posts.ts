export type CreatePostSchema = {
  visibility?: string;
  replyPrivacy?: string;
  text?: string;
};

export type PostWithAuthor = {
  id: number;
  text: string | null;
  media: any;
  isLiked: boolean;
  author: {
    avatar: any;
    id: number;
    name: string;
    username: string;
  };
  createdAt: string;
};
