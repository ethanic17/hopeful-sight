import React from 'react';

export function Footer() {
  return (
    <footer className="bg-blue-200 text-black py-4 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Hopeful Sight. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a> | 
          <a href="/terms-of-service" className="text-blue-400 hover:underline"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}