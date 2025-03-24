import Cards from "./components/Cards"
import ThemeSwitcher from "./components/ThemeSwitcher"
import { ThemeProvider } from "./context/ThemeContext"

function App() {

  return (
    <>

     <ThemeProvider>
     <div className="flex p-5 flex-col gap-3 bg-white/80 dark:bg-[#3b3c3f] justify-center items-center w-full min-h-screen">
     <ThemeSwitcher/>
      <Cards/>
      </div>
     </ThemeProvider>
    </>
  )
}

export default App
