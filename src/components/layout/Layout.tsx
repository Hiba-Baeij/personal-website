import * as React from 'react';
import SideBar from '@/src/components/layout/SideBar'
export default function Layout({ children }: { children: React.ReactNode }) {
    // Put Header or Navbar or Footer Here
    return <>
        <SideBar />
        {children}

    </>;
}