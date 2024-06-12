import { useState } from 'react';
import './App.css'
import TodoWrapper from './components/TodoWrapper'

function App() {

  const [isDark, setIsDark] = useState(false)

  const setDarkMode = () => {
    if (isDark) {
      setIsDark(false)
  }else{
      setIsDark(true)
  }
  }

  return(
    <div className='main' data-theme={isDark ? "dark" : "light"}>
      <TodoWrapper setDarkMode={setDarkMode}/>
    </div>
  );
}

export default App
