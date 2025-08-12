# 💱 CodeSync

**Synchronize Your Coding Journey with Precision**

CodeSync is a powerful platform designed for students and educational institutions to track, analyze, and manage coding profiles across multiple competitive programming platforms. It provides comprehensive analytics and insights to help students achieve their full potential in programming.

## 🚀 Features

### 🎯 Core Features
- **Multi-Platform Integration**: Sync data from LeetCode, CodeChef, HackerRank, and GeeksforGeeks
- **Real-time Analytics**: Live dashboards showing coding progress and performance metrics
- **Student Profiles**: Comprehensive profiles showcasing competitive programming activities
- **Progress Tracking**: Detailed analytics to track growth and identify improvement areas
- **Secure Authentication**: AWS Cognito-powered user authentication and management

### 📊 Platform Support
- **LeetCode**: Problems solved, contest ratings, difficulty breakdowns
- **CodeChef**: Contest ratings, problems solved, star rankings
- **HackerRank**: Badges earned, skill assessments
- **GeeksforGeeks**: Coding scores, streaks, institute rankings

## 🛠️ Technology Stack

### Frontend
- **HTML5** with semantic markup
- **Tailwind CSS** for modern, responsive design
- **JavaScript (ES6+)** for interactive functionality
- **Bootstrap Icons** for consistent iconography

### Backend & Cloud Services
- **AWS Amplify** for application hosting and CI/CD
- **AWS Cognito** for user authentication and management
- **AWS API Gateway** for RESTful API endpoints
- **AWS Lambda** for serverless backend processing

### APIs
- Custom REST APIs for platform data aggregation
- Real-time data synchronization from coding platforms

## 📁 Project Structure

```
CodeSync/
├── index.html              # Landing page with login/signup
├── usernames.html          # Platform username input page
├── results.html            # Statistics dashboard
├── signup.html             # Dedicated signup page
├── js/
│   ├── amplify_config.js   # AWS Amplify configuration
│   └── main.js            # Core JavaScript functionality
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- AWS Account (for deployment)
- Valid coding platform accounts for testing

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/codesync.git
   cd codesync
   ```

2. **Configure AWS Amplify**
   - Update `js/amplify_config.js` with your AWS Cognito details:
   ```javascript
   window.amplifyConfig = {
     Auth: {
       region: "your-aws-region",
       userPoolId: "your-user-pool-id",
       userPoolWebClientId: "your-client-id",
       authenticationFlowType: "USER_PASSWORD_AUTH"
     }
   };
   ```

3. **Serve the application**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using Live Server (VS Code extension)
   # Right-click index.html → "Open with Live Server"
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:8000`

### Production Deployment

1. **Deploy to AWS Amplify**
   ```bash
   # Install Amplify CLI
   npm install -g @aws-amplify/cli
   
   # Initialize Amplify project
   amplify init
   
   # Add hosting
   amplify add hosting
   
   # Deploy
   amplify publish
   ```

2. **Environment Variables**
   - Configure your production API endpoints
   - Update Cognito User Pool settings
   - Set up custom domain (optional)

## 🔧 Configuration

### AWS Cognito Setup
1. Create a User Pool in AWS Cognito
2. Configure app client with following settings:
   - Auth Flow: `USER_PASSWORD_AUTH`
   - Required attributes: email, name, preferred_username
   - Auto-verify email addresses

### API Configuration
The application uses two main API endpoints:
- **Main API**: `https://8teu07es5h.execute-api.us-east-1.amazonaws.com/prob/get-score`
- **GFG API**: `https://1irslt4qe5.execute-api.us-east-1.amazonaws.com/prob/get-score`

## 📖 Usage

### For Students

1. **Sign Up/Login**
   - Create an account or login with existing credentials
   - Verify your email address

2. **Add Platform Usernames**
   - Enter your usernames for LeetCode, CodeChef, HackerRank
   - Optionally add GeeksforGeeks username

3. **View Statistics**
   - Access comprehensive dashboard with your coding stats
   - Track progress across all platforms
   - Monitor improvement over time

### For Administrators

1. **User Management**
   - Access AWS Cognito console for user administration
   - Monitor student registrations and activity

2. **Analytics**
   - View aggregated statistics across all students
   - Generate reports for institutional use

## 🔐 Security Features

- **JWT Token Authentication**: Secure API access with AWS Cognito tokens
- **Input Validation**: Client-side and server-side validation
- **HTTPS Enforcement**: All communications encrypted
- **Cross-Origin Resource Sharing (CORS)**: Properly configured API access

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Modern dark mode interface
- **Loading States**: Skeleton screens and loading indicators
- **Error Handling**: User-friendly error messages and retry mechanisms
- **Smooth Animations**: CSS transitions and hover effects

## 🧪 Testing

### Manual Testing
1. Test user registration and email verification
2. Verify login functionality
3. Test platform data fetching with valid usernames
4. Check error handling with invalid usernames
5. Test responsive design on different screen sizes

### Platform Username Testing
Use these sample usernames for testing:
- **LeetCode**: Any valid LeetCode username
- **CodeChef**: Any valid CodeChef handle
- **HackerRank**: Any valid HackerRank username
- **GeeksforGeeks**: Any valid GFG profile username

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- Use consistent indentation (2 spaces)
- Follow semantic HTML5 practices
- Use meaningful variable and function names
- Comment complex logic
- Test cross-browser compatibility

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Praveen Adapa**
- LinkedIn: [praveen-adapa-162179290](https://www.linkedin.com/in/praveen-adapa-162179290/)
- GitHub: [Your GitHub Profile]

## 🙏 Acknowledgments

- AWS for cloud infrastructure
- Tailwind CSS for styling framework
- Bootstrap Icons for iconography
- All coding platforms for providing public APIs

## 📞 Support

For support, email support@codesync.com or create an issue on GitHub.

## 🗺️ Roadmap

- [ ] Add more coding platforms (AtCoder, TopCoder)
- [ ] Implement progress tracking over time
- [ ] Add social features and leaderboards
- [ ] Mobile app development
- [ ] Advanced analytics and insights
- [ ] Integration with college management systems

---

**Made with ❤️ for the coding community**
