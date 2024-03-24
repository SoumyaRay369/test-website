export const ConnectWithMe = () => {
    return (
        <>
            <div className="text-center md:text-xl text-lg mt-10">Connect With Me</div>
            <div className="ml-10 mr-4 md:ml-96">
                <div className="flex flex-col gap-y-3 mt-4">
                    <input type="text" placeholder="Name" className="border-2 border-black rounded-md p-3 focus:border-blue-500 w-full md:w-1/2" />
                    <input type="text" placeholder="Email Id" className="border-2 border-black rounded-md p-3 focus:border-blue-500 w-full md:w-1/2" />
                    <input type="text" placeholder="Contact Number" className="border-2 border-black rounded-md p-3 focus:border-blue-500 w-full md:w-1/2 " />
                </div>
                <div className="mt-5 ml-24 md:ml-80">
                    <button className="bg-blue-400 rounded-md p-1 text-white text-sm">Submit</button>
                </div>
            </div>
            
        </>
    )
}