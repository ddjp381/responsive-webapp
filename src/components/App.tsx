import { Cats } from "./cats";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import "./App.css";

const App = () => {
  return (
    <div data-testid='app' className='App'>
      <Header />
      <div className='App-content'>
        <Sidebar />
        <Cats />
      </div>
    </div>
  );
};

export default App;
