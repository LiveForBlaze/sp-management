let config = {

  //System changes
  "associationId": "B191DF26-9286-4052-AE5A-CDEE5515EBB1",
  "event": "FDE961DA-4C54-43D1-88FD-3E36F88E1CE1",
  "env": "development",

  //Basic customization. Changes required.
  "urlName": "scm", //uniq spm name for internal use f.e. for naming access-token
  "linkName": "scm-congress", // https://slidespiel.com/${linkName}/presentations
  "companyName": "SCM",
  "conferenceName": "Четвертый SCM Конгресс", //optional. Leave empty if there is no need in specific conferenceName
  "primaryColor": "rgb(255,138,5)",
  "loaderColor": "rgb(255,138,5)",

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
