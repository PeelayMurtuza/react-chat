import React from 'react'

function Sidebar() {
    return (
        <div>
            <div className="bg-gray-800 w-96 h-[600px] flex flex-col justify-between items-center border rounded-l-3xl text-white ">
                <div className="HEADING bg-gray-900 w-96 h-16 flex gap-4 justify-between border rounded-l-3xl">

                    <div className="h1 flex justify-center items-center pl-3 "><p>Lama Chat</p></div>

                    <div className="h2 flex gap-5 justify-center items-center pr-3 ">
                    <img src="" alt="img" className=' border rounded-full h-12 w-12  '/>
                    <p>john norton</p>
                    <button className=' border bg-gray-600 w-16 h-10 rounded-lg  '>logout</button></div>
                    
                </div>

                <div className="">murtuza</div>
            </div>
        </div>
    )
}

export default Sidebar