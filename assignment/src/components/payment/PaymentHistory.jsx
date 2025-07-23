"use client"

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchAllPaymentHistory } from "../../redux/slices/paymentSlice"

const PaymentHistory = () => {
  const dispatch = useDispatch()
  const { paymentHistory, status, error } = useSelector((state) => state.payments)
  const currentUser = useSelector((state) => state.users.currentUser)

  useEffect(() => {
    if (currentUser?.role === "admin" || currentUser?.role === "manager") {
      dispatch(fetchAllPaymentHistory())
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
      <h1 className="mb-8 text-3xl font-bold text-center">All Payment History (Admin)</h1>
      {paymentHistory.length === 0 ? (
        <p className="text-muted-foreground text-center">No payment records found.</p>
      ) : (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">All Payments</h2>
          </div>
          <div className="card-content" style={{ padding: 0 }}>
            <table className="table">
              <thead className="table-header">
                <tr>
                  <th>Payment ID</th>
                  <th>Order ID</th>
                  <th>User ID</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {paymentHistory.map((payment) => (
                  <tr key={payment.id}>
                    <td>{payment.id}</td>
                    <td>{payment.orderId}</td>
                    <td>{payment.userId}</td>
                    <td>{payment.amount.toLocaleString('vi-VN')}₫</td>
                    <td>{payment.paymentMethod}</td>
                    <td>{new Date(payment.transactionDate).toLocaleDateString()}</td>
                    <td>
                      <span className={`badge ${payment.status === "success" ? "badge-default" : "badge-destructive"}`}>
                        {payment.status}
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
