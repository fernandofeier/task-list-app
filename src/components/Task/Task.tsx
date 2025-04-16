import React from 'react';
import type { Task } from '../../types/task';

interface TaskProps {
  task: Task;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-md shadow-sm mb-2 bg-white">
      <div className="flex flex-col">
        <span className="font-medium text-gray-900">{task.name}</span>
        <span className="text-xs text-white bg-blue-600 rounded px-2 py-1 mt-1 inline-block max-w-max">
          {task.category}
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <span className={`text-sm font-semibold ${task.isCompleted ? 'text-green-600' : 'text-gray-600'}`}>
          {task.isCompleted ? 'Concluída' : 'Ativa'}
        </span>
        <button aria-label="Editar Tarefa" className="text-gray-500 hover:text-blue-600 focus:outline-none">
          ✏️
        </button>
      </div>
    </div>
  );
};

export default Task;
