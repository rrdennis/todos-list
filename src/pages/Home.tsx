import TodoListItem from '../components/TodoListItem';
import { useState } from 'react';
import { Todo, getTodos } from '../data/todos';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonButton,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const onNewTodoChanged = (e: CustomEvent) => setNewTodo(e.detail.value!);

  const onAddToListClicked = () => {
    if (newTodo) {
      localStorage.setItem(
        (localStorage.length + 1).toString(), 
        JSON.stringify({
          todo: newTodo,
          done: false
        })
      );
      setNewTodo('');
      return true;
    } else {
      return false;
    }
  };

  useIonViewWillEnter(() => {
    const todos = getTodos();
    setTodos(todos);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader className="ion-text-center ion-padding">
        <IonToolbar>
          <IonTitle>My To Do List</IonTitle>
          <IonItem>
            <IonInput value={newTodo} onIonChange={onNewTodoChanged} />
            <IonButton 
              expand="full" 
              size="default" 
              onClick={onAddToListClicked}
            >
              Add To List
            </IonButton>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              My To Do List
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {todos.map((todo, i) => <TodoListItem key={i} todo={todo} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
