# Adapt.School - Forest City Malaysia

A nature-inspired, solarpunk-themed website for Adapt.School, an alternative learning environment for children 5-15 in Forest City, Malaysia.

## Overview

This website serves as a landing page for Adapt.School, focused on a pragmatic, sovereign-child approach to education. The design incorporates solarpunk aesthetics with earthy colors, organic shapes, and nature-inspired elements to reflect the school's integration with the natural environment of Forest City.

## Features

- Responsive design that works on all devices
- Solarpunk aesthetic with nature-inspired animations
- Mobile-friendly navigation
- Targeted content sections for parents and prospective teachers
- Contact form that logs submissions to the console
- Smooth scrolling between sections
- Parallax and organic animation effects

## File Structure

```
adapt.school/
│
├── index.html          # Main HTML structure
├── styles.css          # CSS styling with solarpunk theme
├── script.js           # JavaScript functionality and animations
└── README.md           # This file
```

## How to Run

1. Simply open the `index.html` file in any modern web browser.
2. Alternatively, you can use a local development server:

   Using Python:

   ```
   python -m http.server
   ```

   Using Node.js:

   ```
   npx serve
   ```

## Customization

### Changing Colors

The color scheme uses earth tones and natural greens, which can be modified by editing the CSS variables at the top of the `styles.css` file:

```css
:root {
  --primary-color: #4caf50; /* Green */
  --accent-color: #ffd700; /* Gold/Yellow */
  --dark-color: #1b3a1d; /* Dark green */
  --light-color: #f0f7e7; /* Light green tint */
  /* ... */
}
```

### Adding Content

To add or modify sections, edit the corresponding HTML in `index.html`. Each section is clearly commented for easy identification.

### Background Image

To change the header background image, modify the following CSS in `styles.css`:

```css
header {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("YOUR_IMAGE_URL_HERE") no-repeat center center/cover;
  /* ... */
}
```

## Future Improvements

- Add actual form submission functionality to send emails to adamtpang@gmail.com
- Implement a blog or news section for school updates
- Add an image gallery showcasing the school environment
- Create separate pages for detailed information about curriculum and approach

## Credits

- Font: [Poppins](https://fonts.google.com/specimen/Poppins) from Google Fonts
- Icons: [Font Awesome](https://fontawesome.com/)
- Background image: [Unsplash](https://unsplash.com/)
- Solarpunk inspiration: Various solarpunk art and design resources
