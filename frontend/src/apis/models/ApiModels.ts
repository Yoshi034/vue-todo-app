export type Res = {
  id: string;
  text: string;
  completed: boolean;
};

export type PostReq = {
  text: string;
};
export type PutReq = {
  completed: boolean;
};
