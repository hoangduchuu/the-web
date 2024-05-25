'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "51442a0517103879d63881f20ff4ff56",
"version.json": "8007ed8fcaba18e22d38d9436aef59ca",
"index.html": "eb3f6c636e78e2010860a48a12de7d42",
"/": "eb3f6c636e78e2010860a48a12de7d42",
"main.dart.js": "514ea56293046d87d6b962525b8d74cb",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"public/index.html": "293818625d935ed6d802b239714d561c",
"public/404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d8287a685a93cd3e52d8949c793744f6",
"firebase.json": "9448a9ab3011b8a3ff1934c7def6d382",
".git/config": "17180999bde8fe59f7a1376e2892ce3f",
".git/objects/6a/4a398922d860a3ae9efaf242aeb20caa31f682": "2ace20f792eca96e1fa1332775052b56",
".git/objects/34/2d7a1053a251c92ddd0b95318f9e2490e99f26": "33a02f7557742ef54c6cbab743cab0fa",
".git/objects/ed/54a7c52034fe7343f66ef435554189bd4e70cd": "c602540b402b9411fed0aee323fa5a8a",
".git/objects/c1/2909cb1bd005a80894ca9f657f0800300f995a": "422ce0c5408d8785dd2ac1f3ac6487b6",
".git/objects/18/9a6bcd7f9f6115a0205e54bf7ec53fb08cf26c": "96e93edb8b2e5a8319116b43e93ba131",
".git/objects/pack/pack-3e21b0120cbc4195016c5ad4e568da7f92990e03.rev": "8d40e95784b0f08fda705146aedbc313",
".git/objects/pack/pack-3e21b0120cbc4195016c5ad4e568da7f92990e03.idx": "3202417cf646aadac498651120c493e5",
".git/objects/pack/pack-3e21b0120cbc4195016c5ad4e568da7f92990e03.pack": "b8b5609c116e914ab2b8a657561edd79",
".git/objects/88/d16bb186033d8d3498a3862688a2f24365f12c": "1fded3410c61b0dc6e55931e061a77f4",
".git/objects/36/6cdc496b85d2ff53dcd0542cc4b3c9b6820a6d": "49e2fab7504ba0059051b7e47da95a2b",
".git/objects/5c/67efda7d255d5f2ae43b4287f388c5d421a99f": "8d7c53726a69501a62dffffa6fa854e4",
".git/objects/09/19de52f1aa7013d6bf85a84acd8f4643066bee": "7c039314e64628fe055c74a5ad391455",
".git/objects/96/04b538da43980777c93339807907ad672fdeb0": "fc5c48acedd06a7ad98b5dbf840a3907",
".git/objects/30/b623fb9ba34ae5b936e895162959a32e637777": "522fe7b5a7e29bd60f5bd8844f792e0f",
".git/objects/08/cc36ef7bc4d679f71770787d0b0922f0956c7f": "a32b820af9dda3c540802425a4dca8e8",
".git/objects/b0/e44f9539a550dd87040c73788dcdd630f52fe0": "664ca1c9509fd9b9ae165a7cc7b7d3fc",
".git/objects/e1/93eb533c37654682c3e877e28bd47b3c630c9a": "b745fb67c797c93000c2fb9a02a202cf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3e8e76caf7e8a06da5b3c6c3f978cfd5",
".git/logs/refs/heads/main": "3e8e76caf7e8a06da5b3c6c3f978cfd5",
".git/logs/refs/remotes/origin/HEAD": "60623d0b615876060d088fc11a2bc4bc",
".git/logs/refs/remotes/origin/main": "f3542c10a56dc8edd52a97534fc1b26c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e0049c993facea8e054e1ff65c976c7d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e0049c993facea8e054e1ff65c976c7d",
".git/index": "5558deffabe7746ca2af990ab14015f8",
".git/packed-refs": "767f5421940f4329a69a80bea1cf25cb",
".git/COMMIT_EDITMSG": "387e63774204dd14808914349b07c5a4",
".git/FETCH_HEAD": "9dd2425fcd38dae9dd0de99494ebb842",
"assets/AssetManifest.json": "2b112bb9ef59f43af95be5579a85d2d1",
"assets/NOTICES": "19715ec97657a88d48e22fee547ba00b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b40e46a9ce25fb0f856c27fa0a5c44a2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f5d471bd1bb07266f5efa2a5d08a0c67",
"assets/fonts/MaterialIcons-Regular.otf": "4f5dd2e03a0ada8ef371a95f54c38a0b",
"assets/assets/lotties/favicon_io.zip": "d4786bc123725539479d4cdf75371ed3",
"assets/assets/lotties/404.json": "79c1df4e52812632f405647581759239",
"assets/assets/icons/heydev_icon.jpeg": "9ed628246cc9a2394d38323a71b629a2",
"assets/assets/icons/bg.svg": "8be2d2d97575415dddcdec0fe9349236",
"assets/assets/icons/clock.svg": "9606b7baca3c607cdba51eb8fa313c8f",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
