import { useState } from 'react';
import './App.css';
import Introduction from './Introduction/Introduction';
import Header from './Header/Header';
import Service from './Service/Service';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import Consulting from './Consulting/Consulting';
import News from './News/News';
import Page from './Page/Page'
import SplashPage from './SplashPage/SplashPage';

const availableLang = ["Chinese", "English"];

function App() {
  const [lang, setLang] = useState("Chinese");

  function handleClick(newLang){
    if(availableLang.includes(newLang)){
      setLang(newLang);
    }
  }

  function switchLang(newLang, langArray){
    if(!Array.isArray(langArray)){
      return "";
    }
    if(availableLang.includes(newLang)){
      let pos = availableLang.indexOf(newLang);
      return langArray[pos];
    }
    if(langArray.length === 0){
      return "";
    }
    return langArray[0];
  }

  return (
    <>
      <Header lang={lang} handleClick={handleClick}/>
      <Routes>
        <Route path='/' element={<Home lang={lang} handleClick={handleClick} switchLang={switchLang}/>} />
        <Route path="/about" element={<Introduction lang={lang} switchLang={switchLang} handleClick={handleClick}/>} />
        <Route path="/service" element={<Service lang={lang} switchLang={switchLang} handleClick={handleClick}/>} />
        <Route path="/consulting" element={<Consulting lang={lang} switchLang={switchLang} handleClick={handleClick}/>} />
        <Route path="/news" element={<News lang={lang} switchLang={switchLang} handleClick={handleClick}/>} >
          <Route path=":id" element={<Page />} />
        </Route>
      </Routes>
    </>
  );
}

export default SplashPage(App);
