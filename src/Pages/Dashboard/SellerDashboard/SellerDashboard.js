import React from "react";
import AddProduct from "./AddProduct";

const SellerDashboard = () => {
  return (
    <div>
      <h3>Seller dashboard</h3>
      <div className="drawer drawer-mobile">
        <input id="drawer-seller" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <AddProduct></AddProduct>
          <label htmlFor="drawer-seller" className="btn btn-primary drawer-button lg:hidden">
            Open Menu
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="drawer-seller" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a>Add a Product</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
