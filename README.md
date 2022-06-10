# Course Provider Plugin:

__Signal K server plugin that acts as a Course data provider__.

_Note: This plugin should ONLY be installed on a Signal K server that implements `v2 Course API`!_

---

This plugin populates the following course data paths found under `navigation.course.calcValues` as well as providing an API endpoint at `/signalk/v2/api/vessels/self/navigation/course/calcValues`:

- `calcMethod`
- `bearingTrackTrue`
- `bearingTrackMagnetic`
- `crossTrackError`
- `previousPoint.distance`
- `distance`
- `bearingTrue`
- `bearingMagnetic`
- `velocityMadeGood`
- `timeToGo`
- `estimatedTimeOfArrival`
- `targetSpeed`

and optionally (as per settings):
- `steering.autopilot.target.headingTrue`
- `steering.autopilot.target.bearingMagnetic`



Additionally it will raise the following notification:
- **`notifications.navigation.arrivalCircleEntered`**: _alert_ message is sent when the value of `distance` falls below the value of `navigation.course.nextPoint.arrivalCircle`.

- **`notifications.navigation.perpendicularPassed`**: _alert_ message is sent when the perpendicular line (relative to `navigation.course.previousPoint.position` at the destination has been passed by the vessel.

## Configuration
---
**Notifications:** provides configuration for generated notifications.

- **Enable sound:** Checking this option sets the `sound` flag for any notifications generated.

**Calculation method:** Select the course calculation method to use and the paths to populate.

- **Great Circle (default)**: populates values using _GreatCircle_ calculations.
- **Rhumbline**: populates values using _Rhumbline_ calculations.

**Autopilot:**
- **Emit target heading delta:** Check this option to send `steering.autopilot.target.headingTrue` delta messages.




