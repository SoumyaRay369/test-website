import gitLogo from '../assets/git_logo.png';
import javascriptLogo from '../assets/JavaScript-logo.png';
import typescriptLogo from '../assets/typescript_logo.png';
import reactjsLogo from '../assets/reactjs-logo.webp';
import webrtcLogo from '../assets/webrtc-logo-.png';
import nodejsLogo from '../assets/node_js.png';
import mongodbLogo from '../assets/mongodb_logo.png';
import postmanLogo from '../assets/postmanLast.png';
import socketLogo from '../assets/socketLogo.png';
const SDESkills = () => {
    return <>
        <div className="mt-10 text-center text-3xl font-playfair">Software Engineering Skills</div>
            <div className="mt-8 mr-10 ml-10 text-xs md:text-lg">
                <div className="flex justify-between overflow-x-auto gap-x-8">


                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={gitLogo} alt="" className='w-20 md:w-36 h-20 md:h-32 rounded-md' /></div>
                        <div className="font-garamond">Git</div>
                    </div>
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={javascriptLogo} alt="" className='w-20 md:w-36 h-20 md:h-32 rounded-md' /></div>
                        <div className="font-garamond">JavaScript</div>
                    </div>
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={typescriptLogo} alt="" className='w-20 md:w-36 h-20 md:h-32 rounded-md' /></div>
                        <div className="font-garamond">TypeScript</div>
                    </div>
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={reactjsLogo} alt="" className='w-20 md:w-36 h-20 md:h-32 rounded-md' /></div>
                        <div className="font-garamond">React.js</div>
                    </div>
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={webrtcLogo} alt="" className='w-20 md:w-36 h-20 md:h-32 rounded-md' /></div>
                        <div className="font-garamond">WebRTC</div>
                    </div>
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={nodejsLogo} alt="" className='w-20 md:w-36 h-20 md:h-32 rounded-md' /></div>
                        <div className="font-garamond">Node.js</div>
                    </div>
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={mongodbLogo} alt="" className='w-20 md:w-36 h-20 md:h-32 rounded-md' /></div>
                        <div className="font-garamond">MongoDB</div>
                    </div>
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={postmanLogo} alt="" className='w-20 md:w-36 h-20 md:h-32 rounded-md' /></div>
                        <div className="font-garamond">Postman</div>
                    </div>
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={socketLogo} alt="" className='w-20 md:w-36 h-20 md:h-32 rounded-md' /></div>
                        <div className="font-garamond">Socket.io</div>
                    </div>

                </div>
            </div>

    </>
}

export default SDESkills