import React, { useEffect, useState } from "react";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      {orders.map((order, index) => (
        <div key={index} className="order">
          <p>Ordered On: {new Date(order.date).toLocaleString()}</p>
          <table border={2}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.title}</td>
                  <td>₹ {item.price}</td>
                  <td>{item.quantity}</td>
                  <td>₹ {item.totalPrice}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">Total</td>
                <td>₹ {order.totalPrice}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      ))}
    </div>
  );
}

export default OrdersPage;
