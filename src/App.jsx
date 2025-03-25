import React from 'react';
import { USERS } from './configs';

function App() {
  return (
    <>
     
      <div className='text-center bg-blue-500 p-4 shadow-lg'>
        <h1 className='text-3xl mt-2 mb-2 text-white'>Search, Sort & Filter Application</h1>
      </div>

     
      <div className='flex flex-wrap justify-center gap-6 p-4'>
        {USERS.map((userData, index) => {
          const { name, city, age, avatar } = userData;
          return (
            <div
              className='bg-white shadow-lg border p-4 rounded-xl w-full sm:w-64 md:w-80 lg:w-96 xl:w-1/4 flex flex-col items-center'
              key={index}
            >
          
              <img
                src={avatar}
                alt="avatar"
                className='w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg mb-4'
              />
         
              <div className='text-center'>
                <h1 className='text-2xl font-semibold'>{name}</h1>
                <h2 className='text-lg'>Place: <span className='font-semibold'>{city}</span></h2>
                <h3 className='text-lg'>Age: <span className='font-semibold'>{age}</span></h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
