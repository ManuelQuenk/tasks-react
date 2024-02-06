import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext);

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md">
            <h1 className="text-xl font-bold capitalize">{task.title}</h1>
            <p className="text-gray-300 text-s">{task.description}</p>
            <button
                onClick={() => deleteTask(task.id)}
                className="text-yellow-100 bg-red-800 rounded-md px-2 py-1 mt-2 hover:bg-red-500"
            >
                Delete
            </button>
        </div>
    );
}

export default TaskCard;
