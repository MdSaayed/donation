
const Donate = ({ dtn }) => {
    const { title, picture, category, text_color, btn_bg, card_bg, donate_amount, category_bg } = dtn;

    const cardStyle = {
        backgroundColor: `${card_bg}`
    }
    const btnBg = {
        backgroundColor: `${btn_bg}`
    }
    const bgimageEachItem = {
        backgroundImage: `url(${picture})`,
        backgroundSize: 'cover'
    }
    const textColor = {
        color: `${text_color}`
    }
    const ctgTextStyles = {
        backgroundColor: category_bg,
        color: text_color,
    };

    return (
        <div style={cardStyle} className="grid grid-cols-6 items-center rounded-md gap-4">
            <div style={bgimageEachItem} className="h-full w-full rounded-l-md col-span-2">
                
            </div>
            <div className="col-span-4 py-4">
                <p style={ctgTextStyles} className="inline-block py-[2px] px-3 text-sm rounded mb-1">{category}</p>
                <p style={textColor}>${donate_amount}.00</p>
                <h2 className="text-[1rem] font-semibold">{title}</h2>
                <div className="mt-2">
                    <button style={btnBg} className="text-white px-3 py-[3px] rounded">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Donate;