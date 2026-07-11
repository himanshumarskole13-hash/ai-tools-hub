# Admin Panel Guide

## Overview

The Admin Panel allows authorized administrators to manage AI tools in the database.

## Accessing Admin Panel

1. Sign in with Google
2. Contact admin to set your account as admin
3. Navigate to `/admin` or click "Admin" in navbar

## Admin Features

### 1. Add New Tool

- Click **"Add New Tool"** button
- Fill in tool details:
  - **Tool Name**: Name of the AI tool
  - **Description**: Brief description (1-2 sentences)
  - **Category**: Select from dropdown
  - **Pricing**: Free, Paid, or Freemium
  - **Official Website**: Direct link to tool's website
  - **Features**: List of key features
- Click **"Add Tool"**

### 2. Edit Tool

- Click **Edit icon** (pencil) on tool card
- Modify details
- Click **"Update Tool"**

### 3. Delete Tool

- Click **Delete icon** (trash) on tool card
- Confirm deletion
- Tool is removed from database

### 4. Mark as Trending

- Edit the tool
- Check **"Mark as Trending"** checkbox
- Update tool
- Tool appears in "Trending" section on home page

### 5. Mark as Latest

- Edit the tool
- Check **"Mark as Latest"** checkbox
- Update tool
- Tool appears in "Latest" section on home page

## Tool Categories

Available categories:
- Chatbot (ChatGPT, Claude, etc.)
- Image Generation (DALL-E, Midjourney, etc.)
- Code (GitHub Copilot, Tabnine, etc.)
- Writing (Copy.ai, Jasper, etc.)
- Video (Synthesia, HeyGen, etc.)
- Music (Jukebox, MuseNet, etc.)
- Other (Custom category)

## Pricing Models

### Free
- Tool is completely free to use
- No payment required

### Paid
- Tool requires payment for all features
- May have limited free trial

### Freemium
- Tool has free and premium versions
- Free version has limited features
- Premium features require payment

## Best Practices

### For Tool Descriptions
✅ DO:
- Keep descriptions concise (100-150 characters)
- Highlight main use case
- Use simple, clear language

❌ DON'T:
- Write too long descriptions
- Use technical jargon
- Copy marketing copy

### For Ratings
✅ DO:
- Rate based on actual user feedback
- Consider ease of use, features, support
- Update ratings as tool improves

### For Features
✅ DO:
- List 3-5 key features
- Be specific and clear
- Focus on unique selling points

## Tips for Success

1. **Research tools thoroughly** before adding
2. **Add high-quality tools** that provide real value
3. **Keep information updated** as tools change
4. **Use consistent formatting** for better UX
5. **Verify official websites** are correct
6. **Update trending** status monthly
7. **Monitor user ratings** and reviews

## Bulk Operations

For bulk updates, export tools and update via Firebase console:

1. Go to Firebase Console → Firestore
2. Select `tools` collection
3. Export data
4. Make bulk changes
5. Import updated data

## Analytics

Track admin activity:
- Tools added/edited/deleted
- Most viewed tools
- User search patterns
- Popular categories

Check Google Analytics dashboard regularly to optimize content.

## Troubleshooting

### Can't access admin panel
- Ensure your account has admin role
- Contact other admins to grant access
- Check that you're signed in

### Tool not appearing
- Refresh page (Ctrl+F5)
- Check tool pricing/category filters
- Verify tool was saved (check Firestore)

### Changes not saving
- Check internet connection
- Verify Firebase is running
- Check browser console for errors

## Security

⚠️ **Important:**
- ✅ Only admins can modify tools
- ✅ All changes are logged in Firestore
- ✅ Deleted tools can be recovered from Firestore
- ✅ Don't share admin account credentials

## Support

For admin-related issues:
- Email: admin@aitoolshub.com
- Report bugs in GitHub issues

---

Happy managing! 🚀
