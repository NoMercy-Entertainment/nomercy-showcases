# Video Player - Netflix-Style UI

A showcase demonstrating how to build a Netflix-like viewing experience on top of the headless NoMercy Video Player.

## Features to demonstrate

### Cinematic controls overlay
- Controls fade in/out on mouse movement with a smooth gradient backdrop
- Large centered play/pause button on tap/click
- Slim progress bar at the bottom that expands on hover
- Episode title and series info displayed top-left during playback

### Skip intro / next episode
- "Skip Intro" button that appears during the intro segment
- Auto-play countdown overlay for the next episode with a cancel option
- "Next Episode" button in the bottom-right corner near the end of an episode

### Episode selector
- Slide-out panel showing seasons and episodes with thumbnails
- Highlight the currently playing episode
- Quick switch without leaving the player

### Subtitle presentation
- Netflix-style subtitle positioning and styling
- Subtitle size and style picker in the settings menu

### Audio and quality menus
- Pill-shaped settings menu with smooth transitions
- Grouped by audio language, subtitle language, and quality
- "Auto" quality label showing the current resolution

### Preview thumbnails
- Thumbnail sprites on the seek bar hover, Netflix-style scrubbing preview

### Mobile gestures
- Double-tap left/right to skip backward/forward
- Swipe up/down on the right side for volume
- Swipe up/down on the left side for brightness
- Pinch to toggle fill/fit

## Tech stack
- Vanilla HTML, CSS, and JS (no frameworks, keeping it portable)
- NoMercy Video Player as the engine
- CSS custom properties for theming
- HLS test streams from the nomercy-media repo
