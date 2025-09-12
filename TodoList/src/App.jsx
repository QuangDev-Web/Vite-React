import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice'
import Header from './components/Header/Header';
import './styles/global.scss';
import Footer from './components/Footer/Footer';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Header />
      <main style={{ minHeight: '70vh', padding: '20px' }}>
        <h2>Chào mừng bạn đến với ứng dụng!</h2>
        <p>Đây là nội dung chính của trang.</p>
      </main>
      <Footer />
    </>
  )
}

export default App
