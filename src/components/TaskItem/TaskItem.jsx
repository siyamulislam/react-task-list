import { useState } from 'react';
// styles
import styles from './TaskItem.module.css';

// Library imports
import { CheckIcon } from '@heroicons/react/24/outline';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTaskChecked } from '../../app/taskSlice';
import EditForm from '../EditForm';

const TaskItem = ({ task }) => {
  const [isChecked, setIsChecked] = useState(task.checked);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);


  const dispatch = useDispatch();
  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    dispatch(updateTaskChecked(task.id))
  }
  const handelDeleteTask = (id) => {
    dispatch(deleteTask(id));
    console.log(id)
  }
  const enterEditMode = (task) => {
    setIsEditing(true)
    setPreviousFocusEl(document.activeElement);

  }
  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        {
          isEditing && (
            <EditForm
              editedTask={task}
              closeEditMode={closeEditMode}
            />
          )
        }
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label
          htmlFor={task.id}
          className={styles.label}
        >
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className='btn'
          aria-label={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>

        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          onClick={() => {
            handelDeleteTask(task.id);
          }}
        >
          <TrashIcon width={24} height={24} />
        </button>

      </div>
    </li>
  )
}
export default TaskItem