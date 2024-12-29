import React from 'react'
import ICON from '../assets/index.png'

function Home() {
    return (
        <div className="relative flex flex-col md:flex-row mt-5">
            <div className="text-[30px] mt-[15%] ml-[12%]">
                <span className="opacity-40 text-[25px]">I am an</span>
                <h3 className="text-[50px] mb-[10px] text-[#141f35]"> ICT Stude<span className="text-[#fab328]">n</span>t</h3>
                <hr className="border-solid border-[1px] w-[25%] text-[#141f35]" />
                <p className="mt-[20px] text-[22px] text-justify mb-[20px]">
                    An ICT Student is a dedicated individual <br />
                    who is on journey to master
                    fundamental building <br />
                    blocks of web development.
                </p>
                <a href="#">
                    <button className="w-[120px] h-[40px] bg-transparent border-2 border-[#fab328] text-[#fab328] rounded-[10px] text-sm cursor-pointer">
                        More
                    </button>
                </a>
            </div>
            <div className="ml-[250px] mt-[11%] hidden md:block">
                <img src={ICON} alt="Icon" className="w-[450px] h-[450px]" />
            </div>
        </div>
    )
}

export default Home