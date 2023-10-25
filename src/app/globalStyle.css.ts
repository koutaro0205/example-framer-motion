import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
  height: '100%',
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('body', {
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  color: '#132238',
  minHeight: '100vh',
  padding: '0',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
});

globalStyle('h1, h2, h3, h4, p', {
  margin: 0,
});

globalStyle('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  height: '100%',
  maxWidth: '720px',
  margin: '0 auto',
  overflow: 'hidden',
});
