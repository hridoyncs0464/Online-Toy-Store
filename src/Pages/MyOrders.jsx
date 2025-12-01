import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useTitle from "../hooks/useTitle";

const MyOrders = () => { 
     useTitle("ToyTopia | My Orders");

  const { user } = useContext(AuthContext);
     
  return (
    <div className="min-h-[60vh] flex justify-center items-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">
          {user?.displayName || "Your"} orders
        </h2>
        <p className="text-gray-700 mb-2">
          This section will show the toys you have ordered or saved for later.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Track your recent toy purchases.</li>
          <li>See order status (processing, shipped, delivered).</li>
          <li>Reorder favourite toys for your children.</li>
        </ul>
      </div>
    </div>
  );
};

export default MyOrders;
