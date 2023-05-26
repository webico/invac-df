import Link from 'next/link';
import { useEffect, useState } from 'react';
import UserHelpLinks from './UserHelpLinks';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const body = document.body,
      header = document.querySelector('.header__container');

    setWindowWidth(window.innerWidth);

    if (menu && windowWidth < 1280) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }

    window.addEventListener('scroll', () => {
      0 !== window.scrollY ? header.classList.add('scroll') : header.classList.remove('scroll');
    }
    );
  }, [menu]);

  return (
    <header className={`header ${menu ? '__open' : ''}`}>
      <div className="header__container">

        {/* <div className="header_logo"> */}
        <Link href='/' className='logo'>
          <svg width="82" height="32" viewBox="0 0 82 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="nvac">
              <path d="M39.3181 6.4175V21.3831H35.9055L30.4631 13.5203H30.3748V21.3831H26.2856V6.4175H29.757L35.1112 14.2511H35.2289V6.4175H39.3181Z" fill="#AECAFF" />
              <path d="M44.3355 6.4175L47.4245 16.9694H47.5421L50.6311 6.4175H55.2499L50.2781 21.3831H44.6885L39.7167 6.4175H44.3355Z" fill="#AECAFF" />
              <path d="M57.1102 21.3831H52.6974L57.6692 6.4175H63.2588L68.2305 21.3831H63.8177L60.5228 10.5389H60.4051L57.1102 21.3831ZM56.2865 15.4787H64.5826V18.5186H56.2865V15.4787Z" fill="#AECAFF" />
              <path d="M82 12.0296H77.852C77.8225 11.6886 77.7441 11.3792 77.6166 11.1016C77.494 10.8239 77.3224 10.5852 77.1018 10.3854C76.886 10.1808 76.6237 10.0249 76.3148 9.91776C76.0059 9.80571 75.6554 9.74968 75.2631 9.74968C74.5767 9.74968 73.9956 9.91532 73.52 10.2466C73.0493 10.5779 72.6914 11.0528 72.4463 11.6715C72.206 12.2902 72.0859 13.0332 72.0859 13.9003C72.0859 14.8162 72.2085 15.5834 72.4536 16.2021C72.7037 16.816 73.064 17.2788 73.5347 17.5905C74.0054 17.8975 74.5718 18.0509 75.2337 18.0509C75.6112 18.0509 75.9495 18.0046 76.2486 17.9121C76.5477 17.8146 76.8076 17.6758 77.0282 17.4956C77.2489 17.3153 77.4278 17.0985 77.5651 16.8452C77.7073 16.587 77.8029 16.2971 77.852 15.9756L82 16.0048C81.951 16.6381 81.772 17.2836 81.4631 17.9413C81.1542 18.5941 80.7154 19.1982 80.1466 19.7535C79.5828 20.304 78.8841 20.7474 78.0505 21.0835C77.217 21.4196 76.2486 21.5877 75.1454 21.5877C73.7627 21.5877 72.5223 21.293 71.424 20.7035C70.3306 20.114 69.4651 19.2469 68.8277 18.1021C68.1952 16.9572 67.879 15.5567 67.879 13.9003C67.879 12.2342 68.2026 10.8312 68.8498 9.69122C69.497 8.54639 70.3698 7.68168 71.4681 7.09709C72.5664 6.50762 73.7922 6.21289 75.1454 6.21289C76.0966 6.21289 76.9718 6.34199 77.7711 6.60018C78.5703 6.85838 79.2714 7.23593 79.8745 7.73283C80.4776 8.22487 80.963 8.83138 81.3307 9.55238C81.6985 10.2734 81.9216 11.0991 82 12.0296Z" fill="#AECAFF" />
            </g>
            <path id="branco" d="M16.2967 4.77551V5.32856C16.2967 5.72563 16.6196 6.04752 17.0181 6.04752C17.4165 6.04752 17.7395 6.36942 17.7395 6.76649V7.48546C17.7395 7.97416 17.3419 8.37034 16.8516 8.37034H15.8527C15.3624 8.37034 14.9648 8.76651 14.9648 9.25522V20.5375C14.9648 21.0262 15.3624 21.4223 15.8527 21.4223H23.1777C23.6681 21.4223 24.0656 21.0262 24.0656 20.5375V9.25522C24.0656 8.76651 23.6681 8.37034 23.1777 8.37034H22.4008C21.9105 8.37034 21.513 7.97416 21.513 7.48546V6.73884C21.513 6.35704 21.8235 6.04752 22.2066 6.04752C22.5897 6.04752 22.9003 5.73801 22.9003 5.35621V4.77551C22.9003 4.2868 22.5027 3.89062 22.0124 3.89062H17.1845C16.6942 3.89062 16.2967 4.2868 16.2967 4.77551Z" fill="white" />
            <path id="branco" fillRule="evenodd" clipRule="evenodd" d="M18.3603 5.21795C18.7957 5.59317 19.0713 6.14776 19.0713 6.76649V7.48546C19.0713 8.70722 18.0775 9.69766 16.8516 9.69766H16.2967V20.095H22.7338V9.69766H22.4008C21.1749 9.69766 20.1811 8.70722 20.1811 7.48546V6.73884C20.1811 6.13216 20.4497 5.58799 20.8747 5.21795H18.3603ZM16.2967 5.32856V4.77551C16.2967 4.2868 16.6942 3.89062 17.1845 3.89062H22.0124C22.5027 3.89062 22.9003 4.2868 22.9003 4.77551V5.35621C22.9003 5.73801 22.5897 6.04752 22.2066 6.04752C21.8235 6.04752 21.513 6.35704 21.513 6.73884V7.48546C21.513 7.97416 21.9105 8.37034 22.4008 8.37034H23.1777C23.6681 8.37034 24.0656 8.76651 24.0656 9.25522V20.5375C24.0656 21.0262 23.6681 21.4223 23.1777 21.4223H15.8527C15.3624 21.4223 14.9648 21.0262 14.9648 20.5375V9.25522C14.9648 8.76651 15.3624 8.37034 15.8527 8.37034H16.8516C17.3419 8.37034 17.7395 7.97416 17.7395 7.48546V6.76649C17.7395 6.36942 17.4165 6.04752 17.0181 6.04752C16.6196 6.04752 16.2967 5.72563 16.2967 5.32856Z" fill="white" />
            <path id="gota" d="M19.6001 12.6288C19.1175 13.1629 16.4716 16.9683 19.5116 17.0518C22.7107 17.1396 20.066 13.0961 19.6001 12.6288Z" fill="#2D88DD" />
            <path fillRule="evenodd" clipRule="evenodd" d="M19.5938 12.3877L19.7179 12.5121C19.8494 12.644 20.1105 12.9989 20.3757 13.4451C20.6429 13.8948 20.9243 14.4541 21.0894 15.0009C21.252 15.5395 21.3141 16.1059 21.0881 16.5401C20.8515 16.9947 20.3376 17.2407 19.5067 17.2179C18.7129 17.1961 18.2319 16.9269 18.0232 16.4695C17.8242 16.0332 17.9025 15.4811 18.0766 14.9574C18.2531 14.426 18.5413 13.8854 18.8132 13.4466C19.0846 13.0086 19.3464 12.6616 19.4761 12.518L19.5938 12.3877ZM19.602 12.8872C19.4727 13.0529 19.2887 13.3109 19.0965 13.6209C18.8316 14.0484 18.5579 14.5645 18.3926 15.0617C18.2249 15.5666 18.1816 16.0148 18.3263 16.3322C18.4615 16.6285 18.7897 16.8663 19.5159 16.8862C20.2846 16.9073 20.6398 16.6808 20.7925 16.3873C20.9558 16.0735 20.9275 15.6163 20.7705 15.0965C20.6161 14.585 20.3489 14.0514 20.0892 13.6142C19.9028 13.3005 19.7254 13.0451 19.602 12.8872Z" fill="#2D88DD" />
            <path id="branco" d="M10.3685 5.40494C10.0704 5.63688 9.7807 5.88536 9.50079 6.15042C9.15911 6.47399 8.84143 6.81328 8.54781 7.16609C7.15311 8.84196 6.30138 10.8228 5.9987 12.8715C5.86124 13.8019 5.83703 14.7464 5.92664 15.6826C6.12394 17.744 6.87307 19.7656 8.18008 21.5102C8.45523 21.8775 8.75511 22.2325 9.07977 22.5731C9.40443 22.9136 9.74487 23.2302 10.0989 23.5228C11.8056 24.9337 13.8276 25.787 15.9161 26.0765C16.7352 26.1901 17.5646 26.2169 18.3892 26.1566C18.5239 26.1468 18.6385 26.2555 18.6322 26.39L18.5163 28.8485C18.5106 28.9692 18.6031 29.0721 18.7241 29.0797L19.7013 29.1407C19.8159 29.1478 19.9062 29.241 19.9093 29.3555L19.9508 30.8874C19.9543 31.0133 19.8516 31.1167 19.7253 31.1146L14.4164 31.0271C14.2976 31.0251 14.2014 30.9303 14.1982 30.8119L14.1564 29.2714C14.1531 29.1525 14.2448 29.0524 14.3638 29.0447L15.6607 28.9604C15.776 28.9529 15.8662 28.8586 15.8682 28.7436L15.9161 26.0765C13.8276 25.787 11.8056 24.9337 10.0989 23.5228L8.12753 25.3896C8.03866 25.4738 8.03506 25.6138 8.11951 25.7024L8.72262 26.335C8.80706 26.4236 8.80347 26.5636 8.7146 26.6477L7.60158 27.7017C7.51271 27.7859 7.37221 27.7823 7.28777 27.6937L3.85696 24.0952C3.77252 24.0066 3.77611 23.8666 3.86498 23.7825L4.978 22.7285C5.06687 22.6443 5.20737 22.6479 5.29181 22.7365L5.89492 23.3691C5.97936 23.4576 6.11986 23.4612 6.20873 23.377L8.18008 21.5102C6.87307 19.7656 6.12394 17.744 5.92664 15.6826L3.15538 15.6017C3.03252 15.5981 2.93012 15.6947 2.92698 15.8171L2.90407 16.711C2.90088 16.8354 2.79547 16.9326 2.67081 16.9263L1.09876 16.846C0.976944 16.8398 0.882987 16.7368 0.88836 16.6153L1.11542 11.4828C1.12085 11.36 1.22568 11.2652 1.34883 11.2716L2.8328 11.3494C2.94994 11.3556 3.04206 11.4515 3.0431 11.5684L3.05271 12.641C3.05379 12.7621 3.15229 12.8598 3.27375 12.8603L5.9987 12.8715C6.30138 10.8228 7.15311 8.84196 8.54781 7.16609L6.72519 5.25436C6.64075 5.16579 6.50025 5.16221 6.41138 5.24637L5.7235 5.89776C5.63463 5.98192 5.49413 5.97834 5.40969 5.88977L4.30163 4.72755C4.21719 4.63898 4.22078 4.49896 4.30965 4.4148L7.97351 0.94525C8.06238 0.861093 8.20288 0.864671 8.28732 0.953241L9.39538 2.11547C9.47982 2.20404 9.47623 2.34406 9.38736 2.42822L8.75262 3.02929C8.66375 3.11345 8.66016 3.25347 8.7446 3.34204L10.395 5.07317C10.4867 5.16926 10.4734 5.32338 10.3685 5.40494Z" fill="white" />
            <path id="branco" fillRule="evenodd" clipRule="evenodd" d="M7.36168 0.30425C7.80603 -0.116536 8.50852 -0.0986471 8.93073 0.344204L10.0388 1.50643C10.461 1.94928 10.443 2.6494 9.9987 3.07018L9.8467 3.21412L11.0385 4.46413C11.5001 4.94832 11.4227 5.70778 10.9146 6.10299C10.639 6.31733 10.3712 6.5471 10.1121 6.79239C9.79594 7.09181 9.50223 7.40553 9.23097 7.73148C7.94323 9.27883 7.15656 11.1077 6.87687 13.0008C6.74982 13.8608 6.72744 14.7337 6.81026 15.599C6.99259 17.504 7.68451 19.3705 8.89129 20.9813C9.1455 21.3207 9.42274 21.6489 9.72318 21.964C10.0236 22.2792 10.3384 22.5719 10.6655 22.8422C12.2413 24.1449 14.1082 24.933 16.0381 25.2006C16.7952 25.3055 17.5618 25.3303 18.3239 25.2746C18.9766 25.2269 19.5508 25.7542 19.5189 26.432L19.4337 28.2379L19.7565 28.258C20.3299 28.2938 20.781 28.7597 20.7966 29.332L20.8381 30.864C20.8552 31.4936 20.3422 32.0102 19.7104 31.9998L14.4015 31.9123C13.8074 31.9026 13.3264 31.4282 13.3104 30.8363L13.2686 29.2958C13.2524 28.7015 13.7105 28.2008 14.3058 28.1621L14.9912 28.1176L15.0145 26.8205C13.2934 26.471 11.6328 25.7594 10.1569 24.6888L9.22161 25.5745L9.36603 25.7259C9.78824 26.1688 9.77029 26.8689 9.32594 27.2897L8.21292 28.3437C7.76857 28.7645 7.06608 28.7466 6.64387 28.3037L3.21306 24.7052C2.79085 24.2624 2.8088 23.5622 3.25315 23.1415L4.36617 22.0875C4.81052 21.6667 5.51301 21.6846 5.93522 22.1274L6.07964 22.2789L7.01494 21.3932C6.03589 19.8977 5.41254 18.2427 5.14175 16.5454L3.79725 16.5062L3.79141 16.7341C3.77547 17.3559 3.24842 17.8423 2.62515 17.8105L1.05309 17.7302C0.444015 17.6991 -0.0257667 17.1841 0.00109697 16.5768L0.228153 11.4443C0.255315 10.8303 0.77945 10.3562 1.39524 10.3885L2.87921 10.4663C3.46486 10.497 3.92547 10.9765 3.9307 11.561L3.93444 11.9786L5.25623 11.984C5.61273 10.298 6.32101 8.67212 7.37818 7.22465L6.53997 6.34547L6.33484 6.53973C5.89048 6.96052 5.188 6.94263 4.76579 6.49977L3.65773 5.33755C3.23552 4.8947 3.25347 4.19458 3.69782 3.7738L7.36168 0.30425ZM8.52979 5.86328C8.64667 5.74347 8.76639 5.62549 8.88896 5.50942C9.01153 5.39336 9.13587 5.28022 9.26189 5.17L8.1007 3.95204C7.67849 3.50919 7.69644 2.80907 8.14079 2.38829L8.29278 2.24436L8.10211 2.04436L5.40373 4.59962L5.59441 4.79962L5.79955 4.60537C6.2439 4.18458 6.94639 4.20247 7.3686 4.64532L8.52979 5.86328ZM5.01249 13.7528L3.26985 13.7456C2.66255 13.7431 2.17004 13.2546 2.16462 12.6494L2.1606 12.2008L1.97261 12.1909L1.80426 15.9965L2.03368 16.0082L2.03915 15.795C2.05485 15.1827 2.56683 14.6997 3.18114 14.7176L4.9871 14.7704C4.98178 14.431 4.99025 14.0915 5.01249 13.7528ZM8.0953 22.8114L6.82007 24.019C6.37572 24.4398 5.67323 24.4219 5.25102 23.9791L5.1066 23.8276L4.95906 23.9673L7.47249 26.6036L7.62003 26.4639L7.47561 26.3124C7.0534 25.8695 7.07134 25.1694 7.5157 24.7486L8.79093 23.541C8.67071 23.4246 8.55233 23.3052 8.43587 23.1831C8.31941 23.0609 8.20589 22.937 8.0953 22.8114ZM16.7864 27.0514L16.7557 28.7599C16.7454 29.3351 16.2943 29.8064 15.7183 29.8439L15.061 29.8866L15.0683 30.1533L19.0442 30.2189L19.0379 29.9864L18.6683 29.9633C18.0633 29.9255 17.6007 29.4109 17.6291 28.8074L17.711 27.072C17.4026 27.0764 17.0942 27.0695 16.7864 27.0514ZM19.063 30.9118L19.063 30.9105Z" fill="white" />
          </svg>

        </Link>
        <button className='header__button' onClick={() => setMenu(!menu)}><div></div><span>menu</span></button>
        {/* </div> */}

        <div className="overlay">
          <div className="menu">
            <div className='divisoria'>
              <div className='divisoria_menu' aria-hidden="true"></div>
              <span>Menu</span>
            </div>
            <nav>
              <ul>
                <li><Link href='/' onClick={() => setMenu(!menu)}
                  className={`btn__menu ${router.pathname == '/' ? 'btn__menu_ativo' : ''}`}
                >
                  <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.50016 14.8334H14.5002V6.6313L9.50016 2.08584L4.50016 6.6313V14.8334ZM15.3335 16.5001H3.66683C3.2066 16.5001 2.8335 16.127 2.8335 15.6667V8.16674H0.333496L8.93958 0.34301C9.25741 0.0540595 9.74291 0.0540595 10.0607 0.34301L18.6668 8.16674H16.1668V15.6667C16.1668 16.127 15.7937 16.5001 15.3335 16.5001ZM5.75016 9.83341H7.41683C7.41683 10.984 8.34958 11.9167 9.50016 11.9167C10.6507 11.9167 11.5835 10.984 11.5835 9.83341H13.2502C13.2502 11.9045 11.5712 13.5834 9.50016 13.5834C7.4291 13.5834 5.75016 11.9045 5.75016 9.83341Z" fill="#96A6C7" />
                  </svg>
                  <span>Página Inicial</span>
                </Link>
                </li>

                <li><Link href='/agendamento' onClick={() => setMenu(!menu)}
                  className={`btn__menu ${router.pathname == '/agendamento' ? 'btn__menu_ativo' : ''}`}
                >
                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.99984 0.833328V2.49999H10.9998V0.833328H12.6665V2.49999H15.9998C16.4601 2.49999 16.8332 2.87309 16.8332 3.33333V16.6667C16.8332 17.1269 16.4601 17.5 15.9998 17.5H0.999837C0.539604 17.5 0.166504 17.1269 0.166504 16.6667V3.33333C0.166504 2.87309 0.539604 2.49999 0.999837 2.49999H4.33317V0.833328H5.99984ZM15.1665 9.16666H1.83317V15.8333H15.1665V9.16666ZM5.1665 10.8333V12.5H3.49984V10.8333H5.1665ZM9.33317 10.8333V12.5H7.6665V10.8333H9.33317ZM13.4998 10.8333V12.5H11.8332V10.8333H13.4998ZM4.33317 4.16666H1.83317V7.49999H15.1665V4.16666H12.6665V5.83333H10.9998V4.16666H5.99984V5.83333H4.33317V4.16666Z" fill="#96A6C7" />
                  </svg>

                  <span>Agendamento</span>
                </Link>
                </li>

                <li><Link href='/dados-vacinais' onClick={() => setMenu(!menu)}
                  className={`btn__menu ${router.pathname == '/dados-vacinais' ? 'btn__menu_ativo' : ''}`}
                >
                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5651 5.64927L15.3866 6.82778L13.6188 5.06001L11.851 6.82778L14.7973 9.77409L13.6188 10.9526L13.0296 10.3633L7.72624 15.6666H3.01219L1.24443 17.4344L0.065918 16.2558L1.83368 14.4881V9.77409L7.13699 4.47076L6.54773 3.8815L7.72624 2.70299L10.6725 5.64927L12.4402 3.8815L10.6725 2.11373L11.851 0.935226L16.5651 5.64927ZM11.851 9.18484L8.31549 5.64927L7.13699 6.82778L8.90474 8.59559L7.72624 9.77409L5.95847 8.00625L4.77996 9.18484L6.54773 10.9526L5.36922 12.1311L3.60145 10.3633L3.50035 10.4644V13.9999H7.03591L11.851 9.18484Z" fill="#96A6C7" />
                  </svg>
                  <span>Dados Vacinais</span>
                </Link>
                </li>

                <li><Link href='/mapa-de-casos' onClick={() => setMenu(!menu)}
                  className={`btn__menu ${router.pathname == '/mapa-de-casos' ? 'btn__menu_ativo' : ''}`}
                >
                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.166504 3.16667L5.99984 0.666666L10.9998 3.16667L16.2523 0.915583C16.4639 0.824933 16.7088 0.922908 16.7995 1.13442C16.8217 1.18629 16.8332 1.24213 16.8332 1.29856V14.8333L10.9998 17.3333L5.99984 14.8333L0.747304 17.0844C0.535787 17.1751 0.290846 17.0771 0.200196 16.8656C0.177962 16.8137 0.166504 16.7578 0.166504 16.7014V3.16667ZM11.8332 15.1629L15.1665 13.7343V3.19423L11.8332 4.6228V15.1629ZM10.1665 15.0533V4.61339L6.83317 2.94672V13.3866L10.1665 15.0533ZM5.1665 13.3772V2.83709L1.83317 4.26566V14.8057L5.1665 13.3772Z" fill="#96A6C7" />
                  </svg>
                  <span>Mapa de Casos</span>
                </Link>
                </li>

                <li><Link href='/faq' onClick={() => setMenu(!menu)}
                  className={`btn__menu ${router.pathname == '/faq' ? 'btn__menu_ativo' : ''}`}
                >
                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.49984 17.3333C3.89746 17.3333 0.166504 13.6023 0.166504 9C0.166504 4.39763 3.89746 0.666668 8.49984 0.666668C13.1022 0.666668 16.8332 4.39763 16.8332 9C16.8332 13.6023 13.1022 17.3333 8.49984 17.3333ZM8.49984 15.6667C12.1818 15.6667 15.1665 12.6819 15.1665 9C15.1665 5.3181 12.1818 2.33333 8.49984 2.33333C4.81794 2.33333 1.83317 5.3181 1.83317 9C1.83317 12.6819 4.81794 15.6667 8.49984 15.6667ZM7.6665 11.5H9.33317V13.1667H7.6665V11.5ZM9.33317 10.1293V10.6667H7.6665V9.41667C7.6665 8.95642 8.03959 8.58333 8.49984 8.58333C9.19017 8.58333 9.74984 8.02367 9.74984 7.33333C9.74984 6.64298 9.19017 6.08333 8.49984 6.08333C7.89342 6.08333 7.38784 6.51519 7.27384 7.08814L5.63926 6.76122C5.90515 5.42433 7.08484 4.41667 8.49984 4.41667C10.1107 4.41667 11.4165 5.7225 11.4165 7.33333C11.4165 8.65458 10.5379 9.77067 9.33317 10.1293Z" fill="#96A6C7" />
                  </svg>
                  <span>Dúvidas Frequentes</span>
                </Link>
                </li>
              </ul>
            </nav>

            <div className='menu_instalacao'>
              <button className='btn_principal'>Instalar Aplicativo</button>

            </div>

            <div className='divisoria'>
              <span className='divisoria_ajuda'>Ajuda</span>
            </div>

            <UserHelpLinks />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

