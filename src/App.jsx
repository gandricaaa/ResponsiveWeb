import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
	const [activeDark, setActiveDark] = useState(true);

	return (
		<div className={activeDark ? 'dark' : ''}>
			<div className='dark:bg-mainBlue'>
				<Navbar
					activeDark={activeDark}
					setActiveDark={setActiveDark}
				/>
				<Outlet />
			</div>
		</div>
	);
}

export default App;
