import Immodev from '../assets/Imoodev.png';
import lightLogo from '../assets/lightlogo.png';
import { FaMoon, FaSun } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
function Navbar({ activeDark, setActiveDark }) {
	let navItems = [
		{
			title: 'Home',
			path: '/',
		},
		{
			title: 'Features',
			path: '/features',
		},
		{
			title: 'Themes',
			path: '/themes',
		},
		{
			title: 'Blog',
			path: '/blog',
		},
	];
	const toggleDarkMode = () => {
		setActiveDark(!activeDark);
	};
	return (
		<div className='container mx-auto flex justify-between items-center py-4 px-[20px]'>
			{activeDark ? (
				<img src={Immodev} alt='logo' />
			) : (
				<img src={lightLogo} alt='logo' />
			)}
			<div className='flex items-center space-x-4'>
				<ul className='flex space-x-3'>
					{navItems.map((item, index) => (
						<li
							key={index}
							className='dark:text-[#8E919A] text-mainBlue'>
							<NavLink to={item.path}>{item.title}</NavLink>
						</li>
					))}
				</ul>
				{activeDark ? (
					<FaSun
						onClick={toggleDarkMode}
						size={30}
						color='white'
						className='cursor-pointer'
					/>
				) : (
					<FaMoon
						onClick={toggleDarkMode}
						size={30}
						className='cursor-pointer'
					/>
				)}
			</div>
		</div>
	);
}

export default Navbar;
