import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
   const [name, setName] = useState('Dariel Restituyo');

   return (
      <ProfileContext.Provider value={{ name, setName }}>
         {children}
      </ProfileContext.Provider>
   );
};
