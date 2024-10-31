import { useState, FormEvent } from 'react';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:5173/signup', {
        username,
        password,
      });
      
      // Store JWT in localStorage
      localStorage.setItem('token', response.data.token);

      // Redirect or show success message
      alert('Signup successful!');
    } catch (err: any) {
      setError(err.response?.data.error || 'Signup failed');
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Signup;
