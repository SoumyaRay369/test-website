import tableauCertificate from '../assets/udemy_tableau.png';
import pythonCertificate from '../assets/udemy_python.png';
import sqlCertificate from '../assets/udemy_sql.png';
import googleCertificate from '../assets/google_analytics.png';

import googleAIEssentials from '../assets/google_ai_essentials.jpg';
import oopCertificate from '../assets/OOP_Certificate_Educative.png';
const SDECertifications = () => {
    return (
        <>
            <div className="mt-10 text-center text-3xl font-playfair">Certifications</div>
            <div className="mt-8 mr-10 ml-10 text-xs md:text-lg">
                <div className="flex justify-between overflow-x-auto gap-x-8">

                    <div className="flex flex-col items-center flex-shrink-0 ">
                        <div><img src="https://my-first-video-storage.s3.ap-south-1.amazonaws.com/assets/OOP_Certificate_Educative.png" alt="" className='rounded-md w-50 md:w-60 h-20 md:h-40 ' /></div>
                        <div className="font-garamond">OOP Certificate - Educative</div>
                    </div>

                    <div className="flex flex-col items-center flex-shrink-0 ">
                        <div><img src="https://my-first-video-storage.s3.ap-south-1.amazonaws.com/assets/google_ai_essentials.jpg" alt="" className='rounded-md w-50 md:w-60 h-20 md:h-40 ' /></div>
                        <div className="font-garamond">Google AI Essentials Certificate</div>
                    </div>

                    <div className="flex flex-col items-center flex-shrink-0 ">
                        <div><img src="https://my-first-video-storage.s3.ap-south-1.amazonaws.com/assets/google_analytics.png" alt="" className='rounded-md w-50 md:w-60 h-20 md:h-40 '/></div>
                        <div className="font-garamond">Google Data Analytics Certificate</div>
                    </div>

                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src="https://my-first-video-storage.s3.ap-south-1.amazonaws.com/assets/udemy_tableau.png" alt="" className='rounded-md w-50 md:w-60 h-20 md:h-40 ' /></div>
                        <div className="font-garamond">Udemy Tableau Certificate</div>
                    </div>

                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src="https://my-first-video-storage.s3.ap-south-1.amazonaws.com/assets/udemy_python.png" alt="" className='rounded-md w-50 md:w-60 h-20 md:h-40 ' /></div>
                        <div className="font-garamond">Udemy Python Certificate</div>
                    </div>

                    <div className="flex flex-col items-center flex-shrink-0">
                        <div><img src="https://my-first-video-storage.s3.ap-south-1.amazonaws.com/assets/udemy_sql.png" alt="" className='rounded-md w-50 md:w-60 h-20 md:h-40 ' /></div>
                        <div className="font-garamond">Udemy SQL Certificate</div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default SDECertifications