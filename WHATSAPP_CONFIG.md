# WhatsApp Integration Setup

## Current Configuration

The quick contact form on the Home page is configured to send messages to WhatsApp.

### WhatsApp Number
Currently set to: `919876543210`

### How to Update Your WhatsApp Number

1. Open `src/pages/Home.jsx`
2. Find the `QuickContactForm` function
3. Locate this line:
   ```javascript
   const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
   ```
4. Replace `919876543210` with your WhatsApp number in this format:
   - Country code (e.g., 91 for India) + phone number without spaces or dashes
   - Example: `919876543210` for +91 98765 43210

### How It Works

1. User fills in Name, Phone, and Email (optional)
2. Clicks "Connect on WhatsApp" button
3. Opens WhatsApp with a pre-filled message
4. Message includes user's name and phone number

### Message Template

```
Hi, I'm [User Name]. I'd like to discuss growth strategies for my business. My phone: [User Phone]
```

## Features Added to Home Page

### 1. Video Section (After Marquee)
- 6 YouTube videos in 2 rows (3 videos per row)
- Responsive grid layout
- Hover effects on video cards
- Replace video IDs with your actual YouTube video IDs

### 2. Quick Contact Form (After Videos)
- Name field (required)
- Phone field (required)
- Email field (optional)
- Direct WhatsApp integration
- Success message after submission

## Customization

### To Change YouTube Videos

In `src/pages/Home.jsx`, find the video URLs array and replace:
```javascript
"https://www.youtube.com/embed/dQw4w9WgXcQ"
```

With your actual YouTube video IDs. Format: `https://www.youtube.com/embed/[VIDEO_ID]`

### To Change Form Labels or Styling

Edit the `QuickContactForm` component in `src/pages/Home.jsx`
