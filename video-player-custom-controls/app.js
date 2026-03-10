/*
╔═════════════════════════════════════════════════╗
║  NoMercy Video Player — App Logic               ║
║  The player is headless.                        ║
║  This file gave it a face.                      ║
║                                                 ║
║  CDN → jsdelivr.net/npm/                        ║
║    @nomercy-entertainment/nomercy-video-play    ║
║    @latest/dist/nomercy-video-player.iife.js    ║
╚═════════════════════════════════════════════════╝
*/

// ── SVG icon paths (Fluent UI 24px) ──────────────────────────────────────────
const ICONS = {
	play: 'M5 5.27466C5 3.5678 6.82609 2.48249 8.32538 3.29828L20.687 10.0244C22.2531 10.8766 22.2531 13.125 20.687 13.9772L8.32538 20.7033C6.82609 21.5191 5 20.4338 5 18.727V5.27466Z',
	pause: 'M5.74609 3C4.7796 3 3.99609 3.7835 3.99609 4.75V19.25C3.99609 20.2165 4.7796 21 5.74609 21H9.24609C10.2126 21 10.9961 20.2165 10.9961 19.25V4.75C10.9961 3.7835 10.2126 3 9.24609 3H5.74609ZM14.7461 3C13.7796 3 12.9961 3.7835 12.9961 4.75V19.25C12.9961 20.2165 13.7796 21 14.7461 21H18.2461C19.2126 21 19.9961 20.2165 19.9961 19.25V4.75C19.9961 3.7835 19.2126 3 18.2461 3H14.7461Z',
	seekBack: 'M3 2.25C2.44772 2.25 2 2.69772 2 3.25V9C2 9.55228 2.44772 10 3 10H8.25C8.80228 10 9.25 9.55228 9.25 9C9.25 8.44772 8.80228 8 8.25 8H4.86322C5.84764 6.82148 7.07149 5.88667 8.54543 5.43056C10.5599 4.80719 12.6883 4.86076 14.6512 5.5909C16.6322 6.3278 18.4615 7.82215 19.373 9.48443C19.6385 9.96869 20.2463 10.146 20.7306 9.88048C21.2149 9.61495 21.3922 9.00712 21.1267 8.52286C19.9517 6.38003 17.7122 4.59567 15.3485 3.71639C12.9665 2.83033 10.3848 2.76779 7.9542 3.51995C6.37802 4.00769 5.0679 4.8994 4 5.97875V3.25C4 2.69772 3.55228 2.25 3 2.25ZM9.75015 12C9.75015 11.5806 9.48843 11.2057 9.0947 11.0612C8.70097 10.9167 8.2589 11.0333 7.98758 11.3531C7.91356 11.4403 7.84033 11.5288 7.76611 11.6185C7.25079 12.2412 6.68817 12.921 5.48566 13.6425C5.01208 13.9266 4.85851 14.5409 5.14266 15.0145C5.42681 15.4881 6.04107 15.6416 6.51465 15.3575C6.9978 15.0676 7.40387 14.7762 7.75015 14.4929V19.9998C7.75015 20.5521 8.19795 20.9998 8.75028 20.9998C9.30252 20.9997 9.75015 20.552 9.75015 19.9998V12ZM16.25 11C14.8639 11 13.8505 11.6354 13.2417 12.6611C12.678 13.6107 12.5 14.8223 12.5 16C12.5 17.1777 12.678 18.3893 13.2417 19.3389C13.8505 20.3646 14.8639 21 16.25 21C17.6361 21 18.6495 20.3646 19.2583 19.3389C19.822 18.3893 20 17.1777 20 16C20 14.8223 19.822 13.6107 19.2583 12.6611C18.6495 11.6354 17.6361 11 16.25 11ZM14.5 16C14.5 14.9686 14.6658 14.1802 14.9615 13.682C15.212 13.26 15.5736 13 16.25 13C16.9264 13 17.288 13.26 17.5385 13.682C17.8342 14.1802 18 14.9686 18 16C18 17.0314 17.8342 17.8198 17.5385 18.318C17.288 18.74 16.9264 19 16.25 19C15.5736 19 15.212 18.74 14.9615 18.318C14.6658 17.8198 14.5 17.0314 14.5 16Z',
	seekFwd: 'M21 2.25C21.5523 2.25 22 2.69772 22 3.25001V9.00005C22 9.55234 21.5523 10.0001 21 10.0001H15.75C15.1977 10.0001 14.75 9.55234 14.75 9.00005C14.75 8.44777 15.1977 8.00005 15.75 8.00005H19.1369C18.1525 6.82145 16.9286 5.88657 15.4546 5.43043C13.4401 4.80706 11.3117 4.86063 9.34883 5.59077C7.3678 6.32768 5.53848 7.82204 4.62703 9.48433C4.3615 9.9686 3.75367 10.1459 3.2694 9.88039C2.78514 9.61486 2.60782 9.00703 2.87335 8.52276C4.04829 6.37991 6.28776 4.59554 8.65155 3.71625C11.0335 2.83019 13.6152 2.76764 16.0458 3.51981C17.622 4.00755 18.9321 4.89926 20 5.97863V3.25001C20 2.69772 20.4477 2.25 21 2.25ZM9.0947 11.0611C9.48843 11.2056 9.75015 11.5805 9.75015 11.9999V19.9998C9.75015 20.552 9.30252 20.9997 8.75028 20.9998C8.19795 20.9998 7.75015 20.5521 7.75015 19.9998V14.4929C7.40387 14.7762 6.9978 15.0675 6.51465 15.3574C6.04107 15.6416 5.42681 15.488 5.14266 15.0144C4.85851 14.5409 5.01208 13.9266 5.48566 13.6424C6.68817 12.9209 7.25079 12.2411 7.76611 11.6184C7.84033 11.5288 7.91356 11.4403 7.98758 11.353C8.2589 11.0332 8.70097 10.9166 9.0947 11.0611ZM13.2417 12.6611C13.8505 11.6354 14.8639 10.9999 16.25 10.9999C17.6361 10.9999 18.6495 11.6354 19.2583 12.6611C19.822 13.6106 20 14.8222 20 16C20 17.1777 19.822 18.3893 19.2583 19.3389C18.6495 20.3645 17.6361 21 16.25 21C14.8639 21 13.8505 20.3645 13.2417 19.3389C12.678 18.3893 12.5 17.1777 12.5 16C12.5 14.8222 12.678 13.6106 13.2417 12.6611ZM14.9615 13.682C14.6658 14.1801 14.5 14.9686 14.5 16C14.5 17.0314 14.6658 17.8198 14.9615 18.318C15.212 18.74 15.5736 19 16.25 19C16.9264 19 17.288 18.74 17.5385 18.318C17.8342 17.8198 18 17.0314 18 16C18 14.9686 17.8342 14.1801 17.5385 13.682C17.288 13.2599 16.9264 12.9999 16.25 12.9999C15.5736 12.9999 15.212 13.2599 14.9615 13.682Z',
	volHigh: 'M15 4.25049V19.7461C15 20.8247 13.7255 21.397 12.9194 20.6802L8.42793 16.6865C8.29063 16.5644 8.11329 16.497 7.92956 16.497H4.25C3.00736 16.497 2 15.4896 2 14.247V9.74907C2 8.50643 3.00736 7.49907 4.25 7.49907H7.92961C8.11333 7.49907 8.29065 7.43165 8.42794 7.30958L12.9195 3.31631C13.7255 2.59964 15 3.17187 15 4.25049ZM18.9916 5.89782C19.3244 5.65128 19.7941 5.72126 20.0407 6.05411C21.2717 7.71619 22 9.77439 22 12.0005C22 14.2266 21.2717 16.2848 20.0407 17.9469C19.7941 18.2797 19.3244 18.3497 18.9916 18.1032C18.6587 17.8567 18.5888 17.387 18.8353 17.0541C19.8815 15.6416 20.5 13.8943 20.5 12.0005C20.5 10.1067 19.8815 8.35945 18.8353 6.9469C18.5888 6.61404 18.6587 6.14435 18.9916 5.89782ZM17.143 8.36982C17.5072 8.17262 17.9624 8.30806 18.1596 8.67233C18.6958 9.66294 19 10.7973 19 12.0005C19 13.2037 18.6958 14.338 18.1596 15.3287C17.9624 15.6929 17.5072 15.8284 17.143 15.6312C16.7787 15.434 16.6432 14.9788 16.8404 14.6146C17.2609 13.8378 17.5 12.9482 17.5 12.0005C17.5 11.0528 17.2609 10.1632 16.8404 9.38642C16.6432 9.02216 16.7787 8.56701 17.143 8.36982Z',
	volMuted: 'M15 4.25049C15 3.17187 13.7255 2.59964 12.9195 3.31631L8.42794 7.30958C8.29065 7.43165 8.11333 7.49907 7.92961 7.49907H4.25C3.00736 7.49907 2 8.50643 2 9.74907V14.247C2 15.4896 3.00736 16.497 4.25 16.497H7.92956C8.11329 16.497 8.29063 16.5644 8.42793 16.6865L12.9194 20.6802C13.7255 21.397 15 20.8247 15 19.7461V4.25049ZM16.2197 9.22016C16.5126 8.92727 16.9874 8.92727 17.2803 9.22016L19 10.9398L20.7197 9.22016C21.0126 8.92727 21.4874 8.92727 21.7803 9.22016C22.0732 9.51305 22.0732 9.98793 21.7803 10.2808L20.0607 12.0005L21.7803 13.7202C22.0732 14.0131 22.0732 14.4879 21.7803 14.7808C21.4874 15.0737 21.0126 15.0737 20.7197 14.7808L19 13.0611L17.2803 14.7808C16.9874 15.0737 16.5126 15.0737 16.2197 14.7808C15.9268 14.4879 15.9268 14.0131 16.2197 13.7202L17.9393 12.0005L16.2197 10.2808C15.9268 9.98793 15.9268 9.51305 16.2197 9.22016Z',
	fullscreen: 'M12.4958 3.00195L20.0515 3.00341L20.1724 3.01731L20.2601 3.03685L20.364 3.07133L20.4532 3.11166L20.5169 3.14728L20.5795 3.1888L20.6435 3.2387L20.7066 3.29703L20.801 3.40667L20.8726 3.51791L20.9261 3.63064L20.9615 3.73598L20.9771 3.80116L20.9863 3.85351L20.9973 4.00195V11.5058C20.9973 12.0581 20.5496 12.5058 19.9973 12.5058C19.4845 12.5058 19.0618 12.1198 19.004 11.6225L18.9973 11.5058L18.997 6.41595L6.41205 19L11.4996 19.0005C12.0124 19.0005 12.4351 19.3865 12.4928 19.8839L12.4996 20.0005C12.4996 20.5133 12.1135 20.936 11.6162 20.9938L11.4996 21.0005L3.93864 20.9987L3.84306 20.9885L3.76641 20.9735L3.68892 20.9517L3.61989 20.9265L3.5298 20.8843L3.44025 20.8306L3.34879 20.7611L3.3813 20.7877C3.31948 20.7392 3.26352 20.6836 3.21466 20.6221L3.16353 20.5517L3.12477 20.4882L3.09178 20.4237L3.05798 20.3423L3.03287 20.2627L3.00936 20.1509L3.00201 20.0897L2.99805 20.0005V12.4966C2.99805 11.9443 3.44576 11.4966 3.99805 11.4966C4.51088 11.4966 4.93355 11.8826 4.99132 12.38L4.99805 12.4966V17.585L17.582 5.00195H12.4958C11.9829 5.00195 11.5603 4.61591 11.5025 4.11857L11.4958 4.00195C11.4958 3.44967 11.9435 3.00195 12.4958 3.00195Z',
	exitFs: 'M21.7776 2.22205C22.0437 2.48828 22.0679 2.90495 21.8503 3.19858L21.7778 3.28271L15.555 9.50644L21.2476 9.50739C21.6273 9.50739 21.9411 9.78954 21.9908 10.1556L21.9976 10.2574C21.9976 10.6371 21.7155 10.9509 21.3494 11.0005L21.2476 11.0074L13.6973 11.005L13.6824 11.0038C13.6141 10.9986 13.5486 10.984 13.487 10.9614L13.3892 10.9159C13.1842 10.8058 13.037 10.6023 13.0034 10.3623L12.9961 10.2574V2.7535C12.9961 2.33929 13.3319 2.0035 13.7461 2.0035C14.1258 2.0035 14.4396 2.28565 14.4893 2.65173L14.4961 2.7535L14.496 8.44444L20.7178 2.22217C21.0104 1.92925 21.4849 1.92919 21.7776 2.22205ZM11.0025 13.7547V21.2586C11.0025 21.6728 10.6667 22.0086 10.2525 22.0086C9.8728 22.0086 9.55901 21.7265 9.50935 21.3604L9.5025 21.2586L9.502 15.5634L3.28039 21.7794C2.98753 22.0723 2.51266 22.0724 2.21973 21.7795C1.95343 21.5133 1.92918 21.0966 2.147 20.803L2.21961 20.7189L8.44 14.5044L2.75097 14.5047C2.37128 14.5047 2.05748 14.2226 2.00782 13.8565L2.00097 13.7547C2.00097 13.3405 2.33676 13.0047 2.75097 13.0047L10.3053 13.0066L10.3788 13.0153L10.4763 13.0387L10.5291 13.0574L10.6154 13.0982L10.7039 13.1557C10.7598 13.1979 10.8095 13.2477 10.8517 13.3035L10.9185 13.4095L10.9592 13.503L10.9806 13.5739L10.9919 13.6286L10.998 13.6864L10.9986 13.678L11.0025 13.7547Z',
	speed: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.8791 6.66732C16.1062 6.47297 16.439 6.46653 16.6734 6.65195C16.9078 6.83738 16.9781 7.16278 16.8412 7.42842L16.7119 7.67862C16.6295 7.83801 16.5113 8.06624 16.3681 8.34179C16.0818 8.89278 15.6954 9.63339 15.2955 10.3912C14.8959 11.1485 14.4815 11.9253 14.1395 12.5479C13.9686 12.8589 13.8142 13.1344 13.6879 13.3509C13.5703 13.5524 13.4548 13.7421 13.3688 13.8508C12.7263 14.6629 11.5471 14.8004 10.735 14.1579C9.92288 13.5154 9.78538 12.3362 10.4279 11.5241C10.5139 11.4154 10.672 11.2593 10.8409 11.0986C11.0226 10.9258 11.2552 10.7121 11.5185 10.4744C12.0457 9.9983 12.7063 9.41631 13.3514 8.85315C13.9969 8.28961 14.6288 7.74321 15.0991 7.33783C15.3343 7.1351 15.5292 6.96755 15.6654 6.85065L15.8791 6.66732ZM7.93413 17.1265C7.64124 17.4194 7.16637 17.4194 6.87347 17.1265C4.04217 14.2952 4.04217 9.70478 6.87347 6.87348C8.71833 5.02862 11.3099 4.38674 13.6723 4.94459C14.0755 5.03978 14.3251 5.44375 14.2299 5.84687C14.1347 6.25 13.7308 6.49963 13.3276 6.40444C11.45 5.96106 9.39622 6.47205 7.93413 7.93414C5.68862 10.1797 5.68862 13.8203 7.93413 16.0659C8.22703 16.3588 8.22703 16.8336 7.93413 17.1265ZM17.8879 9.1415C18.2789 9.00477 18.7067 9.21089 18.8435 9.60189C19.7333 12.1463 19.1624 15.0907 17.1265 17.1265C16.8336 17.4194 16.3588 17.4194 16.0659 17.1265C15.773 16.8336 15.773 16.3588 16.0659 16.0659C17.6791 14.4526 18.1344 12.1183 17.4276 10.097C17.2908 9.70604 17.4969 9.27824 17.8879 9.1415Z',
	quality: 'M14.5 14.5V9.5H14.75C15.7165 9.5 16.5 10.2835 16.5 11.25V12.75C16.5 13.7165 15.7165 14.5 14.75 14.5H14.5ZM5.25 3C3.45507 3 2 4.45507 2 6.25V17.75C2 19.5449 3.45507 21 5.25 21H18.75C20.5449 21 22 19.5449 22 17.75V6.25C22 4.45507 20.5449 3 18.75 3H5.25ZM7.25 8C7.66421 8 8 8.33579 8 8.75V11.5H10V8.75C10 8.33579 10.3358 8 10.75 8C11.1642 8 11.5 8.33579 11.5 8.75V15.25C11.5 15.6642 11.1642 16 10.75 16C10.3358 16 10 15.6642 10 15.25V13H8V15.25C8 15.6642 7.66421 16 7.25 16C6.83579 16 6.5 15.6642 6.5 15.25V8.75C6.5 8.33579 6.83579 8 7.25 8ZM13.75 8H14.75C16.5449 8 18 9.45507 18 11.25V12.75C18 14.5449 16.5449 16 14.75 16H13.75C13.3358 16 13 15.6642 13 15.25V8.75C13 8.33579 13.3358 8 13.75 8Z',
	subs: 'M18.75 4C20.5449 4 22 5.45507 22 7.25V16.7546C22 18.5495 20.5449 20.0046 18.75 20.0046H5.25C3.45507 20.0046 2 18.5495 2 16.7546V7.25C2 5.51697 3.35645 4.10075 5.06558 4.00514L5.25 4H18.75ZM18.75 5.5H5.25L5.10647 5.5058C4.20711 5.57881 3.5 6.33183 3.5 7.25V16.7546C3.5 17.7211 4.2835 18.5046 5.25 18.5046H18.75C19.7165 18.5046 20.5 17.7211 20.5 16.7546V7.25C20.5 6.2835 19.7165 5.5 18.75 5.5ZM5.5 12C5.5 8.85442 8.21322 7.22469 10.6216 8.59854C10.9814 8.80378 11.1067 9.26183 10.9015 9.62162C10.6962 9.98141 10.2382 10.1067 9.87838 9.90146C8.48071 9.10417 7 9.99357 7 12C7 14.0046 8.48411 14.8962 9.8792 14.1027C10.2392 13.8979 10.6971 14.0238 10.9019 14.3838C11.1067 14.7439 10.9809 15.2018 10.6208 15.4066C8.21539 16.7747 5.5 15.1433 5.5 12ZM13 12C13 8.85442 15.7132 7.22469 18.1216 8.59854C18.4814 8.80378 18.6067 9.26183 18.4015 9.62162C18.1962 9.98141 17.7382 10.1067 17.3784 9.90146C15.9807 9.10417 14.5 9.99357 14.5 12C14.5 14.0046 15.9841 14.8962 17.3792 14.1027C17.7392 13.8979 18.1971 14.0238 18.4019 14.3838C18.6067 14.7439 18.4809 15.2018 18.1208 15.4066C15.7154 16.7747 13 15.1433 13 12Z',
	audio: 'M11.9996 1.99805C17.5233 1.99805 22.0011 6.47589 22.0011 11.9996C22.0011 17.5233 17.5233 22.0011 11.9996 22.0011C6.47589 22.0011 1.99805 17.5233 1.99805 11.9996C1.99805 6.47589 6.47589 1.99805 11.9996 1.99805ZM14.9385 16.4993H9.06069C9.71273 18.9135 10.8461 20.5011 11.9996 20.5011C13.1531 20.5011 14.2865 18.9135 14.9385 16.4993ZM7.50791 16.4999L4.78542 16.4998C5.74376 18.0328 7.17721 19.2384 8.87959 19.9104C8.35731 19.0906 7.92632 18.0643 7.60932 16.8949L7.50791 16.4999ZM19.2138 16.4998L16.4913 16.4999C16.1675 17.8337 15.6999 18.9995 15.1185 19.9104C16.7155 19.2804 18.0752 18.1814 19.0286 16.7833L19.2138 16.4998ZM7.09302 9.99895H3.73542L3.73066 10.0162C3.57858 10.6525 3.49805 11.3166 3.49805 11.9996C3.49805 13.0558 3.69064 14.0669 4.04261 14.9999L7.21577 14.9995C7.07347 14.0504 6.99805 13.0422 6.99805 11.9996C6.99805 11.3156 7.03051 10.6464 7.09302 9.99895ZM15.3965 9.99901H8.60267C8.53465 10.6393 8.49805 11.309 8.49805 11.9996C8.49805 13.0591 8.58419 14.0694 8.73778 14.9997H15.2614C15.415 14.0694 15.5011 13.0591 15.5011 11.9996C15.5011 11.309 15.4645 10.6393 15.3965 9.99901ZM20.2642 9.99811L16.9062 9.99897C16.9687 10.6464 17.0011 11.3156 17.0011 11.9996C17.0011 13.0422 16.9257 14.0504 16.7834 14.9995L19.9566 14.9999C20.3086 14.0669 20.5011 13.0558 20.5011 11.9996C20.5011 11.3102 20.4191 10.64 20.2642 9.99811ZM8.88065 4.08875L8.85774 4.09747C6.81043 4.91218 5.15441 6.49949 4.24975 8.49935L7.29787 8.49972C7.61122 6.74693 8.15807 5.221 8.88065 4.08875ZM11.9996 3.49805L11.8839 3.50335C10.6185 3.6191 9.39603 5.62107 8.82831 8.4993H15.1709C14.6048 5.62914 13.3875 3.63033 12.1259 3.50436L11.9996 3.49805ZM15.1196 4.08881L15.2264 4.2629C15.8957 5.37537 16.4038 6.83525 16.7013 8.49972L19.7494 8.49935C18.8848 6.58795 17.3338 5.05341 15.4108 4.21008L15.1196 4.08881Z',
	prev: 'M4 4H6.5V20H4ZM20 19.2832C20 19.8521 19.3913 20.2139 18.8915 19.9419L7.53 13.2157C7.00789 12.9316 7.00789 12.182 7.53 11.8979L18.8915 5.17175C19.3913 4.89976 20 5.26152 20 5.83047V19.2832Z',
	next: 'M20 4H17.5V20H20ZM4 5.83047C4 5.26152 4.60871 4.89976 5.10847 5.17175L16.47 11.8979C16.9921 12.182 16.9921 12.9316 16.47 13.2157L5.10847 19.9419C4.60871 20.2139 4 19.8521 4 19.2832V5.83047Z',
};

