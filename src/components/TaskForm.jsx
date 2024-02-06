import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description,
        });
        setTitle("");
        setDescription("");
    };

    return (
        <div className="max-w-md mx-auto mb-4">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800  p-10 rounded-md "
            >
                <h1 className="text-3xl text-white mb-2 font-bold">
                    Create a task
                </h1>
                <input
                    placeholder="Write your task"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="bg-slate-300 w-full mb-2 p-3"
                    autoFocus
                />
                <textarea
                    placeholder="Write said description"
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-slate-300 w-full mb-2 p-3"
                    value={description}
                ></textarea>
                <button className="text-yellow-100 bg-green-800 rounded-md px-3 py-1 mt-2 hover:bg-green-600">
                    Save
                </button>
            </form>
        </div>
    );
}

export default TaskForm;
