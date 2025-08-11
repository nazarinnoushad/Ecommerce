import { useContext } from 'react';
import CartContext from '../context/CartContext';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  // Remove item from cart
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
        myCart.splice(index, 1);
        setCart(myCart);
        localStorage.setItem('cart', JSON.stringify(myCart));
      
    } catch (error) {
      console.log(error);
    }
  };




   // Update quantity
  const updateQuantity = (pid, newQty) => {
    if (newQty < 1) return; // prevent going below 1
    let myCart = cart.map((item) =>
      item._id === pid ? { ...item, quantityInCart: newQty } : item
    );
    setCart(myCart);
    localStorage.setItem("cart", JSON.stringify(myCart));
  };


// total price


const totalprice = () => {
  try{
    let total = 0;
    cart?.map((item)=> {
     total += item.price * (item.quantityInCart || 1)
    })
    return total.toLocaleString("en-IN",{
      style : "currency",
      currency : "INR",
    }) ;
  } catch (error) {
    console.log(error);
    
  }
};


  return (
     <div className="min-h-screen bg-pink-100 text-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-4">Your Shopping Cart</h1>
        <p className="text-center text-gray-700 mb-8">
          You have <strong>{cart.length}</strong> item
          {cart.length !== 1 && "s"} in your cart
        </p>

        <div className="flex flex-col xl:flex-row gap-8">
          {/* Cart Items */}
          <div className="w-full xl:w-3/4 space-y-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex bg-white rounded-xl shadow p-4 gap-4"
              >
                <img
                  src={`http://localhost:4000/api/v1/product/product-photo/${item._id}`}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-md font-bold mt-1">₹{item.price}</p>

                  {/* Quantity Counter */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item._id, (item.quantityInCart || 1) - 1)
                      }
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantityInCart || 1}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item._id, (item.quantityInCart || 1) + 1)
                      }
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeCartItem(item._id)}
                    className="mt-2 text-sm bg-orange-600 text-white px-3 py-1 rounded hover:bg-orange-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="w-full xl:w-1/4">
            <div className="bg-white rounded-xl shadow p-6 sticky top-24">
              <h2 className="text-lg font-bold mb-4">Checkout Summary</h2>
              <p className="mb-2">Items: {cart.length}</p>
              <p className="mb-4">
                Total: <strong>{totalprice()}</strong>
              </p>
              <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;



