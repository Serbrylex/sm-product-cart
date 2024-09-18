# SM-Product-Cart

Este es un paquete de pruebas de despliegue en NPM

### Sergio Madrid

## Ejemplo

```tsx
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'sm-product-cart'
```

```tsx
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({
    count,
    isMaxCountReached,
    maxCount,
    product,
    increaseBy,
    reset,
  }: ProductCardHandlers) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
