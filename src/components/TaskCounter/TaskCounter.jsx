import css from "./TaskCounter.module.css";

/* export const TaskCounter = () => {
  return (
    <div>
      <p className={css.text}>Active: 0</p>
      <p className={css.text}>Completed: 0</p>
    </div>
  );
}; */

// src/components/TaskCounter/TaskCounter.jsx

// Імпортуємо хук
import { useSelector } from "react-redux";

export const TaskCounter = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector((state) => state.tasks.item1);
  console.log("tsaks in TasksCounter: ", tasks);

  console.log("tsaks in TasksCounter2 : ", tasks);
  // На базі стану Redux отримуємо похідні дані
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </div>
  );
};
