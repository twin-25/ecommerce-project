
import { Header } from "../../components/Header"
import { OrdersDetailsGrid } from "./OrdersDetailsGrid"
import { OrderHeader } from "./OrderHeader"
export function OrdersGrid({orders, loadCart}){
  return (
            <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">

                <OrderHeader order = {order} />

                <OrdersDetailsGrid order={order} loadCart={loadCart} />
              </div>

            )
          })}
        </div>
  )
}