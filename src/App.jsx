import './App.css'
import Card from './components/Card'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <section className='flex'>
      <Sidebar />
      <main className='w-full px-[50px] py-5'>
        <h2 className='text-xl leading-6 font-openSans font-semibold text-primaryText'>Product Roadmap</h2>
        <div className=' mt-6 flex justify-between w-full'>
          <Card />
        </div>
      </main>
    </section>
  )
}

export default App
