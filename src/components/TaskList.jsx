import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {
    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0) {
        return (
            <h1 className="text-white text-6xl font-bold text-center my-10 ">
                No hay tareas aun
            </h1>
        );
    }
    return (
        <div className="grid grid-cols-3 gap-5">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;
