import { ReactNode } from 'react';
import Navbar from "../nav";
import AuthNav from '../nav/authNav';

interface layoutProps {
    children: ReactNode
}

export const AuthLayout = ({ children }: layoutProps) => (
    <div className='bg-bg text-lightGrey'>
        <Navbar />
        <div className='pt-28 px-20'>{children}</div>
    </div>
);

export const FeedsLayout = ({ children }: layoutProps) => (
    <div className='bg-lightGrey text-dark'>
        <AuthNav />
        <div className='pt-28 px-20'>{children}</div>
    </div>
);
