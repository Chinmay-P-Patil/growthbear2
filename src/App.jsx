

import './App.css'
import { Result } from './components/result'
import { History } from './components/history'

import { Input } from './components/input'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <>
    <Provider store={store}>
      <Input />
      <Result />
      <History />
    </Provider>  
    </>
  )
}

export default App
