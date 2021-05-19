import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Todo } from '../data/todos';

import './TodoListItem.css';

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <IonItem>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {todo.todo}
          <span className="date">
            <IonNote>{todo.done ? 'done' : 'not done'}</IonNote>
          </span>
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default TodoListItem;
