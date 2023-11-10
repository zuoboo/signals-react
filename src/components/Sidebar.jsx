// Sidebar.jsx
export const Sidebar = () => {
	console.log('Rendering Sidebar');
	
	return (
			<nav className="w-32 h-full shadow-md bg-gray-200 fixed right-0 top-16"> {/* Adjust top-16 to match the Navbar's height */}
					<div className="p-4">
							<a href="#" className="block py-2.5 px-4 rounded hover:bg-gray-100">Link a</a>
							<a href="#" className="block py-2.5 px-4 rounded hover:bg-gray-100">Link b</a>
							<a href="#" className="block py-2.5 px-4 rounded hover:bg-gray-100">Link c</a>
							<a href="#" className="block py-2.5 px-4 rounded hover:bg-gray-100">Link d</a>
					</div>
			</nav>
	);
};
