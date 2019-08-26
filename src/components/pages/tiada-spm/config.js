let config = {

  //System changes
  "associationId": "A4367DC1-346E-47E3-BD13-F414EF119742",
  "event": "8669D740-6EF5-4BD6-92C8-79D0F51B8119",
  "env": "development",

  //Basic customization. Changes required.
  "urlName": "tiada",
  "linkName": "tiadaannualconference", // https://slidespiel.com/${linkName}/presentations
  "companyName": "2019 TIADA CONFERENCE & EXPO",
  "primaryColor": "rgb(193,39,45)",
  "loaderColor": "rgb(193,39,45)",

  //Цвета кнопок Админки: Approve, Decline, Push
  "PresentationStatusDeclined": "rgb(174,40,30)",
  "PresentationStatusApproved": "rgb(25,182,155)",
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
