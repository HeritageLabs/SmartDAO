import { ReactNode } from 'react';
import Navbar from "../nav";

interface layoutProps {
    children: ReactNode
}

const AuthLayout = ({ children }: layoutProps) => (
    <div className='px-20 py-4'>
        <Navbar />
        <div className='mt-28'>{children}</div>
    </div>
);

export default AuthLayout;