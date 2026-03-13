# EmailJS Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (200 emails/month free)

### Step 2: Add Email Service
1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Copy your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Use this template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. In **Settings**, set:
   - **To Email**: `sudarsanv8786@gmail.com` (or your email)
   - **From Name**: `{{from_name}}`
   - **Reply To**: `{{from_email}}`
5. Copy your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to **Account** > **General**
2. Copy your **Public Key** (e.g., `abcdefghijklmnop`)

### Step 5: Add to Environment Variables
1. Create `.env.local` file in project root
2. Add these variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Replace with your actual values from steps 2, 3, and 4

### Step 6: Test
1. Run `npm install` to install EmailJS package
2. Start your dev server: `npm run dev`
3. Fill out the contact form
4. Check your email!

## Troubleshooting

**Form shows success but no email received?**
- Check EmailJS dashboard for errors
- Verify all environment variables are set correctly
- Make sure email service is connected properly

**Getting errors in console?**
- Check that all three environment variables are set
- Verify Service ID, Template ID, and Public Key are correct
- Make sure you've initialized the email service in EmailJS dashboard

## Alternative: Use Without Environment Variables

If you prefer to hardcode (not recommended for production), you can directly edit `components/sections/contact.tsx` and replace the environment variables with your actual values.

