import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { Provider } from "./components/ui/provider"

function App() {
  return (
    <>
    <Provider>
      <Nav />
      <main>
        <Outlet />
      </main>
      </Provider>
    </>
  );
}

export default App;