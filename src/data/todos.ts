export interface Todo {
  todo: string;
  done: boolean;
}

// const todos: Todo[] = [
//   {
//     todo: 'Matt Chorsey',
//     done: false,
//   },
//   {
//     todo: 'Lauren Ruthford',
//     done: false,
//   },
//   {
//     todo: 'Jordan Firth',
//     done: false,
//   },
//   {
//     todo: 'Bill Thomas',
//     done: false,
//   },
//   {
//     todo: 'Joanne Pollan',
//     done: false,
//   }
// ];

// export const getTodos = () => todos;
export const getTodos = ():Todo[] => {
  let todos = [];
  let keys = Object.keys(localStorage);

  for (let key of keys) {
    let todo = JSON.parse(localStorage.getItem(key) || '');
    if (todo !== '') {
      todos.push(todo);
    }
  }

  return todos;
};

// export const getTodo = (i: number) => todos.find(todo => todos[i] === todo);
