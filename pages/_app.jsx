/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider } from 'theme-ui'
import { themeLight, themeDark } from '../theme'
import Nav from '../src/components/nav'
import { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';

import "./styles.css";

export default function App({ Component, pageProps }) {

  
  const changeTheme = () =>{
    currentTheme=== themeDark ? setstate(themeLight) : setstate(themeDark);
    console.log("currentTheme===> ", currentTheme);
  } 

  const [currentTheme, setstate] = useState(themeLight)
  // useEffect(() => {
  //   typeof document !== undefined
  //     ? require("../node_modules/react-bootstrap")
  //     : null;
  //   },[]);


  return (
    <ThemeProvider theme={currentTheme} >
      <div>
        <Nav changeTheme={changeTheme}/>
        <Component {...pageProps} />
      </div>      
    </ThemeProvider>
  )
}