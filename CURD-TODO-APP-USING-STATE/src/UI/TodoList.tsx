import { PropsWithChildren } from "react";
import Card from "./Card";

const TodoList: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Card>
      <p>title</p>
    </Card>
  );
};
