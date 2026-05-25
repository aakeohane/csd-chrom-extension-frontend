# Real-Time Occupancy Tracker — Chrome Extension

A Chrome extension built for a client that displays live occupancy data 
directly on their website, giving users real-time visibility into current 
capacity before they visit. When the count changes, the display updates 
instantly — no page refresh required.

<img width="1130" height="647" alt="chrome-extension-counter" src="https://github.com/user-attachments/assets/273c781c-1856-4079-b505-03baeecdc0d0" />

## Features ✅

- Live occupancy count pulled from Google Firestore
- Instant UI updates via Firestore's real-time listener — no refresh needed
- Lightweight frontend built with vanilla JavaScript, HTML, and CSS
- Styled to match the client's existing site branding
- Embedded directly into the client's website via WordPress html snippet

## Technologies

- JavaScript (vanilla)
- HTML / CSS
- Google Firebase / Firestore
- Chrome Extensions API

## Final Reflections

I enjoyed this project, it is so simple, yet is so incredibly useful for users to 
know the exact amount of occupancy with a quick look at their phone. Getting the 
Firestore real-time listener to update the UI smoothly and quickly was the technical 
challenge I enjoyed most. And once it clicked, watching the number change live 
on the page felt like a small magic trick. It made me want to build more 
things that connect the physical and digital worlds in simple, useful ways.

### Author

[Aaron Keohane](https://aaronkeohane.com)

### Version

1.0.0
