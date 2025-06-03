 import React from 'react';

const BookTable = () => (
  <div className="container my-5">
    <h2 className="text-center text-white mb-4">Book Your Table</h2>
    <form className=" p-4 rounded">
      <div className="row mb-3">
        <div className="col-md-4 mb-2">
          <input type="text" className="form-control" placeholder="Your Name *" required />
        </div>
        <div className="col-md-4 mb-2">
          <input type="email" className="form-control" placeholder="Your Email *" required />
        </div>
        <div className="col-md-4 mb-2">
          <select className="form-select" required>
            <option value="">Select a Service</option>
            <option value="dinein">Dine In</option>
            <option value="takeaway">Take Away</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <textarea className="form-control" rows="4" placeholder="Please write your comment"></textarea>
      </div>
      <button type="submit" className="btn btn-warning text-white">Send Message</button>
    </form>
  </div>
);

export default BookTable; 