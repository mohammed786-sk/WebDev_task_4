# Portfolio Website Project Instructions

## Project Overview
This is a personal portfolio website built with React, Vite, and Tailwind CSS. It showcases professional skills, projects, and provides contact information.

## Key Technologies
- React for component-based UI
- Vite for fast development and build
- Tailwind CSS for utility-first styling
- PostCSS for CSS processing

## Project Structure

- `src/components/` - React components (Header, Hero, About, Projects, Contact, Footer)
- `src/App.jsx` - Main application component
- `src/index.css` - Tailwind directives
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

## Development Workflow

1. **Starting Development Server**
   ```bash
   npm install
   npm run dev
   ```
   Server runs at `http://localhost:5173/`

2. **Making Changes**
   - Edit components in `src/components/`
   - Update content directly in JSX files
   - Styles use Tailwind CSS utility classes
   - Changes auto-reload with HMR

3. **Building for Production**
   ```bash
   npm run build
   npm run preview
   ```

## Customization Areas

- **Hero Section**: `src/components/Hero.jsx` - Update name, headline, tagline
- **About Section**: `src/components/About.jsx` - Update bio, skills, experience
- **Projects Section**: `src/components/Projects.jsx` - Replace with your projects
- **Contact Section**: `src/components/Contact.jsx` - Update contact info, social links
- **Colors**: `tailwind.config.js` - Customize primary/secondary colors

## Important Files
- `package.json` - Dependencies and scripts
- `vite.config.js` - Vite configuration
- `.oxlintrc.json` - Linting rules
- `index.html` - HTML entry point

## Common Tasks

### Update Personal Information
1. Edit `src/components/Hero.jsx` for profile
2. Edit `src/components/About.jsx` for bio and skills
3. Edit `src/components/Contact.jsx` for contact details

### Add New Projects
1. Open `src/components/Projects.jsx`
2. Add to the projects array with title, description, technologies, and link
3. The component will render automatically

### Customize Colors
1. Edit `tailwind.config.js`
2. Update primary and secondary color values
3. Save and reload

### Deploy
- Push to GitHub, connect to Vercel, or deploy `dist/` folder to any host
- See README.md for detailed deployment instructions

## Debugging Tips
- Use browser DevTools to inspect elements
- Check browser console for React errors
- Use Tailwind CSS documentation for styling questions
- Ensure all components are properly imported in App.jsx

## Resources
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Tailwind UI Components](https://tailwindui.com)
