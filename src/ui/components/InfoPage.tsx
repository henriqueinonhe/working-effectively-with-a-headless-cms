import { ReactNode } from "react";

export type InfoPageProps = {
  content: ReactNode;
};

export const InfoPage = ({ content }: InfoPageProps) => {
  return <div>{content}</div>;
};
