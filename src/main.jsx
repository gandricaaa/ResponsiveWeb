import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import Features from './pages/Features.jsx';
import Themes from './pages/Themes.jsx';
import Blog from './pages/Blog.jsx';
import Home from './pages/Home.jsx';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/features',
				element: <Features />,
			},
			{
				path: '/themes',
				element: <Themes />,
			},
			{
				path: '/blog',
				element: <Blog />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
