import { useLocalStorage } from './useLocalStorage';
import {useEffect} from 'react';



export const useDarkMode = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(key, initialValue);

  useEffect( () => {
      if ( values === true) {
          document.body.classList.add('dark-mode')
      } else {document.body.classList.remove('dark-mode')}
  }, [values])


  return [values, setValues ];
};
