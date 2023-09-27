import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <ul>
            <Link to={'/'}><img className='w-28 md:w-28 lg:w-40' src="https://i.ibb.co/2KMyLL3/Logo.png" alt="Logo" /></Link>
        </ul>
    );
};

export default Logo;