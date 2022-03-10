import Header from './Header';
import ToDoList from './TodoList';
import "../style/style.css";

function Mainpage() {
    return (
        <div>
            <Header/>
            <ToDoList/>
        </div>
    );
}

export default Mainpage;
