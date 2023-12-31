import React from "react";
import { useToDoStore } from "../../data/stores/useToDoStore";
import styles from "./index.module.scss";
import { InputPlus } from "../components/InputPlus/index";
import { InputTask } from "../components/InpitTask";

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  console.log(tasks);
  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do App</h1>
      <section className={styles.articleSection}>
        <InputPlus
          onAdd={(title: string) => {
            if (title) {
              createTask(title);
            }
          }}
        />
      </section>
      <section className={styles.articleSection}>
        {!tasks.length && <p className={styles.articleText}>Leer</p>}
        {tasks.map((task) => {
          return (
            <InputTask
              key={task.id}
              id={task.id}
              title={task.title}
              onDone={removeTask}
              onEdited={updateTask}
              onRemove={removeTask}
            />
          );
        })}
      </section>
    </article>
  );
};
