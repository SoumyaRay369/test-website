import { useState } from "react";
export const ConnectWithMe = () => {
    const [userName, changeUserName] = useState('');
    const [userMail, changeUserMail] = useState('');
    const [userContact, changeUserContact] = useState('');
    const detailSubmission = async (e) => {
        e.preventDefault();
        console.log(userName + "Added to the mailing list");
        // website main address: https://test-website-1mjm.onrender.com
        const response = await fetch('https://test-website-1mjm.onrender.com/connect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: userName,
                email: userMail,
                contact: userContact
            })
        });

        const data = await response.json();
        if(data){
            alert("Details Added to the mailing list");
        }
    }
    return (
        <>
            <div className="text-center text-3xl font-playfair mt-10">Connect With Me</div>
            <div className="flex justify-center items-center">
                <form onSubmit={detailSubmission} className="flex flex-col gap-y-3 mt-4 w-3/4">
                    <input type="text" value={userName} onChange={(e) => changeUserName(e.target.value)} placeholder="Name" className="border-2 border-black rounded-md p-3 focus:border-blue-500 w-full" />
                    <input type="text" value={userMail} onChange={(e) => changeUserMail(e.target.value)} placeholder="Email Id" className="border-2 border-black rounded-md p-3 focus:border-blue-500 w-full " />
                    <input type="text" value={userContact} onChange={(e) => changeUserContact(e.target.value)} placeholder="Contact Number" className="border-2 border-black rounded-md p-3 focus:border-blue-500 w-full  " />
                    <div className="mt-5 flex justify-center items-center  ">
                        <button type="submit"  className="bg-blue-400 hover:bg-blue-500 rounded-md p-2 text-white text-sm font-garamond">Submit</button>
                    </div>
                </form>
            </div>
            
        </>
    )
}