import Card from './components/Card'
import Sidebar from './components/Sidebar'

function App() {

  const arrayData = [
    {
      title: "Q1 2019",
      periode: "January - March",
      dataSubCard: [
        {
          subTitle : "Re-designed the zero-g doggie bags. No more spills!",
          passed: "64%"
        },
        {
          subTitle : "Travel & Relocation Support",
          passed: "12%"
        },
      ]
    },
    {
      title: "Q2 2019",
      periode: "April - June",
      dataSubCard: []
    },
    {
      title: "Q3 2019",
      periode: "July - September",
      dataSubCard: [
        {
          subTitle: "Bundle interplanetary analytics for improved transmission",
          passed: "90%"
        }
      ]
    },
    {
      title: "Q4 2019",
      periode: "October - December",
      dataSubCard: [
        {
          subTitle: "Data Migration: Performance & Culture End Game",
          passed: "63%"
        }
      ]
    },
  ]

  return (
    <section className='flex'>
      <Sidebar />
      <main className='w-full px-[50px] py-5'>
        <h2 className='text-[20px] leading-6 font-openSans font-semibold text-primaryText'>Product Roadmap</h2>
        <div className=' mt-6 flex justify-between flex-wrap w-full items-start'>
          {
                arrayData.map( (data, index) => (
                  <Card title={data.title} periode={data.periode} key={index} dataSubCard={data.dataSubCard} />
                ))
          }
        </div>
      </main>
    </section>
  )
}

export default App
