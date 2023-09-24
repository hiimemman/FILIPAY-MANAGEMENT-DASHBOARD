import React from 'react';

export default function LoginForm(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow max-w-lg mx-auto" >
      <img src="http://filipworks.com/fmd/assets/Filipay-logo.png" alt="logo" />

      <form >
      <h1 className="text-5xl font-extrabold mb-4 mt-4">Sign In</h1>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter email address" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
          <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter password" required />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
          </div>
          <div className="flex flex-wrap">
            <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">keep me logged in</label>

            
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>      
    
          </div>
          
        </div>
        <button type="submit" className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full h-16">SIGN IN</button>
      </form>
    </div>
  );
}
