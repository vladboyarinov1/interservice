import { Advantages } from '@/components/ui/advantages'
import { Equipment } from '@/components/ui/equipment'
import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'
import { Main } from '@/components/ui/main'
import { SendForm } from '@/components/ui/send-form'

import s from './App.module.scss'

function App() {
  return (
    <>
      <Header />
      <Main />
      <div className={s.imageContainer}>
        <div>“Надежный партнер в вашем производственном успехе”</div>
      </div>
      <Advantages />
      <Equipment />
      <div className={s.imageMers}></div>
      <SendForm />
      <Footer />
    </>
  )
}

export default App
