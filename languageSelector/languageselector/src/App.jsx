import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSelector from "./components/LanguageSelector";
import Content from "./components/Content";


const App = () => {
  return (
    <LanguageProvider className="">
      <div className="bg-beige-500 w-full h-screen flex flex-col justify-center items-center ">
        <div className="w-[500px] flex flex-col gap-4 mx-auto text-center border-1 px-5 py-10">
          <h1 className="bg-blue-300 p-4 rounded-[10px] text-xl font-bold">Laguage Switcher</h1>
          <LanguageSelector />
          <Content />
        </div>
      </div>
    </LanguageProvider>
  )
}

export default App
