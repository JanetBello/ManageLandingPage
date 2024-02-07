import logo from "../images/logo.svg"
import facebook from "../images/icon-facebook.svg"
import youtube from "../images/icon-youtube.svg"
import twitter from "../images/icon-twitter.svg"
import pinterest from "../images/icon-pinterest.svg"
import ig from "../images/icon-instagram.svg"

const Footer = () =>{

    return(
        <div className="  bg-black p-8">
        <div className=" text-slate-50 md:px-32 md:flex md:flex-row-reverse md:justify-between">

            <div className=" flex flex-col gap-10">
                <div className="flex gap-2">
                    <button className=" py-3 w-80 rounded-3xl bg-slate-50 text-black md:pl-3 md:w-auto md:pr-10">Updates in your inbox...</button>
                    <button className="p-2 px-7 bg-orange-600 rounded-3xl">Go</button>
                </div>

            </div>

            <div className=" my-8 flex justify-between md:my-0 md:gap-32">
                <div>
                <ul className=" ">
                    <li><a href="">Home</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">About Us</a></li>
                </ul>
                </div>

                <div>
                <ul>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Community</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    
                </ul>
                </div>
            </div>

            
            <div className=" mb-8 flex flex-col align-center justify-center gap-10 md:gap-16 md:flex-col-reverse">
                    
                <div className="flex justify-between">
                    <img src={facebook} alt="" />
                    <img src={youtube} alt="" />
                    <img src={twitter} alt="" />
                    <img src={pinterest} alt="" />
                    <img src={ig} alt="" />
                 </div>
                 <img src={logo} className=" w-40 h-6  " />

            </div>
        
        </div>
    
        <p className=" pt-0 text-slate-50  ">Copyright 2020 All Rights Reserved</p>
    

        </div>

            
       
    )
}
export default Footer