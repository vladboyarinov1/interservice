import { SendForm } from '@/components/ui/SendForm/SendForm'
import { Advantages } from '@/components/ui/advantages'
import { Equipment } from '@/components/ui/equipment'
import { Header } from '@/components/ui/header'
import { Main } from '@/components/ui/main'

import s from './App.module.scss'
import container from '@/styles/container.module.scss'

function App() {
  // const { width } = useWindowSize()

  return (
    <>
      <Header />
      <Main />
      {/*<div className={s.imageContainer}>*/}
      {/*  <div>“Надежный партнер в вашем производственном успехе”</div>*/}
      {/*</div>*/}
      {/*<Advantages />*/}
      {/*<Equipment />*/}
      {/*<div className={s.imageMers}></div>*/}
      {/*<SendForm />*/}
      {/*<footer className={`${container.container} ${s.footer}`}>*/}
      {/*  <p className={s.contacts}>Контакты</p>*/}
      {/*  <p className={s.subtitle}>*/}
      {/*    Позвоните нам или напишите письмо, и мы обязательно подберем для Вас оптимальное решение*/}
      {/*  </p>*/}
      {/*  <h2 className={s.companyName}>ООО «ИНТЕРСЕРВИС»</h2>*/}
      {/*  <p className={s.tel}>*/}
      {/*    Телефон: <a href={'tel:+7(977)546-75-28 '}>+7(977)546-75-28 </a>*/}
      {/*  </p>*/}
      {/*  <p className={s.email}>*/}
      {/*    Email: <a href={'mailto:interservice@internet.ru'}>interservice@internet.ru</a>*/}
      {/*  </p>*/}
      {/*</footer>*/}
    </>
  )
}

export default App
