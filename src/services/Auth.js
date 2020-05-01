export const TOKEN_KEY = 'Token';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () =>{
  return localStorage.getItem(TOKEN_KEY);
} 

export const login = response => {
  localStorage.setItem(TOKEN_KEY, response.token);
  localStorage.setItem('UserName', response.name);
  localStorage.setItem('UserEmail', response.email);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};