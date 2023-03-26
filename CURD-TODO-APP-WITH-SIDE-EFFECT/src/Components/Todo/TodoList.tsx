import { ITodo } from "../../Model/todoModel";
import {
  Card,
  CardBody,
  Text,
  Stack,
  StackDivider,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, notifyUpdated } from "../../Store/todoSlice";
import { AppDispatch, RootState } from "../../Store/Store";

const TodoList: React.FC<{ todos: ITodo[] }> = ({ todos }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      {todos ? (
        <ul>
          {todos.map((todo) => {
            return (
              <Stack divider={<StackDivider />} spacing="4" key={todo.id}>
                <Card>
                  <CardBody>
                    {todo.completed ? (
                      <s>{todo.todo}</s>
                    ) : (
                      <Text pt="2" fontSize="md">
                        {todo.todo}
                      </Text>
                    )}
                    <Button
                      colorScheme="blue"
                      onClick={() => dispatch(notifyUpdated({ todo: todo }))}
                    >
                      Update
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => dispatch(deleteTodo({ id: todo.id }))}
                    >
                      Delete
                    </Button>
                  </CardBody>
                </Card>
              </Stack>
            );
          })}
        </ul>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
};

export default TodoList;
