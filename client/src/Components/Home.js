import React from 'react'
import heroPic from "../images/food4.jpg"

const Home = () => {
    return (
        <>
            <section className="hero py-5">
                <div className="container mx-auto flex items-center justify-between">
                    <div className=" px-32 w-1/2">
                        <h6 className=" text-lg pb-4"><em>Are you hungry?</em></h6>
                        <h1 className=" text-6xl font-bold">Don't wait !!</h1>
                        <button className="px-6 py-2 rounded-full text-white font-bold mt-4 btn-primary">Order Now</button>
                    </div>
                    <div className=" w-1/2">
                        <img className="heroPic" src={heroPic} alt="hero pic" />
                    </div>
                </div>
            </section>
        </>
    ) 
}
 
export default Home
