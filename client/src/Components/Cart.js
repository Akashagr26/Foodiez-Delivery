import React from 'react'
import { NavLink } from 'react-router-dom'
import EmptyCart from "../images/empty-cart.png"
import CartIcon from "../images/cart-black.png"
import PizzaIcon from "../images/pizza.png"

const Cart = () => {
    return (
        <>
            <section className="cart py-16">

                <div className=" order container mx-auto w-1/2">
                    <div className="flex items-center border-b border-gray-300 pb-4">
                        <img src={CartIcon} alt="cart-icon" />
                        <h1 className=" font-bold ml-4 text-2xl">Order Summary</h1>
                    </div>
                    <div className="order-list">
                        <div className=" flex items-center my-8">
                            <img className="w-24" src={PizzaIcon} alt="" />
                            <div className=" flex-1 ml-4">
                                <h1>Marinara</h1>
                                <span>MEDIUM</span>
                            </div>
                            <span className="flex-1">1 Pcs</span>
                            <span className=" font-bold text-lg">₹300</span>
                        </div>
                        <div className=" flex items-center my-8">
                            <img className="w-24" src={PizzaIcon} alt="" />
                            <div className=" flex-1 ml-4">
                                <h1>Marinara</h1>
                                <span>MEDIUM</span>
                            </div>
                            <span className="flex-1">1 Pcs</span>
                            <span className=" font-bold text-lg">₹300</span>
                        </div>
                        <div className=" flex items-center my-8">
                            <img className="w-24" src={PizzaIcon} alt="" />
                            <div className=" flex-1 ml-4">
                                <h1>Marinara</h1>
                                <span>MEDIUM</span>
                            </div>
                            <span className="flex-1">1 Pcs</span>
                            <span className=" font-bold text-lg">₹300</span>
                        </div>
                    </div>
                    <hr />
                    <div className="text-right py-5">
                        <div>
                            <span className="text-lg font-bold">Total Amount:</span>
                            <span className="amount text-2xl font-bold ml-2">₹300</span>
                        </div>
                        <div>
                            <form className="mt-12" action="">
                                <input className="border border-gray-400 p-2 w-1/2 mb-4" type="number" placeholder="Phone Number" /> <br />
                                <input className="border border-gray-400 p-2 w-1/2" type="number" placeholder="Address" />
                                {/* <div>
                                    <button className="btn-primary px-6 py-2 rounded-full text-white font-bold mt-6" type="submit">Order Now</button>
                                </div> */}
                            </form>
                        </div>
                        <NavLink className=" inline-block cursor-pointer px-6 py-2 rounded-full btn-primary text-white font-bold mt-6" to="/">Login to Continue</NavLink>
                    </div>
                </div>

                {/* <div className="empty-cart ">
                    <div className="container mx-auto text-center">
                        <h1 className=" text-3xl font-bold mb-2">Cart Empty 🙁</h1>
                        <p className="text-gray-500 text-lg mb-12">You Probably haven't ordered a yet. <br />
                            To order a pizza, go to the main page</p>
                        <img className=" w-1/3 mx-auto" src={EmptyCart} alt="empty cart" />
                        <NavLink className=" inline-block px-6 py-2 rounded-full btn-primary text-white font-bold mt-12" to="/">Go back</NavLink>
                    </div>
                </div> */}
            </section>

        </>
    )
}

export default Cart
