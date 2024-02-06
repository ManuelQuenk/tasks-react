import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
    }, []);

    function createTask(task) {
        setTasks([
            ...tasks,
            {
                title: task.title,
                id: tasks.length + 1,
                description: task.description,
            },
        ]);
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter((t) => t.id !== taskId));
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                deleteTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
