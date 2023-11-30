import { Button } from '@/components/ui/button'
import { Logo, Mobile } from '@/img/icons'
import bg from '@/img/mainBackground.jpg'

import s from './header.module.scss'
import container from '@/styles/container.module.scss'

import { Intro } from './intro'

export const Header = () => {
  return (
    <div className={s.backgroundPhoto} style={{ backgroundImage: `url(${bg})` }}>
      <header className={`${s.header} ${container.container}`}>
        <div className={s.logo}>
          <div>
            <a href={''}>
              <Logo size={50} />
            </a>
          </div>
          <div className={s.logoText}>
            <p>ИНТЕР</p>
            <p>СЕРВИС</p>
          </div>
        </div>
        <div>
          <nav className={s.menuItems}>
            <li className={s.menuItem}>О компании</li>
            <li className={s.menuItem}>Оборудование</li>
            <li className={s.menuItem}>Контакты</li>
          </nav>
        </div>
        <div className={s.phoneButtonSection}>
          <a className={s.phone} href={'tel:+ 7 (977) 546-75-28'}>
            +7 (977) 546-75-28
          </a>
          <Button fs={12} px={15} py={10}>
            отправить запрос
          </Button>
        </div>
      </header>
      <Intro />
    </div>
  )
}
