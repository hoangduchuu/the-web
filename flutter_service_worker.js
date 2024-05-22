'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d4b36a6205d00eab3cf70c25acf8024f",
"version.json": "8007ed8fcaba18e22d38d9436aef59ca",
"index.html": "eb3f6c636e78e2010860a48a12de7d42",
"/": "eb3f6c636e78e2010860a48a12de7d42",
"main.dart.js": "d4b1fe6460327a5563f545ba0a9c059a",
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
".git/config": "394a6f42ae96081d94ff56072dd67db6",
".git/objects/61/334acb6932310cec374ef55ea610875d4c2614": "0f80f1e4fc9024b9fc29f4f4194a7605",
".git/objects/61/57bb1518fe6387eb6f1272cb0a75a3a4e2667a": "a6eb9ab3842fad8fb5033ec43ac0b9f0",
".git/objects/35/15dc37161558ae2b14e1600ee6895488ca73a1": "d34a6431a69bacb9d3c8e02544ee331a",
".git/objects/35/747195d6e6a342a0c5d825d77f33a7c9cc547d": "e28ab1519b21ed4d7085590ed76fce5d",
".git/objects/3c/a9cfb94f959fc1fe8eaede1d879a0e970c2ecb": "df0f84a5ac1faad749f2ed86351d9279",
".git/objects/3c/279db0533f666522d7b364a645b126df2fcb96": "4368c92b18892d32688df44bfeb14fc3",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/7f66f2e91d342827ff01d2cbecf0de6dc89144": "707bda37ef4eef681135caaabb439665",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5a/f9873c2952e0a76e17773625ebdd402c394e8f": "a395651de1e6071a5c261b86c03d3c20",
".git/objects/d7/08f69492468fae16356cae43e79a1d44052cf7": "b07b799a850d69574580c40487563e5e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/1bc9dbcc4b1b2e8c68196d54abb17234d35dfd": "3575d046da5e322bf6a1e2c1b5f5676d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c2d6b61e126eb19f3211d95f122b4d14c5d60b": "cd8121fcd4e37689108782ab082dd89f",
".git/objects/e5/7d4b87d2efb8efc5ddfefd9dc4a1587d696e62": "15ff5f2e12fb6806ccad461a579961ea",
".git/objects/f4/212a7bbffa534a62bc989663f5c324e3473b80": "e498b26cac56c7c1416ab37ac098be43",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/cd304ce706b42a35809aa56917c3e70e46b5da": "3331c0cad26da5e4d92e0ac0f78b9e29",
".git/objects/e3/1aa7a293cf3d53ea806e012e1cd471e8eac397": "9656d285857ff3fd3c3b019cad4284af",
".git/objects/c1/cb085a13cdaf2056b0b8a39554a50223e2ad91": "99a9594b18e4398aaa9ea33e2e5a919c",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/a9c2a311ee595a1c05d49cf78d32e68c8c0685": "f58027bbab8a95d285b7746ecb15103d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/0f9e27802ff505d386da24153630af8d092ad7": "6288a8192e0d680f1673aa8fd9949024",
".git/objects/28/adf185620b0f3919dfef8b693b30e912d3ecad": "d6cf5b7274bb4e188dbf58b71cf3ec84",
".git/objects/8f/0dbba993ce87edbd0d0357b9893d8965b2956c": "7e81c1a142733330477a0051f4d80701",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/d4b1eda42e06830c2f02e5670ed18add0ec3d6": "5b9ba1c0a8cf99cdaa07403914b2ef0a",
".git/objects/21/8cb4be4478567e8a96ff25a1aa80844c7f69a9": "45014129c0f4479d22f3b2ec3539cb4f",
".git/objects/43/82e4cd7accb0703d7c2e6c71d172a3b482b15e": "374dfadff40fcdfe9d9fa2464bd5b29b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/d07050f2104d8508c2870dddbe020cfc692056": "4e828b8698697872f0edf36b5aa61a70",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/5b/458719b4416b4a6f404a5b08bc2121e06344e4": "c9c901bde3b7a1757fd8c4f051a4b580",
".git/objects/37/52e91d35d2d97c077b48ab1155a3a25004c35c": "bc73c7cff31c49e84b62964c5e675ed8",
".git/objects/6c/9831aa35c95e4f41e13f1788a4bdd4eb57b951": "301727aa64a0439a8297020a8bfcea4b",
".git/objects/97/471bd5b86fa0dc2d9c9f4b9bf2c858a7434581": "1bdbf78817000bf4d958d3ade510cf69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b6/65e118e9ca705b30557bf9d41db6b6a70fa115": "16306df79857a37d80e2a448ba55b4c6",
".git/objects/aa/eb4522b7ae2ca2daa3ec615363e31a8aa92045": "d542a87646c1e0d45430c736a4eb27c6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f6f72c44dd8cf405c7092f74e8b9c2ab524626": "b8e9b180b63a5f73cdf6db785f64f0c7",
".git/objects/b7/63c7d9ac067659c0ee706209a895a910ff39b3": "68059b5e2fce328c4d97c1aea96de23d",
".git/objects/b7/71fe83065658916e1e2ccec987272de510bb12": "b8b05aaeaa5f23459d5d4a97cb091f25",
".git/objects/db/b58ffbfa3c0d813911938b50b946c8eac0c9e4": "b51b7dc588315ca3de6735899fdb79f3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c5/2da59c1ea26e4003bb20a27f1e7d070c498d4f": "3499a5e2df8252a42b332748ad2f6eba",
".git/objects/c2/715eb825f4953431a3b1efeb0ed38cc314dbf1": "fc0bc00074e9cee65db2ca6c220d822b",
".git/objects/f1/495c8e63b5542bfa3958020c8045cc1701e8d1": "01c99f9cdf1fd544d92a8a2e6fdafdb2",
".git/objects/e7/82939234c1352f011da86be23f3fdd6e743347": "9c428554f5bdd21d9a4777d78f5f5090",
".git/objects/e7/0fd7e0dbe12caefe09c46bc77384c39833b2e3": "b17dd48c660bcc0d3ed48ee9ce0adb66",
".git/objects/e7/ee5c2e896cb5e4dacb8ea13f6161be48155c2c": "b8976d2c5fd289bd50ad25fdd6c81563",
".git/objects/f8/1614d3f611a69e12e821c0d07613124e7042ca": "ebdfa2765789c44368a2f2cb68438ba1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/8f6bfeecca923b781617421c4f05ad51f35269": "93f686ba210827acfd7b640b0b3c274b",
".git/objects/85/fa7ed1745793934c5e2ad79954f39dff8b3247": "686bc47378b6873fee956a89f42bfbfe",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/82/29f30791636d53af1be0a91e01b546b244fb96": "0cd60124783bba7fe739fe80a876fd33",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/764bf17b258e99626097fe4171b069255750b7": "bb5b8ad5369e0fbff6db5cab83e82743",
".git/objects/49/fc85ef2f59b5c27aaedefb7bc7bd3a89205293": "5c65f6e431a5f420622652389a8034d3",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "06a659411d776bc856512a1ecc04e5ae",
".git/logs/refs/heads/main": "06a659411d776bc856512a1ecc04e5ae",
".git/logs/refs/remotes/origin/main": "0ab4d9dd5a1651b2ed3d5a8fec48f172",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
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
".git/refs/heads/main": "5df46f726297daf38de0aedee471f30f",
".git/refs/remotes/origin/main": "5df46f726297daf38de0aedee471f30f",
".git/index": "d5a6e0bb6748babaa6cf49ac593e0a00",
".git/COMMIT_EDITMSG": "387e63774204dd14808914349b07c5a4",
".git/FETCH_HEAD": "288a82cf6518ec1603f4e36db3d552cd",
"assets/AssetManifest.json": "0e530ba3a48efc4060e43f4526b2f453",
"assets/NOTICES": "e737b9af6706ba5da1d025225a95b716",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b024c5fe487cfe1f9e6ed35b163949f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "db26465dd381373c4e79740f3ec7b0ec",
"assets/fonts/MaterialIcons-Regular.otf": "4f5dd2e03a0ada8ef371a95f54c38a0b",
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
