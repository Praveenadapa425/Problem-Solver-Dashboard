Problem Solver Dashboard
A full-stack web application that aggregates and displays problem-solving statistics from multiple coding platforms including LeetCode, GeeksforGeeks, CodeChef, and HackerRank.
Show Image Show Image Show Image Show Image
🚀 Features

Multi-Platform Integration: Fetch statistics from LeetCode, GeeksforGeeks, CodeChef, and HackerRank
Real-time Data: Asynchronous scraping for fast data retrieval
Dark Mode: Toggle between light and dark themes
Responsive Design: Mobile-friendly interface built with Tailwind CSS
Error Handling: Comprehensive error handling with user-friendly messages
URL Validation: Client-side URL validation before submission

🛠️ Tech Stack
Frontend

React (18.x) - User interface
Tailwind CSS - Styling and responsive design
Inter Font - Typography

Backend

Flask - Web framework
aiohttp - Asynchronous HTTP requests
BeautifulSoup4 - Web scraping
Flask-CORS - Cross-origin resource sharing

Deployment

Render - Backend hosting
Gunicorn - WSGI server

📁 Project Structure
├── src/
│   ├── App.js              # Main React component
│   ├── index.js           # React app entry point
│   ├── index.css          # Tailwind CSS imports
│   └── ...
├── public/
│   ├── index.html         # HTML template
│   └── favicon.png        # Favicon
├── backend_app.py         # Flask backend application
├── requirements.txt       # Python dependencies
├── Procfile              # Render deployment config
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── .gitignore            # Git ignore rules
└── README.md             # Project documentation
🚀 Getting Started
Prerequisites

Node.js (16.x or higher)
Python (3.8 or higher)
npm or yarn
Git

Frontend Setup

Clone the repository
bashgit clone <your-repo-url>
cd problem-solver-dashboard

Install dependencies
bashnpm install

Install Tailwind CSS dependencies
bashnpm install -D tailwindcss postcss autoprefixer

Start the development server
bashnpm start
The app will be available at http://localhost:3000

Backend Setup

Create a virtual environment
bashpython -m venv venv

# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate

Install Python dependencies
bashpip install -r requirements.txt

Run the Flask development server
bashpython backend_app.py
The backend will be available at http://localhost:5000

🔧 Configuration
Backend API Endpoint
The frontend is configured to use the production backend:
javascriptconst response = await fetch('https://problem-solver-backend-g93q.onrender.com/api/get_stats', {
For local development, uncomment the localhost URL in src/App.js:
javascript// const response = await fetch('http://localhost:5000/api/get_stats', {
Environment Variables
No additional environment variables are required for basic setup.
📱 Usage

Enter Profile URLs: Input your profile URLs for any combination of supported platforms:

LeetCode: https://leetcode.com/u/your_username/
GeeksforGeeks: https://www.geeksforgeeks.org/user/your_username/
CodeChef: https://www.codechef.com/users/your_username
HackerRank: https://www.hackerrank.com/profile/your_username


Get Statistics: Click "Get Stats" to fetch your problem-solving statistics
View Results: See your aggregated statistics including:

Problems solved per platform
Total problems solved across all platforms
Badges earned (for HackerRank)



🎨 Features in Detail
Dark Mode
Toggle between light and dark themes using the button in the top-right corner.
Responsive Design
The application is fully responsive and works on:

Desktop computers
Tablets
Mobile phones

Error Handling

Invalid URL format detection
Network error handling
Profile not found errors
Private profile notifications

🚀 Deployment
Backend (Render)
The backend is deployed on Render using the provided Procfile:
web: gunicorn backend_app:app
Frontend
The frontend can be deployed to platforms like:

Vercel
Netlify
GitHub Pages

🤝 Contributing

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

🐛 Known Issues

Some platforms may have rate limiting
Private profiles cannot be accessed
Platform UI changes may affect scraping accuracy

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
👨‍💻 Author
Praveen Adapa

GitHub: https://github.com/Praveenadapa425
LinkedIn: https://www.linkedin.com/in/praveen-adapa-162179290/

🙏 Acknowledgments

Thanks to all the coding platforms for providing public profile data
React and Flask communities for excellent documentation
Tailwind CSS for the utility-first CSS framework

📞 Support
If you encounter any issues or have questions, please open an issue on GitHub.

⭐ Star this repository if you find it helpful!
