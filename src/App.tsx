import NewRouterProvider from './routers/NewRouterProvider';
import './App.css';

const App = () => {
  return (
    <>
      {/* <OldRouterProvider /> */}
      <NewRouterProvider />
      <footer>{import.meta.env.VITE_MESSAGE}</footer>
    </>
  )
}

export default App;
