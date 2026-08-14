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
"flutter_bootstrap.js": "b0c8ba7e31ac97bb10bda0ffee501fab",
"index.html": "8bd68e2abc32550317db5408899eb44f",
"/": "8bd68e2abc32550317db5408899eb44f",
"main.dart.js": "04baba1664a0f7df829e77292705d7b0",
"version.json": "923163ceecd4bde2fadfd1990299b0d0",
"assets/assets/dictionary/page_033.json": "a031087f93e236931f0d9bf63a1bcfa8",
"assets/assets/dictionary/page_034.json": "cc8216b1f352f4de60ff5327ddc3f1f0",
"assets/assets/dictionary/page_036.json": "17e75c0049401a860b306601c2ec6d60",
"assets/assets/dictionary/page_035.json": "f44a78402ba3d2604af4b0b9efb4d054",
"assets/assets/dictionary/page_037.json": "4baea71f6c4c24e5c79aba9d6a3dc227",
"assets/assets/dictionary/page_038.json": "9302404aa347899083e1e4e4b5bf0a89",
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
"assets/assets/audio/page_034/001.mp3": "f71b918a6ca846fc1db7c92d33d2a17b",
"assets/assets/audio/page_034/002.mp3": "f58f09df65566e5856052f7025776f23",
"assets/assets/audio/page_034/003.mp3": "eecd09ff82af62c3e3db56838dbcf941",
"assets/assets/audio/page_034/004.mp3": "c46cb663c3ff7043791bd471eec41f0f",
"assets/assets/audio/page_034/005.mp3": "50b5c0489dbb68433605d9df3233d0d5",
"assets/assets/audio/page_034/006.mp3": "cc68a5a878b127a6350817d4d958c1c8",
"assets/assets/audio/page_034/007.mp3": "b00413da3548dd13176b14b651dc2785",
"assets/assets/audio/page_034/008.mp3": "5dffc52973f6d2a9568f370b71f28817",
"assets/assets/audio/page_034/009.mp3": "0cf4421f98f73d80f8f2edff7f77f608",
"assets/assets/audio/page_034/010.mp3": "8045930510bf8c3c424d2dbb41dd037c",
"assets/assets/audio/page_034/011.mp3": "31665183b0f11aa26036bacfc764671e",
"assets/assets/audio/page_034/012.mp3": "57a9fad9f5d6c9c7309411730fe8af38",
"assets/assets/audio/page_034/013.mp3": "c86b42fa9276ba837ee05601397b3290",
"assets/assets/audio/page_034/014.mp3": "dad86a38c60f353b7198516dd3cbbcf7",
"assets/assets/audio/page_034/015.mp3": "da9d208e169d78159f6a25a3f12816cf",
"assets/assets/audio/page_034/016.mp3": "2455c2b0352576c9c073b16597d61631",
"assets/assets/audio/page_034/017.mp3": "b9e1a5635ce0fae652ee3dd7320d90ad",
"assets/assets/audio/page_034/018.mp3": "529988648c6ce28813160ac29f3e844c",
"assets/assets/audio/page_034/019.mp3": "1c80daffc6b7aab7fdb1e8e02ff10216",
"assets/assets/audio/page_034/020.mp3": "5b4b8329ebe70e2e271013d9f2b7b122",
"assets/assets/audio/page_034/021.mp3": "276f76061f9ca81a5d21955001004142",
"assets/assets/audio/page_034/022.mp3": "a3a288be7a989059d14e9dae29cf1ed9",
"assets/assets/audio/page_034/023.mp3": "f8d1e4fd6aec9641189bd506a55267f6",
"assets/assets/audio/page_034/024.mp3": "f221c701ade8ee063891a89b3ec21481",
"assets/assets/audio/page_034/025.mp3": "0526b9d862db5c91526e050ac3925974",
"assets/assets/audio/page_034/026.mp3": "68e337369b023683990915ba8bfdb5cf",
"assets/assets/audio/page_034/027.mp3": "df641c9770f490003f622cdb0b1f6eff",
"assets/assets/audio/page_034/028.mp3": "456f9161e61ba65989c32923794cf5b5",
"assets/assets/audio/page_034/029.mp3": "77be1b8f462b9a076119cace198460cf",
"assets/assets/audio/page_034/030.mp3": "3fc231500fc00276365e21ab47c5f31b",
"assets/assets/audio/page_034/031.mp3": "275d29a9ab5d1401813ba1f231295c29",
"assets/assets/audio/page_034/032.mp3": "1606890fcfe54799dac6867f9e66724e",
"assets/assets/audio/page_034/033.mp3": "fb7cc7f8cebbb0f5b7bba6a1da66c2b9",
"assets/assets/audio/page_034/034.mp3": "dc2828d0516150a06cfe9c661a4ec14f",
"assets/assets/audio/page_034/035.mp3": "1714295e84c0c7ba1eb00769d07a7b46",
"assets/assets/audio/page_034/036.mp3": "c609df82319707356e3accdc0678028a",
"assets/assets/audio/page_034/037.mp3": "debb73535ad85f76671a12114f384d78",
"assets/assets/audio/page_034/038.mp3": "887ad4a26843fc6116fd07c7b393d171",
"assets/assets/audio/page_034/039.mp3": "6066e13812ef7a8c0b99f0a7b71982c5",
"assets/assets/audio/page_034/040.mp3": "70f05cada0291de153b855a7c358937f",
"assets/assets/audio/page_034/041.mp3": "dc7682f504dbebf338b5cdaf667ef058",
"assets/assets/audio/page_034/042.mp3": "0efb0971923813da093d60f8e6455545",
"assets/assets/audio/page_034/043.mp3": "6acaadc9bf3c19725c176f317c40d17f",
"assets/assets/audio/page_034/044.mp3": "c609df82319707356e3accdc0678028a",
"assets/assets/audio/page_034/045.mp3": "0690628f577e3f6d2259cf2f00a7454e",
"assets/assets/audio/page_034/046.mp3": "99216677d02e7b8eb0b6b1ae692a4908",
"assets/assets/audio/page_034/047.mp3": "447c165f980c6844799930f64855d933",
"assets/assets/audio/page_034/048.mp3": "93b78132eba28196eeca407a1fa56364",
"assets/assets/audio/page_034/049.mp3": "5ea9b3e771019cde06ab8cb274b3af43",
"assets/assets/audio/page_034/050.mp3": "7f5d63906311facb361d005d358ae7fa",
"assets/assets/audio/page_034/051.mp3": "384d2e64c627bf47893ef10058ef4397",
"assets/assets/audio/page_034/052.mp3": "6c530f387379a9802ef9f7d10afd1a5d",
"assets/assets/audio/page_034/053.mp3": "7076160852095ab2c07b279535185230",
"assets/assets/audio/page_034/054.mp3": "0e0b780999cc77951b3c7c2220ffdea8",
"assets/assets/audio/page_034/055.mp3": "d0374e6472833c8988bdaa3e86a04645",
"assets/assets/audio/page_035/001.mp3": "2aa199922e58bce20a97e79e9ac2988d",
"assets/assets/audio/page_035/002.mp3": "dda5e9a729c11623f7201aa0e1e5a105",
"assets/assets/audio/page_035/003.mp3": "f05f5537acb3e3d0dd3bce2946ca43cb",
"assets/assets/audio/page_035/004.mp3": "0d50fbca84a4e0ab8c6184f48ee9d02f",
"assets/assets/audio/page_035/005.mp3": "48b293e10b9e4769a67f8b16f52ee676",
"assets/assets/audio/page_035/006.mp3": "0553e32bea602235de6415c2cee71aa5",
"assets/assets/audio/page_035/007.mp3": "73911772e80264f5849455c4707ee189",
"assets/assets/audio/page_035/008.mp3": "47ddea8c9b1ee4bf35e036216b024e21",
"assets/assets/audio/page_035/009.mp3": "2d2f0948dafbdbe9a2e94e9ef517e774",
"assets/assets/audio/page_035/010.mp3": "873df94744640f76a7e5fc24c94d0964",
"assets/assets/audio/page_035/011.mp3": "3ed4b0fe63800f16092bbd5e37a56024",
"assets/assets/audio/page_035/012.mp3": "bab46b090587a132f7c67ae3d8714de8",
"assets/assets/audio/page_035/013.mp3": "37c5b0512f371a9770941280e4436db9",
"assets/assets/audio/page_035/014.mp3": "835def90e2ed30b4c23f3d63c149294e",
"assets/assets/audio/page_035/015.mp3": "9e8f2f4756baeac80ec212f1c6727232",
"assets/assets/audio/page_035/016.mp3": "54f875e8aa2040c78d91e17c6b03a593",
"assets/assets/audio/page_035/017.mp3": "703dfd516d48290139a5cd09a3ca7c51",
"assets/assets/audio/page_035/018.mp3": "d2be1a09d39c21a79287990b84f19ffe",
"assets/assets/audio/page_035/019.mp3": "875d22651eded8b00f5ace1d70794fa3",
"assets/assets/audio/page_035/020.mp3": "2e9fda3745cf04ee9e4e46040974aeba",
"assets/assets/audio/page_035/021.mp3": "5ca15e3e889102b3ea2cfa5197f7dca0",
"assets/assets/audio/page_036/001.mp3": "a63780024e4048dd272c5e4c05aeef01",
"assets/assets/audio/page_036/002.mp3": "2430b2f37e01493c934c352a34c07328",
"assets/assets/audio/page_036/003.mp3": "1b9d7194654a48f2ac607ad2574c526e",
"assets/assets/audio/page_036/005.mp3": "fa3ff023478369b2ef7ba6b60861af45",
"assets/assets/audio/page_036/004.mp3": "b3efe15824d8d99f8dbb4d21b30d9aa1",
"assets/assets/audio/page_036/006.mp3": "09671fb7c7357e4501a0845d0b6ee130",
"assets/assets/audio/page_036/007.mp3": "9f43457a68c0dbd154ebf24f6cf3b291",
"assets/assets/audio/page_036/008.mp3": "773f7b5e6cd188636ecb885995cd9763",
"assets/assets/audio/page_036/009.mp3": "3fc96a1595d6bb88a2f73b265b90db0f",
"assets/assets/audio/page_036/010.mp3": "b7703e4dd7fef42c962de69bd70528ac",
"assets/assets/audio/page_036/011.mp3": "9c475d5f1e77bc93973c4d7adfc99b79",
"assets/assets/audio/page_036/012.mp3": "be87a3caf1056bf096b8cf82198cbc74",
"assets/assets/audio/page_036/013.mp3": "40c677ae6509884bcfdabfa4898a3548",
"assets/assets/audio/page_036/014.mp3": "4593945cfe7f12c250ff121e50b2d02e",
"assets/assets/audio/page_036/015.mp3": "761806cfcbf16232b5462a9913226710",
"assets/assets/audio/page_036/016.mp3": "2764ff983e7c3157e163fc87f2bb468f",
"assets/assets/audio/page_036/017.mp3": "0bf389cb5a87898fb2c26831a7553817",
"assets/assets/audio/page_036/018.mp3": "a891ac60efa65afd66e2de8f1f58d6b7",
"assets/assets/audio/page_036/019.mp3": "784627c413338ff9a97f70a009b98c21",
"assets/assets/audio/page_036/020.mp3": "3cd1deea0a2ee0a464a27646fff4ffcf",
"assets/assets/audio/page_036/021.mp3": "0f08ecced77b193deb89691cede206a9",
"assets/assets/audio/page_036/022.mp3": "4707ac00c32b0c088369563d9aee2896",
"assets/assets/audio/page_036/023.mp3": "dac2666bda8f066eb90e9ea3c91ca9be",
"assets/assets/audio/page_036/024.mp3": "00fa63686be425660a2b63f875986b48",
"assets/assets/audio/page_036/025.mp3": "169d538f273c0a713da5da690bceb33e",
"assets/assets/audio/page_036/026.mp3": "0af49b4ac633e8b15be5001e6322f44f",
"assets/assets/audio/page_036/027.mp3": "ed52cfdcfc7372de41f582fa59dce735",
"assets/assets/audio/page_036/028.mp3": "73f672371997f32b1fe7856e462242e0",
"assets/assets/audio/page_036/029.mp3": "953784287732c0e8129c7128b1916b0b",
"assets/assets/audio/page_036/030.mp3": "e61e07394db2c8d6de7cc656ab529fc8",
"assets/assets/audio/page_036/031.mp3": "b0a36429032466194521e39e771ca91a",
"assets/assets/audio/page_036/032.mp3": "a40ed3320f13af8492b5918c635cc7e7",
"assets/assets/audio/page_036/033.mp3": "f619e23ea5985c333f3acf1f19db788a",
"assets/assets/audio/page_036/034.mp3": "1f2e2c66bb3ea17ba27a476c5100e0e3",
"assets/assets/audio/page_036/035.mp3": "45919929f5e0857b7e3694dc00979f0d",
"assets/assets/audio/page_036/036.mp3": "979810d940dff3d122aad769922d9bb2",
"assets/assets/audio/page_036/037.mp3": "f8f33c38285e81abecf1a6e0322ad834",
"assets/assets/audio/page_036/038.mp3": "3bc572c66647b4c6a8a6898bdebb5052",
"assets/assets/audio/page_036/039.mp3": "b5208052c3a6fc978333babb6a443396",
"assets/assets/audio/page_036/040.mp3": "b4ace6bc443bd871eba0c0622253d065",
"assets/assets/audio/page_036/041.mp3": "e14360c73153358c0a0a2848d6acf2c3",
"assets/assets/audio/page_036/042.mp3": "b01ba718eae87cf37d419ae6a5e4687d",
"assets/assets/audio/page_036/043.mp3": "8e53524597535a4d394ac9a479f3d458",
"assets/assets/audio/page_036/044.mp3": "10710e54f4618676fcafdf91f7ca4d01",
"assets/assets/audio/page_037/001.mp3": "06970f2964375becc8210755834d1b86",
"assets/assets/audio/page_037/002.mp3": "8ee67542f42cf21240067f27083c8336",
"assets/assets/audio/page_037/003.mp3": "4056628d20ca17ebadb7a9ad245ed2c5",
"assets/assets/audio/page_037/004.mp3": "d9ced5d9f701de85f818fb313d7a73b9",
"assets/assets/audio/page_037/005.mp3": "2caafa0bf646001a9753277645c2d956",
"assets/assets/audio/page_037/006.mp3": "0e08458ef3976dfc4d483ba9d64f40a4",
"assets/assets/audio/page_037/007.mp3": "65f7c09a7d9f18ff737525ffcd81de74",
"assets/assets/audio/page_037/008.mp3": "d9ced5d9f701de85f818fb313d7a73b9",
"assets/assets/audio/page_037/009.mp3": "5d86297b1c718d847f4e10abd7197480",
"assets/assets/audio/page_037/010.mp3": "c4aa0b5e1235bac8debff03eef37e40e",
"assets/assets/audio/page_037/011.mp3": "a4e1fd0d6c9a3eb5e5fed44d7076f09c",
"assets/assets/audio/page_037/012.mp3": "586a4cad9f7d250e6a6f05d4f90ccb04",
"assets/assets/audio/page_037/013.mp3": "aca99b5a5a2d5111276e7b04aeb6878f",
"assets/assets/audio/page_038/001.mp3": "b4328e4287a9770c18d218083e849262",
"assets/assets/audio/page_038/002.mp3": "35812a0727969154859a40c9f88738aa",
"assets/assets/audio/page_038/003.mp3": "7498929a7d02a38dbdf0e1eddddb5172",
"assets/assets/audio/page_038/004.mp3": "2a10520c16e4a9deeba44faf9ffaf194",
"assets/assets/audio/page_038/005.mp3": "44e902e18c566cc7652ac5549732deb0",
"assets/assets/audio/page_038/006.mp3": "5002b9bcaeba67f77d5f0613f7b22639",
"assets/assets/audio/page_038/007.mp3": "100f45b0d83da7be529d49aef30cab85",
"assets/assets/fonts/NotoSerifEthiopic.ttf": "558a1890e79492aade059aff90fcaf15",
"assets/assets/fonts/NotoSansEthiopic.ttf": "78062808997e67a778951853607f8c40",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "bb2a9df73c0e150d3e887fde6f6eb51f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "e88bd2bc4c99d29da1930296b9ad90ff",
"assets/AssetManifest.bin.json": "65b0b7cfd484c2e107aab5bb6428362a",
"assets/AssetManifest.bin": "a95ca20da3b0246f9a375795c0ef0695",
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
