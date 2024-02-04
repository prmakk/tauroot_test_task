import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const AboutWidget = () => {
    return (
        <div className="about__widget">
            <div className="about__widget-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="about__widget-info">
                <p>Lorem Ipsum is simply dummy</p>
                <p>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five
                </p>
            </div>
            <div className="about__widget-links">
                <Link to="/">
                    <svg
                        width="9.730469"
                        height="18.740234"
                        viewBox="0 0 9.73047 18.7402"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                    >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                            id=""
                            d="M9.73047 0.135254C9.42627 0.0900879 8.37891 0 7.1626 0C4.61768 0 2.87207 1.5542 2.87207 4.40356L2.87207 6.85864L0 6.85864L0 10.1924L2.87207 10.1924L2.87207 18.7402L6.31787 18.7402L6.31787 10.1924L9.17871 10.1924L9.61768 6.85864L6.31787 6.85864L6.31787 4.73022C6.31787 3.77295 6.57715 3.1084 7.9624 3.1084L9.73047 3.1084L9.73047 0.135254Z"
                            fill="#0DD0BA"
                            fillOpacity="1.000000"
                            fillRule="nonzero"
                        />
                    </svg>
                </Link>
                <Link to="/">
                    <svg
                        width="17.749023"
                        height="14.415527"
                        viewBox="0 0 17.749 14.4155"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                    >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                            id=""
                            d="M17.749 1.71191C17.0962 1.99341 16.3862 2.19604 15.6543 2.2749C16.4092 1.82446 16.9834 1.11499 17.2534 0.270264C16.5552 0.687012 15.7671 0.990967 14.9448 1.14868C14.2803 0.439209 13.3345 0 12.2871 0C10.271 0 8.64941 1.63306 8.64941 3.6377C8.64941 3.91919 8.68311 4.20068 8.73926 4.47119C5.72119 4.31348 3.0293 2.87183 1.23877 0.664551C0.92334 1.20508 0.743164 1.82446 0.743164 2.50024C0.743164 3.76147 1.38525 4.87646 2.36523 5.52979C1.76807 5.50732 1.20508 5.33838 0.720703 5.06787C0.720703 5.07935 0.720703 5.10181 0.720703 5.11304C0.720703 6.8811 1.9707 8.34521 3.6377 8.68311C3.3335 8.76196 3.00684 8.80713 2.68018 8.80713C2.44385 8.80713 2.21875 8.78442 1.99316 8.75073C2.45508 10.1924 3.79541 11.2397 5.39453 11.2734C4.14453 12.2532 2.5791 12.8276 0.878418 12.8276C0.574219 12.8276 0.292969 12.8164 0 12.7825C1.61035 13.8186 3.5249 14.4155 5.58594 14.4155C12.2759 14.4155 15.936 8.87451 15.936 4.06567C15.936 3.90796 15.936 3.75024 15.9248 3.59253C16.6343 3.07446 17.2534 2.43262 17.749 1.71191Z"
                            fill="#0DD0BA"
                            fillOpacity="1.000000"
                            fillRule="nonzero"
                        />
                    </svg>
                </Link>
                <Link to="/">
                    <svg
                        width="17.861816"
                        height="17.862061"
                        viewBox="0 0 17.8618 17.8621"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                    >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                            id="Vector"
                            d="M5.23242 0.0625C4.28174 0.107178 3.63281 0.259033 3.06592 0.481934C2.47852 0.710693 1.98096 1.01782 1.48584 1.51465C0.990723 2.01147 0.685547 2.50952 0.458496 3.09766C0.23877 3.66626 0.0898438 4.31567 0.0478516 5.26636C0.00585938 6.21729 -0.00341797 6.52295 0.000976562 8.94824C0.00585938 11.3735 0.0166016 11.6775 0.0625 12.6304C0.10791 13.5803 0.258789 14.229 0.481934 14.7966C0.710938 15.3838 1.01758 15.8811 1.51514 16.3765C2.01221 16.8718 2.50977 17.176 3.09912 17.4036C3.66699 17.623 4.31689 17.7727 5.26758 17.8145C6.21826 17.856 6.52393 17.8657 8.94873 17.8611C11.373 17.8564 11.6787 17.8457 12.6313 17.8005C13.5835 17.7554 14.229 17.603 14.7969 17.3813C15.3838 17.1516 15.8818 16.8455 16.3765 16.3481C16.8716 15.8508 17.1763 15.3525 17.4033 14.7642C17.6235 14.196 17.7729 13.5464 17.8145 12.5964C17.856 11.6433 17.8657 11.3389 17.8608 8.91382C17.8564 6.48901 17.8457 6.18481 17.8003 5.23242C17.7549 4.28003 17.604 3.6333 17.3809 3.06543C17.1514 2.47827 16.8452 1.9812 16.3481 1.4856C15.8516 0.989746 15.3525 0.685303 14.7646 0.45874C14.1958 0.239014 13.5469 0.0891113 12.5962 0.0480957C11.6455 0.00683594 11.3394 -0.00366211 8.91406 0.000976562C6.48828 0.00561523 6.18506 0.0161133 5.23242 0.0625ZM5.33643 16.2078C4.46582 16.1699 3.99316 16.0251 3.67773 15.9041C3.26074 15.7432 2.96338 15.5488 2.64941 15.238C2.33545 14.927 2.14258 14.6287 1.97949 14.2124C1.85693 13.8972 1.70996 13.425 1.66895 12.5542C1.625 11.613 1.61523 11.3303 1.61035 8.94604C1.60498 6.56152 1.61426 6.2793 1.65527 5.33789C1.69287 4.46777 1.83838 3.99438 1.95898 3.67944C2.12012 3.26172 2.31348 2.96509 2.625 2.65112C2.93701 2.3374 3.23438 2.14404 3.65088 1.9812C3.96582 1.8584 4.43799 1.71216 5.30859 1.67065C6.25049 1.62622 6.53271 1.61719 8.9165 1.61206C11.3008 1.60693 11.5835 1.61572 12.5259 1.65723C13.396 1.69507 13.8696 1.83911 14.1841 1.96094C14.6016 2.12158 14.8984 2.3147 15.2124 2.62695C15.5264 2.93921 15.7197 3.2356 15.8828 3.65308C16.0059 3.96704 16.1519 4.43896 16.1929 5.31006C16.2378 6.25195 16.248 6.53418 16.252 8.91821C16.2563 11.302 16.248 11.5852 16.207 12.5264C16.1689 13.397 16.0244 13.8701 15.9033 14.1855C15.7422 14.6025 15.5483 14.8999 15.2368 15.2136C14.9248 15.5273 14.6279 15.7207 14.2109 15.8835C13.8965 16.0061 13.4238 16.1526 12.5542 16.1941C11.6123 16.2385 11.3301 16.2478 8.94482 16.2529C6.56006 16.2581 6.27881 16.2483 5.33691 16.2078L5.33643 16.2078ZM12.6172 4.15771C12.6177 4.36963 12.6812 4.5769 12.7988 4.75293C12.917 4.92896 13.0845 5.06592 13.2808 5.14673C13.4766 5.22754 13.6924 5.24829 13.8999 5.20679C14.1079 5.16504 14.2988 5.0625 14.4482 4.91235C14.5981 4.76221 14.6997 4.57104 14.7407 4.36304C14.7817 4.15503 14.7598 3.9397 14.6787 3.7439C14.5972 3.5481 14.4595 3.3811 14.2827 3.26367C14.1064 3.14624 13.8989 3.08374 13.687 3.08423C13.4028 3.08472 13.1304 3.19824 12.9297 3.39941C12.7295 3.60083 12.6167 3.87354 12.6172 4.15771ZM4.34521 8.93994C4.35059 11.4729 6.40723 13.5215 8.93994 13.5166C11.4722 13.5117 13.522 11.4548 13.5171 8.92212C13.5122 6.38916 11.4551 4.34009 8.92236 4.34497C6.38965 4.3501 4.34033 6.40747 4.34521 8.93994ZM5.9541 8.93677C5.95264 8.3479 6.12646 7.77197 6.45264 7.28174C6.77881 6.7915 7.24268 6.40894 7.78662 6.18262C8.33008 5.9563 8.92822 5.896 9.50635 6.00977C10.084 6.12354 10.6147 6.40601 11.0322 6.82153C11.4492 7.23706 11.7339 7.76709 11.8501 8.34424C11.9658 8.92163 11.9082 9.52026 11.6841 10.0647C11.4595 10.6091 11.0791 11.0747 10.5898 11.4028C10.1011 11.731 9.52588 11.9067 8.93701 11.908C8.5459 11.9087 8.15869 11.8325 7.79736 11.6836C7.43555 11.5347 7.10693 11.3162 6.83008 11.0403C6.55322 10.7644 6.33301 10.4365 6.18262 10.0757C6.03271 9.7146 5.95459 9.32764 5.9541 8.93677Z"
                            fill="#0DD0BA"
                            fillOpacity="1.000000"
                            fillRule="nonzero"
                        />
                    </svg>
                </Link>
                <Link to="/">
                    <svg
                        width="21.787598"
                        height="15.310303"
                        viewBox="0 0 21.7876 15.3103"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                    >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                            id="Subtract"
                            d="M19.4062 0.457031C20.3438 0.708496 21.082 1.44971 21.3325 2.39087C21.7876 4.09644 21.7876 7.65527 21.7876 7.65527C21.7876 7.65527 21.7876 11.2139 21.3325 12.9197C21.082 13.8606 20.3438 14.6018 19.4062 14.8533C17.707 15.3103 10.894 15.3103 10.894 15.3103C10.894 15.3103 4.08057 15.3103 2.38135 14.8533C1.44434 14.6018 0.706055 13.8606 0.455078 12.9197C0 11.2139 0 7.65527 0 7.65527C0 7.65527 0 4.09644 0.455078 2.39087C0.706055 1.44971 1.44434 0.708496 2.38135 0.457031C4.08057 0 10.894 0 10.894 0C10.894 0 17.707 0 19.4062 0.457031ZM14.3579 7.65527L8.66309 10.8862L8.66309 4.42407L14.3579 7.65527Z"
                            fill="#0DD0BA"
                            fillOpacity="1.000000"
                            fillRule="evenodd"
                        />
                    </svg>
                </Link>
                <Link to="/">
                    <svg
                        width="26.793457"
                        height="21.689697"
                        viewBox="0 0 26.7935 21.6897"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                    >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                            id="Union"
                            d="M5.47754 0.671387C5.47949 0.492676 5.55273 0.322021 5.68115 0.196289C5.80957 0.0705566 5.98291 0 6.16357 0L20.6294 0C20.8101 -0.000244141 20.9834 0.0703125 21.1113 0.196289C21.2393 0.322021 21.312 0.49292 21.313 0.671387L21.313 4.36182L26.334 5.698C26.6704 5.78467 26.8657 6.15479 26.7681 6.51562L23.7476 17.6689L23.7466 21.011C23.7466 21.1909 23.6743 21.3635 23.5459 21.491C23.417 21.6182 23.2427 21.6897 23.0605 21.6897L3.72949 21.6897C3.54785 21.6897 3.37305 21.6182 3.24463 21.491C3.11572 21.3635 3.04346 21.1909 3.04346 21.011L3.04346 15.1785L0.0444336 7.02686C-0.0844727 6.67603 0.0776367 6.29272 0.404297 6.17529L5.47754 4.34839L5.47754 0.671387ZM15.8916 2.91919L20.375 4.1123L20.375 0.925781L6.41504 0.925781L6.41504 4.01074L14.543 1.08374C14.8701 0.966309 15.2427 1.15698 15.3721 1.50781L15.8916 2.91919ZM23.5488 6.07178C23.4204 5.94458 23.2456 5.87305 23.064 5.87305L16.9785 5.87305L16.2827 3.98218L25.7979 6.51416L23.748 14.0818L23.75 6.55176C23.75 6.37158 23.6777 6.19897 23.5488 6.07178ZM1.01074 6.94214L3.04346 12.4668L3.04346 6.55176C3.04346 6.41309 3.08643 6.27905 3.16455 6.1665L1.01074 6.94214ZM14.5767 2.05713L15.9805 5.87305L3.97998 5.87305L14.5767 2.05713ZM20.1738 11.5747C20.1367 11.5898 20.0972 11.5977 20.0571 11.5977L14.272 11.5977L14.272 10.0916L20.0571 10.0916C20.1382 10.0916 20.2153 10.1233 20.2725 10.1797C20.3296 10.2361 20.3618 10.3127 20.3618 10.3926L20.3618 11.2959C20.3618 11.3354 20.354 11.3748 20.3389 11.4114C20.3232 11.448 20.3013 11.4812 20.2729 11.5093C20.2446 11.5374 20.2109 11.5596 20.1738 11.5747ZM20.2725 17.2327C20.2153 17.2891 20.1377 17.3208 20.0571 17.3208L14.272 17.3208L14.272 15.8147L20.0571 15.8147C20.1382 15.8147 20.2153 15.8464 20.2725 15.9028C20.3296 15.9592 20.3618 16.0359 20.3618 16.1157L20.3618 17.02C20.3618 17.0999 20.3296 17.1763 20.2725 17.2327ZM21.186 14.3706C21.1289 14.427 21.0513 14.4587 20.9707 14.4587L14.272 14.4587L14.272 12.9524L20.9707 12.9524C21.0513 12.9526 21.1289 12.9844 21.186 13.0408C21.2432 13.0974 21.2749 13.1738 21.2754 13.2537L21.2754 14.1575C21.2754 14.2373 21.2432 14.314 21.186 14.3706ZM12.5938 13.7888C12.5933 13.5596 12.5737 13.3308 12.5361 13.1045L9.09619 13.1045L9.09619 14.4619L11.0664 14.4619C10.9038 15.2893 10.1689 15.8892 9.09619 15.8892C7.90039 15.8892 6.93262 14.8884 6.93262 13.7053C6.93262 12.5222 7.90234 11.5215 9.09619 11.5215C9.61719 11.5132 10.1206 11.7078 10.498 12.0635L11.5405 11.0317C10.8789 10.4177 10.0029 10.0808 9.0957 10.092C8.6123 10.0862 8.13232 10.1755 7.68408 10.3545C7.23584 10.5337 6.82764 10.7991 6.48389 11.1353C6.13965 11.4714 5.8667 11.8718 5.68018 12.3132C5.49414 12.7546 5.39795 13.2283 5.39795 13.7065C5.39795 14.1851 5.49414 14.6587 5.68018 15.1001C5.8667 15.5415 6.13965 15.9419 6.48389 16.2781C6.82764 16.6143 7.23584 16.8796 7.68408 17.0588C8.13232 17.2378 8.6123 17.3271 9.0957 17.3213C11.2065 17.3213 12.5938 15.8538 12.5938 13.7888Z"
                            fill="#0DD0BA"
                            fillOpacity="1.000000"
                            fillRule="evenodd"
                        />
                    </svg>
                </Link>
                <Link to="/">
                    <svg
                        width="17.862305"
                        height="17.862061"
                        viewBox="0 0 17.8623 17.8621"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                    >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                            id="Vector"
                            d="M0 0L0 3.24756C8.0625 3.24756 14.6143 9.7998 14.6143 17.8621L17.8623 17.8621C17.8623 7.99731 9.86475 0 0 0ZM0 5.68335L0 8.93115C4.92822 8.93115 8.93115 12.9338 8.93115 17.8621L12.1787 17.8621C12.1787 11.1394 6.72266 5.68335 0 5.68335ZM2.43555 12.9905C1.78955 12.9905 1.17041 13.2473 0.713379 13.7041C0.256836 14.1609 0 14.7803 0 15.4263C0 16.0723 0.256836 16.6919 0.713379 17.1487C1.17041 17.6055 1.78955 17.8621 2.43555 17.8621C3.08154 17.8621 3.70117 17.6055 4.1582 17.1487C4.61475 16.6919 4.87158 16.0723 4.87158 15.4263C4.87158 14.7803 4.61475 14.1609 4.1582 13.7041C3.70117 13.2473 3.08154 12.9905 2.43555 12.9905Z"
                            fill="#0DD0BA"
                            fillOpacity="1.000000"
                            fillRule="nonzero"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default AboutWidget;
