import { useState } from 'react'

import { useWindowSize } from '@/hooks/use-window-size'
import { Stars } from '@/img/icons'
import MB from '@/img/mobilePhoneInt.svg'
import Mobile from '@/img/phoneImg.svg'
import PhoneMobile from '@/img/phoneMobile.png'

import s from './main.module.scss'
import container from '@/styles/container.module.scss'

export const Main = () => {
  const { width } = useWindowSize()
  const mobileSize = width && width <= 500

  return (
    <main className={`${container.container} ${s.main}`}>
      <div className={s.mainContent}>
        <div className={s.companyInfo}>
          <div>
            <Stars height={49} width={138} />
          </div>
          <h2>О компании ООО “ИНТЕРСЕРВИС”</h2>
          <p>мы открыты для всех</p>
        </div>
        <div className={s.description}>
          <div className={s.mobileImg}>
            <img alt={''} src={mobileSize ? MB : Mobile} />
          </div>
          <div className={s.textContainer}>
            <p>
              <span>ООО “Интерсервис”</span> современное предприятие по поставке оборудования и
              материалов для различных отраслей промышленности.
            </p>
            <p>
              Мы осуществляем поставку оригинального оборудования и запасных частей от ведущих
              производителей и обеспечиваем нашим заказчикам {''}
              <span>
                улучшение процессов производства, снижение затрат, и повышение качества готовой
                продукции.
              </span>
            </p>
          </div>
        </div>
        <div className={s.cards}>
          <div className={s.card}>
            <p>
              Современная компания – коллектив профессионалов своего дела, поставивший перед собой
              цель{' '}
              <span>
                стать надежным поставщиком промышленного оборудования и материалов для наших
                заказчиков.
              </span>
            </p>
          </div>
          <div className={s.card}>
            <p>
              {' '}
              <span>Основная задача компании</span> - предоставление широкого выбора надежного
              производственного оборудования соответствующего требованиям заказчика, оказание
              технической поддержки на всех этапах реализации проекта, своевременная доставка и
              гибкие условия сотрудничества.
            </p>
          </div>
        </div>
        <div className={s.purposes}>
          <p>
            <span>Наша миссия</span> - предоставлять клиентам надежное производственное
            оборудование, которое помогает повысить эффективность и конкурентоспособность бизнеса.
          </p>
          <p>
            <span>Мы стремимся быть стабильными партнером</span> для наших клиентов, предлагая
            широкий ассортимент оборудования, индивидуальный подход и высокий уровень сервиса.
          </p>
        </div>
      </div>
    </main>
  )
}
