import { SendForm } from '@/components/ui/SendForm/SendForm'
import { Advantages } from '@/components/ui/advantages'
import { Equipment } from '@/components/ui/equipment'
import { Header } from '@/components/ui/header'
import { Main } from '@/components/ui/main'

import s from './App.module.scss'

function App() {
  // const { width } = useWindowSize()

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
    </>
  )
}

export default App
