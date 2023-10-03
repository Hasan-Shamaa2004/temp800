const translations = {
    en: {
      services: "Services",
      about: "About",
      contact: "Contact us",
      selectLanguage: "Select a Language",
      english: "English",
      arabic: "Arabic",
      hellothere: "Hello There",
      wewerepleased: "We were pleased with your visit to our company, Lotus Flower Delivery Company",
      tellus: "Tell Us Your Idea",
      welcometo: " Welcome to the Lotus Flower delivery company, which provides the best and fastest delivery",
      wewilld: "We will deliver everythingyou want",
      wearepleased: "We are pleased that you visit our website, use our services, and deal with us. Thank you for your trust",
      yourproduct: "Your Product is Worldwide",
      welocometo: "Welcome to our company to meet all your needs and be in the best condition",
      dontbe: "Don't be busy, be productive",
      instant: "Instant Delivery",
      instantd: "Instant delivery around the clock within the United Arab Emirates, Delivery of all products.",
      delivof: "Delivery of gifts and toys",
      delivall: "Delivering all kinds of gifts on all holidays and delivering all kinds of toys with immediate delivery",
      foodd: "Food delivery",
      delivfood: "Delivering all types of foods at all times, instant delivery, to keep hot foods hot",
      delivanimal: "Animal delivery",
      delivpet: "Delivering all types of pets and keeping them completely safe",
      lessis: "Less is more work",
      welcomrour: "Welcome to our delivery company Lotus Flower We are here to meet all your needs and supplies We are ready at all times to deliver all orders as quickly as possible. We hope you benefit from our services.",
      feelfr: "Feel free to drop us a line at:",
      weborn: "We are born to create",
      tocontact: "To contact us on our number :",
      findus: "Find us on social networks",
      flower: "Lotus Company",
    },
    ar: {
      services: "خدمات",
      about: "المزيد عنا",
      contact: "للتواصل معنا",
      // selectLanguage: "إختر لغة",
      english: "الانجليزية",
      arabic: "العربية",
      hellothere: "أهلا وسهلا بكم",
      wewerepleased: "سعدنا بزيارتك لشركتنا شركة التوصيل زهرة اللوتس",
      tellus: "أخبرنا عن أفكارك",
      welcometo: "اهلا وسهلا بكم في شركة التوصيل زهرة اللوتس التي تقدم افضل توصيل وباسرع وقت",
      wewilld: "سوف نقوم بتوصيل كل ماتريد",
      wearepleased: "لنا السرور بزيارتك لموقعنا واستخدام خدماتنا والتعامل معنا شكرا لثقتكم",
      yourproduct: "المنتج الخاص بك هو في جميع أنحاء العالم",
      welocometo: "اهلا وسهلا بكم في شركتنا لتبية جميع احتياجاتكن وتكونو بأفضل حال",
      dontbe: "لا تكن مشغولاً، كن منتجاً",
      instant: "توصيل فوري",
      instantd: "توصيل الفوري على مدار الساعة  داخل الامارات العربية المتحدة . توصيل جميع المنتجات ",
      delivof: "توصيل الهدايا والالعاب",
      delivall: "توصيل جميع انواع الهدايا في جميع الاعياد وتوصيل جميع انواع الالعاب توصيلا فوريا",
      foodd: "توصيل الأطعمة",
      delivfood: "توصيل جميع أنواع الأطعمة في كل الأوقات توصيلا فوريا للحفاظ على سخونة الأطعمة الساخنة",
      delivanimal: "توصيل الحيوانات",
      delivpet: "توصيل جميع انواع الحيوانات الأليفة والحفاظ على أمانها التام ",
      lessis: "أقل هو المزيد من العمل",
      welcomrour: "اهلا وسهلا بكم في شركتنا التوصيل زهرة اللوتس نحن هنا لتلبية جميع احتياجاتكن ومستلزماتكن جاهزون في كل الأوقات لتوصيل جمبع الطلبات في اسرع وقت نامل الاستفادة من خدماتنا",
      feelfr: ": لا تتردد في ترك لنا خطة على ايميلنا",
      weborn: "لقد ولدنا لنصنع",
      tocontact: ": للتواصل على رقمنا",
      findus: "تجدنا على الشبكات الاجتماعية",
      flower: "شركة زهرة اللوتس",
    },
  };
  
  const languageSelector = document.querySelector("select");
  languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    // localStorage.setItem("lang", event.target.value);
    setItem("lang", event.target.value);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const language = getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
    setLanguage(language);
  });
  
  const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const translationKey = element.getAttribute("data-i18n");
      element.textContent = translations[language][translationKey];
    });
    // document.dir = language === "ar" ? "rtl" : "ltr";
  };
  