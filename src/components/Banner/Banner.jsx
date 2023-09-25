import './Banner.css'
const Banner = () => {
    return (

        <div className="flex  h-96 justify-center items-center flex-col">
            <div
                className="w-full h-screen bg-[url('https://i.ibb.co/Y7jhjCN/Rectangle-4281.png')] bg-cover bg-center">
                <div className="w-full h-full flex  justify-center items-center  bg-white/70 backdrop-brightness-75">
                    <div>
                        <h1 className="text-4xl font-bold text-black z-50">I Grow By Helping People In Need</h1>
                        <div className="flex items-center justify-center mt-8 z-50">
                            <input className="px-2 py-[6px] border w-[20rem] rounded-l" type="text" placeholder="Search here...." />
                            <button className="bg-[#FF444A] px-4 py-[6px] text-white rounded-r">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;