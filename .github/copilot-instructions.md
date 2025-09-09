# thsn.dev Personal Academic Website

Personal academic website for Dr. Lambert Theisen built with Next.js 14, React 18, TypeScript, and Tailwind CSS. Features academic content including CV, research publications, blog posts, teaching history, and contact information with responsive design and dark mode support.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Prerequisites & Environment
- Node.js 20.19.5 and npm 10.8.2 are required and already available
- No additional system dependencies need to be installed

### Essential Commands (Validated & Timed)
- **Install dependencies**: `npm install` -- takes 32 seconds, shows peer dependency warnings (SAFE to ignore)
- **Lint code**: `npm run lint` -- takes 2.5 seconds, must pass before committing  
- **Build production**: `npm run build` -- takes 25 seconds. NEVER CANCEL. Set timeout to 60+ minutes for safety
- **Development server**: `npm run dev` -- starts in 1.4 seconds, runs on http://localhost:3000
- **Production server**: `npm start` -- requires prior build, starts in 300ms

### Build & Development Workflow
1. **First-time setup**: `npm install` (ignores peer dependency warnings - they're harmless)
2. **Development**: `npm run dev` to start development server on http://localhost:3000
3. **Production build**: `npm run build` (NEVER CANCEL - wait for completion)
4. **Production test**: `npm start` after building
5. **Code quality**: `npm run lint` before committing changes

### Critical Timing Information
- **npm install**: ~32 seconds - peer dependency warnings are NORMAL and SAFE to ignore
- **npm run lint**: ~2.5 seconds - must pass before committing
- **npm run build**: ~25 seconds - NEVER CANCEL, set 60+ minute timeout for safety  
- **npm run dev**: ~1.4 seconds to start - very fast
- **npm start**: ~300ms to start after build - very fast

## Validation & Testing

### Manual Testing Requirements
**ALWAYS test these user scenarios after making changes**:

1. **Homepage functionality**:
   - Navigate to http://localhost:3000
   - Verify navigation bar works (Home, Blog, Research, Teaching, Projects, Contact)
   - Test scroll-to-section functionality from nav links
   - Verify responsive design in mobile/desktop views
   - Check dark mode toggle functionality

2. **Blog functionality**:
   - Navigate to /blog route
   - Verify blog post list displays correctly with dates
   - Click on individual blog posts to test routing
   - Verify markdown/MDX rendering works (math equations, code blocks, links)

3. **Content rendering**:
   - Check research publications section displays images and metadata
   - Verify teaching history renders with proper formatting
   - Test external links in contact section
   - Validate academic profile badges and links work

### No Test Framework Available
- **No automated tests exist** - manual validation is required
- **No CI/CD workflows** - manual testing is essential before deployment
- Focus on functional testing through browser interaction

## Repository Structure

### Key Directories & Files
- `/app` - Next.js App Router pages (main application logic)
  - `page.tsx` - Homepage with academic content
  - `layout.tsx` - Root layout with navigation and SEO
  - `home-page.tsx` - Homepage React component
  - `/blog` - Blog routing and templates
- `/components` - Reusable React components
  - `stickynavbar.tsx` - Navigation component
  - `footer.tsx` - Footer component  
  - `badge.tsx` - Academic profile badges
- `/lib` - Utility functions
  - `posts.js` - Blog post processing with gray-matter
- `/posts` - Blog posts in Markdown format
- `/public` - Static assets (images, PDFs, icons)
- `/styles` - Global CSS and Tailwind configuration
- `package.json` - Dependencies and npm scripts
- `next.config.js` - Next.js configuration with MDX support
- `tailwind.config.js` - Tailwind CSS configuration with custom animations
- `tsconfig.json` - TypeScript configuration

### Important Configuration Files
- **next.config.js**: MDX processing, React strict mode, SWC minification
- **tailwind.config.js**: Custom animations (waving hand, wiggle, rotate), responsive design
- **tsconfig.json**: TypeScript compilation settings for Next.js
- **package.json**: All dependencies and npm scripts

## Common Development Tasks

### Adding New Blog Posts
1. Create new `.md` file in `/posts` directory
2. Include frontmatter with `title`, `date` fields
3. Write content in Markdown format
4. Blog will auto-generate routes and navigation

### Modifying Content
- **Homepage content**: Edit `/app/home-page.tsx` (contains hardcoded academic data)
- **Navigation**: Modify `/components/stickynavbar.tsx` 
- **Styling**: Update `/styles/globals.css` or Tailwind classes
- **Academic publications**: Update arrays in `/app/home-page.tsx`

### Working with Images
- Add images to `/public` directory
- Reference with `/image-name.ext` paths
- Use Next.js `Image` component for optimization
- Academic publication images are referenced in component data arrays

## Troubleshooting

### Known Issues & Solutions
- **Peer dependency warnings during npm install**: SAFE to ignore - functionality unaffected
- **Security vulnerabilities in npm audit**: Known issue (2 low, 2 moderate, 2 high) - doesn't break functionality
- **Development server requires restart**: After changing Next.js config files, restart `npm run dev`
- **Build requires clean start**: If build fails, delete `.next` folder and rebuild
- **MDX processing issues**: Check `/next.config.js` MDX configuration is correct

### Performance Notes
- **Fast Refresh enabled**: Code changes reflect immediately in development
- **Static generation**: Blog posts are statically generated at build time
- **Image optimization**: Next.js automatically optimizes images in `/public`
- **CSS optimization**: Tailwind purges unused styles in production builds

## Deployment Considerations

### Production Readiness
- Run `npm run build` to generate optimized production build  
- Test with `npm start` to verify production server functionality
- Ensure all external links and assets are accessible
- Verify responsive design works across device sizes

### Content Management
- Academic content is hardcoded in React components (not CMS-driven)
- Blog posts are file-based (Markdown in `/posts` directory)
- Static assets served from `/public` directory
- No database or external content dependencies

## Technology Stack Summary

### Core Technologies
- **Next.js 14.2.32**: React framework with App Router
- **React 18.3.1**: UI library with modern features
- **TypeScript 4.8.4**: Type safety and development experience
- **Tailwind CSS 3.2.1**: Utility-first CSS framework

### Key Dependencies  
- **@next/mdx**: MDX processing for blog posts
- **gray-matter**: Frontmatter parsing for blog metadata
- **react-markdown**: Markdown rendering with extensions
- **rehype-katex**: Mathematical equation rendering
- **@fortawesome/react-fontawesome**: Icon library for UI
- **sharp**: Image optimization (required by Next.js)

### Development Tools
- **ESLint**: Code linting (configured for Next.js)
- **cross-env**: Cross-platform environment variables
- **PostCSS**: CSS processing for Tailwind

Remember: Always run `npm run lint` before committing code changes to ensure code quality and consistency.