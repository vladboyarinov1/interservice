import { Award, Cards, Check } from '@/img/icons'

import s from './advantages-card.module.scss'

export const AdvantagesCard = () => {
  return (
    <div className={s.advantages}>
      <div className={s.advantagesCard}>
        <div className={s.advantagesImg}>
          <Cards height={53} />
        </div>
        <div>
          <p className={s.advantagesText}>Индивидуальный расчет цен</p>
        </div>
      </div>
      <div className={s.advantagesCard}>
        <div className={s.advantagesImg}>
          <Check height={46} />
        </div>
        <div>
          <p className={s.advantagesText}>Индивидуальный расчет цен</p>
        </div>
      </div>
      <div className={s.advantagesCard}>
        <div className={s.advantagesImg}>
          <Award height={56} />
        </div>
        <div>
          <p className={s.advantagesText}>Индивидуальный расчет цен</p>
        </div>
      </div>
    </div>
  )
}
