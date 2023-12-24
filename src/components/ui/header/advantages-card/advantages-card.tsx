import { useWindowSize } from '@/hooks/use-window-size'
import { Award, Cards, Check } from '@/img/icons'

import s from './advantages-card.module.scss'

export const AdvantagesCard = () => {
  const { width } = useWindowSize()
  const mobileSize = width && width <= 680

  return (
    <div className={s.advantages}>
      <div className={s.advantagesCard}>
        <div className={s.advantagesImg}>
          <Cards height={mobileSize ? 35 : 53} />
        </div>
        <div>
          <p className={s.advantagesText}>Индивидуальный расчет цен</p>
        </div>
      </div>
      <div className={s.advantagesCard}>
        <div className={s.advantagesImg}>
          <Award height={mobileSize ? 35 : 56} />
        </div>
        <div>
          <p className={s.advantagesText}>Экспертный подбор оборудования</p>
        </div>
      </div>
      <div className={s.advantagesCard}>
        <div className={s.advantagesImg}>
          <Check height={40} />
        </div>
        <div>
          <p className={s.advantagesText}>Оригинальное оборудование</p>
        </div>
      </div>
    </div>
  )
}
