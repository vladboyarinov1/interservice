import { useWindowSize } from '@/hooks/use-window-size'
import { Award, Cards, Check, Discount, Geolocation, Time } from '@/img/icons'

import s from './advantages.module.scss'
import container from '@/styles/container.module.scss'

export const Advantages = () => {
  const { width } = useWindowSize()
  const mobileSize = width && width <= 500
  const cardsInfo = [
    {
      id: 1,
      image: <Discount height={mobileSize ? 41 : 94} />,
      subtitle:
        'Мы следим за последними технологическими тенденциями и предлагаем инновационные решения,\n' +
        '            которые помогут нашим клиентам быть на шаг впереди конкурентов.',
      title: 'Инновационные решения:',
    },
    {
      id: 2,
      image: <Geolocation height={mobileSize ? 38 : 80} />,
      title: 'Организация доставки оборудования до конечной точки нашими силами.',
    },
    {
      id: 3,
      image: <Cards height={mobileSize ? 35 : 70} />,
      subtitle: `Наша компания имеет отличную репутацию и богатый опыт работы в области поставки
            производственного оборудования.`,
      title: 'Репутация и опыт:',
    },
    {
      id: 4,
      image: <Award height={mobileSize ? 40 : 80} />,
      subtitle: `Мы строим долгосрочные партнерские отношения с нашими клиентами и готовы предложить
            дополнительные услуги и поддержку для их развития и успеха.`,
      title: 'Партнерство на долгосрочной основе:',
    },
    {
      id: 5,
      image: <Check height={mobileSize ? 35 : 70} />,
      subtitle: `Мы стремимся понять потребности каждого клиента и предложить наиболее подходящее оборудование, предоставляя консультации по оптимизации процессов.`,
      title: 'Индивидуальный подход:',
    },
    {
      id: 6,
      image: <Time height={mobileSize ? 40 : 80} />,
      subtitle: `Мы готовы предложить гибкие условия сотрудничества, включая финансовые и кредитные
            решения, чтобы помочь нашим клиентам реализовать свои проекты.`,
      title: 'Гибкие условия сотрудничества: ',
    },
  ]

  return (
    <div className={`${container.container} ${s.advantages}`}>
      <div>
        <h2 className={s.title}>Наши преимущества</h2>
      </div>
      <div className={s.cardsContainer}>
        {cardsInfo.map(card => (
          <div className={s.card} key={card.id}>
            <div className={s.circle}>{card.image}</div>
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
