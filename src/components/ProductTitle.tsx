import React from 'react'

import styles from '../styles/styles.module.css'

import { useContext } from 'react'
import { ProductContext } from './ProductCard'

export interface Props {
    title?: string
    className?: string
    style?: React.CSSProperties
}

export const ProductTitle = ({ title, className, style }: Props) => {
    const {
        product: { title: titleContext },
    } = useContext(ProductContext)

    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>
            {title || titleContext}
        </span>
    )
}

export default ProductTitle
