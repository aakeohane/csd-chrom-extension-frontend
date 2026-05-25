# Real-Time Occupancy Display

The user facing part to the 
[Club SD Counter](https://github.com/aakeohane/club-sd-counter) Chrome 
extension. This frontend displays the live occupancy count directly on 
the client's website, giving visitors real-time visibility into current 
capacity before they arrive.

Part of a two-part system: see the companion repo:
[club-sd-counter](https://github.com/aakeohane/club-sd-counter)

<img width="1130" height="647" alt="chrome-extension-counter" src="https://github.com/user-attachments/assets/273c781c-1856-4079-b505-03baeecdc0d0" />

## Features ✅

- Live occupancy count pulled from Google Firebase Realtime Database
- Updates instantly when staff adjust the counter, no page refresh needed
- Lightweight frontend embedded directly into the client's existing WordPress via html code snippet
- Styled to match the client's existing site branding

## Technologies

- JavaScript (vanilla)
- HTML / CSS
- Google Firebase Realtime Database

## Related Repositories

This project is part of a two-part real-time occupancy system built for 
a client:

| Repo | Purpose |
|------|---------|
| [club-sd-counter](https://github.com/aakeohane/club-sd-counter) | Staff-facing Chrome extension to track occupancy |
| [csd-chrom-extension-frontend](https://github.com/aakeohane/csd-chrom-extension-frontend) | Customer-facing website display showing live count |

## Final Reflections

This half of the project was all about the user experience on the other 
end of the system. The challenge was making something that felt calm and 
informative — a number on a screen that updates silently and reliably 
without drawing attention to itself. Knowing that someone at home could 
check the website and decide whether to make the trip based on what they 
saw made the whole system feel worthwhile. It was a small thing that 
solved a real problem.

### Author

[Aaron Keohane](https://aaronkeohane.com)

### Version

1.0.0

