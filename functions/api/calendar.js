export async function onRequest(context) {
  const url = 'https://calendar.google.com/calendar/ical/westcountryleders%40gmail.com/public/basic.ics';
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Upstream returned ${response.status}`);
    }
    
    const text = await response.text();
    
    return new Response(text, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/calendar; charset=utf-8',
        'Cache-Control': 'public, max-age=300'
      }
    });
  } catch (error) {
    return new Response('Error fetching calendar: ' + error.message, {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
