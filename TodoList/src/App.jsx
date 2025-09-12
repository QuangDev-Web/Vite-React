import './styles/global.scss';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home/Home';

function App() {

  return (
    <>
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </>
  )
}

export default App
