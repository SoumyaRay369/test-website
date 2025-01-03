import dukaanappClone from '../assets/dukaan_app_clone.png';
import newsletterSignin from '../assets/newsletter_signin.png';
import videoChatApplication from '../assets/videoChatApplication.jpg';
const SDEProjects = () => {
    return (
        <>
            <div className="mt-10 text-center text-3xl font-playfair">Projects</div>
                        <div className="mt-8 mr-10 ml-10 text-xs md:text-lg ">
                            <div className="flex gap-x-8 justify-between overflow-x-auto">
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div>
                                        <a href="https://incogni-chat.vercel.app/" target='_blank'>
                                            <img src="https://my-first-video-storage.s3.ap-south-1.amazonaws.com/assets/videoChatApplication.jpg" alt="" className="rounded-xl w-60 md:w-80 h-40 md:h-48" />
                                        </a>
                                    </div>
                                    <div className="font-garamond">Video Chat Application</div>
                                </div>
            
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div>
                                        <a href="https://strong-maamoul-508309.netlify.app/" target='_blank'>
                                            <img src="https://my-first-video-storage.s3.ap-south-1.amazonaws.com/assets/dukaan_app_clone.png" alt="" className="rounded-xl w-60 md:w-80 h-40 md:h-48" />
                                        </a>
                                    </div>
                                    <div className="font-garamond">Dukaan App Clone</div>
                                </div>
            
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div><img src="https://my-first-video-storage.s3.ap-south-1.amazonaws.com/assets/newsletter_signin.png" alt="" className="rounded-xl w-60 md:w-80 h-40 md:h-48" /></div>
                                    <div className="font-garamond">Newsletter Signin</div>
                                </div>
                            </div>
                        </div>
        </>
    )
}
export default SDEProjects