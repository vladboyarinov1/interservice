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
          <a onClick={handleClose}>О компании</a>
          <a onClick={handleClose}>Оборудование</a>
          <a onClick={handleClose}>Контакты</a>
        </nav>
      </aside>
    </>
  )
}
