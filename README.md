# Real-Time Occupancy Tracker — Chrome Extension

A Chrome extension built for a client that displays live occupancy data 
directly on their website, giving users real-time visibility into current 
capacity before they visit.

## How It Works

The extension connects to a Google Firestore database and listens for 
real-time updates using Firestore's onSnapshot listener. When occupancy 
data changes, the count updates instantly on the page — no refresh required.

## Features

- Real-time guest count pulled from Google Firestore
- Instant UI updates without page refresh via Firestore's real-time listener
- Lightweight frontend built with vanilla JavaScript, HTML, and CSS
- Styled to match the client's existing site branding

<img width="1130" height="647" alt="chrome-extension-counter" src="https://github.com/user-attachments/assets/273c781c-1856-4079-b505-03baeecdc0d0" />

## Tech Stack

- JavaScript (vanilla)
- HTML / CSS
- Google Firestore (real-time database)
- Chrome Extensions API

## Background

Built as a freelance client project in January 2023. The goal was to give 
users a way to check live capacity from the club's website before 
arriving, reducing uncertainty and improving the visitor experience.
