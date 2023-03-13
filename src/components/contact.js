import React from "react";
import yellow from "../images/yellow-bg.jpg"

function Contact() {
    return (
        <div >
            <div className="Header">
				<div  className="w-full flex sm:justify-center  sm:w-full md:justify-center md:w=full lg:w=full lg:justify-center" >
					<img className="w-full" src="http://ovofarm.in/wp-content/uploads/2022/10/Untitled-design-7.png"/>
                </div>
		    </div>
		<div className="middlepart ">
			<div className='flex w-full  flex-col md:flex-row bg-[url("http://ovofarm.in/wp-content/uploads/2020/09/Shape-2.jpg")]'>
				<div className="left">
					<h2 className="text-white mx-10 my-3 font-sans text-lg text-2xl 2xl:mx-80 2xl:text-3xl ">OUR PRESENCE</h2>
						<div className="img-table grid grid-rows-3 grid-flow-col mx-6  2xl:ml-96 2xl:space-x-3 "  >
						
						<img className="w-48 " src="https://ovofarm.in/wp-content/uploads/2021/12/logo-patches-1.png"/>
						<img className="w-48" src="https://ovofarm.in/wp-content/uploads/2021/12/logo-patches-2.png" />
						<img className="w-48" src="https://ovofarm.in/wp-content/uploads/2021/12/logo-patches-3.png" />
						<img className="w-48" src="https://ovofarm.in/wp-content/uploads/2022/10/Untitled-design-9.png"/>
						<img className="w-48" src="https://ovofarm.in/wp-content/uploads/2021/12/logo-patches-5.png"  />
						<img className="w-48" src="https://ovofarm.in/wp-content/uploads/2020/10/logo-patches-2.png"/>
						<img className="w-48" src="https://ovofarm.in/wp-content/uploads/2020/10/logo-patches-5.png" />
						<img className="w-48" src="https://ovofarm.in/wp-content/uploads/2020/10/logo-patches-4.png" />
						</div>
				</div>
					<div className="right 2xl:mr-96">
						<h1 className="text-white mx-10 my-5 font-sans text-lg text-2xl 2xl:text-3xl  2xl:mx-3">LET'S GET IN TOUCH</h1>
						<form className="input  flex flex-col mx-3 2xl:w-[500px]" >
							<input className="py-1 px-1 my-2 border-2 border-gray-400" type="name" name="name" placeholder="Name"/>
							<input className="py-1 px-1 my-2 border-2 border-gray-400" type="email" name="email" placeholder="Email"/>
							<input className="py-7 px-1 my-2 border-2 border-gray-400" type="text" name="message" placeholder="Message"/>
							<button className="cursor-pointer bg-gray-500 py-2 my-3 text-white" type="submit" >Send</button>
						 </form>
					</div>
			</div>

		</div>
		<div className="lastpart">
			<div className="map w-full h-[400px]">
				<iframe  className="w-full h-[400px]" src="https://maps.google.com/maps?q=Ovo%20Farm%20Pvt%20Ltd&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"></iframe>
			</div>


		</div>
			

            

           

        </div>
    )



}
export default Contact;