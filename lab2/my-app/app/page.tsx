import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; 
import { Table } from "@/components/ui/table";
import { tasks } from "@/temp-data/tasks";

export function Header() {
  return (
    <header className="flex justify-between p-4 bg-gray-100">
      <Button>Новая задача</Button>
      <Button>Войти</Button>
      <Avatar>
        <AvatarImage
          src="https://cdn2.thecatapi.com/images/9j3.jpg"
          alt="User Avatar"
        />
        <AvatarFallback>UA</AvatarFallback> 
      </Avatar>
      <Button>Выйти</Button>
    </header>
  );
}

export default function TasksList() {
  return (
    <>
   <Header />
    <Table>
      <thead>
        <tr>
          <th>Заголовок задачи</th>
          <th>Описание задачи</th> 
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td> 
            <td>
              <Button>Редактировать</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
}
