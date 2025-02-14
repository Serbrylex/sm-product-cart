import React from 'react'

import styles from '../styles/styles.module.css'

import { useContext } from 'react'
import { ProductContext } from './ProductCard'

export interface Props {
    className?: string
    style?: React.CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {
    const { counter, isMaxCountReached, increaseBy } = useContext(ProductContext)


    return (
        <div
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >
                -
            </button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                className={`${styles.buttonAdd} ${
                    isMaxCountReached ? styles.disabled : null
                }`}
                onClick={() => increaseBy(1)}
            >
                +
            </button>
        </div>
    )
}

export default ProductButtons
