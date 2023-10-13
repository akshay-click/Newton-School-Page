const sideItems = [
  [
    "Course",
    `<svg class="menu-svg" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.33317 15.0834V10.0834H10.6665V15.0834H14.8332V8.41675H17.3332L8.99984 0.916748L0.666504 8.41675H3.1665V15.0834H7.33317Z" fill="currentColor"></path></svg>`,
  ],
  [
    "My Timeline",
    `<svg class="menu-svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M2.33317 3.99996H0.666504V15.6666C0.666504 16.5833 1.4165 17.3333 2.33317 17.3333H13.9998V15.6666H2.33317V3.99996ZM15.6665 0.666626H5.6665C4.74984 0.666626 3.99984 1.41663 3.99984 2.33329V12.3333C3.99984 13.25 4.74984 14 5.6665 14H15.6665C16.5832 14 17.3332 13.25 17.3332 12.3333V2.33329C17.3332 1.41663 16.5832 0.666626 15.6665 0.666626ZM15.6665 12.3333H5.6665V2.33329H15.6665V12.3333ZM7.33317 6.49996H13.9998V8.16663H7.33317V6.49996ZM7.33317 8.99996H10.6665V10.6666H7.33317V8.99996ZM7.33317 3.99996H13.9998V5.66663H7.33317V3.99996Z"></path></svg>`,
  ],
  [
    "Mentor Help",
    `<svg class="menu-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_41_9046)"><path fill-rule="evenodd" d="M3.10427 15.462H11.6765C11.3911 13.1585 9.55 11.4326 7.39037 11.4326C5.23075 11.4326 3.38963 13.1585 3.10427 15.462ZM1.81592 16.087C1.81592 12.8647 4.2743 10.1826 7.39037 10.1826C10.5064 10.1826 12.9648 12.8647 12.9648 16.087C12.9648 16.4322 12.685 16.712 12.3398 16.712H2.44092C2.09574 16.712 1.81592 16.4322 1.81592 16.087Z" fill="currentColor"></path><path d="M7.39026 4.53809C6.36868 4.53809 5.54053 5.36624 5.54053 6.38781C5.54053 7.40939 6.36868 8.23754 7.39026 8.23754C8.41183 8.23754 9.23998 7.40939 9.23998 6.38781C9.23998 5.36624 8.41183 4.53809 7.39026 4.53809ZM4.29053 6.38781C4.29053 4.67588 5.67832 3.28809 7.39026 3.28809C9.10219 3.28809 10.49 4.67588 10.49 6.38781C10.49 8.09975 9.10219 9.48754 7.39026 9.48754C5.67832 9.48754 4.29053 8.09975 4.29053 6.38781Z" fill="currentColor"></path><path d="M13.5942 6.97705C12.8464 6.97705 12.2402 7.58326 12.2402 8.33107C12.2402 9.07887 12.8464 9.68508 13.5942 9.68508C14.3421 9.68508 14.9483 9.07887 14.9483 8.33107C14.9483 7.58326 14.3421 6.97705 13.5942 6.97705ZM10.9902 8.33107C10.9902 6.89291 12.1561 5.72705 13.5942 5.72705C15.0324 5.72705 16.1983 6.89291 16.1983 8.33107C16.1983 9.76922 15.0324 10.9351 13.5942 10.9351C12.1561 10.9351 10.9902 9.76922 10.9902 8.33107Z" fill="currentColor"></path><path d="M16.8746 15.4619L14.1944 15.4619C13.8493 15.4619 13.5694 15.7417 13.5694 16.0869C13.5694 16.4321 13.8493 16.7119 14.1944 16.7119L17.5586 16.7119C17.9038 16.7119 18.1836 16.4321 18.1836 16.0869C18.1836 15.4842 18.0649 14.8873 17.8342 14.3305C17.6036 13.7736 17.2655 13.2676 16.8393 12.8414C16.4131 12.4152 15.9071 12.0771 15.3502 11.8465C14.794 11.6161 13.8894 11.4111 13.0351 11.5005C12.6918 11.5364 12.4426 11.8438 12.4785 12.1871C12.5144 12.5304 12.8218 12.7796 13.1651 12.7437C13.7715 12.6803 14.466 12.8332 14.8719 13.0013C15.2771 13.1691 15.6452 13.4152 15.9554 13.7253C16.2655 14.0354 16.5115 14.4036 16.6794 14.8088C16.7668 15.0198 16.8321 15.2387 16.8746 15.4619Z" fill="currentColor"></path></g><defs><clipPath id="clip0_41_9046"><rect width="16.6667" height="16.6667" fill="white" transform="translate(1.6665 1.66699)"></rect></clipPath></defs></svg>`,
  ],
  [
    "My Target",
    `<svg class="menu-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99984 1.66663C5.40817 1.66663 1.6665 5.40829 1.6665 9.99996C1.6665 14.5916 5.40817 18.3333 9.99984 18.3333C14.5915 18.3333 18.3332 14.5916 18.3332 9.99996C18.3332 5.40829 14.5915 1.66663 9.99984 1.66663ZM9.99984 16.6666C6.32484 16.6666 3.33317 13.675 3.33317 9.99996C3.33317 6.32496 6.32484 3.33329 9.99984 3.33329C13.6748 3.33329 16.6665 6.32496 16.6665 9.99996C16.6665 13.675 13.6748 16.6666 9.99984 16.6666ZM12.4998 9.99996C12.4998 11.3833 11.3832 12.5 9.99984 12.5C8.6165 12.5 7.49984 11.3833 7.49984 9.99996C7.49984 8.61663 8.6165 7.49996 9.99984 7.49996C11.3832 7.49996 12.4998 8.61663 12.4998 9.99996Z" fill="currentColor"></path></svg>`,
  ],
  [
    "Calendar",
    `<svg class="menu-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM9 14H7V12H9V14ZM13 14H11V12H13V14ZM17 14H15V12H17V14ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18Z" fill="currentColor"></path></svg>`,
  ],
  [
    "Leaderboard",
    `<svg class="menu-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3332 9.16667V2.5H6.6665V7.5H1.6665V17.5H18.3332V9.16667H13.3332ZM8.33317 4.16667H11.6665V15.8333H8.33317V4.16667ZM3.33317 9.16667H6.6665V15.8333H3.33317V9.16667ZM16.6665 15.8333H13.3332V10.8333H16.6665V15.8333Z" fill="currentColor"></path></svg>`,
  ],
  [
    "Milestones",
    `<svg class="menu-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8915 4.10829L14.7165 5.28329C15.9165 6.49163 16.6665 8.15829 16.6665 9.99996C16.6665 13.6833 13.6832 16.6666 9.99984 16.6666C6.3165 16.6666 3.33317 13.6833 3.33317 9.99996C3.33317 6.59996 5.87484 3.79996 9.1665 3.39163V5.07496C6.79984 5.47496 4.99984 7.52496 4.99984 9.99996C4.99984 12.7583 7.2415 15 9.99984 15C12.7582 15 14.9998 12.7583 14.9998 9.99996C14.9998 8.61663 14.4415 7.36663 13.5332 6.46663L12.3582 7.64163C12.9582 8.24996 13.3332 9.08329 13.3332 9.99996C13.3332 11.8416 11.8415 13.3333 9.99984 13.3333C8.15817 13.3333 6.6665 11.8416 6.6665 9.99996C6.6665 8.44996 7.73317 7.15829 9.1665 6.78329V8.56663C8.6665 8.85829 8.33317 9.38329 8.33317 9.99996C8.33317 10.9166 9.08317 11.6666 9.99984 11.6666C10.9165 11.6666 11.6665 10.9166 11.6665 9.99996C11.6665 9.38329 11.3332 8.84996 10.8332 8.56663V1.66663H9.99984C5.39984 1.66663 1.6665 5.39996 1.6665 9.99996C1.6665 14.6 5.39984 18.3333 9.99984 18.3333C14.5998 18.3333 18.3332 14.6 18.3332 9.99996C18.3332 7.69996 17.3998 5.61663 15.8915 4.10829Z" fill="currentColor"></path></svg>`,
  ],
  [
    "Arena",
    `<svg class="menu-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.83317 13.8333L3.99984 10L7.83317 6.16667L6.6665 5L1.6665 10L6.6665 15L7.83317 13.8333ZM12.1665 13.8333L15.9998 10L12.1665 6.16667L13.3332 5L18.3332 10L13.3332 15L12.1665 13.8333Z" fill="currentColor"></path></svg>`,
  ],
  [
    "Expert Sessions",
    `<svg class="menu-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33333 10.8333C4.25 10.8333 5 10.0833 5 9.16667C5 8.25 4.25 7.5 3.33333 7.5C2.41667 7.5 1.66667 8.25 1.66667 9.16667C1.66667 10.0833 2.41667 10.8333 3.33333 10.8333ZM4.275 11.75C3.96667 11.7 3.65833 11.6667 3.33333 11.6667C2.50833 11.6667 1.725 11.8417 1.01667 12.15C0.4 12.4167 0 13.0167 0 13.6917V15H3.75V13.6583C3.75 12.9667 3.94167 12.3167 4.275 11.75ZM16.6667 10.8333C17.5833 10.8333 18.3333 10.0833 18.3333 9.16667C18.3333 8.25 17.5833 7.5 16.6667 7.5C15.75 7.5 15 8.25 15 9.16667C15 10.0833 15.75 10.8333 16.6667 10.8333ZM20 13.6917C20 13.0167 19.6 12.4167 18.9833 12.15C18.275 11.8417 17.4917 11.6667 16.6667 11.6667C16.3417 11.6667 16.0333 11.7 15.725 11.75C16.0583 12.3167 16.25 12.9667 16.25 13.6583V15H20V13.6917ZM13.5333 11.375C12.5583 10.9417 11.3583 10.625 10 10.625C8.64167 10.625 7.44167 10.95 6.46667 11.375C5.56667 11.775 5 12.675 5 13.6583V15H15V13.6583C15 12.675 14.4333 11.775 13.5333 11.375ZM6.725 13.3333C6.8 13.1417 6.83333 13.0083 7.48333 12.7583C8.29167 12.4417 9.14167 12.2917 10 12.2917C10.8583 12.2917 11.7083 12.4417 12.5167 12.7583C13.1583 13.0083 13.1917 13.1417 13.275 13.3333H6.725ZM10 6.66667C10.4583 6.66667 10.8333 7.04167 10.8333 7.5C10.8333 7.95833 10.4583 8.33333 10 8.33333C9.54167 8.33333 9.16667 7.95833 9.16667 7.5C9.16667 7.04167 9.54167 6.66667 10 6.66667ZM10 5C8.61667 5 7.5 6.11667 7.5 7.5C7.5 8.88333 8.61667 10 10 10C11.3833 10 12.5 8.88333 12.5 7.5C12.5 6.11667 11.3833 5 10 5Z" fill="currentColor"></path></svg>`,
  ],
  [
    "Doubt Forum",
    `<svg class="menu-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M14.1667 16.9917C13.925 16.9917 13.7 16.9417 13.5333 16.8667C12.9417 16.5583 12.525 16.1333 12.1083 14.8833C11.6833 13.5833 10.8833 12.975 10.1167 12.3833C9.45833 11.875 8.775 11.35 8.18333 10.275C7.74167 9.47501 7.5 8.60001 7.5 7.82501C7.5 5.49167 9.33333 3.65834 11.6667 3.65834C14 3.65834 15.8333 5.49167 15.8333 7.82501H17.5C17.5 4.55001 14.9417 1.99167 11.6667 1.99167C8.39167 1.99167 5.83333 4.55001 5.83333 7.82501C5.83333 8.87501 6.15 10.0333 6.725 11.075C7.48333 12.45 8.375 13.1417 9.1 13.7C9.775 14.2167 10.2583 14.5917 10.525 15.4083C11.025 16.925 11.6667 17.775 12.8 18.3667C13.225 18.5583 13.6917 18.6583 14.1667 18.6583C16.0083 18.6583 17.5 17.1667 17.5 15.325H15.8333C15.8333 16.2417 15.0833 16.9917 14.1667 16.9917ZM6.36667 2.52501L5.18333 1.34167C3.525 3.00001 2.5 5.29167 2.5 7.82501C2.5 10.3583 3.525 12.65 5.18333 14.3083L6.35833 13.1333C5.00833 11.775 4.16667 9.90001 4.16667 7.82501C4.16667 5.75001 5.00833 3.87501 6.36667 2.52501ZM9.58333 7.82501C9.58333 8.97501 10.5167 9.90834 11.6667 9.90834C12.8167 9.90834 13.75 8.97501 13.75 7.82501C13.75 6.67501 12.8167 5.74167 11.6667 5.74167C10.5167 5.74167 9.58333 6.67501 9.58333 7.82501Z" fill="currentColor" ></path> </svg>`,
  ],
  [
    "Interviews",
    `<svg class="menu-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M7.6835 5.83329C8.0835 5.39163 8.3335 4.80829 8.3335 4.16663C8.3335 2.78329 7.21683 1.66663 5.8335 1.66663C4.45016 1.66663 3.3335 2.78329 3.3335 4.16663C3.3335 4.80829 3.5835 5.39163 3.9835 5.83329H7.6835Z" fill="currentColor" ></path> <path d="M13.3335 1.66663C11.4918 1.66663 10.0002 3.15829 10.0002 4.99996V15C10.0002 15.9166 9.25016 16.6666 8.3335 16.6666C7.41683 16.6666 6.66683 15.9166 6.66683 15H7.50016L8.3335 6.66663H3.3335L4.16683 15H5.00016C5.00016 16.8416 6.49183 18.3333 8.3335 18.3333C10.1752 18.3333 11.6668 16.8416 11.6668 15V4.99996C11.6668 4.08329 12.4168 3.33329 13.3335 3.33329C14.2502 3.33329 15.0002 4.08329 15.0002 4.99996V18.3333H16.6668V4.99996C16.6668 3.15829 15.1752 1.66663 13.3335 1.66663ZM5.99183 13.3333H5.67516L5.17516 8.33329H6.49183L5.99183 13.3333Z" fill="currentColor" ></path> </svg>`,
  ],
  [
    "Placements",
    `<svg class="menu-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6665 5.41671V3.75004H8.33317V5.41671H11.6665ZM3.33317 7.08337V16.25H16.6665V7.08337H3.33317ZM16.6665 5.41671C17.5915 5.41671 18.3332 6.15837 18.3332 7.08337V16.25C18.3332 17.175 17.5915 17.9167 16.6665 17.9167H3.33317C2.40817 17.9167 1.6665 17.175 1.6665 16.25L1.67484 7.08337C1.67484 6.15837 2.40817 5.41671 3.33317 5.41671H6.6665V3.75004C6.6665 2.82504 7.40817 2.08337 8.33317 2.08337H11.6665C12.5915 2.08337 13.3332 2.82504 13.3332 3.75004V5.41671H16.6665Z" fill="currentColor"></path></svg>`,
  ],
  [
    "Course Info",
    `<svg class="menu-svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM9.83317 13.1667H8.1665V8.16675H9.83317V13.1667ZM9.83317 6.50008H8.1665V4.83342H9.83317V6.50008Z" fill="currentColor"></path></svg>`,
  ],
  [
    "Revision",
    `<svg class="rev-svg menu-svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="history" class="svg-inline--fa fa-history fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"></path></svg>`,
  ],
];
const sideList = document.querySelector(".menu");
for (item of sideItems) {
  let div = document.createElement("div");
  div.classList.add("menu-item");
  div.innerHTML = item[1] + item[0];
  sideList.appendChild(div);
}