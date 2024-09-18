import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react'

import {
    ProductContextProps,
    Product,
    onChangeArgs,
    InitialValues,
    ProductCardHandlers,
} from '../interfaces/interfaces'
import React from 'react'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
    children: (args: ProductCardHandlers) => JSX.Element
    product: Product
    className?: string
    style?: React.CSSProperties
    onChange?: (args: onChangeArgs) => void
    value?: number
    initialValues?: InitialValues
}

export const ProductCard = ({
    children,
    product,
    className,
    style,
    onChange,
    value,
    initialValues,
}: Props) => {
    const { counter, isMaxCountReached, maxCount, increaseBy, reset } =
        useProduct({
            onChange,
            product,
            value,
            initialValues,
        })

    return (
        <Provider
            value={{
                counter,
                isMaxCountReached,
                maxCount,
                product,
                increaseBy,
                reset,
            }}
        >
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount,
                    product,
                    increaseBy,
                    reset,
                })}
            </div>
        </Provider>
    )
}
