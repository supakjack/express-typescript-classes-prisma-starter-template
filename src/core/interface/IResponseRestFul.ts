export interface IResponseRestFul {
  meta: {
    code: number;
    message: string;
  };
  data?: any;
}
