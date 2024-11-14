/**
 * 
 * Token will take a specified integer that will indicate the user's login status
 * The token will be stored in the session storage
 * @param {token} token 
 * 
 * @ return {state} 
 */

// utils/sessionStorageCache.js

export function setLoggedIn(token) {
  sessionStorage.setItem('loggedIn', 'true');
  if (token) {
    sessionStorage.setItem('authToken', token);
  }
}

export function removeLoggedIn() {
  sessionStorage.removeItem('loggedIn');
  sessionStorage.removeItem('authToken');
}

export function isLoggedIn() {
  return sessionStorage.getItem('loggedIn') === 'true';
}