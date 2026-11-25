// Google Calendar "add event" link for an entry in EVENTS (content.js).
export function buildGoogleCalendarUrl(ev) {
  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const params = new URLSearchParams({
    text: ev.title,
    dates: `${ev.gcalStart}/${ev.gcalEnd}`,
    details: ev.description,
    location: ev.location || "",
  });
  return `${base}&${params.toString()}`;
}
