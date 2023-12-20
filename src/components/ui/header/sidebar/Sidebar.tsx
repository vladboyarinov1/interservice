import { Link } from 'react-scroll'

import { Close } from '@/img/icons'

import s from './Sidebar.module.scss'

type PropsType = {
  handleClose: () => void
  isDark: boolean
  open: boolean
  width: boolean
}

export const Sidebar = ({ handleClose, open }: PropsType) => {
  const sidebarClass = s.sidebar + (open ? ' ' + s.open : '')

  return (
    <>
      {/*затемнение справа от открытого меню*/}
      {open && <div className={s.background} onClick={handleClose} />}

      <aside className={sidebarClass}>
        <button className={open ? s.close : s.closeNotOpen} onClick={handleClose}>
          <Close height={20} width={20} />
        </button>

        <nav className={s.nav}>
          <Link
            activeClass={s.navigateActive}
            duration={500}
            offset={-70}
            onClick={handleClose}
            smooth
            spy
            to={'company'}
          >
            О компании
          </Link>{' '}
          <Link
            activeClass={s.navigateActive}
            duration={500}
            offset={-70}
            onClick={handleClose}
            smooth
            spy
            to={'equipment'}
          >
            Оборудование
          </Link>
          <Link
            activeClass={s.navigateActive}
            duration={500}
            offset={-300}
            onClick={handleClose}
            smooth
            spy
            to={'contacts'}
          >
            Контакты
          </Link>
        </nav>
      </aside>
    </>
  )
}
