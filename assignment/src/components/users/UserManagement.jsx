"use client"

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchAllUsers, updateUserStatus } from "../../redux/slices/userSlice"
import { useNavigate } from "react-router-dom"

const UserManagement = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { users, status, error } = useSelector((state) => state.users)
  const currentUser = useSelector((state) => state.users.currentUser)

  useEffect(() => {
    if (currentUser?.role === "admin") {
      dispatch(fetchAllUsers())
    }
  }, [currentUser, dispatch])

  const handleBanUnban = (userId, isBanned) => {
    if (window.confirm(`Are you sure you want to ${isBanned ? "unban" : "ban"} this user?`)) {
      dispatch(updateUserStatus({ id: userId, isBanned: !isBanned }))
    }
  }

  if (!currentUser || currentUser.role !== "admin") {
    return (
      <div className="container py-8 text-center" style={{ color: "red" }}>
        Access Denied. You must be an Admin to view this page.
      </div>
    )
  }

  if (status === "loading") {
    return <div className="container py-8 text-center">Loading users...</div>
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
      <button
        onClick={() => navigate("/admin")}
        style={{ marginBottom: 24, background: "#f1f1f1", border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 500 }}
      >
        ← Quay lại Dashboard
      </button>
      <h1 className="mb-8 text-3xl font-bold text-center">User Management (Admin)</h1>
      {users.length === 0 ? (
        <p className="text-muted-foreground text-center">No users found.</p>
      ) : (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">All Users</h2>
          </div>
          <div className="card-content" style={{ padding: 0 }}>
            <table className="table">
              <thead className="table-header">
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <span className={`badge ${user.isBanned ? "badge-destructive" : "badge-default"}`}>
                        {user.isBanned ? "Banned" : "Active"}
                      </span>
                    </td>
                    <td>
                      <button
                        className={`button ${user.isBanned ? "button-primary" : "button-destructive"} button-sm`}
                        onClick={() => handleBanUnban(user.id, user.isBanned)}
                      >
                        {user.isBanned ? "Unban" : "Ban"}
                      </button>
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

export default UserManagement
