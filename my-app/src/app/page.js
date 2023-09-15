import Image from 'next/image'
import Navbar from './components/Navbar/page'
import Footer from "./components/Footer/page"

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='flex items-center   m-9 gap-96 p-6'> 
     <div className=''>
      <h1 className='text-6xl'> HI I AM NITIN VERMA</h1>
      <p>i m a web develpor who create beautiful and attractive webapps and websites</p>

      

     </div>
     <div className='w-2/4 mr-7 mix-blend-screen'>
     <img src="https://i.pinimg.com/736x/43/10/e8/4310e84e3beeede4c1060d5207c2f41e.jpg " class=" h-3/6  px-2.5 border-amber-700 " alt="Logo" />

     </div>
     </div>
     

    



     <Footer/>
    </>
  )
}
