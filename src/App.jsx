import './App.css'
import { Result } from './components/result'
import { History } from './components/history'
import { Input } from './components/input'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <>
      <div className='px-5 flex flex-col gap-10'>
        <div className='text-4xl font-semibold'>Analytics Dashboard</div>
      <Provider store={store}>
      <Input />
      <Result />
      <History />
    </Provider>  
      </div>
   
    </>
  )
}

export default App
