import React from 'react'
import { layout } from '../style'
import styles from '../style'
import { card } from '../assets'
import Button from './Button'
const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better deal <br className='sm:block hidden' />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button styles="mt-5"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="Card Deal" className='w-[100%] h-[100%]' />
      </div>

    </section>
  )
}

export default CardDeal