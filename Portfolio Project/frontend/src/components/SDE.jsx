import gitLogo from '../assets/git_logo.png';
import javascriptLogo from '../assets/JavaScript-logo.png';
import typescriptLogo from '../assets/typescript_logo.png';
import webrtcLogo from '../assets/webrtc-logo-.png';
import mongodbLogo from '../assets/mongodb_logo.png';
import nodejsLogo from '../assets/node_js.png';
import tableauCertificate from '../assets/udemy_tableau.png';
import pythonCertificate from '../assets/udemy_python.png';
import sqlCertificate from '../assets/udemy_sql.png';
import googleCertificate from '../assets/google_analytics.png';
import dukaanappClone from '../assets/dukaan_app_clone.png';
import newsletterSignin from '../assets/newsletter_signin.png';
export const SDE = () => {
    return (
        <>
            <div className="mt-10 text-center text-xl">Skills</div>
            <div className="mt-4 mr-10 ml-10 text-xs md:text-lg">
                <div className="flex justify-between overflow-x-auto gap-x-8">
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src={gitLogo} alt="" className='w-28 md:w-36 h-14 md:h-32' /></div>
                        <div>Git</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={javascriptLogo} alt="" className='w-40 md:w-36 h-14 md:h-32' /></div>
                        <div>JavaScript</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={typescriptLogo} alt="" className='w-40 md:w-36 h-14 md:h-32' /></div>
                        <div>TypeScript</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={webrtcLogo} alt="" className='w-40 md:w-36 h-14 md:h-32' /></div>
                        <div>WebRTC</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={nodejsLogo} alt="" className='w-40 md:w-36 h-14 md:h-32' /></div>
                        <div>Node.js</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={mongodbLogo} alt="" className='w-40 md:w-36 h-14 md:h-32' /></div>
                        <div>MongoDB</div>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-xl">Projects</div>
            <div className="mt-4 mr-10 ml-10 text-xs md:text-lg">
                <div className="flex justify-between overflow-x-auto gap-x-4">
                    <div className="flex flex-col items-center">
                        <div><img src={newsletterSignin} alt="" /></div>
                        <div>Newsletter Signin</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={dukaanappClone} alt="" /></div>
                        <div>Dukaan App Clone</div>
                    </div>
                </div>
            </div>


            <div className="mt-10 text-center text-xl">Certifications</div>
            <div className="mt-4 mr-10 ml-10 text-xs md:text-lg">
                <div className="flex justify-between overflow-x-auto gap-x-8">
                    <div className="flex flex-col items-center">
                        <div><img src={googleCertificate} alt="" className='w-40 md:w-36 h-14 md:h-32' /></div>
                        <div>Google Data Analytics Certificate</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={tableauCertificate} alt="" className='w-40 md:w-36 h-14 md:h-32' /></div>
                        <div>Udemy Tableau Certificate</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={pythonCertificate} alt="" className='w-40 md:w-36 h-14 md:h-32' /></div>
                        <div>Udemy Python Certificate</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={sqlCertificate} alt="" className='w-40 md:w-36 h-14 md:h-32' /></div>
                        <div>Udemy SQL Certificate</div>
                    </div>
                </div>
            </div>

            
        </>
    )
}