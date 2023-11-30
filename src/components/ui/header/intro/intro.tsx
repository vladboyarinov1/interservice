import { Button } from '@/components/ui/button'

import s from './intro.module.scss'
import container from '@/styles/container.module.scss'

import { AdvantagesCard } from '../advantages-card'

export const Intro = () => {
  return (
    <div className={`${container.container} ${s.intro}`}>
      <div>
        <p className={s.subtitle}>ПОДБЕРЕМ ОПТИМАЛЬНЫЕ РЕШЕНИЯ ПО ВЫГОДНОЙ ЦЕНЕ</p>
        <h1 className={s.mainText}>ИНТЕРСЕРВИС</h1>
        <p className={s.description}>
          ваш надежный партнер в сфере поставок промышленного оборудования и материалов
        </p>
      </div>
      <Button px={60} py={25}>
        Узнать подробнее
      </Button>
      <AdvantagesCard />
    </div>
  )
}
