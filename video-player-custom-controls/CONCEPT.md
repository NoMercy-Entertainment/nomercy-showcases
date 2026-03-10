# Video Player - Custom Controls

A complete showcase demonstrating how to build a fully custom control UI on top of the headless NoMercy Video Player. This is the reference implementation showing off what the player engine can do.

## What it demonstrates

### Custom controls bar
- Play/pause, previous/next, skip forward/backward buttons with SVG icons
- Volume slider with mute toggle and percentage label
- Seek bar with buffer indicator and chapter markers
- Time display with current position and total duration

### Dropdown menus
- Playback speed selector with presets
- Quality/resolution picker from the HLS manifest
- Subtitle track selector with language labels
- Audio track selector for multi-language streams

### Playlist panel
- Side panel with thumbnail previews for each item
- Year, duration, and description metadata per entry
- Active item highlighting with click-to-switch
- Scrollable list with custom scrollbar styling

### Chapter markers
- Visual markers on the seek bar at chapter boundaries
- Hover tooltip showing the chapter name
- Chapters parsed from the HLS manifest or provided via config

### Keyboard shortcuts dialog
- Full keybinds reference in a modal dialog
- Grouped by category (playback, volume, navigation, etc.)
- Triggered by pressing `?` or clicking the keybinds button

### Event log
- Live event stream from the player engine displayed in a monospace log
- Filterable by event category with toggle chips
- Collapsible JSON payloads with syntax highlighting
- Useful for debugging and understanding the player's event system

### Fullscreen support
- Controls overlay repositions inside the player container during fullscreen
- Gradient backdrop for readability over video content

## How to use

### As a standalone page
Open `preview.html` in a browser. It loads the player from the CDN and runs everything client-side.

### On CodePen
1. Paste the body content from `index.html` into the HTML panel
2. Paste `style.css` into the CSS panel
3. Paste `app.js` into the JS panel
4. Under JS Settings, add external script:
   `https://cdn.jsdelivr.net/npm/@nomercy-entertainment/nomercy-video-player@latest/dist/nomercy-video-player.iife.js`

## Tech stack
- Vanilla HTML, CSS, and JS (no frameworks)
- NoMercy Video Player as the headless engine
- HLS test streams from the nomercy-media repo
- CSS custom properties for the purple accent theme
