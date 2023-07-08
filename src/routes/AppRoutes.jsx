import { Navigate, Routes, Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from "../models/routesModels";
import { Directory } from '../pages/Directory';
import { Plans } from '../pages/Plans';
import { Searches } from '../pages/Searches';

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to={PublicRoutes.HOME} />} />
                <Route path={PublicRoutes.HOME} element={<Directory />} />
                <Route path={PrivateRoutes.PLANS} element={<Plans /> } />
                <Route path={PrivateRoutes.SEARCHES} element={<Searches /> } />
            </Routes>
        </>
    )
}
