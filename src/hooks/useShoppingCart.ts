import { useState } from 'react'
import { Product, ProductInCard } from '../interfaces/interfaces'

interface ProductCountChange {
    count: number
    product: Product
}

const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCard
    }>({})

    const onProductCountChange = ({ count, product }: ProductCountChange) => {
        setShoppingCart( oldShoppingCart => {
            const productInCart: ProductInCard = oldShoppingCart[product.id] || { ...product, count: 0 }

            const newCount = Math.max(productInCart.count + count, 0) 

            if (newCount > 0) {
                return {
                    ...oldShoppingCart,
                    [product.id]: {
                        ...product,
                        count: newCount,
                    },
                }
            }
            
            const { [product.id]: toDelete, ...rest } = oldShoppingCart
            return rest
        })
    }

    return {
        shoppingCart,
        onProductCountChange,
    }
}

export default useShoppingCart
