# Contact Form Setup - Web3Forms

## Quick Setup (2 minutes)

### Step 1: Get Your Access Key
1. Visit: https://web3forms.com/
2. Enter your email: `sudarsanv8786@gmail.com`
3. Click "Get Your Access Key"
4. Copy the access key (it will look like: `abc123-def456-ghi789`)

### Step 2: Add to Environment Variables
1. Create `.env.local` file in the project root (if it doesn't exist)
2. Add this line:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
3. Replace `your_access_key_here` with the key you copied

### Step 3: Restart Dev Server
```bash
# Stop your current dev server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 4: Test
1. Fill out the contact form
2. Submit it
3. Check your email (`sudarsanv8786@gmail.com`) - you should receive the message!

## How It Works

- **Free**: No cost, unlimited submissions
- **No Signup Required**: Just get an access key
- **Secure**: Built-in spam protection
- **Simple**: Just one environment variable needed
- **Direct**: Emails go directly to your inbox

## What Happens When Form is Submitted

1. Form validates all inputs
2. Data is sanitized (XSS protection)
3. Request is sent to Web3Forms API
4. Email is delivered to `sudarsanv8786@gmail.com`
5. Success message is shown to user
6. Form is reset

## Troubleshooting

**Not receiving emails?**
- Check spam folder
- Verify access key is correct in `.env.local`
- Make sure you restarted the dev server after adding the key
- Check browser console for errors

**Getting errors?**
- Verify `.env.local` file exists in project root
- Make sure variable name is exactly: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- Restart dev server after changes

## Alternative: EmailJS

If you prefer EmailJS instead, see `EMAILJS_SETUP.md` for instructions.


