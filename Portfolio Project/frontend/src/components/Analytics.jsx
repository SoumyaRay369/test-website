import matplotlibLogo from '../assets/matplotlib_logo.png';
import seabornLogo from '../assets/seaborn_logo.png';
import numpyLogo from '../assets/numpy_logo.png';
import pandasLogo from '../assets/pandas_logo.png';
import sqlLogo from '../assets/sql_logo.jpg';
import tableauLogo from '../assets/tableau_logo.jpeg';
import tableauCertificate from '../assets/udemy_tableau.png';
import pythonCertificate from '../assets/udemy_python.png';
import sqlCertificate from '../assets/udemy_sql.png';
import googleCertificate from '../assets/google_analytics.png';
import brazilianecommerce from '../assets/Brazilian_E_Commerce.png';
import customerSegementation from '../assets/Customer_Segmentation_Viz.png';
import netflix from '../assets/Netflix_Viz.png';
import romi from '../assets/ROMI_Viz.png';
export const Analytics = () => {
    return (
        <>
            <div className="mt-5 text-center text-xl">Skills</div>
            <div className="mt-4 mr-10 ml-10 text-sm md:text-lg">
                <div className="flex justify-between overflow-x-auto gap-x-8">
                    <div className="flex flex-col items-center">
                        <div><img src={sqlLogo} className='w-40 md:w-36 h-14 md:h-32'></img></div>
                        <div>SQL</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={tableauLogo} className='w-40 md:w-36 h-14 md:h-32'></img></div>
                        <div>Tableau</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={matplotlibLogo} className='w-40 md:w-36 h-14 md:h-32'></img></div>
                        <div>Matplotlib</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={seabornLogo} className='w-40 md:w-36 h-14 md:h-32'></img></div>
                        <div>Seaborn</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={numpyLogo} className='w-40 md:w-36 h-14 md:h-32'></img></div>
                        <div>Numpy</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={pandasLogo} className='w-40 md:w-36 h-14 md:h-32'></img></div>
                        <div>Pandas</div>
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

            <div className="mt-10 text-center text-xl">Projects</div>
            <div className="mt-4 mr-10 ml-10 text-xs md:text-lg">
                <div className="flex justify-between overflow-x-auto gap-x-4">
                    <div className="flex flex-col items-center">
                        <div><img src={brazilianecommerce} alt="" className='w-40 md:w-48 h-14 md:h-32' /></div>
                        <div>Tableau Viz 1</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={customerSegementation} alt="" className='w-40 md:w-36 h-14 md:h-32' /></div>
                        <div>Tableau Viz 2</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={netflix} alt="" className='w-40 md:w-36 h-14 md:h-32' /></div>
                        <div>Tableau Viz 3</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div><img src={romi} alt="" className='w-40 md:w-36 h-14 md:h-32' /></div>
                        <div>Tableau Viz 4</div>
                    </div>
                </div>
            </div>
        </>
    )
}