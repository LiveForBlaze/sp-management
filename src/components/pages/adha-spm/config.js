let config = {

  //System changes
  "associationId": "FB9ABD93-9C25-485E-957E-124D3254B91C",
  "event": "BF178DF8-20D4-4E14-B236-CEC3052D112C",
  "env": "development",

  //Basic customization. Changes required.
  "urlName": "adha",
  "linkName": "adha2019", // https://slidespiel.com/${linkName}/presentations
  "companyName": "American Dental Hygienists’ Association",
  "primaryColor": "rgb(238,53,36)",
  "loaderColor": "rgb(248,151,29)",

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
