# Mobile Drag and Drop Feature Guide

## Overview

The TimePilot mobile calendar now supports drag and drop functionality for rearranging study sessions on touch devices. This feature provides the same scheduling flexibility as the desktop version but optimized for mobile interactions.

## Features

### ✅ What Works on Mobile

- **Touch-based Drag and Drop** - Long press and drag study sessions to new time slots
- **Visual Feedback** - Real-time indicators during drag operations
- **Auto-snapping** - Sessions automatically snap to available time intervals
- **Smart Conflict Detection** - Prevents overlapping with existing sessions or commitments
- **Same-day Restrictions** - Sessions can only be moved within the same day
- **Work Day Validation** - Ensures sessions are only dropped on configured work days

### ❌ What You Cannot Drag

- **Fixed Commitments** - These remain locked in place and do not show interaction UI when tapped
- **Missed Sessions** - Sessions that have been missed (🚫 icon) cannot be rescheduled via drag and drop
- **Sessions to Different Days** - Sessions can only be moved within the same day
- **Sessions on Non-Work Days** - Cannot drop sessions on days you haven't configured as work days

### 📱 Mobile-Specific Enhancements

- **Touch Backend Integration** - Uses `react-dnd-touch-backend` for optimal touch support
- **Mouse Events Enabled** - Also works with mouse on tablets and hybrid devices
- **Visual Drop Zones** - Time slots highlight when you can drop sessions
- **Drag Indicators** - Study sessions show a mobile icon (📱) when draggable
- **Touch Action Control** - Disables scroll during drag operations

## How to Use

### Starting a Drag Operation
1. **Long press** on any study session in the timeline
2. The session will become semi-transparent and show "Dragging..." in the header
3. **Drag** the session to your desired time slot

### Dropping a Session
1. **Drag** the session over any time slot in the timeline
2. The time slot will **highlight green** if it's a valid drop zone
3. **Release** to drop the session in the new time slot
4. You'll see a **success message** with the new time

### Visual Indicators

- **📱 Icon** - Appears on draggable study sessions
- **🚫 Icon** - Appears on missed sessions that cannot be dragged
- **Green Highlight** - Valid drop zones during drag
- **Blue Background** - Potential drop zones
- **Dashed Border** - Active drop target
- **Notification** - Success/error feedback in top-right corner
- **No Click Response** - Commitments no longer show interaction UI when tapped

## Technical Implementation

### Architecture
- **TouchBackend** - Handles touch events for mobile devices
- **Draggable Components** - Study sessions wrapped with drag functionality
- **Drop Zones** - Each time slot acts as a drop target
- **Unified Logic** - Same scheduling validation as desktop version

### Key Components
- `DraggableEvent` - Individual study session with touch support
- `TimeSlotDropZone` - Time slot containers that accept drops
- `TouchBackend` - React DND backend optimized for touch devices

### Device Support
- **iOS Safari** - Full touch support
- **Android Chrome** - Full touch support
- **iPad/Tablets** - Touch and mouse support
- **Hybrid Devices** - Touch and mouse support

## Limitations

### Same as Desktop
- **Same-day only** - Sessions cannot be moved to different days
- **Study sessions only** - Fixed commitments cannot be dragged
- **Work days only** - Cannot drop on non-work days
- **No resizing** - Session durations are fixed

### Mobile-Specific
- **Touch scrolling** - Disabled during drag operations
- **Long press required** - Touch and hold to start dragging
- **Single touch** - Multi-touch gestures not supported

## Troubleshooting

### Common Issues

**Drag doesn't start**
- Ensure you're pressing and holding on a study session (not commitment)
- Try a longer press - some devices require extended touch

**Can't drop session**
- Check if target time slot is on the same day
- Verify the day is configured as a work day
- Ensure there's no conflict with existing sessions

**Session snaps to different time**
- The system finds the nearest available slot
- Check your buffer time settings
- Look for existing commitments that might block the exact time

**Scrolling interferes**
- Touch action is disabled during drag
- Try scrolling to desired area before starting drag
- Use shorter drag distances

### Browser Support
- **Recommended**: Latest versions of Safari (iOS), Chrome (Android)
- **Minimum**: iOS 13+, Android 8+
- **Testing**: Use browser dev tools mobile simulation

## Future Enhancements

Potential improvements for mobile drag and drop:
- **Haptic feedback** for drag start/end events
- **Multi-session selection** for batch operations
- **Swipe gestures** for quick rescheduling
- **Voice commands** for accessibility

## Tips for Best Experience

1. **Use landscape mode** on phones for better timeline visibility
2. **Scroll to target area** before starting drag operation
3. **Short drags work better** than long-distance moves
4. **Use day view** for most precise control
5. **Check feedback messages** for operation confirmation

## Development Notes

The mobile drag and drop implementation maintains feature parity with the desktop version while providing a touch-optimized experience. The same validation logic, scheduling algorithms, and conflict resolution are used across both platforms.
