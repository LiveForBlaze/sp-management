let config = {

  //System changes
  "associationId": "C8FF6CF4-0193-40F8-BDA9-0DDC63BAFCE4",
  "event": "36A6B312-DD54-4D2F-9B4E-D325E04DF02F",
  "env": "development",

  //Basic customization. Changes required.
  "urlName": "ishrm", //uniq spm name for internal use f.e. for naming access-token
  "linkName": "indianashrm", // https://slidespiel.com/${linkName}/presentations
  "companyName": "HR INDIANA SHRM",
  "conferenceName": "25th aniversary HR INDIANA Annual Conference 2019", //optional. Leave empty if there is no need in specific conferenceName
  "primaryColor": "rgb(0,175,220)",
  "loaderColor": "rgb(163,205,57)",

  //Цвета кнопок Админки: Approve, Decline, Push
  "PresentationStatusDeclined": "rgb(174,40,30)",
  "PresentationStatusApproved": "rgb(25,182,164)",
  "PresentationStatusPushed": "rgb(50,150,65)",
  "AdminPushButton": "rgb(50,150,65)",

  //Advanced functionality customization
  "loginPasswordProtected": false, //false - если логин производится только по email, без пароля
  "simpleAdminPage": true, //Наличие функционала Approve/Decline
  "sessionSearch": true,//наличие фунцкции поиска сессии
  "adminSearch": true, //наличие фунцкции поиска в админке
  "pushToConvertationButton": true, //наличие кнопки Push

  //Advanced design customization
  "MainTextColor": "black",
  "borderRadius" : "0px",
  "fontSize": "14px",
  "headerSize": "2.4em",
  "logo": false, //Наличие логотипа сверху формы логина
  "logoMain": false, //Наличие логотипа сверху основной части
  "loginBoxHeaderHorizontalAlign": "left",
  "loginFormVerticalPozition": "center", //Положение логин формы по вертикали: flex-start, center, flex-end
  "UserInterfaceSubHeaderFontSize": "1.6em",
  "UserInterfaceSubHeaderFontWeight": "600",
  "TimerFontSize": "1.6em", //размер шрифта таймера
  "AdminButtonPadding": "10px 15px",

  //Text changes
  "headerText": "Speaker Management",
  "loginHintText": "Please enter the email you used to register for the event.", //текст в форме логина под заголовком
  "loginPlaceholder" : "Email", //Текст по умолчанию в форме логина. Email/login
  "SearchPlaceholder": "Session name or speaker’s name...", //Текст по умолчанию строки поиска
  "mainPartBottomText": "", //Текст в нижней части страницы спикера
};


if (process.env.NODE_ENV === "production") {
  config = {...config, ...{
    "apiHost": "https://slidespielspeakersapi.azurewebsites.net",
    "env": "production"
  }};
}

export default config;
