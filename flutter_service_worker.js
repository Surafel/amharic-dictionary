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
"flutter_bootstrap.js": "038ead400a212a427bb10930a05d7068",
"index.html": "8bd68e2abc32550317db5408899eb44f",
"/": "8bd68e2abc32550317db5408899eb44f",
"main.dart.js": "fbfd706acd142e620e84f6069986d2fd",
"version.json": "923163ceecd4bde2fadfd1990299b0d0",
"assets/assets/dictionary/page_033.json": "a031087f93e236931f0d9bf63a1bcfa8",
"assets/assets/dictionary/page_034.json": "cc8216b1f352f4de60ff5327ddc3f1f0",
"assets/assets/dictionary/page_036.json": "17e75c0049401a860b306601c2ec6d60",
"assets/assets/dictionary/page_035.json": "f44a78402ba3d2604af4b0b9efb4d054",
"assets/assets/dictionary/page_037.json": "4baea71f6c4c24e5c79aba9d6a3dc227",
"assets/assets/dictionary/page_038.json": "9302404aa347899083e1e4e4b5bf0a89",
"assets/assets/dictionary/page_039.json": "cc35f7a44fc25e25405fa14f83a15f8c",
"assets/assets/dictionary/page_041.json": "980bf23fe0fd3c0d8804e2455e3bcce9",
"assets/assets/dictionary/page_042.json": "e2b26bf8eac5adf8562e04fe5539e03a",
"assets/assets/dictionary/page_040.json": "30e894d681cc9405760828c3d00baf9a",
"assets/assets/dictionary/page_043.json": "d54b9c0e68c332bc64a09a9eff3e9192",
"assets/assets/dictionary/page_044.json": "97af886ded54dd08585a8cd7010c11af",
"assets/assets/dictionary/page_045.json": "d1baa45312d916aa289b04d153421c25",
"assets/assets/dictionary/page_046.json": "0b7af890f26d01e939a401d3f667c6f8",
"assets/assets/dictionary/page_047.json": "ff4952889fca9c2f2e09ab408dc32802",
"assets/assets/dictionary/page_050.json": "e1a061c1b1f853aef7bbbeb65c98df81",
"assets/assets/dictionary/page_048.json": "849161f5417e0fe54254d98e3bc7f1a1",
"assets/assets/dictionary/page_049.json": "9f42c389b3f24803635beb89d7869af3",
"assets/assets/dictionary/page_052.json": "a0a531b4d963405126866c0997031ab8",
"assets/assets/dictionary/page_054.json": "522ce3cd1412950d040ca998091c4bde",
"assets/assets/dictionary/page_051.json": "4048836f5f768ec438c7851a05354e7d",
"assets/assets/dictionary/page_053.json": "9fcf6d565a01dba0dc264f192ff62266",
"assets/assets/dictionary/page_055.json": "00a7cf61e75200bfed4361735dc67584",
"assets/assets/dictionary/page_056.json": "b024c5c68cece46a30409702e0775502",
"assets/assets/dictionary/page_057.json": "00447329932a84af3fe176a1a0fc94b0",
"assets/assets/dictionary/page_058.json": "ea4bdb6de8374aaa791fa4b3b9ab93dd",
"assets/assets/dictionary/page_059.json": "cb9ac35c58be4c71d50cb1d454fbb72c",
"assets/assets/dictionary/page_060.json": "126f2050553a199d028a49dad1a4c6b4",
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
"assets/assets/audio/page_039/001.mp3": "e57d0082a3112830eb1dc1115b2f683b",
"assets/assets/audio/page_039/002.mp3": "4da88e7b5a5e394951675caf9a8d58c2",
"assets/assets/audio/page_039/003.mp3": "2477f18942fe4e833d63efad6c84df2c",
"assets/assets/audio/page_039/004.mp3": "51103e69d7902d810fa57470b9a1fd45",
"assets/assets/audio/page_039/005.mp3": "51103e69d7902d810fa57470b9a1fd45",
"assets/assets/audio/page_039/006.mp3": "51103e69d7902d810fa57470b9a1fd45",
"assets/assets/audio/page_039/007.mp3": "2c30eda14b89f3f36aeed1f6d6af1f6a",
"assets/assets/audio/page_039/008.mp3": "37296742f8cf41eb97ecee8ebbca4332",
"assets/assets/audio/page_039/009.mp3": "23bb94d047d92048ce10a47cea9a666e",
"assets/assets/audio/page_039/010.mp3": "41ec58609d839a3bb710588a93da4b94",
"assets/assets/audio/page_039/011.mp3": "6cb7906ddff5a66085f8cf60e2fb5c30",
"assets/assets/audio/page_039/012.mp3": "8b5369a8534df34a1d06b8cf297e6a76",
"assets/assets/audio/page_039/013.mp3": "e44bc706e56fb6e6f54a24d569ed270b",
"assets/assets/audio/page_039/014.mp3": "b09a543412f165befba3088541172d75",
"assets/assets/audio/page_040/001.mp3": "f011367b734c7e74a59403cebaa8f22d",
"assets/assets/audio/page_040/002.mp3": "ba371fb8bf37075bc43c62550bec137a",
"assets/assets/audio/page_040/003.mp3": "7a6c05fa0174d297dd9f4ca182d91256",
"assets/assets/audio/page_040/004.mp3": "ab7eb827e45c875a377b3c313080da81",
"assets/assets/audio/page_040/005.mp3": "15f43eb3f5bae4a4c97e17c833905352",
"assets/assets/audio/page_040/006.mp3": "f7ac05fe0fa2f31cdace7a5245c66f30",
"assets/assets/audio/page_040/007.mp3": "4f14112f92b9bd01b89696e1eda53668",
"assets/assets/audio/page_040/008.mp3": "4d77563791c4d08ba15e94c5a78a51fc",
"assets/assets/audio/page_040/009.mp3": "92302066cd5a4bcb8555f05cd625b9d2",
"assets/assets/audio/page_040/010.mp3": "e11424fb0539283bc47edb62a88a9bc8",
"assets/assets/audio/page_040/011.mp3": "e27b45fcd93b517ae5a185eb86bb8a0a",
"assets/assets/audio/page_040/012.mp3": "62d6490a42b4787c4aeb1d11fb6fd6f8",
"assets/assets/audio/page_040/013.mp3": "fb6d19cbf03a35bdc0bcdc7e5c94bc65",
"assets/assets/audio/page_040/014.mp3": "33b9c50ecd5272bb0c5de8a20c8333cc",
"assets/assets/audio/page_040/015.mp3": "cbe2c4ae67f8f721608309f7896e3238",
"assets/assets/audio/page_040/016.mp3": "3730ed601b4d77fffb0280efb3d6a781",
"assets/assets/audio/page_041/001.mp3": "95dc4df5a014a3247d58a10fda273a72",
"assets/assets/audio/page_041/002.mp3": "6dc5c08ca478b44bcfd69d7cdb3c2759",
"assets/assets/audio/page_041/003.mp3": "a6954c3ccec87010cdbe5ffe51de71ce",
"assets/assets/audio/page_041/004.mp3": "d52315bb1cfbf3aff2bc39b607583913",
"assets/assets/audio/page_041/005.mp3": "1ae607874ef21931079d420ea2948e75",
"assets/assets/audio/page_041/006.mp3": "629a82ed1b5fbb305ae0c60ca2a095c6",
"assets/assets/audio/page_041/007.mp3": "d2f188b44e491a94482f0fd75c1a517e",
"assets/assets/audio/page_041/008.mp3": "edd722ee74cf03162180a95188aabd8f",
"assets/assets/audio/page_041/009.mp3": "7fa49d52c7bbf21e0db69241c5a9e399",
"assets/assets/audio/page_041/010.mp3": "1ed53c754d377408dea0de7cf8a9ada9",
"assets/assets/audio/page_041/011.mp3": "b29ebac3b6cc4a0007e123eb0357eb20",
"assets/assets/audio/page_041/012.mp3": "9e3f3e31e3260cb1ad3389a227ea7b7b",
"assets/assets/audio/page_041/013.mp3": "60765ba37bd3480598983ccc589c4e64",
"assets/assets/audio/page_042/001.mp3": "ff59fcdba5af1749fab7c3e6ee9ce1b3",
"assets/assets/audio/page_042/002.mp3": "efb158ab9e87bedac37d7cff63486e2d",
"assets/assets/audio/page_042/003.mp3": "eaf7a35421d2798bdeeb81037bb8be52",
"assets/assets/audio/page_042/004.mp3": "2b7a76a0e01185fb7300fbeec1b6718d",
"assets/assets/audio/page_042/005.mp3": "a806facda1dcfbfb9cac50634cbf3efb",
"assets/assets/audio/page_042/006.mp3": "238b6ecc2311fb5384ece331875e4e3f",
"assets/assets/audio/page_042/007.mp3": "e2504aff129530fa4ead784af04d47f2",
"assets/assets/audio/page_042/008.mp3": "4ebc9cb0fc5507484dfa804835f9b84c",
"assets/assets/audio/page_042/009.mp3": "15aaecd0c3d00368440535010e4e7760",
"assets/assets/audio/page_042/010.mp3": "517ae43100f95904e0245239aa49f543",
"assets/assets/audio/page_042/011.mp3": "51b05cca5f39e366a6366ebdb4ef0be8",
"assets/assets/audio/page_042/012.mp3": "00243c9f7884679eddb890c5f4a636d7",
"assets/assets/audio/page_043/001.mp3": "dd68c6cc927d91db1b7eec16efa2c5b1",
"assets/assets/audio/page_043/002.mp3": "eba4fb2792764dea7d2b6c3132461d28",
"assets/assets/audio/page_043/003.mp3": "8e12c36139f04ed2923ff5adf84272c5",
"assets/assets/audio/page_043/004.mp3": "caf8ee4855a8bb2e44f2cf040b83feae",
"assets/assets/audio/page_043/005.mp3": "6e753f7753a7f8e72bb0382699f6cc95",
"assets/assets/audio/page_043/006.mp3": "9692c0e2951fed4b38bb291095b6e352",
"assets/assets/audio/page_043/007.mp3": "835f00ff1b15ef737da013d47a1e7f47",
"assets/assets/audio/page_043/008.mp3": "4ac721776850a85f6c1223d22e56f2b3",
"assets/assets/audio/page_043/009.mp3": "6e81ec2870dd331fa15dada0fa5deead",
"assets/assets/audio/page_043/010.mp3": "1765911963c158494f24fe41daab16ac",
"assets/assets/audio/page_043/011.mp3": "a6da78bf629b7f9d98be3f32dcf219e9",
"assets/assets/audio/page_043/012.mp3": "aa17db30aa1f5c547c1e85dad2d0d167",
"assets/assets/audio/page_043/013.mp3": "e6f4fddaedb2403e7a6bcf236fe12fae",
"assets/assets/audio/page_044/001.mp3": "bed57179cab298d4647ecc1fe65fd0ae",
"assets/assets/audio/page_044/002.mp3": "1538e4a7c0f470b506337ed340aaa2a4",
"assets/assets/audio/page_044/003.mp3": "fe47725acd8ed7165388306169c5bbf2",
"assets/assets/audio/page_044/004.mp3": "27155d8618831bc16c4175233c367950",
"assets/assets/audio/page_044/005.mp3": "f7100dc3e8a0c6083753fe3cecc29490",
"assets/assets/audio/page_044/006.mp3": "2223c21600b2997a42cec7156cca947f",
"assets/assets/audio/page_044/007.mp3": "6548c03d13e5ccdbbb27d4874bcb51d8",
"assets/assets/audio/page_045/001.mp3": "68a048050829ba98ef2d221027c4724c",
"assets/assets/audio/page_045/002.mp3": "16a2f64ecdd6a290d724a1e5279ff640",
"assets/assets/audio/page_045/003.mp3": "b80508a5b23ca4d6a94ab9d2a03d6b40",
"assets/assets/audio/page_045/004.mp3": "e6546c52cbf02db9f737a872f8ddb42b",
"assets/assets/audio/page_046/001.mp3": "04a4004459e2eaac35f4e4a515cc473d",
"assets/assets/audio/page_046/002.mp3": "4b9e7d79f5456debc73ed5837f4cf464",
"assets/assets/audio/page_046/003.mp3": "a24390673acb9d5609d5cfc27e36c861",
"assets/assets/audio/page_046/004.mp3": "604b440c063cfa17d404c2fc4df93aee",
"assets/assets/audio/page_046/005.mp3": "a491f23250d25d9daec6f7df01a9103d",
"assets/assets/audio/page_047/001.mp3": "2d6307535ce41f72abcae759e2263d43",
"assets/assets/audio/page_047/002.mp3": "5bdfce30b4a64a00cf372be01fd0fab8",
"assets/assets/audio/page_047/003.mp3": "d7880107cff5429bbb46dcfb715f73a7",
"assets/assets/audio/page_047/004.mp3": "e37d88daa35fa161e31ae89cb94a5e92",
"assets/assets/audio/page_047/005.mp3": "69321dfe3b8f08cb986ae164e5c225a7",
"assets/assets/audio/page_047/006.mp3": "ba24b0fe1a0469c904c7b261a584dcb1",
"assets/assets/audio/page_047/007.mp3": "fb172e92c5a84d82b23190d70633ceab",
"assets/assets/audio/page_048/001.mp3": "f2824e6f105fa46a0b8d8ad0ae88b839",
"assets/assets/audio/page_048/002.mp3": "5cf282d7dceb3c0f3a203bab6cf6c832",
"assets/assets/audio/page_048/003.mp3": "32a08e45f7fac508e8b61691afbca2d7",
"assets/assets/audio/page_048/004.mp3": "16f7d4b94f575f36c298376c1772ab38",
"assets/assets/audio/page_048/005.mp3": "e85161b1cd61a034c34563fbbe5e8ac7",
"assets/assets/audio/page_048/006.mp3": "147be0373ffaa26849cbb74ac1ee687f",
"assets/assets/audio/page_049/001.mp3": "9b17ab17cfb40078c0e5dc11d5a3c48e",
"assets/assets/audio/page_049/002.mp3": "ddb51a350ebb13e22a9d4414a886a52e",
"assets/assets/audio/page_049/003.mp3": "4172d7749d30db7fb3017d2d8266978d",
"assets/assets/audio/page_049/004.mp3": "15f9dc2496de8780da6621e10fcf14a1",
"assets/assets/audio/page_049/005.mp3": "28569ce08649c0b620723220d34cf3ba",
"assets/assets/audio/page_049/006.mp3": "16e4ee087e818d4e12bc4251f648348e",
"assets/assets/audio/page_049/007.mp3": "09387896914093ae97c9a58a060a50dc",
"assets/assets/audio/page_049/008.mp3": "d010fbc1a8405745c30ce38548e64acc",
"assets/assets/audio/page_050/001.mp3": "012b218002febda1337ddf9af69fc576",
"assets/assets/audio/page_050/002.mp3": "90bf530d9a0e7da3499543691e04c354",
"assets/assets/audio/page_050/003.mp3": "ef066538c93d3556cb191093858ba41f",
"assets/assets/audio/page_050/004.mp3": "c4722a6a80eac77434765ac3ac5fa58d",
"assets/assets/audio/page_050/005.mp3": "20ea1ceb058239ca27396fe2280b22ec",
"assets/assets/audio/page_050/006.mp3": "f9d600ff8f83abdfde06646fcb4ae348",
"assets/assets/audio/page_051/001.mp3": "21d812faeed8478fc0cc54d5b0337601",
"assets/assets/audio/page_051/002.mp3": "12feeb2e0e2b122ffdffc26dfc1983a1",
"assets/assets/audio/page_051/003.mp3": "55a6b69a814b20b0dd4974b2fd051e31",
"assets/assets/audio/page_051/004.mp3": "9e10f24bb481ff2c6e03560f9cd4278b",
"assets/assets/audio/page_051/005.mp3": "783c4bb4820a2127113eac2098d5896d",
"assets/assets/audio/page_052/001.mp3": "fedaf3c4b673489d148739e38fcfa769",
"assets/assets/audio/page_052/002.mp3": "07d982434502a43d8e9868310c4552c3",
"assets/assets/audio/page_052/003.mp3": "3e29c0d0addc2ab35c35e727f448a37e",
"assets/assets/audio/page_052/004.mp3": "f0f0b8d6a093905f190a7020093999a4",
"assets/assets/audio/page_052/005.mp3": "d214754c38672ef5ae75a2160c45a369",
"assets/assets/audio/page_052/006.mp3": "6cee9ca00de80171f52a330d14afaa5e",
"assets/assets/audio/page_052/007.mp3": "c145c77f185e572f118f8b564f65e45b",
"assets/assets/audio/page_053/001.mp3": "3a8bb520e139461c434e02180e50f1fa",
"assets/assets/audio/page_053/002.mp3": "cd726b0d6a67c99eafe5443a55936fbb",
"assets/assets/audio/page_054/001.mp3": "e96eaa6a96aaef5af0dc341c6de77f3e",
"assets/assets/audio/page_054/002.mp3": "901c14421c19efdc8b7b8f1c39e7d35f",
"assets/assets/audio/page_054/003.mp3": "6994f1500e6ce05440247f6e4f3cb268",
"assets/assets/audio/page_054/004.mp3": "ca464c3bc687fee587fcf159bd1943ec",
"assets/assets/audio/page_054/005.mp3": "3b734deff323d66fb9e0ae65fc17aec2",
"assets/assets/audio/page_055/001.mp3": "c3d5d222291d204825d6d8edb3081921",
"assets/assets/audio/page_055/002.mp3": "b026bc4ea141b6eb1adffd4170881e1d",
"assets/assets/audio/page_055/003.mp3": "b4ccaca1b3cfebfb94e292b3c0e4e28c",
"assets/assets/audio/page_055/004.mp3": "77cd03d32786fac7f9eb11086ea11016",
"assets/assets/audio/page_055/005.mp3": "b81f91b69577a1e75c052764ea6bc044",
"assets/assets/audio/page_055/006.mp3": "a083b2a237997b4f50eaf44bc975385f",
"assets/assets/audio/page_056/001.mp3": "be07815c44ada102ae2f32b6cb4fc08c",
"assets/assets/audio/page_056/002.mp3": "af439d790ed906fdbd9d2458d507a411",
"assets/assets/audio/page_056/003.mp3": "c0ff94b7f2273c6c88c2521b82d5bb0b",
"assets/assets/audio/page_056/004.mp3": "fd6ed9ee2596f2f0c6290ff0280f43e6",
"assets/assets/audio/page_056/005.mp3": "ed28fd53bf59db8c036a81086355fa85",
"assets/assets/audio/page_056/006.mp3": "0bd3b397fa4bd0ac3b927d70981ae47d",
"assets/assets/audio/page_057/001.mp3": "aa4e6f244a62369a78da833969d48ce9",
"assets/assets/audio/page_057/002.mp3": "7e1754c45eb39683f3675daa96ab4d7f",
"assets/assets/audio/page_057/003.mp3": "8aa3eb199c01a549914eac21f3ae6710",
"assets/assets/audio/page_057/004.mp3": "bc87100bd74da83bd60f74aa44648573",
"assets/assets/audio/page_057/005.mp3": "b0a3b97d29368615d16b006e92afb1ec",
"assets/assets/audio/page_057/006.mp3": "6b3555f960036216951e01581292c901",
"assets/assets/audio/page_058/001.mp3": "70e7dfd03d4db6d4b354a0c2582133ad",
"assets/assets/audio/page_058/002.mp3": "ac751a9023f46638136623a7efd9b341",
"assets/assets/audio/page_058/003.mp3": "fe67224babad614510b7839086e1f864",
"assets/assets/audio/page_058/004.mp3": "0f13c0d4ef47ffad6688a1130cbd8f0b",
"assets/assets/audio/page_058/005.mp3": "4c8fded171f9264f5ed874b4c4d1129d",
"assets/assets/audio/page_059/001.mp3": "be4a35410f9d07e9fdd31fa900cc02ff",
"assets/assets/audio/page_059/002.mp3": "18c46d1146fdb3c0554d88ca13233650",
"assets/assets/audio/page_059/003.mp3": "683819c24e6edef58ba4e3a5c13b449e",
"assets/assets/audio/page_059/004.mp3": "93f87ba460df398d464a92a86744f6fd",
"assets/assets/audio/page_059/005.mp3": "3d026845bd646032fbc8c665e0fea984",
"assets/assets/audio/page_060/001.mp3": "572d01892d5fe68919d68c8a2c0550a6",
"assets/assets/audio/page_060/002.mp3": "7ca473cbcb95409d2429cb31c2a3eead",
"assets/assets/audio/page_060/003.mp3": "eb95a000d690f041232591b1975f2543",
"assets/assets/audio/page_060/004.mp3": "b4312f45907e3ca86eefde903c0534ad",
"assets/assets/audio/page_060/005.mp3": "ef255f41af9dba1e4d861766a917ed86",
"assets/assets/audio/page_060/006.mp3": "624d7065b4ed18740d3f3a219ac2c4cb",
"assets/assets/fonts/NotoSerifEthiopic.ttf": "558a1890e79492aade059aff90fcaf15",
"assets/assets/fonts/NotoSansEthiopic.ttf": "78062808997e67a778951853607f8c40",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "bb2a9df73c0e150d3e887fde6f6eb51f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "e2035983d1a5050d8494086fc222754a",
"assets/AssetManifest.bin.json": "61769e14a9f6bde2c75c22ef7367ec26",
"assets/AssetManifest.bin": "80b02f2c7eb8acb723577adb5246cc81",
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