function makeSVG(path) {
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="${path}"/></svg>`;
}
function makeSpeedBtn(rate) {
	return `<span class="speed-label">${rate}×</span>`;
}

function formatQualityLabel(raw) {
	if (!raw)
		return raw;
	const m = raw.match(/^(\d+)x(\d+)\s*/i);
	if (!m)
		return raw;
	const w = Number.parseInt(m[1]);
	const hdr = raw.replace(/^\d+x\d+\s*/i, '').trim();
	const res = w >= 7680 ? '8K' : w >= 3840 ? '4K' : w >= 2560 ? '1440p' : w >= 1920 ? '1080p' : w >= 1280 ? '720p' : w >= 720 ? '480p' : 'SD';
	return hdr ? `${res} · ${hdr}` : res;
}

function shortQualityLabel(raw) {
	if (!raw)
		return 'HD';
	const label = formatQualityLabel(raw);
	return label.split(' ·')[0] || 'HD';
}

// ── Config ─────────────────────────────────────────────────────────────
const BASE = 'https://raw.githubusercontent.com/NoMercy-Entertainment/media/master/Films/Films';
const IMG_BASE = 'https://image.tmdb.org/t/p/w780';

const config = {
	basePath: BASE,
	imageBasePath: IMG_BASE,
	muted: false,
	preload: 'auto',
	playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
	playlist: [
		{
			id: 'sintel',
			title: 'Sintel',
			description: 'Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org',
			image: '/q2bVM5z90tCGbmXYtq2J38T5hSX.jpg',
			file: '/Sintel.(2010)/Sintel.(2010).NoMercy.m3u8',
			duration: '14:48',
			// season: 1,
			episode: 1,
			year: 2010,
			rating: {
				rating: 6,
				image: 'NL/NL_6.svg',
			},
			tracks: [
				{
					id: 0,
					label: 'Dutch (Full)',
					file: '/Sintel.(2010)/subtitles/Sintel.(2010).NoMercy.dut.full.vtt',
					language: 'dut',
					kind: 'subtitles',
				},
				{
					id: 1,
					label: 'English (Full)',
					type: 'sdh',
					file: '/Sintel.(2010)/subtitles/Sintel.(2010).NoMercy.eng.full.vtt',
					language: 'eng',
					kind: 'subtitles',
				},
				{
					id: 2,
					label: 'French (Full)',
					file: '/Sintel.(2010)/subtitles/Sintel.(2010).NoMercy.fre.full.vtt',
					language: 'fre',
					kind: 'subtitles',
				},
				{
					id: 3,
					label: 'German (Full)',
					type: 'sdh',
					file: '/Sintel.(2010)/subtitles/Sintel.(2010).NoMercy.ger.full.vtt',
					language: 'ger',
					kind: 'subtitles',
				},
				{
					id: 4,
					label: 'Italian (Full)',
					file: '/Sintel.(2010)/subtitles/Sintel.(2010).NoMercy.ita.full.vtt',
					language: 'ita',
					kind: 'subtitles',
				},
				{
					id: 5,
					label: 'Russian (Full)',
					file: '/Sintel.(2010)/subtitles/Sintel.(2010).NoMercy.rus.full.vtt',
					language: 'rus',
					kind: 'subtitles',
				},
				{
					id: 6,
					label: 'German (Full)',
					file: '/Sintel.(2010)/subtitles/Sintel.(2010).NoMercy.ger.full.vtt',
					language: 'ger',
					kind: 'subtitles',
				},
				{
					id: 7,
					label: 'Portuguese (Full)',
					file: '/Sintel.(2010)/subtitles/Sintel.(2010).NoMercy.por.full.vtt',
					language: 'por',
					kind: 'subtitles',
				},
				{
					id: 8,
					label: 'Spanish (Full)',
					file: '/Sintel.(2010)/subtitles/Sintel.(2010).NoMercy.spa.full.vtt',
					language: 'spa',
					kind: 'subtitles',
				},
				{
					id: 9,
					label: 'Polish (Full)',
					file: '/Sintel.(2010)/subtitles/Sintel.(2010).NoMercy.pol.full.vtt',
					language: 'pol',
					kind: 'subtitles',
				},
				{
					id: 10,
					file: '/Sintel.(2010)/thumbs_256x109.vtt',
					kind: 'thumbnails',
				},
				{
					id: 11,
					file: '/Sintel.(2010)/chapters.vtt',
					kind: 'chapters',
				},
				{
					id: 12,
					file: '/Sintel.(2010)/thumbs_256x109.webp',
					kind: 'sprite',
				},
			],
		},
		{
			id: 'cosmos-laundromat',
			title: 'Cosmos Laundromat',
			description: 'On a desolate island, a suicidal sheep named Franck meets his fate…in the form of a quirky salesman named Victor, who offers him the gift of a lifetime. The gift is many lifetimes, actually, in many different worlds – each lasting just a few minutes. In the sequel to the pilot, Franck will find a new reason to live…in the form of a bewitching female adventurer named Tara, who awakens his long-lost lust for life. But can Franck keep up with her?',
			image: '/f2wABsgj2lIR2dkDEfBZX8p4Iyk.jpg',
			file: '/Cosmos.Laundromat.(2015)/Cosmos.Laundromat.(2015).NoMercy.m3u8',
			duration: '12:04',
			year: 2015,
			rating: {
				rating: 12,
				image: 'NL/NL_12.svg',
			},
			tracks: [
				{
					id: 0,
					label: 'Dutch (Full)',
					file: '/Cosmos.Laundromat.(2015)/subtitles/Cosmos.Laundromat.(2015).NoMercy.dut.full.vtt',
					language: 'dut',
					kind: 'subtitles',
				},
				{
					id: 1,
					label: 'English (Full)',
					type: 'sdh',
					file: '/Cosmos.Laundromat.(2015)/subtitles/Cosmos.Laundromat.(2015).NoMercy.eng.full.vtt',
					language: 'eng',
					kind: 'subtitles',
				},
				{
					id: 2,
					label: 'French (Full)',
					file: '/Cosmos.Laundromat.(2015)/subtitles/Cosmos.Laundromat.(2015).NoMercy.fre.full.vtt',
					language: 'fre',
					kind: 'subtitles',
				},
				{
					id: 3,
					label: 'Italian (Full)',
					file: '/Cosmos.Laundromat.(2015)/subtitles/Cosmos.Laundromat.(2015).NoMercy.ita.full.vtt',
					language: 'ita',
					kind: 'subtitles',
				},
				{
					id: 4,
					label: 'Brazilian Portuguese (Full)',
					file: '/Cosmos.Laundromat.(2015)/subtitles/Cosmos.Laundromat.(2015).NoMercy.pob.full.vtt',
					language: 'pob',
					kind: 'subtitles',
				},
				{
					id: 5,
					label: 'Spanish (Full)',
					file: '/Cosmos.Laundromat.(2015)/subtitles/Cosmos.Laundromat.(2015).NoMercy.spa.full.vtt',
					language: 'spa',
					kind: 'subtitles',
				},
				{
					id: 6,
					file: '/Cosmos.Laundromat.(2015)/thumbs_256x144.vtt',
					kind: 'thumbnails',
				},
				{
					id: 7,
					file: '/Cosmos.Laundromat.(2015)/chapters.vtt',
					kind: 'chapters',
				},
				{
					id: 8,
					file: '/Cosmos.Laundromat.(2015)/thumbs_256x144.webp',
					kind: 'sprite',
				},
			],
		},
		{
			id: 'big-buck-bunny',
			title: 'Big Buck Bunny',
			description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain\'t no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.',
			image: '/xtdybjRRZ15mCrPOvEld305myys.jpg',
			file: '/Big.Buck.Bunny.(2008)/Big.Buck.Bunny.(2008).NoMercy.m3u8',
			duration: '9:56',
			year: 2015,
			rating: {
				rating: 12,
				image: 'NL/NL_AL.svg',
			},
			tracks: [
				{
					id: 0,
					file: '/Big.Buck.Bunny.(2008)/thumbs_320x178.vtt',
					kind: 'thumbnails',
				},
				{
					id: 1,
					file: '/Big.Buck.Bunny.(2008)/chapters.vtt',
					kind: 'chapters',
				},
				{
					id: 2,
					file: '/Big.Buck.Bunny.(2008)/thumbs_320x178.webp',
					kind: 'sprite',
				},
			],
		},
		{
			id: 'tears-of-steel',
			title: 'Tears of Steel',
			description: 'Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - https://www.tearsofsteel.org',
			image: '/fOy6SL5Zs2PFcNXwqEPIDPrLB1q.jpg',
			file: '/Tears.of.Steel.(2012)/Tears.of.Steel.(2012).NoMercy.m3u8',
			duration: '12:13',
			year: 2012,
			rating: {
				rating: 6,
				image: 'NL/NL_6.svg',
			},
			tracks: [
				{
					id: 0,
					label: 'Brazilian (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.bra.full.vtt',
					language: 'bra',
					kind: 'subtitles',
				},
				{
					id: 1,
					label: 'Chinese (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.chi.full.vtt',
					language: 'chi',
					kind: 'subtitles',
				},
				{
					id: 2,
					label: 'Croatian (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.cro.full.vtt',
					language: 'cro',
					kind: 'subtitles',
				},
				{
					id: 3,
					label: 'Chech (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.cze.full.vtt',
					language: 'cze',
					kind: 'subtitles',
				},
				{
					id: 4,
					label: 'Danish (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.dan.full.vtt',
					language: 'dan',
					kind: 'subtitles',
				},
				{
					id: 5,
					label: 'Dutch (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.dut.full.vtt',
					language: 'dut',
					kind: 'subtitles',
				},
				{
					id: 6,
					label: 'English (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.eng.full.vtt',
					language: 'eng',
					kind: 'subtitles',
				},
				{
					id: 7,
					label: 'French (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.fre.full.vtt',
					language: 'fre',
					kind: 'subtitles',
				},
				{
					id: 8,
					label: 'German (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.ger.full.vtt',
					language: 'ger',
					kind: 'subtitles',
				},
				{
					id: 9,
					label: 'Greek (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.gre.full.vtt',
					language: 'gre',
					kind: 'subtitles',
				},
				{
					id: 10,
					label: 'Hebrew (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.heb.full.vtt',
					language: 'heb',
					kind: 'subtitles',
				},
				{
					id: 11,
					label: 'Hungarian (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.hun.full.vtt',
					language: 'hun',
					kind: 'subtitles',
				},
				{
					id: 12,
					label: 'Indian (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.ind.full.vtt',
					language: 'ind',
					kind: 'subtitles',
				},
				{
					id: 13,
					label: 'Italian (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.ita.full.vtt',
					language: 'ita',
					kind: 'subtitles',
				},
				{
					id: 14,
					label: 'Japanese (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.jpn.full.vtt',
					language: 'jpn',
					kind: 'subtitles',
				},
				{
					id: 15,
					label: 'Norwegian (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.nor.full.vtt',
					language: 'nor',
					kind: 'subtitles',
				},
				{
					id: 16,
					label: 'Persian (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.per.full.vtt',
					language: 'per',
					kind: 'subtitles',
				},
				{
					id: 17,
					label: 'Portugese (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.por.full.vtt',
					language: 'por',
					kind: 'subtitles',
				},
				{
					id: 18,
					label: 'Russian (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.rus.full.vtt',
					language: 'rus',
					kind: 'subtitles',
				},
				{
					id: 19,
					label: 'Spanish (Full)',
					type: 'sdh',
					file: '/Tears.of.Steel.(2012)/subtitles/Tears.of.Steel.(2012).NoMercy.spa.full.vtt',
					language: 'spa',
					kind: 'subtitles',
				},
				{
					id: 20,
					file: '/Tears.of.Steel.(2012)/previews.vtt',
					kind: 'thumbnails',
				},
				{
					id: 21,
					file: '/Tears.of.Steel.(2012)/chapters.vtt',
					kind: 'chapters',
				},
				{
					id: 22,
					file: '/Tears.of.Steel.(2012)/sprite.webp',
					kind: 'sprite',
				},
			],
		},
		{
			id: 'elephants-dream',
			title: 'Elephants Dream',
			year: 2006,
			duration: '10:54',
			description: 'Two strange characters explore a capricious and seemingly infinite machine.',
			file: '/Elephants.Dream.(2006)/Elephants.Dream.(2006).NoMercy.m3u8',
			image: '/9bJDwuhza19HQcYA99FeslLYmUm.jpg',
			tracks: [
				{
					id: 0,
					label: 'Arabic',
					language: 'ara',
					kind: 'subtitles',
					file: '/Elephants.Dream.(2006)/subtitles/Elephants.Dream.(2006).NoMercy.ara.full.vtt',
				},
				{
					id: 1,
					label: 'Dutch',
					language: 'dut',
					kind: 'subtitles',
					file: '/Elephants.Dream.(2006)/subtitles/Elephants.Dream.(2006).NoMercy.dut.full.vtt',
				},
				{
					id: 2,
					label: 'English',
					language: 'eng',
					kind: 'subtitles',
					file: '/Elephants.Dream.(2006)/subtitles/Elephants.Dream.(2006).NoMercy.eng.full.vtt',
				},
				{
					id: 3,
					label: 'Japanese',
					language: 'jpn',
					kind: 'subtitles',
					file: '/Elephants.Dream.(2006)/subtitles/Elephants.Dream.(2006).NoMercy.jpn.full.vtt',
				},
				{
					id: 4,
					label: 'Russian',
					language: 'rus',
					kind: 'subtitles',
					file: '/Elephants.Dream.(2006)/subtitles/Elephants.Dream.(2006).NoMercy.rus.full.vtt',
				},
				{
					id: 5,
					label: 'Swedish',
					language: 'swe',
					kind: 'subtitles',
					file: '/Elephants.Dream.(2006)/subtitles/Elephants.Dream.(2006).NoMercy.swe.full.vtt',
				},
				{
					id: 6,
					file: '/Elephants.Dream.(2006)/thumbs_320x178.vtt',
					kind: 'thumbnails',
				},
				{
					id: 7,
					file: '/Elephants.Dream.(2006)/thumbs_320x178.webp',
					kind: 'sprite',
				},
				{
					id: 8,
					kind: 'chapters',
					file: '/Elephants.Dream.(2006)/chapters.vtt',
				},
			],
		},
		{
			id: 'agent-327',
			title: 'Agent 327: Operation Barbershop',
			description: 'Agent 327 is investigating a clue that leads him to a shady barbershop in Amsterdam. Little does he know that he is being tailed by mercenary Boris Kloris.',
			image: '/aupI9kV5CawUp02XWnI2l7Ym9SH.jpg',
			file: '/Agent.327.Operation.Barbershop.(2017)/Agent.327.Operation.Barbershop.(2017).NoMercy.m3u8',
			duration: '3:51',
			year: 2017,
			tracks: [
				{
					id: 0,
					label: 'Dutch',
					language: 'dut',
					kind: 'subtitles',
					file: '/Agent.327.Operation.Barbershop.(2017)/subtitles/Agent.327.Operation.Barbershop.(2017).NoMercy.dut.full.vtt',
				},
				{
					id: 1,
					label: 'English',
					language: 'eng',
					kind: 'subtitles',
					file: '/Agent.327.Operation.Barbershop.(2017)/subtitles/Agent.327.Operation.Barbershop.(2017).NoMercy.eng.full.vtt',
				},
				{
					id: 2,
					file: '/Agent.327.Operation.Barbershop.(2017)/thumbs_320x132.vtt',
					kind: 'thumbnails',
				},
				{
					id: 3,
					file: '/Agent.327.Operation.Barbershop.(2017)/thumbs_320x132.webp',
					kind: 'sprite',
				},
			],
		},
		{
			id: 'caminandes-gran-dillama',
			title: 'Caminandes: Gran Dillama',
			description: 'A young llama named Koro discovers that the grass is always greener on the other side of the fence.',
			image: '/206A3X9EH42kmdQMECq90SbjHCn.jpg',
			file: '/Caminandes.Gran.Dillama.(2013)/Caminandes.Gran.Dillama.(2013).NoMercy.m3u8',
			duration: '2:26',
			year: 2013,
			tracks: [
				{
					id: 0,
					file: '/Caminandes.Gran.Dillama.(2013)/thumbs_320x178.vtt',
					kind: 'thumbnails',
				},
				{
					id: 1,
					file: '/Caminandes.Gran.Dillama.(2013)/thumbs_320x178.webp',
					kind: 'sprite',
				},
			],
		},
		{
			id: 'caminandes-llama-drama',
			title: 'Caminandes: Llama Drama',
			description: 'Koro wants to get to the other side of the road. The first episode of the Caminandes series.',
			image: '/mjkoC8Vo7fSHuqrbVQdI6cNwKA2.jpg',
			file: '/Caminandes.Llama.Drama.(2013)/Caminandes.Llama.Drama.(2013).NoMercy.m3u8',
			duration: '1:29',
			year: 2013,
			tracks: [
				{
					id: 0,
					file: '/Caminandes.Llama.Drama.(2013)/thumbs_320x178.vtt',
					kind: 'thumbnails',
				},
				{
					id: 1,
					file: '/Caminandes.Llama.Drama.(2013)/thumbs_320x178.webp',
					kind: 'sprite',
				},
			],
		},
		{
			id: 'caminandes-llamigos',
			title: 'Caminandes: Llamigos',
			description: 'Koro meets Oti, a pesky baby Magellanic penguin, in an epic battle over tasty red berries during winter.',
			image: '/tIX2BIhkhoFq1iwtHYzTSbHbe82.jpg',
			file: '/Caminandes.Llamigos.(2016)/Caminandes.Llamigos.(2016).NoMercy.m3u8',
			duration: '2:30',
			year: 2016,
			tracks: [
				{
					id: 0,
					file: '/Caminandes.Llamigos.(2016)/thumbs_320x178.vtt',
					kind: 'thumbnails',
				},
				{
					id: 1,
					file: '/Caminandes.Llamigos.(2016)/thumbs_320x178.webp',
					kind: 'sprite',
				},
			],
		},
		{
			id: 'charge',
			title: 'Charge',
			description: 'An old destitute man breaks into a battery factory but soon finds himself confronted by a deadly security droid and no way out.',
			image: '/hwvuivrtKFA4tPkW81txs7oKJOx.jpg',
			file: '/Charge.(2022)/Charge.(2022).NoMercy.m3u8',
			duration: '4:23',
			year: 2022,
			tracks: [
				{
					id: 0,
					file: '/Charge.(2022)/thumbs_320x133.vtt',
					kind: 'thumbnails',
				},
				{
					id: 1,
					file: '/Charge.(2022)/thumbs_320x133.webp',
					kind: 'sprite',
				},
			],
		},
		{
			id: 'coffee-run',
			title: 'Coffee Run',
			description: 'Fueled by caffeine, a young woman runs through the bittersweet memories of her past relationship.',
			image: '/pUHJzzq6fUowt8NrfDL5JAfjbqR.jpg',
			file: '/Coffee.Run.(2020)/Coffee.Run.(2020).NoMercy.m3u8',
			duration: '3:05',
			year: 2020,
			tracks: [
				{
					id: 0,
					file: '/Coffee.Run.(2020)/thumbs_320x133.vtt',
					kind: 'thumbnails',
				},
				{
					id: 1,
					file: '/Coffee.Run.(2020)/thumbs_320x133.webp',
					kind: 'sprite',
				},
			],
		},
		{
			id: 'glass-half',
			title: 'Glass Half',
			description: 'Two amateur art critics meet in a gallery and argue passionately about the pieces they see displayed.',
			image: '/AlqiewYiIpnoR4yqeo17y1SBf6S.jpg',
			file: '/Glass.Half.(2015)/Glass.Half.(2015).NoMercy.m3u8',
			duration: '3:13',
			year: 2015,
			tracks: [
				{
					id: 0,
					label: 'Afrikaans',
					language: 'afr',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.afr.full.vtt',
				},
				{
					id: 1,
					label: 'Arabic',
					language: 'ara',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.ara.full.vtt',
				},
				{
					id: 2,
					label: 'Chinese',
					language: 'chi',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.chi.full.vtt',
				},
				{
					id: 3,
					label: 'Danish',
					language: 'dan',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.dan.full.vtt',
				},
				{
					id: 4,
					label: 'Dutch',
					language: 'dut',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.dut.full.vtt',
				},
				{
					id: 5,
					label: 'English',
					language: 'eng',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.eng.full.vtt',
				},
				{
					id: 6,
					label: 'French',
					language: 'fre',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.fre.full.vtt',
				},
				{
					id: 7,
					label: 'German',
					language: 'ger',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.ger.full.vtt',
				},
				{
					id: 8,
					label: 'Hindi',
					language: 'hin',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.hin.full.vtt',
				},
				{
					id: 9,
					label: 'Indonesian',
					language: 'ind',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.ind.full.vtt',
				},
				{
					id: 10,
					label: 'Japanese',
					language: 'jpn',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.jpn.full.vtt',
				},
				{
					id: 11,
					label: 'Lithuanian',
					language: 'lit',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.lit.full.vtt',
				},
				{
					id: 12,
					label: 'Norwegian',
					language: 'nob',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.nob.full.vtt',
				},
				{
					id: 13,
					label: 'Polish',
					language: 'pol',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.pol.full.vtt',
				},
				{
					id: 14,
					label: 'Portuguese',
					language: 'por',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.por.full.vtt',
				},
				{
					id: 15,
					label: 'Romanian',
					language: 'ron',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.ron.full.vtt',
				},
				{
					id: 16,
					label: 'Serbian',
					language: 'srp',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.srp.full.vtt',
				},
				{
					id: 17,
					label: 'Tamil',
					language: 'tam',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.tam.full.vtt',
				},
				{
					id: 18,
					label: 'Telugu',
					language: 'tel',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.tel.full.vtt',
				},
				{
					id: 19,
					label: 'Turkish',
					language: 'tur',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.tur.full.vtt',
				},
				{
					id: 20,
					label: 'Vietnamese',
					language: 'vie',
					kind: 'subtitles',
					file: '/Glass.Half.(2015)/subtitles/Glass.Half.(2015).NoMercy.vie.full.vtt',
				},
				{
					id: 21,
					file: '/Glass.Half.(2015)/thumbs_320x180.vtt',
					kind: 'thumbnails',
				},
				{
					id: 22,
					file: '/Glass.Half.(2015)/thumbs_320x180.webp',
					kind: 'sprite',
				},
			],
		},
		{
			id: 'hero',
			title: 'HERO',
			description: 'What does it mean to be a true hero? A short animation showcasing Blender\'s Grease Pencil tool for 2D animation within a full 3D pipeline.',
			image: '/7poXZZ6JZA0AN9nhXvt8JbzlX7T.jpg',
			file: '/HERO.(2018)/HERO.(2018).NoMercy.m3u8',
			duration: '3:57',
			year: 2018,
			tracks: [
				{
					id: 0,
					file: '/HERO.(2018)/thumbs_320x132.vtt',
					kind: 'thumbnails',
				},
				{
					id: 1,
					file: '/HERO.(2018)/thumbs_320x132.webp',
					kind: 'sprite',
				},
			],
		},
		{
			id: 'spring',
			title: 'Spring',
			description: 'The story of a shepherd girl and her dog, who face ancient spirits in order to continue the cycle of life.',
			image: '/lL04DVOu1b64Xoj1EuWHZdtcfaZ.jpg',
			file: '/Spring.(2019)/Spring.(2019).NoMercy.m3u8',
			duration: '7:44',
			year: 2019,
			tracks: [
				{
					id: 0,
					label: 'Arabic',
					language: 'ara',
					kind: 'subtitles',
					file: '/Spring.(2019)/subtitles/Spring.(2019).NoMercy.ara.full.vtt',
				},
				{
					id: 1,
					label: 'Dutch',
					language: 'dut',
					kind: 'subtitles',
					file: '/Spring.(2019)/subtitles/Spring.(2019).NoMercy.dut.full.vtt',
				},
				{
					id: 2,
					label: 'English',
					language: 'eng',
					kind: 'subtitles',
					file: '/Spring.(2019)/subtitles/Spring.(2019).NoMercy.eng.full.vtt',
				},
				{
					id: 3,
					label: 'Hindi',
					language: 'hin',
					kind: 'subtitles',
					file: '/Spring.(2019)/subtitles/Spring.(2019).NoMercy.hin.full.vtt',
				},
				{
					id: 4,
					label: 'Hungarian',
					language: 'hun',
					kind: 'subtitles',
					file: '/Spring.(2019)/subtitles/Spring.(2019).NoMercy.hun.full.vtt',
				},
				{
					id: 5,
					label: 'Indonesian',
					language: 'ind',
					kind: 'subtitles',
					file: '/Spring.(2019)/subtitles/Spring.(2019).NoMercy.ind.full.vtt',
				},
				{
					id: 6,
					label: 'Japanese',
					language: 'jpn',
					kind: 'subtitles',
					file: '/Spring.(2019)/subtitles/Spring.(2019).NoMercy.jpn.full.vtt',
				},
				{
					id: 7,
					label: 'Korean',
					language: 'kor',
					kind: 'subtitles',
					file: '/Spring.(2019)/subtitles/Spring.(2019).NoMercy.kor.full.vtt',
				},
				{
					id: 8,
					label: 'Lithuanian',
					language: 'lit',
					kind: 'subtitles',
					file: '/Spring.(2019)/subtitles/Spring.(2019).NoMercy.lit.full.vtt',
				},
				{
					id: 9,
					label: 'Polish',
					language: 'pol',
					kind: 'subtitles',
					file: '/Spring.(2019)/subtitles/Spring.(2019).NoMercy.pol.full.vtt',
				},
				{
					id: 10,
					label: 'Portuguese',
					language: 'por',
					kind: 'subtitles',
					file: '/Spring.(2019)/subtitles/Spring.(2019).NoMercy.por.full.vtt',
				},
				{
					id: 11,
					label: 'Spanish',
					language: 'spa',
					kind: 'subtitles',
					file: '/Spring.(2019)/subtitles/Spring.(2019).NoMercy.spa.full.vtt',
				},
				{
					id: 12,
					label: 'Serbian',
					language: 'srp',
					kind: 'subtitles',
					file: '/Spring.(2019)/subtitles/Spring.(2019).NoMercy.srp.full.vtt',
				},
				{
					id: 13,
					label: 'Turkish',
					language: 'tur',
					kind: 'subtitles',
					file: '/Spring.(2019)/subtitles/Spring.(2019).NoMercy.tur.full.vtt',
				},
				{
					id: 14,
					file: '/Spring.(2019)/thumbs_320x132.vtt',
					kind: 'thumbnails',
				},
				{
					id: 15,
					file: '/Spring.(2019)/thumbs_320x132.webp',
					kind: 'sprite',
				},
			],
		},
		{
			id: 'the-daily-dweebs',
			title: 'The Daily Dweebs',
			description: 'A pilot episode of an animated series revolving around the pet Dixey and his shenanigans in 1950\'s American suburbia.',
			image: '/8oCW8Njdabb9K3OwK1y8KUsHFvk.jpg',
			file: '/The.Daily.Dweebs.(2017)/The.Daily.Dweebs.(2017).NoMercy.m3u8',
			duration: '1:00',
			year: 2017,
			tracks: [
				{
					id: 0,
					file: '/The.Daily.Dweebs.(2017)/thumbs_320x180.vtt',
					kind: 'thumbnails',
				},
				{
					id: 1,
					file: '/The.Daily.Dweebs.(2017)/thumbs_320x180.webp',
					kind: 'sprite',
				},
			],
		},
		{
			id: 'wing-it',
			title: 'Wing It!',
			description: 'An uptight engineer gets an unwelcome visit from an enthusiastic wannabe-pilot, causing both of them to be launched into the air inside an out-of-control space shuttle.',
			image: '/o2G1kW9pCcRo7NmiZhJBm5LcVpH.jpg',
			file: '/Wing.It.(2023)/Wing.It.(2023).NoMercy.m3u8',
			duration: '3:58',
			year: 2023,
			tracks: [
				{
					id: 0,
					file: '/Wing.It.(2023)/thumbs_320x178.vtt',
					kind: 'thumbnails',
				},
				{
					id: 1,
					file: '/Wing.It.(2023)/thumbs_320x178.webp',
					kind: 'sprite',
				},
			],
		},
	],
};

// ── DOM refs ────────────────────────────────────────────────────────────
const btnPlay = document.getElementById('btnPlay');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const btnRew = document.getElementById('btnRew');
const btnFwd = document.getElementById('btnFwd');
const btnMute = document.getElementById('btnMute');
const btnFullscreen = document.getElementById('btnFullscreen');
const btnKeybinds = document.getElementById('btnKeybinds');
const btnClearLog = document.getElementById('btnClearLog');

const seekSlider = document.getElementById('seekSlider');
const progressBar = document.getElementById('progressBar');
const bufferBar = document.getElementById('bufferBar');
const chapterMarkers = document.getElementById('chapterMarkers');
const chapterTooltip = document.getElementById('chapterTooltip');
const timeDisplay = document.getElementById('timeDisplay');

const volumeSlider = document.getElementById('volumeSlider');
const volLabel = document.getElementById('volLabel');

const btnSpeed = document.getElementById('btnSpeed');
const btnQuality = document.getElementById('btnQuality');
const btnSubs = document.getElementById('btnSubs');
const btnAudio = document.getElementById('btnAudio');

const speedMenu = document.getElementById('speedMenu');
const qualityMenu = document.getElementById('qualityMenu');
const subsMenu = document.getElementById('subsMenu');
const audioMenu = document.getElementById('audioMenu');

const playlistEl = document.getElementById('playlistItems');
const logBody = document.getElementById('logBody');
const filterRow = document.getElementById('filterRow');

// ── Event log state ─────────────────────────────────────────────────────
const LOG_CATEGORIES = {
	Lifecycle: { color: '#22d3ee', events: ['ready', 'setupError', 'dispose', 'remove', 'firstFrame'] },
	Playback: { color: '#a78bfa', events: ['play', 'pause', 'playing', 'beforePlay', 'idle', 'complete', 'ended', 'waiting', 'stalled', 'buffer', 'bufferChange', 'bufferedEnd', 'canplay', 'loadstart', 'loadedmetadata', 'error', 'warning', 'autostartNotAllowed'] },
	Time: { color: '#34d399', events: ['time', 'seek', 'seeked', 'duration', 'lastTimeTrigger'] },
	Volume: { color: '#fb923c', events: ['volume', 'mute'] },
	Speed: { color: '#f472b6', events: ['speed', 'playbackRateChanged'] },
	Quality: { color: '#60a5fa', events: ['levels', 'levelsChanged', 'levelsChanging', 'visualQuality'] },
	Subtitles: { color: '#facc15', events: ['subtitleList', 'subtitleChanged', 'captionsList', 'captionsChanged'] },
	Audio: { color: '#e879f9', events: ['audioTracks', 'audioTrackChanged'] },
	Playlist: { color: '#4ade80', events: ['playlist', 'item', 'playlistComplete', 'playlistchange'] },
	Display: { color: '#f87171', events: ['fullscreen', 'resize', 'active', 'float', 'pip', 'theater'] },
};

const enabledCategories = {};
Object.keys(LOG_CATEGORIES).forEach((k) => {
	enabledCategories[k] = true;
});

// Build filter chips
Object.keys(LOG_CATEGORIES).forEach((cat) => {
	const info = LOG_CATEGORIES[cat];
	const chip = document.createElement('label');
	chip.className = 'filter-chip on';
	chip.style.setProperty('--chip-color', info.color);
	chip.innerHTML = `<input type="checkbox" checked>${cat}`;
	chip.querySelector('input').addEventListener('change', (e) => {
		enabledCategories[cat] = e.target.checked;
		chip.classList.toggle('on', e.target.checked);
	});
	filterRow.appendChild(chip);
});

function categoryFor(event) {
	for (const cat in LOG_CATEGORIES) {
		if (LOG_CATEGORIES[cat].events.includes(event))
			return cat;
	}
	return 'Other';
}

function isEnabled(event) {
	const cat = categoryFor(event);
	if (cat === 'Other')
		return true;
	return !!enabledCategories[cat];
}

// Throttle time events so the log doesn't flood
let lastTimeLog = 0;

function logEvent(name, data) {
	if (name === 'time') {
		const now = Date.now();
		if (now - lastTimeLog < 1000)
			return;
		lastTimeLog = now;
	}
	if (!isEnabled(name))
		return;

	const cat = categoryFor(name);
	const info = LOG_CATEGORIES[cat] || { color: '#888' };

	const t = new Date();
	const ts = `${pad2(t.getHours())}:${pad2(t.getMinutes())}:${pad2(t.getSeconds())}`;

	let dataStr = '';
	if (data !== undefined && data !== null) {
		try {
			dataStr = JSON.stringify(data, null, 0);
		}
		catch {
			dataStr = String(data);
		}
	}

	const row = document.createElement('div');
	row.className = 'log-entry';
	row.innerHTML = `<span class="log-time">${ts}</span>`
		+ `<span class="log-event" style="color:${info.color}">[${name}]</span>`;

	if (dataStr) {
		const collapsible = dataStr.length > 80;
		const dataEl = document.createElement('div');
		dataEl.className = `log-data${collapsible ? ' collapsible' : ''}`;
		dataEl.innerHTML = colorJson(dataStr);
		row.appendChild(dataEl);
		if (collapsible) {
			const tog = document.createElement('button');
			tog.className = 'log-toggle';
			tog.title = 'Expand';
			tog.textContent = '▼';
			tog.addEventListener('click', (e) => {
				e.stopPropagation();
				const expanded = dataEl.classList.toggle('expanded');
				tog.textContent = expanded ? '▲' : '▼';
				tog.title = expanded ? 'Collapse' : 'Expand';
			});
			row.appendChild(tog);
		}
	}

	logBody.appendChild(row);
	logBody.scrollTop = logBody.scrollHeight;
}

function pad2(n) {
	return n < 10 ? `0${n}` : `${n}`;
}
function escHtml(s) {
	return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function colorJson(raw) {
	return raw.replace(
		/("(?:[^"\\]|\\.)*")(\s*:)?|(true|false)|(null)|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|([ \t{}[\],:])/g,
		(m, str, colon, bool, nil, num) => {
			if (str !== undefined) {
				const safe = escHtml(str);
				return colon !== undefined ? `<span class="jk">${safe}</span>${escHtml(colon)}` : `<span class="js">${safe}</span>`;
			}
			if (bool !== undefined)
				return `<span class="jb">${bool}</span>`;
			if (nil !== undefined)
				return `<span class="jn">${nil}</span>`;
			if (num !== undefined)
				return `<span class="jm">${num}</span>`;
			return escHtml(m);
		},
	);
}

btnClearLog.addEventListener('click', () => {
	logBody.innerHTML = '';
});

// ── Dropdown helper ─────────────────────────────────────────────────────
function toggleDropdown(menu) {
	const wasOpen = menu.classList.contains('open');
	closeAllDropdowns();
	if (!wasOpen)
		menu.classList.add('open');
}

function closeAllDropdowns() {
	[speedMenu, qualityMenu, subsMenu, audioMenu].forEach((m) => {
		m.classList.remove('open');
	});
}

document.addEventListener('click', (e) => {
	if (!e.target.closest('.menu-wrap'))
		closeAllDropdowns();
});

function buildMenu(el, items, currentFn, selectFn, header) {
	el.innerHTML = '';
	if (header) {
		const h = document.createElement('div');
		h.className = 'dropdown-header';
		h.textContent = header;
		el.appendChild(h);
	}
	items.forEach((item) => {
		const d = document.createElement('div');
		d.className = `dropdown-item${currentFn(item) ? ' current' : ''}`;
		d.textContent = item.label;
		d.addEventListener('click', () => {
			selectFn(item);
			closeAllDropdowns();
		});
		el.appendChild(d);
	});
}

// ── Playlist sidebar ────────────────────────────────────────────────────
let player;
function buildPlaylist(items) {
	playlistEl.innerHTML = '';
	items.forEach((item, i) => {
		const li = document.createElement('li');
		li.className = 'playlist-item';
		li.dataset.index = i;

		const imgSrc = item.image
			? (item.image.startsWith('http') ? item.image : IMG_BASE + item.image)
			: 'https://via.placeholder.com/110x62/111/555?text=▶';

		let overlay = '';
		if (item.year || item.duration) {
			overlay = `<div class="playlist-thumb-overlay"></div>${item.year ? `<span class="overlay-year">${item.year}</span>` : ''
			}${item.duration ? `<span class="overlay-dur">${item.duration}</span>` : ''}`;
		}
		li.innerHTML
			= `<div class="playlist-thumb-wrap"><img class="playlist-thumb" src="${imgSrc}" alt="" loading="lazy">${overlay}<span class="playlist-num">${i + 1}</span></div>`
				+ `<div class="playlist-info">`
				+ `<div class="playlist-title">${escHtml(item.title || 'Untitled')}</div>${item.description ? `<div class="playlist-desc">${escHtml(item.description)}</div>` : ''
				}</div>`;

		li.addEventListener('click', () => {
			player.playlistItem(Number.parseInt(li.dataset.index));
		});

		playlistEl.appendChild(li);
	});
}

function highlightPlaylistItem(index) {
	const items = playlistEl.querySelectorAll('.playlist-item');
	items.forEach((el, i) => {
		el.classList.toggle('active', i === index);
	});
}

// ── Format time ─────────────────────────────────────────────────────────
function fmtTime(s) {
	if (!Number.isFinite(s) || s < 0)
		return '0:00';
	const m = Math.floor(s / 60);
	const sec = Math.floor(s % 60);
	return `${m}:${sec < 10 ? '0' : ''}${sec}`;
}

// ── Create player ───────────────────────────────────────────────────────
player = window.nmplayer('player').setup(config);

// ── Init icons ───────────────────────────────────────────────────────────
[
	[btnPrev, 'prev'],
	[btnNext, 'next'],
	[btnRew, 'seekBack'],
	[btnFwd, 'seekFwd'],
	[btnMute, 'volHigh'],
	[btnFullscreen, 'fullscreen'],
	[btnQuality, 'quality'],
	[btnSubs, 'subs'],
	[btnAudio, 'audio'],
].forEach(([btn, key]) => {
	btn.innerHTML = makeSVG(ICONS[key]);
});
btnPlay.innerHTML = makeSVG(ICONS.play);
btnSpeed.innerHTML = makeSpeedBtn(1);

// ── Wire controls ───────────────────────────────────────────────────────

// Play / Pause
btnPlay.addEventListener('click', () => player.togglePlayback());

player.on('play', () => {
	btnPlay.innerHTML = makeSVG(ICONS.pause);
	btnPlay.title = 'Pause';
});
player.on('pause', () => {
	btnPlay.innerHTML = makeSVG(ICONS.play);
	btnPlay.title = 'Play';
});

// Prev / Next
btnPrev.addEventListener('click', () => player.previous());
btnNext.addEventListener('click', () => player.next());

// Rewind / Forward
btnRew.addEventListener('click', () => player.rewind(10));
btnFwd.addEventListener('click', () => player.forward(10));

// ── Seek ─────────────────────────────────────────────────────────────────
let isSeeking = false;

seekSlider.addEventListener('mousedown', () => {
	isSeeking = true;
});
seekSlider.addEventListener('touchstart', () => {
	isSeeking = true;
}, { passive: true });

seekSlider.addEventListener('input', () => {
	const pct = seekSlider.value / 1000;
	progressBar.style.width = `${pct * 100}%`;
});

seekSlider.addEventListener('change', () => {
	const pct = seekSlider.value / 1000;
	player.seekByPercentage(pct * 100);
	isSeeking = false;
});

player.on('time', (data) => {
	if (isSeeking || !data)
		return;
	const pct = data.percentage || 0;
	progressBar.style.width = `${pct}%`;
	seekSlider.value = Math.round(pct * 10);
	timeDisplay.textContent = `${fmtTime(data.currentTime)} / ${fmtTime(data.duration)}`;

	// Buffer
	const video = player.videoElement;
	if (video && video.buffered.length > 0) {
		const dur = video.duration;
		if (dur > 0) {
			const bufPct = (video.buffered.end(video.buffered.length - 1) / dur) * 100;
			bufferBar.style.width = `${bufPct}%`;
		}
	}
});

player.on('duration', (data) => {
	if (!data)
		return;
	timeDisplay.textContent = `${fmtTime(data.currentTime)} / ${fmtTime(data.duration)}`;
});

// ── Volume ────────────────────────────────────────────────────────────────
volumeSlider.addEventListener('input', () => {
	const v = Number.parseInt(volumeSlider.value);
	player.volume(v);
	volLabel.textContent = `${v}%`;
	updateMuteBtn(v === 0);
});

btnMute.addEventListener('click', () => {
	player.toggleMute();
});

player.on('volume', (data) => {
	if (!data)
		return;
	const v = Math.round(data.volume);
	volumeSlider.value = v;
	volLabel.textContent = `${v}%`;
	updateMuteBtn(data.muted || v === 0);
});

player.on('mute', (data) => {
	if (!data)
		return;
	updateMuteBtn(data.muted);
});

function updateMuteBtn(muted) {
	btnMute.innerHTML = makeSVG(muted ? ICONS.volMuted : ICONS.volHigh);
	btnMute.title = muted ? 'Unmute' : 'Mute';
}

// ── Fullscreen ────────────────────────────────────────────────────────────
btnFullscreen.addEventListener('click', () => player.toggleFullscreen());
player.on('fullscreen', (isFs) => {
	const bar = document.getElementById('controlsBar');
	const playerEl = document.getElementById('player');
	const col = document.querySelector('.player-column');
	if (isFs) {
		playerEl.appendChild(bar);
	}
	else {
		col.appendChild(bar);
	}
	btnFullscreen.innerHTML = makeSVG(isFs ? ICONS.exitFs : ICONS.fullscreen);
	btnFullscreen.title = isFs ? 'Exit Fullscreen' : 'Fullscreen';
	btnFullscreen.classList.toggle('active', !!isFs);
});

// ── Speed ─────────────────────────────────────────────────────────────────
btnSpeed.addEventListener('click', () => toggleDropdown(speedMenu));

let currentSpeed = 1;

function buildSpeedMenu() {
	const rates = player.speeds && player.speeds().length ? player.speeds() : [0.5, 0.75, 1, 1.25, 1.5, 2];
	const items = rates.map(r => ({ label: r === 1 ? 'Normal (1×)' : `${r}×`, value: r }));
	buildMenu(speedMenu, items, item => item.value === currentSpeed, (item) => {
		currentSpeed = item.value;
		player.speed(item.value);
		btnSpeed.innerHTML = makeSpeedBtn(item.value);
		buildSpeedMenu();
	}, 'Speed');
}

player.on('speed', (rate) => {
	currentSpeed = rate;
	btnSpeed.innerHTML = makeSpeedBtn(rate);
	buildSpeedMenu();
});

player.on('playbackRateChanged', (rate) => {
	currentSpeed = rate;
	btnSpeed.innerHTML = makeSpeedBtn(rate);
	buildSpeedMenu();
});

// ── Quality ───────────────────────────────────────────────────────────────
btnQuality.addEventListener('click', () => {
	buildQualityMenu();
	toggleDropdown(qualityMenu);
});

let currentQualityId = -1;

function buildQualityMenu() {
	const levels = player.qualityLevels() || [];
	const items = [{ id: -1, label: 'Auto' }].concat(levels.map((l) => {
		const raw = (l._attrs && l._attrs[0] && l._attrs[0].RESOLUTION)
			|| l.name || l.label || (`Level ${l.id}`);
		return { id: l.id, label: formatQualityLabel(raw) };
	}));
	buildMenu(qualityMenu, items, item => item.id === currentQualityId, (item) => {
		currentQualityId = item.id;
		player.quality(item.id);
		buildQualityMenu();
	}, 'Quality');
}

player.on('levels', (levels) => {
	if (levels && levels.length > 0)
		buildQualityMenu();
});

player.on('levelsChanged', (data) => {
	if (data) {
		btnQuality.textContent = shortQualityLabel(data.name);
		if (currentQualityId === -1)
			currentQualityId = -1; // stay on auto label but reflect actual level
	}
	buildQualityMenu();
});

// ── Subtitles ─────────────────────────────────────────────────────────────
btnSubs.addEventListener('click', () => {
	buildSubsMenu();
	toggleDropdown(subsMenu);
});

function buildSubsMenu() {
	const subs = player.subtitles() || [];
	const current = player.subtitleIndex();
	const items = [{ id: -1, label: 'Off' }].concat(subs.map((s) => {
		return { id: s.id, label: s.label || s.language || (`Track ${s.id}`) };
	}));
	buildMenu(subsMenu, items, item => item.id === current, (item) => {
		player.subtitle(item.id);
		buildSubsMenu();
	}, 'Subtitles');
}

player.on('subtitleList', () => buildSubsMenu());
player.on('captionsList', () => buildSubsMenu());
player.on('subtitleChanged', () => buildSubsMenu());

// ── Audio ─────────────────────────────────────────────────────────────────
btnAudio.addEventListener('click', () => {
	buildAudioMenu();
	toggleDropdown(audioMenu);
});

function buildAudioMenu() {
	const tracks = player.audioTracks() || [];
	const current = player.audioTrackIndex();
	if (tracks.length <= 1) {
		audioMenu.innerHTML = '<div class="dropdown-header">Audio Track</div><div class="dropdown-item" style="color:#555;pointer-events:none">Only one track</div>';
		return;
	}
	buildMenu(audioMenu, tracks.map(t => ({ id: t.id, label: t.name || t.language || (`Track ${t.id}`) })), item => item.id === current, (item) => {
		player.audioTrack(item.id);
		buildAudioMenu();
	}, 'Audio Track');
}

player.on('audioTracks', () => buildAudioMenu());
player.on('audioTrackChanged', () => buildAudioMenu());

// ── Playlist events ───────────────────────────────────────────────────────
player.on('playlist', (items) => {
	buildPlaylist(items);
});

let currentChapters = [];

function renderChapterMarkers(chapters) {
	currentChapters = chapters;
	chapterMarkers.innerHTML = '';
	chapters.forEach((ch) => {
		if (ch.left <= 0)
			return;
		const m = document.createElement('div');
		m.className = 'chapter-marker';
		m.style.left = `${ch.left}%`;
		chapterMarkers.appendChild(m);
	});
}

seekSlider.addEventListener('mousemove', (e) => {
	const rect = seekSlider.getBoundingClientRect();
	const pct = ((e.clientX - rect.left) / rect.width) * 100;
	const near = currentChapters.find(ch => ch.left > 0 && Math.abs(ch.left - pct) < 2);
	if (near && near.title) {
		chapterTooltip.textContent = near.title;
		chapterTooltip.style.left = `${near.left}%`;
		chapterTooltip.classList.add('visible');
	}
	else {
		chapterTooltip.classList.remove('visible');
	}
});

seekSlider.addEventListener('mouseleave', () => {
	chapterTooltip.classList.remove('visible');
});

player.on('chapters', () => {
	renderChapterMarkers(player.chapters());
});

player.on('item', (item) => {
	const idx = player.playlistIndex();
	highlightPlaylistItem(idx);
	// Reset controls for new item
	progressBar.style.width = '0%';
	bufferBar.style.width = '0%';
	seekSlider.value = 0;
	chapterMarkers.innerHTML = '';
	timeDisplay.textContent = `0:00 / ${item.duration || '0:00'}`;
	buildSpeedMenu();
});

// ── Ready ─────────────────────────────────────────────────────────────────
player.on('ready', () => {
	buildPlaylist(config.playlist);
	buildSpeedMenu();
	highlightPlaylistItem(0);
});

// ── Keyboard shortcuts (built-in KeyHandlerPlugin) ───────────────────────
const keyPlugin = new window.nmplayer.KeyHandlerPlugin();
keyPlugin.initialize(player);
keyPlugin.use();

// ── Keybinds legend dialog ────────────────────────────────────────────────
const KEYBIND_LEGEND = [
	{
		title: 'Playback',
		entries: [
			{ keys: ['Space'], label: 'Play / Pause' },
			{ keys: ['S'], label: 'Stop' },
			{ keys: ['E'], label: 'Next frame (paused)' },
		],
	},
	{
		title: 'Speed',
		entries: [
			{ keys: [']'], label: 'Speed up' },
			{ keys: ['['], label: 'Speed down' },
			{ keys: ['='], label: 'Normal speed' },
		],
	},
	{
		title: 'Volume',
		entries: [
			{ keys: ['↑'], label: 'Volume up' },
			{ keys: ['↓'], label: 'Volume down' },
			{ keys: ['M'], label: 'Mute / Unmute' },
		],
	},
	{
		title: 'Seeking',
		entries: [
			{ keys: ['←'], label: 'Seek back' },
			{ keys: ['→'], label: 'Seek forward' },
			{ keys: ['Shift', '← / →'], label: 'Seek 3 seconds' },
			{ keys: ['Alt', '← / →'], label: 'Seek 10 seconds' },
			{ keys: ['Ctrl', '← / →'], label: 'Seek 1 minute' },
		],
	},
	{
		title: 'Quick Seek',
		entries: [
			{ keys: ['3'], label: 'Jump 30 s forward' },
			{ keys: ['6'], label: 'Jump 60 s forward' },
			{ keys: ['9'], label: 'Jump 90 s forward' },
			{ keys: ['1'], label: 'Jump 120 s forward' },
		],
	},
	{
		title: 'Navigation',
		entries: [
			{ keys: ['N'], label: 'Next item' },
			{ keys: ['P'], label: 'Previous item' },
			{ keys: ['Shift', 'N'], label: 'Next chapter' },
			{ keys: ['Shift', 'P'], label: 'Previous chapter' },
		],
	},
	{
		title: 'Tracks & Subtitles',
		entries: [
			{ keys: ['V'], label: 'Cycle subtitles' },
			{ keys: ['B'], label: 'Cycle audio' },
			{ keys: ['A'], label: 'Cycle aspect ratio' },
			{ keys: ['+'], label: 'Subtitle size up' },
			{ keys: ['–'], label: 'Subtitle size down' },
		],
	},
	{
		title: 'Display',
		entries: [
			{ keys: ['F'], label: 'Toggle fullscreen' },
			{ keys: ['F11'], label: 'Toggle fullscreen' },
			{ keys: ['Esc'], label: 'Exit fullscreen' },
			{ keys: ['T'], label: 'Show time' },
			{ keys: ['?'], label: 'Keyboard shortcuts' },
		],
	},
];

let keybindsDialog = null;

function buildKeybindsDialog() {
	if (keybindsDialog)
		return;
	keybindsDialog = document.createElement('dialog');
	keybindsDialog.id = 'keybinds-dialog';

	const card = document.createElement('div');
	card.className = 'kd-card';

	const h = document.createElement('h2');
	h.className = 'kd-card-title';
	h.textContent = 'Keyboard Shortcuts';
	card.appendChild(h);

	const grid = document.createElement('div');
	grid.className = 'kd-grid';

	KEYBIND_LEGEND.forEach((group) => {
		const cell = document.createElement('div');

		const heading = document.createElement('h3');
		heading.className = 'kd-group-title';
		heading.textContent = group.title;
		cell.appendChild(heading);

		group.entries.forEach((entry) => {
			const row = document.createElement('div');
			row.className = 'kd-row';

			const label = document.createElement('span');
			label.className = 'kd-label';
			label.textContent = entry.label;

			const keysEl = document.createElement('span');
			keysEl.className = 'kd-keys';
			entry.keys.forEach((k, i) => {
				if (i > 0) {
					const plus = document.createElement('span');
					plus.className = 'kd-plus';
					plus.textContent = '+';
					keysEl.appendChild(plus);
				}
				const kbd = document.createElement('kbd');
				kbd.textContent = k;
				keysEl.appendChild(kbd);
			});

			row.appendChild(label);
			row.appendChild(keysEl);
			cell.appendChild(row);
		});

		grid.appendChild(cell);
	});

	card.appendChild(grid);

	// Background keyboard watermark
	const bgKeyboard = document.createElement('div');
	bgKeyboard.style.cssText = 'position:absolute;bottom:48px;right:-114px;pointer-events:none;transform:rotate(-8deg);opacity:0.04;';
	const highlight = new Set('NOMERCY'.split(''));
	const rows = [
		'1234567890-='.split(''),
		'QWERTYUIOP'.split(''),
		'ASDFGHJKL'.split(''),
		'ZXCVBNM'.split(''),
	];
	const offsets = [0, 10, 22, 38];
	let bgSvgKeys = '';
	for (let r = 0; r < rows.length; r++) {
		for (let k = 0; k < rows[r].length; k++) {
			const x = k * 28 + offsets[r];
			const y = r * 30;
			const letter = rows[r][k];
			const isHl = highlight.has(letter);
			bgSvgKeys += `<rect x="${x}" y="${y}" width="24" height="24" rx="4" fill="white" opacity="${isHl ? '1' : '0.35'}"/>`;
			if (isHl) {
				bgSvgKeys += `<text x="${x + 12}" y="${y + 16}" text-anchor="middle" fill="black" font-size="11" font-family="monospace" font-weight="700" opacity="0.7">${letter}</text>`;
			}
		}
	}
	bgSvgKeys += '<rect x="110" y="120" width="160" height="24" rx="4" fill="white" opacity="0.35"/>';
	bgKeyboard.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 412 164" width="450" height="180">${bgSvgKeys}</svg>`;
	card.appendChild(bgKeyboard);

	// Hint
	const hint = document.createElement('p');
	hint.textContent = 'Press ? or Esc to close';
	hint.style.cssText = 'margin:12px 0 0 0;font-size:13px;color:rgba(255,255,255,0.35);text-align:center;position:relative;';
	card.appendChild(hint);

	keybindsDialog.appendChild(card);
	document.body.appendChild(keybindsDialog);

	keybindsDialog.addEventListener('click', (e) => {
		if (e.target === keybindsDialog)
			keybindsDialog.close();
	});
}

function toggleKeybindsDialog() {
	buildKeybindsDialog();
	if (keybindsDialog.open) {
		keybindsDialog.close();
	}
	else {
		keybindsDialog.showModal();
	}
}

btnKeybinds.addEventListener('click', toggleKeybindsDialog);

document.addEventListener('keyup', (e) => {
	if (document.activeElement?.nodeName === 'INPUT')
		return;
	if (e.key === '?')
		toggleKeybindsDialog();
});

// ── Log all events ────────────────────────────────────────────────────────
const ALL_EVENTS = (function () {
	const evts = [];
	Object.values(LOG_CATEGORIES).forEach((c) => {
		c.events.forEach((e) => {
			if (!evts.includes(e))
				evts.push(e);
		});
	});
	// A few extras worth logging
	['playlistComplete', 'switch-season', 'cast', 'firstFrame'].forEach((e) => {
		if (!evts.includes(e))
			evts.push(e);
	});
	return evts;
})();

ALL_EVENTS.forEach((name) => {
	player.on(name, data => logEvent(name, data));
});
