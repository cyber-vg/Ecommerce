import React from 'react'
import { useCart } from '../context/cart'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router'
const BACKEND_URL = "http://localhost:8085";
const Cart = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();


  // Total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Delete item from cart
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
      <div className="container mx-auto min-h-[65vh] overflow-scroll">
        <div className="flex flex-col items-center my-8">
          <h1 className="text-3xl bg-gray-200 p-2 mb-4">
            {`Hello ${auth?.token && auth?.user?.name}`}
          </h1>
          <h4 className="text-lg text-center mb-4">
            {cart?.length
              ? `You have ${cart.length} items in your cart ${
                  auth?.token ? "" : "please login to checkout"
                }`
              : "Your cart is empty"}
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            {cart?.map((p) => (
              <div key={p._id} className="flex mb-4 p-4 bg-gray-100 rounded">
                <div className="flex-none w-1/3">
                  <img
                    src={`${BACKEND_URL}/api/v1/product/get-photo/${p._id}`}
                    alt={p.name}
                    className="w-24 h-24 object-cover"
                  />
                </div>
                <div className="flex-grow ml-4">
                  <p className="text-lg font-semibold">{p.name}</p>
                  <p>{p.description.substring(0, 30)}</p>
                  <p>Price : ₹{p.price}</p>
                  <button
                    className=" bg-red-200 p-4 rounded-lg"
                    onClick={() => removeCartItem(p._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Cart Summary</h2>
            <div className="mb-4">
              <p>Total | Checkout | Payment</p>
              <hr className="my-2" />
              <h4>Total : {totalPrice()} </h4>
            </div>
            {auth?.user?.address ? (
              <div className="mb-4">
                <h4>Current Address</h4>
                <h5>{auth?.user?.address}</h5>
                <button
                  className="btn btn-warning mt-2"
                  onClick={() => navigate("/dashboard/user/profile")}
                >
                  Update Address
                </button>
              </div>
            ) : (
              <div className="mb-4">
                {auth?.token ? (
                  <button
                    className="btn btn-warning mt-2"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                ) : (
                  <button
                    className="btn btn-warning mt-2"
                    onClick={() =>
                      navigate("/login", {
                        state: "/cart",
                      })
                    }
                  >
                    Plase Login to checkout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
  
  );
};

export default Cart;