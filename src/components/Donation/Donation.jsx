import { Link } from "react-router-dom";

const Donation = ({ dtn }) => {
    const { title, picture, category, card_bg, category_bg, text_color, id } = dtn;

    const ctgTextStyles = {
        backgroundColor: category_bg,
        color: text_color,
    };
    const headingTextColor = {
        color: text_color
    }

    return (
        <Link to={`/donation/${id}`}>
            <div className="rounded-md" style={{ backgroundColor: card_bg }}>
                <div>
                    <img className="w-full h-40" src={picture} alt="" />
                </div>
                <div className="p-4">
                    <p className="inline-block py-[2px] px-3 text-sm rounded mb-1" style={ctgTextStyles}> {category}</p>
                    <h2 className="text-[1.1rem] font-semibold" style={headingTextColor}>{title}</h2>
                </div>
            </div>
        </Link>
    );
};



export default Donation;

