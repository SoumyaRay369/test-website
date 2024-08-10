import topImage from '../assets/Landing Image.jpeg'

export const HeaderSection = () => {
    console.log("Header section is rendered")
    return (
        <>
            <div className="bg-red-500 h-52 flex items-center justify-center mt-2 mr-2 ml-2 rounded-lg overflow-hidden">
                <img src={topImage} alt="" className="w-full h-full object-cover" />
            </div>
        </>
    )
}