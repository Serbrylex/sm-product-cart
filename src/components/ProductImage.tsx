import React from 'react'

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

import { useContext } from 'react'
import { ProductContext } from './ProductCard'

export interface Props {
    img?: string
    className?: string
    style?: React.CSSProperties
}

export const ProductImage = ({ img, className, style }: Props) => {
    const {
        product: { img: imgContext },
    } = useContext(ProductContext)

    const image = img ? img : imgContext ? imgContext : noImage

    return (
        <img
            className={`${styles.productImg} ${className}`}
            style={style}
            src={image}
            alt="Product"
        />
    )
}

export default ProductImage
