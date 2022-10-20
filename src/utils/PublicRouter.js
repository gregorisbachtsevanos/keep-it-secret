import { Outlet, Navigate } from 'react-router-dom';

export const PublicRouter = ({user}) => {
	// const user = false;
	return !user ? <Outlet /> : <Navigate to="/" />;
};
