import ACO from '@/img/ACO.jpg'
import cryogenic from '@/img/Cryogenic.jpg'
import pump from '@/img/Pump_Render.jpg'
import compressor from '@/img/compressor.jpg'
import metal from '@/img/metal-structures.jpg'
import spares from '@/img/spares.jpg'

import s from './equipment.module.scss'
import container from '@/styles/container.module.scss'

export const Equipment = () => {
  const equipmentsData = [
    {
      id: 1,
      image: `${compressor}`,
      subtitle: `(центробежные, винтовые, поршневые)`,
      title: `Компрессорное оборудование`,
    },
    {
      id: 2,
      image: `${spares}`,
      title: `Запасные части для импортных установок и агрегатов`,
    },
    {
      id: 3,
      image: `${metal}`,
      title: `Емкости, металлоконструкции`,
    },
    {
      id: 4,
      image: `${pump}`,
      subtitle: `(центробежного и объемного действия, с магнитное муфтой, КНС, насосные станции)`,
      title: `Насосное оборудование`,
    },
    {
      id: 5,
      image: `${cryogenic}`,
      subtitle: `(насосы, сосуды, азотные станции, испарители, ЗРА)`,
      title: `Криогенное оборудование`,
    },
    {
      id: 6,
      image: `${ACO}`,
      title: `Аппараты воздушного охлаждения (АВО)`,
    },
  ]

  return (
    <div className={`${container.container} ${s.equipmentContainer}`}>
      <div className={s.equipmentTitle}>
        <h2>оборудование</h2>
        <p>Категории оборудования, поставку которых мы готовы обеспечить </p>
      </div>
      <div className={s.equipments}>
        {equipmentsData.map(i => (
          <div className={s.equipmentsCard} key={i.id}>
            <div className={s.equipmentsCardImg}>
              <img alt={''} src={i.image} />
            </div>
            <div className={s.equipmentsCardInfo}>
              <h3>{i.title}</h3>
              <p>{i.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
