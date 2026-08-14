'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "c703b8762fbb5efaeefa40afc23d81ad",
"index.html": "8bd68e2abc32550317db5408899eb44f",
"/": "8bd68e2abc32550317db5408899eb44f",
"main.dart.js": "57df0ac49c7d647f69576b5a80e6e3f8",
"version.json": "923163ceecd4bde2fadfd1990299b0d0",
"assets/assets/dictionary/page_033.json": "5a5403e9ea929e904044845e5b106415",
"assets/assets/audio/page_033/001.mp3": "0526b9d862db5c91526e050ac3925974",
"assets/assets/audio/page_033/002.mp3": "4ce4882c53e061f7004ce557f0cfe8da",
"assets/assets/audio/page_033/003.mp3": "4ce4882c53e061f7004ce557f0cfe8da",
"assets/assets/audio/page_033/004.mp3": "73cef7947d21bf8004acde1b685c1a06",
"assets/assets/audio/page_033/006.mp3": "159bb9a36a7240cead870a7313b9a699",
"assets/assets/audio/page_033/007.mp3": "9cb934b6ce104568efacf9013cc1a35d",
"assets/assets/audio/page_033/005.mp3": "98ec700c4afb130e0d81bd1754e32dd7",
"assets/assets/audio/page_033/008.mp3": "56d15615288abb696e166406af960530",
"assets/assets/audio/page_033/009.mp3": "876e96fcf3207a800d91e27ec2352ffe",
"assets/assets/audio/page_033/010.mp3": "045cf845e30e530d5af7bb6f3069b51e",
"assets/assets/audio/page_033/011.mp3": "0e2997f8577ec24fb8e4c0cddc221441",
"assets/assets/audio/page_033/012.mp3": "a79cd02b98f46bb451b163e421b5af61",
"assets/assets/audio/page_033/013.mp3": "69a1edb46b567f604e57267265ab6846",
"assets/assets/audio/page_033/014.mp3": "12abfae3a58d034c3feeef0b591a726e",
"assets/assets/audio/page_033/015.mp3": "db461e61028373bbf2c844f4f4442456",
"assets/assets/audio/page_033/016.mp3": "9412e78027429ba36e96b7fb0707b185",
"assets/assets/audio/page_033/018.mp3": "9da4cfe4133c0b2fcf3585627951fa3b",
"assets/assets/audio/page_033/017.mp3": "62d389024889ce1aeadba02c2f82d7e2",
"assets/assets/audio/page_033/019.mp3": "63f253ea8c43f134208a983c34988713",
"assets/assets/audio/page_033/020.mp3": "144c02c134044ab648b20b7a81af0c2e",
"assets/assets/audio/page_033/021.mp3": "c78f27259f34f343d06c354a8c46b7cc",
"assets/assets/audio/page_033/022.mp3": "658d0969fdeedf4029d32f71148dc17c",
"assets/assets/audio/page_033/023.mp3": "bbe362e2ec4254e826bc3a46b0739c2a",
"assets/assets/audio/page_033/024.mp3": "dffb1026e7939da0ae1ea85987657eec",
"assets/assets/audio/page_033/025.mp3": "13068ecc3f504e4ee4dbaa0ac2c83315",
"assets/assets/audio/page_033/026.mp3": "b8fcfa84a73cd47d7a70a49fcaa3d4b5",
"assets/assets/audio/page_033/027.mp3": "386ac15b28c2b89446d71ce71f675d5e",
"assets/assets/audio/page_033/028.mp3": "82e818db0ba3565dca0e6b66affde35d",
"assets/assets/audio/page_033/029.mp3": "5aa86c265ef2038a55f6516960b06c71",
"assets/assets/audio/page_033/030.mp3": "cac45b63dcc1b82083a45bb3f733bc9d",
"assets/assets/audio/page_033/031.mp3": "483830ddfc80c3c0debf7883e2f9b2a4",
"assets/assets/audio/page_033/032.mp3": "8f531e10c0dd6d06f3b47eaa188bbdef",
"assets/assets/audio/page_033/033.mp3": "4df8be164a5be6df778e9e8285b9f06c",
"assets/assets/audio/page_033/034.mp3": "fc463788723d32ba29c090f0341cd087",
"assets/assets/audio/page_033/035.mp3": "3d10ef4456953986879f25d954296484",
"assets/assets/audio/page_033/036.mp3": "de36d290f1674e90c47d4cb544cfe8f2",
"assets/assets/audio/page_033/037.mp3": "529988648c6ce28813160ac29f3e844c",
"assets/assets/audio/page_033/038.mp3": "2e88b8384c5e3277ffd248cfd7290f5c",
"assets/assets/audio/page_033/039.mp3": "55708b3c20e42fb1c25e89091e23dbc9",
"assets/assets/audio/page_033/040.mp3": "5287c10bb28772d05c7d41c4734ebc10",
"assets/assets/audio/page_033/041.mp3": "6788b43e17f35c1949fe8ae13c96a4fd",
"assets/assets/fonts/NotoSerifEthiopic.ttf": "558a1890e79492aade059aff90fcaf15",
"assets/assets/fonts/NotoSansEthiopic.ttf": "78062808997e67a778951853607f8c40",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "bb2a9df73c0e150d3e887fde6f6eb51f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "a254541aff8ce00b2f70970507960988",
"assets/AssetManifest.bin.json": "469a0382beec444f0ae2202b40a0d78d",
"assets/AssetManifest.bin": "1999ff103149bac1f364e14ab6af7077",
"assets/FontManifest.json": "36e2dda224f94ea5449fdf0f340ff5e5",
"assets/NOTICES": "2db14193e081557a37e78965ca4a726e",
"favicon.png": "6eb62368d923451b76eeac0526fa389b",
"icons/Icon-512.png": "045d5e5b581a062b02b9ea4e4e071242",
"icons/Icon-maskable-192.png": "f21fb90b524d9c056fa9eb25b91d105c",
"icons/Icon-maskable-512.png": "045d5e5b581a062b02b9ea4e4e071242",
"icons/Icon-192.png": "f21fb90b524d9c056fa9eb25b91d105c",
"manifest.json": "4c10c6a04491a05ac3f47ce579237059"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
