import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { changeStatus } from "@/actions/todoActions";
import Form from "../ui/Form";

export default function ChangeTodo({ todo }) {
  return (
    <Form action={changeStatus}>
      <Input name='inputId' value={todo.id} type='hidden' />
      <Button actionButton type='submit' text={<AiOutlineCheckCircle />} />
    </Form>
  );
}
