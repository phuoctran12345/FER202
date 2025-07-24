"use client"

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchAllOrders } from "../../redux/slices/orderSlice"

const PaymentHistory = () => {
  const dispatch = useDispatch()
  // Lấy orders
  const { orders, status, error } = useSelector((state) => state.orders)
  const currentUser = useSelector((state) => state.users.currentUser)

  useEffect(() => {
    if (currentUser?.role === "admin" || currentUser?.role === "manager") {
      dispatch(fetchAllOrders())
    }
  }, [currentUser, dispatch])

  if (!currentUser || (currentUser.role !== "admin" && currentUser.role !== "manager")) {
    return (
      <div className="container py-8 text-center" style={{ color: "red" }}>
        Access Denied. You must be an Admin or Manager to view this page.
      </div>
    )
  }

  if (status === "loading") {
    return <div className="container py-8 text-center">Loading payment history...</div>
  }

  if (status === "failed") {
    return (
      <div className="container py-8 text-center" style={{ color: "red" }}>
        Error: {error}
      </div>
    )
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold text-center">All Orders (Admin)</h1>
      {orders.length === 0 ? (
        <p className="text-muted-foreground text-center">No order records found.</p>
      ) : (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">All Orders</h2>
          </div>
          <div className="card-content" style={{ padding: 0 }}>
            <table className="table">
              <thead className="table-header">
                <tr>
                  <th>Order ID</th>
                  <th>User ID</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.userId}</td>
                    <td>{order.totalAmount?.toLocaleString('vi-VN')}₫</td>
                    <td>{order.paymentMethod}</td>
                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                    <td>
                      <span className={`badge ${order.status === "completed" || order.status === "sucess" ? "badge-default" : order.status === "processing" ? "badge-secondary" : "badge-destructive"}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default PaymentHistory
