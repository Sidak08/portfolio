# Mobile Projects Component

A responsive mobile card layout component that automatically expands cards when they reach the center of the screen.

## Features

- **Auto-expanding cards**: Cards automatically expand when they come into the center of the viewport
- **Smooth animations**: Powered by Framer Motion for fluid transitions
- **Minimized by default**: Shows only name and image in collapsed state
- **Full content on expand**: Description, technologies used, and visit links appear when expanded
- **Center detection**: Custom hook to detect when cards are in the center of the screen
- **Responsive design**: Optimized for mobile devices with touch-friendly interactions

## Files Structure

```
projects/
├── mobile_projects.jsx          # Main mobile component
├── desktop_projects.jsx         # Desktop version
├── responsive_projects.jsx      # Wrapper for responsive behavior
├── useCenterDetection.js        # Custom hook for center detection
├── mobile_projects.module.css   # Mobile-specific styles
└── README.md                    # This file
```

## Components

### MobileProjects
Main component that renders a list of project cards optimized for mobile viewing.

**Props:**
- `active` - Current active section
- `setActive` - Function to set active section

### ProjectCard
Individual card component with auto-expand functionality.

**Features:**
- Minimized state: 120px height with name and thumbnail
- Expanded state: Full height with description, tech stack, and links
- Smooth transitions between states
- Visual feedback when card is in center

### useCenterDetection Hook
Custom hook that detects when an element is in the center of the viewport.

**Parameters:**
- `threshold` (0-1): How close to center element needs to be

**Returns:**
- `[elementRef, isInCenter]`: Ref to attach to element and boolean indicating center status

## Usage

```jsx
import MobileProjects from './components/projects/mobile_projects';

function App() {
  const [active, setActive] = useState('projects');
  
  return (
    <MobileProjects 
      active={active} 
      setActive={setActive} 
    />
  );
}
```

For responsive behavior:
```jsx
import ResponsiveProjects from './components/projects/responsive_projects';

function App() {
  return <ResponsiveProjects active={active} setActive={setActive} />;
}
```

## Card Data Structure

```jsx
{
  id: 1,
  title: "Project Name",
  description: "Detailed description of the project...",
  image: "/path/to/image.png",
  icons: ["/logo1.png", "/logo2.png"], // Technology icons
  links: [
    {
      aval: true,
      type: "github",
      icons: "/github-icon.png",
      link: "https://github.com/repo",
      text: "Github"
    }
  ],
  color: "#cf2f97" // Accent color for the card
}
```

## Animations

- **Card expansion**: Smooth height transition with easing
- **Content reveal**: Staggered animation for description and links
- **Technology icons**: Sequential fade-in animation
- **Hover effects**: Scale and glow effects on interactive elements

## Accessibility

- **Reduced motion**: Respects `prefers-reduced-motion` setting
- **High contrast**: Enhanced visibility in high contrast mode
- **Focus management**: Proper focus styles for keyboard navigation
- **Screen readers**: Semantic HTML and proper ARIA labels

## Customization

### Styling
Modify `mobile_projects.module.css` for custom styles:
- Card appearance and animations
- Color schemes and themes
- Responsive breakpoints
- Accessibility improvements

### Animation Timing
Adjust animation durations in the component:
```jsx
const cardVariants = {
  collapsed: {
    height: "120px",
    transition: { duration: 0.5 } // Customize timing
  }
};
```

### Center Detection Sensitivity
Modify the threshold in `useCenterDetection`:
```jsx
const [cardRef, isInCenter] = useCenterDetection(0.7); // 0-1 range
```

## Demo

Visit `/mobile-demo` to see the component in action with sample data.

## Dependencies

- React 18+
- Framer Motion 11+
- Next.js 14+
- Tailwind CSS 3+
- react-responsive (for responsive wrapper)

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- iOS Safari 12+
- Chrome Mobile 80+
- Firefox Mobile 80+