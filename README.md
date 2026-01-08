# 🧘 AI Yoga Instructor - Pose Analysis Application

A modern web application that uses AI and computer vision to analyze yoga poses in real-time. Users can practice yoga poses with live camera feedback, track progress, and access a comprehensive pose library.

## ✨ Features

- **Real-time Pose Detection**: Uses webcam to analyze yoga poses in real-time
- **Pose Library**: Browse and learn from a comprehensive collection of yoga poses
- **Practice Mode**: Interactive practice sessions with pose guidance
- **Progress Tracking**: Monitor your yoga progress over time
- **Responsive Design**: Beautiful, modern UI with Tailwind CSS
- **User Profile**: Track personal statistics and achievements

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Animation**: Framer Motion
- **State Management**: Zustand
- **Camera Integration**: React Webcam
- **UI Components**: Lucide React Icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v7.0.0 or higher) - comes with Node.js

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/Sheelendra1/Pose-analysis.git
cd Pose-analysis
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173` (or another available port).

Open your browser and navigate to the displayed URL.

## 📦 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm lint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── CameraView.tsx  # Webcam component
│   ├── PoseAnalysis.tsx # Pose detection logic
│   ├── PoseCard.tsx    # Pose display card
│   ├── ProgressStats.tsx # Statistics display
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer component
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── PracticePage.tsx # Practice mode
│   ├── PoseLibraryPage.tsx # Pose collection
│   ├── ProfilePage.tsx # User profile
│   └── NotFoundPage.tsx # 404 page
├── context/            # React Context
│   └── AppContext.tsx  # Global app state
├── services/           # Business logic
│   └── poseAnalysisService.ts # Pose analysis
├── data/               # Static data
│   └── poseLibrary.ts  # Pose information
├── types/              # TypeScript definitions
│   └── index.ts        # Type definitions
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles

public/                # Static assets
```

## 🎮 How to Use

### 1. Home Page
- View featured yoga poses
- Get quick stats about your practice

### 2. Practice Mode
- **Start Practice**: Click "Start Webcam"
- **Allow Camera Access**: Grant browser permission to use webcam
- **Follow Guidance**: The app will analyze your pose in real-time
- **Check Accuracy**: View pose detection feedback and corrections

### 3. Pose Library
- Browse all available yoga poses
- Read detailed descriptions
- View proper form and benefits for each pose

### 4. Profile
- Track your statistics
- Monitor practice sessions
- View progress over time

## 🔧 Configuration

### Tailwind CSS
Configuration is in `tailwind.config.js`. Customize colors, fonts, and spacing as needed.

### Vite Configuration
Modify `vite.config.ts` to adjust build settings or add plugins.

### TypeScript
Adjust TypeScript settings in:
- `tsconfig.json` - Main configuration
- `tsconfig.app.json` - App-specific settings
- `tsconfig.node.json` - Node/build tool settings

## 📝 Environment Setup

The application doesn't require environment variables for basic functionality, but if you need to add them in the future:

1. Create a `.env` file in the root directory
2. Add your variables: `VITE_API_URL=your_url`
3. Access them in code: `import.meta.env.VITE_API_URL`

## 🔒 Camera Permissions

The application requires camera access to:
- Detect yoga poses
- Provide real-time feedback
- Track progress

When you first visit the Practice page, your browser will ask for camera permission. Accept it to use pose detection features.

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Camera Not Working
- Check browser permissions (Allow camera access)
- Ensure no other application is using the camera
- Try a different browser
- Restart the development server

### Build Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Lint Errors
```bash
# Check for linting issues
npm run lint

# Most issues can be auto-fixed
npm run lint -- --fix
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Sheelendra**

- GitHub: [@Sheelendra1](https://github.com/Sheelendra1)

## 🙏 Support

If you found this project helpful, please give it a ⭐ on GitHub!

For issues, questions, or suggestions, please open an issue on the [GitHub repository](https://github.com/Sheelendra1/Pose-analysis/issues).

---

**Happy Yoga! 🧘‍♀️🧘‍♂️**
