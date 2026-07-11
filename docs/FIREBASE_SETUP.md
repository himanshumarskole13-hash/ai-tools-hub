# Firebase Setup Guide

## Step-by-Step Firebase Configuration

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `ai-tools-hub`
4. Accept terms and create project

### 2. Enable Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **Create database**
3. Select production mode
4. Choose region (e.g., `us-central1`)
5. Click **Enable**

### 3. Set Firestore Security Rules

Go to **Firestore Rules** and replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write for authenticated users
    match /tools/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /users/{uid} {
      allow read, write: if request.auth.uid == uid;
    }
    
    match /messages/{document=**} {
      allow create: if true;
      allow read: if request.auth != null;
    }
  }
}
```

### 4. Enable Google Authentication

1. Go to **Authentication**
2. Click **Get started**
3. Select **Google** as sign-in method
4. Add email and display name
5. Click **Save**

### 5. Get Firebase Credentials

1. Go to **Project Settings** (gear icon)
2. Scroll to "Your apps"
3. Click "Web" icon (</> symbol)
4. Copy the configuration object
5. Fill in `.env.local`:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 6. Create Collections

Go to **Firestore Database** and create these collections:

#### Tools Collection
- Collection ID: `tools`
- Add sample document with fields:
  - `name`: string
  - `description`: string
  - `category`: string
  - `pricing`: string (Free/Paid/Freemium)
  - `officialWebsite`: string
  - `features`: array
  - `rating`: number
  - `reviews`: number
  - `isTrending`: boolean
  - `isLatest`: boolean
  - `createdAt`: timestamp
  - `updatedAt`: timestamp

#### Users Collection
- Collection ID: `users`
- Fields:
  - `email`: string
  - `name`: string
  - `avatar`: string
  - `favorites`: array
  - `role`: string (user/admin)
  - `createdAt`: timestamp

#### Messages Collection
- Collection ID: `messages`
- Fields:
  - `name`: string
  - `email`: string
  - `message`: string
  - `createdAt`: timestamp
  - `read`: boolean

## Testing Firebase Connection

1. Start development server: `npm run dev`
2. Check browser console for errors
3. Try signing in with Google
4. Check Firestore for new user document

## Troubleshooting

### "Firebase app not initialized"
- Check `.env.local` has all required variables
- Restart dev server after adding env variables

### "Permission denied" errors
- Check Firestore security rules
- Ensure user is authenticated for write operations

### Google Sign-In not working
- Add localhost domain in Firebase console
- For development: add `http://localhost:3000`
- For production: add your Vercel domain

## Next Steps

1. ✅ Set up Firebase project
2. ✅ Enable Firestore
3. ✅ Enable Google Authentication
4. ✅ Add credentials to `.env.local`
5. Start building! 🚀
