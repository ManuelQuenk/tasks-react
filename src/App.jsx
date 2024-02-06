import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
    return (
        <main className="bg-slate-600 h-screen">
            <div className="container pt-4 mx-auto">
                <TaskForm />
                <TaskList />
            </div>
        </main>
    );
}

export default App;
