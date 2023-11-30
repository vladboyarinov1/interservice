import { Header } from '@/components/ui/header'
import { Main } from '@/components/ui/main'
import { Discount } from '@/img/icons'

import s from './App.module.scss'
import container from '@/styles/container.module.scss'

function App() {
  // const { width } = useWindowSize()

  return (
    <>
      <Header />
      <Main />
      <div className={s.imageContainer}>
        <div>“Надежный партнер в вашем производственном успехе”</div>
      </div>
      <div className={container.container}>
        <h2>Наши преимущества</h2>
        <div>
          <div className={s.card}>
            <div className={s.circle}>
              <Discount height={94} />
            </div>
            <h3>Инновационные решения:</h3>
            <p>
              Мы следим за последними технологическими тенденциями и предлагаем инновационные
              решения, которые помогут нашим клиентам быть на шаг впереди конкурентов.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
