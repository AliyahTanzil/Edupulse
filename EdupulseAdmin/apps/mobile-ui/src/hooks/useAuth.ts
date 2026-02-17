import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null); // Replace 'any' with your User type

  useEffect(() => {
    // In a real app, you would check for a token in AsyncStorage or similar
    // and validate it, then set isAuthenticated and user.
    const checkAuthStatus = async () => {
      // Simulate an async auth check
      await new Promise(resolve => setTimeout(resolve, 1000));
      const storedUser = null; // await AsyncStorage.getItem('user');
      if (storedUser) {
        setIsAuthenticated(true);
        setUser(JSON.parse(storedUser));
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (username: string, password: string) => {
    // Simulate login API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (username === 'test' && password === 'password') {
      const newUser = { id: '1', username: 'testuser' };
      // await AsyncStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = async () => {
    // await AsyncStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  return { isAuthenticated, user, login, logout };
};

export default useAuth;
