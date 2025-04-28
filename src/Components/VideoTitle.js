

function VideoTitle({title, overviewData}){
    return(
        <div className="pt-[20%] pl-7 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="w-2/4 py-5 text-lg">{overviewData}</p>
            <div className=" ">
                <button className="bg-white text-black py-3 px-7 rounded-md text-lg hover:opacity-80 mr-4">Play now</button>
                <button className="bg-black text-white py-3 px-7 rounded-md text-lg hover:opacity-80 mr-4">More info</button>
            </div>

        </div>
    )
}

export default VideoTitle;