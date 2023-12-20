import s from './footer.module.scss'
import container from '@/styles/container.module.scss'

export const Footer = () => {
  return (
    <footer className={`${container.container} ${s.footer}`}>
      <p className={s.contacts}>Контакты</p>
      <p className={s.subtitle}>
        Позвоните нам или напишите письмо, и мы обязательно подберем для Вас оптимальное решение
      </p>
      <h2 className={s.companyName}>ООО «ИНТЕРСЕРВИС»</h2>
      <p className={s.tel}>
        Телефон: <a href={'tel:+7(977)546-75-28 '}>+7(977)546-75-28 </a>
      </p>
      <p className={s.email}>
        Email: <a href={'mailto:interservice@internet.ru'}>interservice@internet.ru</a>
      </p>
    </footer>
  )
}
