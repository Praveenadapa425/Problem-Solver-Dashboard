# Problem Solver Dashboard: A Comprehensive Problem-Solving Statistics Aggregator

## 💡 Overview

The Problem Solver Dashboard is a powerful full-stack web application designed to centralize and visualize your problem-solving statistics from various competitive programming platforms. This dashboard offers a unified view of your progress across LeetCode, GeeksforGeeks, CodeChef, and HackerRank, helping you track your achievements efficiently. Built with a focus on real-time data, a responsive design, and robust error handling, it provides a seamless and insightful user experience.

## ✨ Key Features

- **Multi-Platform Integration**: Seamlessly fetches and displays your problem-solving statistics from LeetCode, GeeksforGeeks, CodeChef, and HackerRank.

- **Real-time Data Retrieval**: Employs asynchronous web scraping techniques to ensure rapid and up-to-date data acquisition.

- **Intuitive User Interface**:
  - **Dark Mode**: Easily toggle between light and dark themes for enhanced viewing comfort.
  - **Responsive Design**: Crafted with Tailwind CSS to provide an optimal experience across all devices, including desktops, tablets, and mobile phones.

- **Robust Error Handling**: Provides comprehensive error handling with clear, user-friendly messages for scenarios like invalid URLs, network issues, profile not found, and private profiles.

- **Client-Side URL Validation**: Ensures that profile URLs are validated for correct format before submission, preventing unnecessary backend calls.

## 🛠️ Technical Stack

### Frontend
- **React (18.x)**: Powers the dynamic and interactive user interface.
- **Tailwind CSS**: Utilized for utility-first styling, enabling rapid UI development and ensuring responsiveness.
- **Inter Font**: Provides a modern and highly legible typography for the dashboard.

### Backend
- **Flask**: A lightweight and flexible Python web framework serving as the API backbone.
- **aiohttp**: Handles asynchronous HTTP requests, crucial for efficient web scraping.
- **BeautifulSoup4**: Parses HTML and XML documents, facilitating data extraction from coding platforms.
- **Flask-CORS**: Manages Cross-Origin Resource Sharing, enabling secure communication between the frontend and backend.

### Deployment
- **Render**: Chosen for hosting the backend application, ensuring reliable access.
- **Gunicorn**: A Python WSGI HTTP Server for UNIX, used to run the Flask application in production.

## 📁 Project Structure

```
├── src/
│   ├── App.js          # Main React component
│   ├── index.js        # React application entry point
│   ├── index.css       # Tailwind CSS imports
│   └── ...
├── public/
│   ├── index.html      # HTML template
│   └── favicon.png     # Favicon for the application
├── backend_app.py      # Flask backend application
├── requirements.txt    # Python dependencies
├── Procfile            # Render deployment configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## 🚀 Getting Started

To get the Problem Solver Dashboard up and running on your local machine, follow these steps:

### Prerequisites

Ensure you have the following installed:
- **Node.js**: Version 16.x or higher
- **Python**: Version 3.8 or higher
- **npm** or **yarn**
- **Git**

### Frontend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Praveenadapa425/problem-solver-dashboard.git
   cd problem-solver-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Tailwind CSS dependencies:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

The frontend application will now be accessible at `http://localhost:3000`.

### Backend Setup

1. **Create a virtual environment:**

   **On Windows:**
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```

   **On macOS/Linux:**
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Flask development server:**
   ```bash
   python backend_app.py
   ```

The backend API will be available at `http://localhost:5000`.

## 🔧 Configuration

### Backend API Endpoint

The frontend is pre-configured to communicate with the production backend endpoint:

```javascript
const response = await fetch('https://problem-solver-backend-g93q.onrender.com/api/get_stats', { /* ... */ });
```

For local development, you can easily switch to the local backend by uncommenting the relevant line in `src/App.js`:

```javascript
// const response = await fetch('http://localhost:5000/api/get_stats', { /* ... */ });
```

### Environment Variables

No additional environment variables are required for basic setup and operation.

## 📱 Usage

Using the Problem Solver Dashboard is straightforward:

1. **Enter Profile URLs**: Input your profile URLs for any combination of the supported platforms. Examples:
   - **LeetCode**: `https://leetcode.com/u/your_username/`
   - **GeeksforGeeks**: `https://www.geeksforgeeks.org/user/your_username/`
   - **CodeChef**: `https://www.codechef.com/users/your_username`
   - **HackerRank**: `https://www.hackerrank.com/profile/your_username`

2. **Get Statistics**: Click the "Get Stats" button to initiate the data retrieval process.

3. **View Results**: The dashboard will display your aggregated problem-solving statistics, including:
   - Number of problems solved per platform
   - Total problems solved across all integrated platforms
   - Badges earned (specifically for HackerRank profiles)

## 🤝 Contributing

We welcome contributions! To contribute to the Problem Solver Dashboard, please follow these guidelines:

1. **Fork the repository**

2. **Create a new feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit your changes with descriptive messages:**
   ```bash
   git commit -m 'Add a new feature for X'
   ```

4. **Push your branch to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request** against the main repository

## 🐛 Known Issues

While the dashboard is designed for reliability, please be aware of these potential limitations:

- **Rate Limiting**: Some platforms may impose rate limits, which could temporarily affect data retrieval.
- **Private Profiles**: Data cannot be accessed from private coding profiles due to platform restrictions.
- **Scraping Accuracy**: Changes in platform UI/HTML structure may occasionally impact the accuracy of web scraping.

## 📝 License

This project is open-source and distributed under the MIT License. For more details, see the LICENSE file in the repository.

## 👨‍💻 Author

**Praveen Adapa**
- GitHub: [https://github.com/Praveenadapa425](https://github.com/Praveenadapa425)
- LinkedIn: [https://www.linkedin.com/in/praveen-adapa-162179290/](https://www.linkedin.com/in/praveen-adapa-162179290/)

## 🙏 Acknowledgments

We extend our gratitude to:
- All the coding platforms for providing public profile data
- The vibrant React and Flask communities for their excellent documentation and support
- Tailwind CSS for its innovative utility-first approach to styling
