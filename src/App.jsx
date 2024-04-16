import Countdown from "./components/Countdown"
import Title from "./components/Title"
import Footer from "./components/Footer"


function App() {


  return (
    <div className="bg-[url('assets/bg.jpg')] bg-cover gap-7 h-screen w-screen flex flex-col justify-center items-center">
      <Title />
      <Countdown />
      <Footer />
    </div>
  )
}

export default App


