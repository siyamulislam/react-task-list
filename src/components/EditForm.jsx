import { useState, useEffect } from 'react';

// library imports
import { CheckIcon } from '@heroicons/react/24/solid'
import { updateTask } from '../app/taskSlice';
import { useDispatch } from 'react-redux';

const EditForm = ({ editedTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
 const dispatch = useDispatch();

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    }

    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [closeEditMode]);



  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    const tastTmp={...editedTask,name: updatedTaskName,}
    dispatch(updateTask(tastTmp));
    closeEditMode();
  }

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
    onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
    >
      <form
        className="todo"
      onSubmit={handleFormSubmit}
      >
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label
            htmlFor="editTask"
            className="label"
          >Update Task</label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type="submit"
        >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  )
}
export default EditForm