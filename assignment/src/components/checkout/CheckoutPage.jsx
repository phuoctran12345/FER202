"use client"

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { createOrder } from "../../redux/slices/orderSlice"
import { clearCart } from "../../redux/slices/cartSlice"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import { updateProduct } from "../../redux/slices/productSlice";

const CheckoutPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.items)
  const currentUser = useSelector((state) => state.users.currentUser) // Assuming you have a currentUser in userSlice

  const [paymentMethod, setPaymentMethod] = useState("card")
  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  })
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [payosQR, setPayosQR] = useState(null)
  const [payosLoading, setPayosLoading] = useState(false)
  const [showAlert, setShowAlert] = useState({ show: false, message: '', variant: 'success' })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setShippingAddress((prev) => ({ ...prev, [id]: value }))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = cartItems.length > 0 ? 5.0 : 0
  const total = subtotal + shipping

  const handleCreatePayOSBill = async () => {
    setPayosLoading(true)
    setPayosQR(null)
    try {
      const response = await axios.post(
        "https://api-merchant.payos.vn/v2/payment-requests",
        {
          orderCode: Date.now(), // số nguyên, không trùng
          amount: Math.round(total), // số nguyên
          description: "Thanh toan don hang E-commerce App", // chuỗi ngắn, không ký tự lạ
          returnUrl: "http://localhost:3005/orders",
          cancelUrl: "http://localhost:3005/checkout",
        },
        {
          headers: {
            "x-client-id": "251dd680-34fd-4d28-bce8-f892436ac0ce",
            "x-api-key": "167ea960-f8e3-4971-afc2-23333762a000",
            "Content-Type": "application/json",
          },
        }
      )
      setPayosQR(response.data.data.qrCode)
    } catch (err) {
      setPayosQR(null)
      setShowAlert({ show: true, message: 'Tạo bill PayOS thất bại!', variant: 'danger' })
    }
    setPayosLoading(false)
  }

  // Gọi tạo bill PayOS mỗi khi chọn VietQR và tổng tiền thay đổi
  useEffect(() => {
    if (paymentMethod === "vietqr") {
      handleCreatePayOSBill()
    } else {
      setPayosQR(null)
    }
    // eslint-disable-next-line
  }, [paymentMethod, total])

  const handlePlaceOrder = async () => {
    if (!agreedToTerms) {
      setShowAlert({ show: true, message: 'You must agree to the terms and conditions.', variant: 'danger' })
      return
    }
    if (!currentUser) {
      setShowAlert({ show: true, message: 'Please log in to place an order.', variant: 'danger' })
      navigate("/login")
      return
    }

    const orderData = {
      userId: currentUser.id,
      orderDate: new Date().toISOString(),
      totalAmount: total,
      status: "pending", // Initial status
      shippingAddress,
      paymentMethod,
      items: cartItems.map((item) => ({
        productId: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
    }

    try {
      await dispatch(createOrder(orderData)).unwrap()
      // Giảm stock sản phẩm
      for (const item of cartItems) {
        await dispatch(updateProduct({ id: item.id, product: { stock: item.stock - item.quantity } }))
      }
      dispatch(clearCart())
      setShowAlert({ show: true, message: 'Order placed successfully!', variant: 'success' })
      setTimeout(() => navigate("/orders"), 1200)
    } catch (error) {
      setShowAlert({ show: true, message: `Failed to place order: ${error.message}`, variant: 'danger' })
    }
  }

  return (
    <div className="container py-8">
      {showAlert.show && (
        <Alert variant={showAlert.variant} onClose={() => setShowAlert({ ...showAlert, show: false })} dismissible style={{maxWidth:400,margin:"0 auto 16px auto",textAlign:"center"}}>
          {showAlert.message}
        </Alert>
      )}
      <h1 className="mb-8 text-3xl font-bold text-center">Checkout</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 grid gap-8">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Shipping Address</h2>
              <p className="card-description">Enter your shipping details.</p>
            </div>
            <div className="card-content" style={{ display: "grid", gap: "1rem" }}>
              <div>
                <label htmlFor="fullName" className="label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="input"
                  value={shippingAddress.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="label">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="input"
                  value={shippingAddress.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="label">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="input"
                    value={shippingAddress.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="label">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="input"
                    value={shippingAddress.zip}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="country" className="label">
                  Country
                </label>
                <select
                  id="country"
                  className="input"
                  value={shippingAddress.country}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a country</option>
                  <option value="vietnam">Vietnam</option>
                  <option value="usa">United States</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
                </select>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Payment Method</h2>
              <p className="card-description">Choose your preferred payment method.</p>
            </div>
            <div className="card-content">
              <div className="radio-group" style={{ display: "grid", gap: "1rem" }}>
                <label className="radio-group-item">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="direct"
                    checked={paymentMethod === "direct"}
                    onChange={() => setPaymentMethod("direct")}
                  />
                  Tiền mặt (Thanh toán khi nhận hàng)
                </label>

                
                <label className="radio-group-item">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="vietqr"
                    checked={paymentMethod === "vietqr"}
                    onChange={() => setPaymentMethod("vietqr")}
                  />
                  Chuyển khoản (PayOS QR)
                </label>
                {paymentMethod === "vietqr" && (
                  <div style={{ display: "grid", gap: "1rem", paddingLeft: "1.5rem", textAlign: "center" }}>
                    <p style={{ color: "#6c757d" }}>Quét mã QR bên dưới để chuyển khoản qua PayOS.</p>
                    <div className="flex-center">
                      {payosLoading ? (
                        <div>Đang tạo bill PayOS...</div>
                      ) : payosQR ? (
                        <img
                          src={payosQR}
                          alt="PayOS QR Code"
                          width={220}
                          height={220}
                          style={{ borderRadius: "0.5rem", border: "1px solid #eee", padding: "0.5rem" }}
                        />
                      ) : (
                        <div style={{ color: "red" }}>Không tạo được QR. Vui lòng thử lại!</div>
                      )}
                    </div>
                    <p style={{ fontSize: "0.95rem", color: "#333" }}>
                      Ngân hàng: MB Bank<br />
                      Chủ tài khoản: Ronaldo Cristiano<br />
                      Số tài khoản: 5529062004
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "red" }}>
                      *Lưu ý: Mã QR chỉ có hiệu lực cho đơn hàng này. Vui lòng chuyển khoản đúng số tiền!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Order Summary</h2>
            </div>
            <div className="card-content" style={{ display: "grid", gap: "0.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Subtotal</span>
                <span>{subtotal.toLocaleString('vi-VN')}₫</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Shipping</span>
                <span>{shipping.toLocaleString('vi-VN')}₫</span>
              </div>
              <div className="separator my-2"></div>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                <span>Total</span>
                <span>{total.toLocaleString('vi-VN')}₫</span>
              </div>
              <label className="checkbox mt-4">
                <input type="checkbox" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} />I
                agree to the terms and conditions
              </label>
            </div>
            <div className="card-content">
              <button
                onClick={handlePlaceOrder}
                className="button button-primary w-full"
                disabled={!agreedToTerms || cartItems.length === 0}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
