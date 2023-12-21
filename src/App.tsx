import AppTutorialReactHookForm from './react-hook-form/tutorial/AppTutorialReactHookForm';
import Form from './react-hook-form/zod/Form';
import AppTodo from './todo-task/AppTodo';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <AppTutorialReactHookForm/> */}
      <AppTodo title='Todo task'/>
    </div>
  );
}

export default App;
