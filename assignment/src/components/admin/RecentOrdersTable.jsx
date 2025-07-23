import { Link } from "react-router-dom"

const RecentOrdersTable = ({ orders }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Recent Orders</h2>
      </div>
      <div className="card-content" style={{ padding: 0 }}>
        {orders.length === 0 ? (
          <p className="text-muted-foreground text-center p-4">No recent orders.</p>
        ) : (
          <table className="table">
            <thead className="table-header">
              <tr>
                <th>Order ID</th>
                <th>User ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th style={{ textAlign: "right" }}>Details</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.userId}</td>
                  <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                  <td>{order.totalAmount.toLocaleString('vi-VN')}₫</td>
                  <td>
                    <span
                      className={`badge ${order.status === "completed" ? "badge-default" : order.status === "processing" ? "badge-secondary" : "badge-destructive"}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <Link to={`/admin/orders/${order.id}`} style={{ color: "#007bff", textDecoration: "underline" }}>
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default RecentOrdersTable
