import React, { PropsWithChildren } from 'react';
import { NavBar } from '../navbar';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}