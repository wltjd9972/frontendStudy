import type { FormEvent } from "react";

export const wrapAsync = (asyncFunc: () => Promise<void>) => () => {
  void asyncFunc();
};
export const wrapFormAsync =
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // HTML 기본 디폴트 기능을 막음
    void asyncFunc();
  };
