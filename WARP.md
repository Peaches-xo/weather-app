# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a vanilla JavaScript weather application built as part of The Odin Project curriculum. The app fetches weather data from WeatherAPI.com and displays current conditions with a custom gradient UI.

## Technology Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript (no build tools or frameworks)
- **API**: WeatherAPI.com (https://api.weatherapi.com/v1/current.json)
- **Styling**: Custom CSS with Gilroy font family, gradient backgrounds, and floating animations

## Development Commands

This project has no build step, linting, or testing configured. To develop:

- Open `index.html` directly in a browser, or
- Use a local development server:
  ```bash
  python3 -m http.server 8000
  # or
  npx serve
  ```

## Architecture

### File Structure

- `index.html` - Main HTML containing three views: splash, search, and weather detail
- `script.js` - All JavaScript logic for API calls and DOM manipulation
- `style.css` - Complete styling including gradients, animations, and responsive design
- `conditions.json` - WeatherAPI condition codes reference (not actively used in code)
- `images/` - Custom weather icons and UI elements
- `Gilroy-*.otf` - Custom font files

### Application Flow

The app has three distinct views that are shown/hidden via CSS (not dynamically rendered):

1. **Splash screen** (`.splash`) - Welcome view with introductory message
2. **Search screen** (`.search`) - Input field and saved location cards
3. **Weather detail** (`.weather_main`) - Full weather data with hourly forecast

### Data Flow

1. User enters city name in search input
2. `getLocationData()` fetches from WeatherAPI with hardcoded API key
3. `displayInfoCard()` populates the search screen card with:
   - Location name (`data.location.name`)
   - Condition text (`data.current.condition.text`)
   - Temperature (`data.current.temp_c`)
   - Condition icon (`data.current.condition.icon`)
4. `displayWeatherPage()` populates the detail view with additional data:
   - Wind speed (`data.current.wind_kph`)
   - Humidity (`data.current.humidity`)
   - UV index (`data.current.uv`)

### Key DOM Elements

All DOM elements are queried once at the top of `script.js` and stored in variables:
- Search: `searchinput`, `searchbutton`
- Info card: `infocardlocation`, `infocarddescription`, `infocardtemp`, `infocardimg`
- Weather page: `weatherpagelocation`, `weatherpagedescription`, `weatherpagetemp`, `weatherpageimg`, `weatherpagewind`, `weatherpagehumidity`, `weatherpageuv`

### Styling Approach

- CSS custom properties (`:root` variables) for color themes
- Gradient backgrounds using `linear-gradient()`
- Custom "clay" effect with inset/outset shadows
- Floating animation (`@keyframes float`) applied to weather icons
- Mobile-first with `min-width: 350px` on sections

## API Integration

**API Key**: Currently hardcoded in `script.js` line 40. The key is exposed in the source code.

**Endpoint**: `https://api.weatherapi.com/v1/current.json?key=KEY&q=QUERY`

**Response Structure Used**:
```js
{
  location: { name, country },
  current: {
    temp_c,
    condition: { text, icon },
    wind_kph,
    humidity,
    uv
  }
}
```

## Known Limitations

- API key is exposed in client-side code
- Hourly forecast section displays static placeholder data (not populated from API)
- No error handling UI (errors only logged to console)
- No loading states implemented despite README suggestion
- Only uses `/current.json` endpoint (not forecast endpoint)
- Navigation between views is not implemented (all views visible simultaneously)
- Second info card ("Brisbane") is hardcoded placeholder HTML
