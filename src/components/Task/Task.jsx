import { MdClose } from "react-icons/md";
import css from "./Task.module.css"; /*

export const Task = ({ task }) => {
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
 */

// src/components/Task/Task.jsx

/* // Імпортуємо хук
import { useDispatch } from "react-redux";
// Імпортуємо генератор екшену
import { deleteTask } from "../../redux/actions";

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  // Викликаємо генератор екшену
  // та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  const handleDelete = () => dispatch(deleteTask(task.id));

  return (
    <div>
      <input type="checkbox" />
      <p>{task.text}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
 */

// src/components/Task/Task.jsx

// Імпортуємо хук
import { useDispatch } from "react-redux";
// Імпортуємо генератор екшену
//import { deleteTask, toggleCompleted } from "../../redux/actions";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  // Викликаємо генератор екшену
  // та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
        {/* Delete */}
      </button>
    </div>
  );
};
