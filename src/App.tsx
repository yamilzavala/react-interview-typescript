import AppTutorialReactHookForm from './react-hook-form/tutorial/AppTutorialReactHookForm';
import AppZodTs from './react-hook-form/zod-ts-dave-gray/AppZodTs';
import Form from './react-hook-form/zod/Form';
import AppFcWithTs from './theory/FC-with-ts/AppFcWithTs';
import EventComponent from './theory/FC-with-ts/components/EventComponent';
import GuestList from './theory/FC-with-ts/components/GuestList';
import AppGoals from './theory/ts-app-maximilian/AppGoals';
import AppTodo from './todo-task/AppTodo';
import AppTypeofKeyof from './typeof-keyof/AppTypeofKeyof';
import AppTs from './typescript-in-react/AppTs';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <AppTutorialReactHookForm/> */}
      {/* <AppTodo title='Todo task'/> */}
      {/* <AppTs/> */}
      {/* <AppZodTs/> */}
      {/* <AppTypeofKeyof/> */}
      {/* <AppFcWithTs/> */}
      {/* <GuestList/> */}
      {/* <EventComponent/> */}
      <AppGoals/>
    </div>
  );
}

export default App;
