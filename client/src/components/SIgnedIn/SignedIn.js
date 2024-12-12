import React, { useState, useEffect } from 'react';

const SignedIn = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user data from your backend to check if the user is signed in
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/user');  // Adjust the API endpoint accordingly
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  const handleSignOut = async () => {
    try {
      // Call your sign out endpoint here
      const response = await fetch('/api/signout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setUser(null);
      } else {
        console.error('Failed to sign out');
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    return (
      <div>
        <p>No user signed in</p>
        <a href="/signIn">Sign In</a>  {/* Adjust the Sign In route accordingly */}
      </div>
    );
  }

  return (
    <div>
      <p>Welcome, {user.firstName}!</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignedIn;