// The SW will be shutdown when not in use to save memory,
// be aware that any global state is likely to disappear
console.log("SW startup");
const version = 'v0.0.1';
self.addEventListener('install', function(event) {
  console.log("SW installed");
});

self.addEventListener('activate', function(event) {
  console.log("SW activated");
});

/*self.addEventListener('fetch', function(event) {
  console.log("Caught a fetch!");
  event.respondWith(new Response("Hello world!"));
});*/

self.addEventListener('fetch', function(event) {
	if (event.request.url.match(/\.png$/))
		return fetch({ ... event.request, url: 'https://mc.qcloudimg.com/static/img/7fb3753303b9e330138367e955440ca5/image.png'})
	return fetch(event.request);
  // console.log("Caught a fetch!");
  // event.respondWith(new Response("Hello world!"));
});