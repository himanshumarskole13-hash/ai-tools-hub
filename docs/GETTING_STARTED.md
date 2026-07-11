# Getting Started with AI Tools Hub

## Quick Start (5 minutes)

### 1. Clone Repository
```bash
git clone https://github.com/himanshumarskole13-hash/ai-tools-hub.git
cd ai-tools-hub
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment
```bash
cp .env.example .env.local
```

### 4. Add Firebase Credentials
Edit `.env.local` with your Firebase config:
```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
# ... other Firebase credentials
```

### 5. Start Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

## Project Structure

```
src/
├── components/     # React components
├── pages/          # Page components
├── services/       # Firebase & API services
├── store/          # Zustand state management
├── styles/         # Global styles & Tailwind
├── App.jsx         # Main App component
└── main.jsx        # Entry point
```

## Key Features to Explore

### 1. Home Page
- Search and filter AI tools
- View trending and latest tools
- Responsive grid layout

### 2. Tool Detail Page
- Click any tool card to see details
- View all features and pricing
- Visit official website
- Save/bookmark tools

### 3. Admin Panel
- Add, edit, delete tools (admin only)
- Mark tools as trending/latest
- Manage pricing information

### 4. Dark Mode
- Toggle dark mode in navbar
- Settings persist in localStorage

### 5. Authentication
- Google Sign-In
- User profile display
- Favorites persist per user

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Configuration Files

### vite.config.js
- Vite configuration
- Dev server settings
- Build optimization

### tailwind.config.js
- Tailwind CSS customization
- Theme colors
- Custom utilities

### .env.local
- Environment variables
- Firebase credentials
- API keys

## Styling with Tailwind CSS

The project uses Tailwind CSS for styling. Key utilities:

```jsx
// Responsive classes
<div className="grid md:grid-cols-2 lg:grid-cols-3">

// Dark mode
<div className="bg-white dark:bg-gray-800">

// Custom utilities in styles/index.css
<button className="btn-primary">
```

## State Management with Zustand

Custom hooks for state:

```javascript
import { useAuthStore } from './store/useAuthStore'
import { useToolsStore } from './store/useToolsStore'
import { useUIStore } from './store/useUIStore'

// Usage
const { user, signIn, logout } = useAuthStore()
const { tools, fetchAllTools } = useToolsStore()
const { isDarkMode, toggleDarkMode } = useUIStore()
```

## Firebase Integration

### Authentication
```javascript
import { useAuthStore } from './store/useAuthStore'

const { user, signIn } = useAuthStore()
```

### Firestore Operations
```javascript
import { getAllTools, addTool } from './services/firestore'

const tools = await getAllTools()
await addTool(toolData)
```

## Adding New Tools

1. Sign in with Google
2. Ask admin to set your role to `admin`
3. Go to `/admin`
4. Click "Add New Tool"
5. Fill in details and submit

## Customization

### Change App Name
Edit `tailwind.config.js` and component files

### Change Colors
Update `tailwind.config.js` colors:
```javascript
colors: {
  primary: '#6366F1',
  secondary: '#8B5CF6',
}
```

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `App.jsx`
3. Add link in `Navbar.jsx`

## Debugging

### Enable DevTools
React DevTools browser extension recommended

### Check Console
Open browser DevTools (F12) → Console for errors

### Firebase Emulator (Optional)
```bash
npm install -g firebase-tools
firebase emulators:start
```

## Performance Tips

1. ✅ Use code splitting
2. ✅ Lazy load images
3. ✅ Implement pagination
4. ✅ Use React.memo for heavy components
5. ✅ Monitor bundle size

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes
git add .
git commit -m "Add your feature"

# Push to GitHub
git push origin feature/your-feature

# Create Pull Request on GitHub
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Next Steps

1. ✅ Setup Firebase
2. ✅ Test authentication
3. ✅ Add sample tools
4. ✅ Customize styling
5. ✅ Deploy to Vercel

## Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Firebase Docs](https://firebase.google.com/docs)
- [Zustand](https://github.com/pmndrs/zustand)

## Support

- 📖 Check documentation in `/docs`
- 🐛 Report bugs on GitHub Issues
- 💬 Discuss ideas on GitHub Discussions
- 📧 Email: support@aitoolshub.com

---

**Happy Coding! 🚀**
