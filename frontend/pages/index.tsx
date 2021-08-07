import { useAppDispatch, useAppSelector } from "@store/store-hooks"

import { cartActions } from "@store/cart/cart-slice"

let index = 0

const Home = () => {
  const cartItems = useAppSelector((store) => store.cart.items)
  const dispatch = useAppDispatch()

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: `testID-${index++}`,
        price: 599,
        quantity: 1,
        totalPrice: 599,
        name: "Test Item",
      })
    )
  }

  const removeItemHandler = (id: string) => {
    dispatch(cartActions.removeItemFromCart(id))
  }

  return (
    <div>
      <main>
        <p>Hello World from the client!</p>
        <button type="button" onClick={addItemHandler}>
          Add item to cart
        </button>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {cartItems.map((item) => (
            <div key={item.id}>
              {item.name}
              <button type="button" onClick={() => removeItemHandler(item.id)}>
                Remove item
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
