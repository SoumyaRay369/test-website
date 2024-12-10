import gitLogo from '../assets/git_logo.png';
import javascriptLogo from '../assets/JavaScript-logo.png';
import typescriptLogo from '../assets/typescript_logo.png';
import reactjsLogo from '../assets/reactjs-logo.webp';
import webrtcLogo from '../assets/webrtc-logo-.png';
import mongodbLogo from '../assets/mongodb_logo.png';
import nodejsLogo from '../assets/node_js.png';
import tableauCertificate from '../assets/udemy_tableau.png';
import pythonCertificate from '../assets/udemy_python.png';
import sqlCertificate from '../assets/udemy_sql.png';
import googleCertificate from '../assets/google_analytics.png';
import dukaanappClone from '../assets/dukaan_app_clone.png';
import newsletterSignin from '../assets/newsletter_signin.png';
import videoChatApplication from '../assets/videoChatApplication.jpg';
import googleAIEssentials from '../assets/google_ai_essentials.jpg';
export const SDE = () => {
    return (
        <>
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


                </div>
            </div>

            <div className="mt-10 text-center text-3xl font-playfair">Projects</div>
            <div className="mt-8 mr-10 ml-10 text-xs md:text-lg ">
                <div className="flex gap-x-8 justify-between overflow-x-auto">
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={videoChatApplication} alt="" className="rounded-xl w-60 md:w-80 h-40 md:h-48" /></div>
                        <div className="font-garamond">Video Chat Application</div>
                    </div>

                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={dukaanappClone} alt="" className="rounded-xl w-60 md:w-80 h-40 md:h-48" /></div>
                        <div className="font-garamond">Dukaan App Clone</div>
                    </div>

                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={newsletterSignin} alt="" className="rounded-xl w-60 md:w-80 h-40 md:h-48" /></div>
                        <div className="font-garamond">Newsletter Signin</div>
                    </div>
                </div>
            </div>



            <div className="mt-10 text-center text-3xl font-playfair">Certifications</div>
            <div className="mt-8 mr-10 ml-10 text-xs md:text-lg">
                <div className="flex justify-between overflow-x-auto gap-x-8">
                    
                    <div className="flex flex-col items-center flex-shrink-0 ">
                        <div><img src={googleAIEssentials} alt="" className='rounded-md w-50 md:w-60 h-20 md:h-40 ' /></div>
                        <div className="font-garamond">Google AI Essentials Certificate</div>
                    </div>

                    <div className="flex flex-col items-center flex-shrink-0 ">
                        <div><img src={googleCertificate} alt="" className='rounded-md w-50 md:w-60 h-20 md:h-40 ' /></div>
                        <div className="font-garamond">Google Data Analytics Certificate</div>
                    </div>

                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={tableauCertificate} alt="" className='rounded-md w-50 md:w-60 h-20 md:h-40 ' /></div>
                        <div className="font-garamond">Udemy Tableau Certificate</div>
                    </div>

                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={pythonCertificate} alt="" className='rounded-md w-50 md:w-60 h-20 md:h-40 ' /></div>
                        <div className="font-garamond">Udemy Python Certificate</div>
                    </div>

                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={sqlCertificate} alt="" className='rounded-md w-50 md:w-60 h-20 md:h-40 ' /></div>
                        <div className="font-garamond">Udemy SQL Certificate</div>
                    </div>


                </div>
            </div>


        </>
    )
}

