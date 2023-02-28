import React from 'react';
import Navbar from '../components/Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
        <Navbar 
            title="React CRUD"
        />
        <main>{children}</main>
    </div>
  );
}