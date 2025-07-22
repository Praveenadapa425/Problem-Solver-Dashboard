import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  // State variables for form inputs
  const [leetcodeUrl, setLeetcodeUrl] = useState('');
  const [geeksforgeeksUrl, setGeeksforgeeksUrl] = useState('');
  const [codechefUrl, setCodechefUrl] = useState('');
  const [hackerrankUrl, setHackerrankUrl] = useState('');

  // State for fetched data, loading status, error messages
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // State for light/dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Initialize Firebase (for potential future persistence, though not fully implemented here)
  // This part is a placeholder as actual Firebase setup requires more context.
  useEffect(() => {
    // const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
    // if (Object.keys(firebaseConfig).length > 0) {
    //   const app = initializeApp(firebaseConfig);
    //   const auth = getAuth(app);
    //   const db = getFirestore(app);
    //   // Sign in anonymously or with custom token
    //   const signIn = async () => {
    //     try {
    //       if (typeof __initial_auth_token !== 'undefined') {
    //         await signInWithCustomToken(auth, __initial_auth_token);
    //       } else {
    //         await signInAnonymously(auth);
    //       }
    //       console.log("Firebase authenticated successfully.");
    //     } catch (e) {
    //       console.error("Firebase authentication failed:", e);
    //     }
    //   };
    //   signIn();
    // }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  // Validate URL format
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setStats(null); // Clear previous stats

    // Client-side URL validation
    const urls = {
      leetcode: leetcodeUrl,
      geeksforgeeks: geeksforgeeksUrl,
      codechef: codechefUrl,
      hackerrank: hackerrankUrl,
    };

    for (const platform in urls) {
      if (urls[platform] && !isValidUrl(urls[platform])) {
        setError(`Invalid URL for ${platform}. Please enter a valid URL.`);
        return;
      }
    }

    setLoading(true); // Show loading indicator

    try {
      // IMPORTANT: This URL must match where your Flask backend is running.
      // Assuming Flask is on http://localhost:5000
      // const response = await fetch('http://localhost:5000/api/get_stats', {
      const response = await fetch('https://problem-solver-backend-g93q.onrender.com/api/get_stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(urls),
      });

      if (!response.ok) {
        // Attempt to read error message from backend if available
        let errorMessage = 'Failed to fetch data. Please check URLs and try again.';
        try {
            const errorData = await response.json();
            if (errorData && errorData.error) {
                errorMessage = errorData.error;
            } else {
                errorMessage = `HTTP error! Status: ${response.status}`;
            }
        } catch (parseError) {
            errorMessage = `HTTP error! Status: ${response.status}. Could not parse error message.`;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setStats(data); // Set fetched stats

    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message || 'Failed to fetch data. Please check URLs and try again.');
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md hover:scale-105 transition-transform duration-200"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h1M3 12H2m15.325-7.757l-.707-.707M6.343 17.657l-.707.707M16.95 7.05l.707-.707M7.05 16.95l.707.707M12 15a3 3 0 110-6 3 3 0 010 6z"></path></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9 9 0 008.354-5.646z"></path></svg>
        )}
      </button>

      <div className={`w-full max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-colors duration-300 ${darkMode ? 'border border-gray-700' : ''}`}>
        <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-700 dark:text-indigo-400">
          Problem Solver Dashboard
        </h1>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Field for LeetCode */}
          <div>
            <label htmlFor="leetcode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              LeetCode Profile URL
            </label>
            <input
              type="url"
              id="leetcode"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., https://leetcode.com/u/your_username/"
              value={leetcodeUrl}
              onChange={(e) => setLeetcodeUrl(e.target.value)}
            />
          </div>

          {/* Input Field for GeeksforGeeks */}
          <div>
            <label htmlFor="geeksforgeeks" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              GeeksforGeeks Profile URL
            </label>
            <input
              type="url"
              id="geeksforgeeks"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., https://www.geeksforgeeks.org/user/your_username/"
              value={geeksforgeeksUrl}
              onChange={(e) => setGeeksforgeeksUrl(e.target.value)}
            />
          </div>

          {/* Input Field for CodeChef */}
          <div>
            <label htmlFor="codechef" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              CodeChef Profile URL
            </label>
            <input
              type="url"
              id="codechef"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., https://www.codechef.com/users/your_username"
              value={codechefUrl}
              onChange={(e) => setCodechefUrl(e.target.value)}
            />
          </div>

          {/* Input Field for HackerRank */}
          <div>
            <label htmlFor="hackerrank" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              HackerRank Profile URL
            </label>
            <input
              type="url"
              id="hackerrank"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., https://www.hackerrank.com/profile/your_username"
              value={hackerrankUrl}
              onChange={(e) => setHackerrankUrl(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-105"
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Get Stats'
            )}
          </button>
        </form>

        {/* Error Display */}
        {error && (
          <div className="mt-6 p-4 bg-red-100 dark:bg-red-800 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 rounded-md text-center">
            {error}
          </div>
        )}

        {/* Results Dashboard */}
        {stats && (
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700 dark:text-indigo-400">
              Your Problem Solving Stats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(stats.platforms).map(([platform, data]) => (
                <div key={platform} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2 capitalize">
                    {/* Corrected spelling for HackerRank and dynamic label */}
                    {platform === 'hackerrank' ? 'HackerRank' : platform}
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    {/* Conditional label for HackerRank */}
                    {platform === 'hackerrank' ? 'Badges Earned' : 'Problems Solved'}: <span className="font-bold text-indigo-600 dark:text-indigo-300">{data.solved}</span>
                  </p>
                  {data.url && (
                    <a
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-500 hover:underline mt-2 block"
                    >
                      View Profile
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-indigo-100 dark:bg-indigo-900 rounded-lg shadow-lg text-center">
              <p className="text-2xl font-bold text-indigo-800 dark:text-indigo-200">
                Total Problems Solved: <span className="text-indigo-900 dark:text-indigo-100 text-4xl">{stats.totalSolved}</span>
              </p>
            </div>
          </div>
        )}
        
       </div>

      {/* Footer */}
      <footer className="w-full text-center mt-12 py-4 text-gray-600 dark:text-gray-400 text-sm">
        © 2025 Praveen Adapa. All rights reserved.
      </footer>
    </div>
    
  );
};

export default App;
