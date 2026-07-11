.eslintrc.json
.prettierrc
vercel.json
index.html
package.json
tailwind.config.js
vite.config.js
postcss.config.js
README.md
LICENSE
CONTRIBUTING.md
.env.example
.gitignore

src/
├── main.jsx
├── App.jsx
├── components/
│   ├── common/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   └── ToolCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── ToolDetail.jsx
│   ├── Admin.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── PrivacyPolicy.jsx
│   └── TermsConditions.jsx
├── services/
│   ├── firebase.js
│   ├── auth.js
│   ├── firestore.js
│   └── analytics.js
├── store/
│   ├── useAuthStore.js
│   ├── useToolsStore.js
│   └── useUIStore.js
├── hooks/
│   ├── useAuth.js
│   ├── useTools.js
│   └── useDarkMode.js
├── utils/
│   ├── constants.js
│   ├── helpers.js
│   └── seo.js
└── styles/
    └── index.css

docs/
├── FIREBASE_SETUP.md
├── AUTH_SETUP.md
├── ADMIN_GUIDE.md
├── DEPLOYMENT.md
└── GETTING_STARTED.md

.github/
└── workflows/
    └── build.yml
