# Google Authentication Setup Guide

## Prerequisites
- Firebase project created
- Google Authentication enabled in Firebase

## Step-by-Step Google OAuth Setup

### 1. Configure Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your Firebase project
3. Go to **APIs & Services** → **OAuth consent screen**
4. Select **External** for user type
5. Fill in required fields:
   - App name: `AI Tools Hub`
   - User support email: your email
   - Developer contact: your email
6. Click **Save and continue**

### 2. Add Scopes

1. Click **Add or remove scopes**
2. Search for and add:
   - `userinfo.email`
   - `userinfo.profile`
3. Click **Update**
4. Click **Save and continue**

### 3. Add Test Users (Optional)

1. Add your Gmail address as test user
2. Click **Save and continue**

### 4. Authorized Domains

In Firebase Authentication settings:
1. Go to **Settings** → **Authorized domains**
2. Add these domains:
   - `localhost`
   - `127.0.0.1`
   - `your-vercel-domain.vercel.app`

### 5. Test Google Sign-In

1. Start dev server: `npm run dev`
2. Click "Sign In" button
3. Select Google option
4. Authorize the app
5. Check user is created in Firestore

## Customizing Sign-In Experience

### Update Navbar.jsx

The sign-in button is in `src/components/common/Navbar.jsx`. You can customize:

```javascript
// Custom sign-in handler
const handleSignIn = async () => {
  try {
    const user = await signIn()
    // User signed in successfully
  } catch (error) {
    // Handle error
  }
}
```

## User Data Structure

After sign-in, user data includes:

```javascript
{
  uid: string,
  email: string,
  displayName: string,
  photoURL: string,
  emailVerified: boolean
}
```

## Admin Setup

To create admin users:

1. Get the user's UID from Firebase console
2. In Firestore, go to `users` collection
3. Edit the user document
4. Set `role: "admin"`

Admins can access the Admin Panel at `/admin`

## Troubleshooting

### "The provided sign-in provider is not enabled"
- Go to Firebase → Authentication
- Enable Google as sign-in provider

### "Popup blocked"
- Make sure pop-ups are allowed for localhost
- Some browsers block pop-ups by default

### "Invalid client ID"
- Check Firebase config is correct
- Verify authorized domains in Firebase console

## Security Best Practices

1. ✅ Use environment variables for Firebase config
2. ✅ Validate user tokens on backend
3. ✅ Set proper Firestore security rules
4. ✅ Don't expose Firebase credentials
5. ✅ Use HTTPS in production

## Next Steps

1. ✅ Configure Google OAuth
2. ✅ Add authorized domains
3. ✅ Test sign-in flow
4. ✅ Create admin users
5. Ready for development! 🚀
