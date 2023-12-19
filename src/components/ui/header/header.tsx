import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Sidebar } from '@/components/ui/header/sidebar/Sidebar'
import { useWindowSize } from '@/hooks/use-window-size'
import { BurgerMenu, Logo } from '@/img/icons'
import bg from '@/img/mainBackground.jpg'

import s from './header.module.scss'
import container from '@/styles/container.module.scss'

import { Intro } from './intro'

export const Header = () => {
  const { width } = useWindowSize()
  const [open, setOpen] = useState(false)
  const widthForBurger = width && width <= 910
  const mobileSize = width && width <= 680
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  useEffect(() => {
    open && (document.body.style.overflow = 'hidden')
    !open && (document.body.style.overflow = 'unset')
  }, [open]) // отключает прокрутку при открытом меню

  return (
    <div style={{ height: '100%' }}>
      <div className={s.backgroundPhoto} style={{ backgroundImage: `url(${bg})` }}>
        <header className={`${s.header} ${container.container}`}>
          <div className={s.logo}>
            <div>
              <a href={''}>
                <Logo height={mobileSize ? 35 : 50} width={mobileSize ? 35 : 50} />
              </a>
            </div>
            <div className={s.logoText}>
              <p>ИНТЕР</p>
              <p>СЕРВИС</p>
            </div>
          </div>
          {widthForBurger ? (
            <div className={!open ? s.showBurgerIcon : s.hideBurgerIcon}>
              <div>
                <a className={s.phoneMobile} href={'tel:+ 7 (977) 546-75-28'}>
                  +7 (977) 546-75-28
                </a>
              </div>
              <div>
                <label className={s.navbarBurger} htmlFor={'navbar__checkbox'} onClick={handleOpen}>
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
            </div>
          ) : (
            <nav className={s.menuItems}>
              <li className={s.menuItem}>О компании</li>
              <li className={s.menuItem}>Оборудование</li>
              <li className={s.menuItem}>Контакты</li>
              <li className={s.menuItem}>
                <a className={s.phone} href={'tel:+ 7 (977) 546-75-28'}>
                  +7 (977) 546-75-28
                </a>
              </li>
              <li className={s.menuItem}>
                <Button as={'a'} fs={12} px={15} py={10}>
                  отправить запрос
                </Button>
              </li>
            </nav>
          )}
          <Sidebar handleClose={handleClose} isDark={false} open={open} width />
        </header>
        <Intro />
      </div>
    </div>
  )
}
