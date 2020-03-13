import React from 'react';
import Info from './components/info'
import {useDarkMode} from './hooks/darkMode';

function App() {
  const [values, setValues] = useDarkMode('darkMode', false)
  return (
    <div>
        <div className="dark-mode__toggle">
        <div
          data-testid='darkButton'
          onClick={() => setValues(!values)}
          className={values ? 'toggle toggled' : 'toggle'}
        />
        </div>
        <Info />
    </div>
  );
}

export default App;
