const translations = {
    en: {
      // selct: "Select a language",
      // title: "Welcome to Page 3",
      // pargr: "This is the content of Page 3 in English.",
       // ----------footer language--------
     productsHeadingFooter:"Products",

     GauDharaInFooter:"Gau Dhara Universal Pain Relief Oil",
     gomayadiTailamInFooter:"Gomayadi Tailam Ear Drops",
     gauDantManjanFooter:"Gau-Dant Manjan Tooth Powder",
     panchagavyaGhrutamFooter:"Panchagavya Ghrutam Nasal Drops",
     sahajaKunkumaFooter :"Sahaja Kunkuma Red Sindoor",
     amruthaDharaFooter:"Amrutha Dhara",
     addressContentFooter:" 4-8,C/O Sree Raghvendra Brundavanam, Garellavalasa Post,Salur,Pachipenta Mandal, Manyam Parvathipuram District,India, AndhraPradesh-535592",
    addressHeadingFooter:"Address",
    phoneHeadingFooter:"Phone",
    emailHeadingFooter:"Email",
//------scroll bar--------
// scrollBarSententce:"Gaumata is Viswa Mata. It gives everything, whatever required for this world. In turn it won’t expect anything from us. It’s our responsibility to save our mother, for the health and wealth of the mankind. we never expect/demand any donations by any means. We expect you to buy our Gaushala products to support us and save gouvansh.",

//------header-------
logoBrundavanam: "BRUNDAVANAM",
contactUsPageTitle: "Contact Us",
homeLinkHeader: "Home",
  productsLinkHeader:"Products",
  visionLinkHeader:"Vision",
  contactUsLinkHeader:"Contact Us",
  sahajaKunkumaLinkHeader:"Sahaja Kunkuma",
  amruthaDharaLinkHeader:"Amrutha Dhara",
  panchagavyaGhrutamLinkHeader:"Panchagavya Ghrutam",
  GauDantManjanLinkHeader:"Gau-Dant Manjan",
  gomayadiTailamLinkHeader:"Gomayadi Tailam",
  gauDharaLinkHeader:"Gau Dhara",
      // homeLink: "Home",
      // contactUsLink:"/ Contact Us",
      //------form-----
      letsGetInTouch:"Let's Get in Touch",
      sendMessage:"Send Message",


   // ----------footer language--------
    },
    tel: {
      // selct: "ఒక భాషను ఎంచుకోండి",
      // title: "పేజీ 3కు స్వాగతం",
      // pargr: "ఇది పేజీ 3 యొక్క తెలుగు కంటెంట్.",
       // ----------footer language--------
    productsHeadingFooter:"ఉత్పత్తులు",
    GauDharaInFooter:"గో ధార యూనివర్సల్ పెయిన్ రిలీఫ్ ఆయిల్",
    gomayadiTailamInFooter:"గోమయాది తైలం చెవి చుక్కలు",
    gauDantManjanFooter:"గో-దంత్ మంజన్ టూత్ పౌడర్",
    panchagavyaGhrutamFooter:"పంచగవ్య ఘ్రుతం నాసికా చుక్కలు",
    sahajaKunkumaFooter :"సహజ కుంకుమ",
    amruthaDharaFooter:"అమృత ధార",
    addressContentFooter:"4-8,C/O శ్రీ రాఘవేంద్ర బృందావనం, గారెళ్లవలస పోస్ట్, సాలూరు, పాచిపెంట మండలం, మన్యం పార్వతీపురం జిల్లా, భారతదేశం, ఆంధ్రప్రదేశ్-535592",
    addressHeadingFooter:"చిరునామా",
    phoneHeadingFooter:"ఫోన్",
    emailHeadingFooter:"ఇమెయిల్",

    // ----------footer language--------
    //------scroll bar-------
// scrollBarSententce:"గోమాత విశ్వమాత.ఈ భువనమంతటికీ పోషకురాలు.తల్లికి ఇవ్వటం తప్ప మననుండి ఏమీ ఆశించటం తెలియదు.సమస్త మానవాళి శ్రేయస్సు కోసం ఆ తల్లిని కాపాడుకోవటం మనందరి భాధ్యత.బృందావనం గోశాల తరుపున మేము ఎప్పుడు దానాలు ధర్మాలు కోరలేదు, భవిష్యత్తులో కోరబోము.గోమాతను కాపాడటం కోసం, సనాతనమైన మన ధర్మాన్ని నిలబెట్టటం కోసం, మీరు గోశాల తయారు చేసిన రసాయనాలు లేని పంచగవ్య ఉత్పత్తులను కొనమని మాత్రమే కోరుతున్నాము. దీని వల్ల గోవంశము నిలబడటమే కాక, మీ ఆరోగ్యాన్ని కాపాడుకున్న వారవుతారు.",
    //------header-------
logoBrundavanam: "బృందావనం",
contactUsPageTitle: "సంప్రదింపు పేజీ",
homeLinkHeader: "హోమ్ పేజీ",
productsLinkHeader:"ఉత్పత్తులు",
visionLinkHeader:"మా ఆలోచన",
contactUsLinkHeader:"సంప్రదింపు పేజీ",
sahajaKunkumaLinkHeader:"సహజ కుంకుమ",
amruthaDharaLinkHeader:"అమృత ధార",
panchagavyaGhrutamLinkHeader:"పంచగవ్య ఘృతము",
GauDantManjanLinkHeader:"గో-దంతమంజన్ పళ్ళ పొడి",
gomayadiTailamLinkHeader:"గోమయాది తైలం",
gauDharaLinkHeader:"గోధార",

// homeLink: "హోమ్ పేజీ",
// contactUsLink:"/ సంప్రదింపు పేజీ",
//---------form------
letsGetInTouch: "మమ్మల్ని సంప్రదించండి",
sendMessage:"సందేశం పంపండి",
   

},
  };

  document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.querySelector("#sel");
    // const h1 = document.getElementById("h1");
    // const title = document.getElementById("title");
    // const para = document.getElementById("para");
    const anchors = document.querySelectorAll(".nav-link");
// ----------footer language--------
const productsHeadingFooter=document.getElementById("productsHeadingFooter");
const GauDharaInFooter=document.getElementById("GauDharaInFooter");
const gomayadiTailamInFooter=document.getElementById("gomayadiTailamInFooter");
const gauDantManjanFooter=document.getElementById("gauDantManjanFooter");
const panchagavyaGhrutamFooter=document.getElementById("panchagavyaGhrutamFooter");
const amruthaDharaFooter=document.getElementById("amruthaDharaFooter");
const sahajaKunkumaFooter=document.getElementById("sahajaKunkumaFooter");
const addressContentFooter=document.getElementById("addressContentFooter");
const addressHeadingFooter=document.getElementById("addressHeadingFooter");
const phoneHeadingFooter=document.getElementById("phoneHeadingFooter");
const emailHeadingFooter=document.getElementById("emailHeadingFooter");
// ----------footer language--------
//------scroll bar------
// const scrollBarSententce=document.getElementById("scrollBarSententce");
//-----header---
const logoBrundavanam=document.getElementById("logoBrundavanam");
const contactUsPageTitle=document.getElementById("contactUsPageTitle");
const homeLinkHeader=document.getElementById("homeLinkHeader");
const productsLinkHeader=document.getElementById("productsLinkHeader");
const visionLinkHeader=document.getElementById("visionLinkHeader");
const contactUsLinkHeader=document.getElementById("contactUsLinkHeader");
const sahajaKunkumaLinkHeader=document.getElementById("sahajaKunkumaLinkHeader");

const amruthaDharaLinkHeader=document.getElementById("amruthaDharaLinkHeader");

const panchagavyaGhrutamLinkHeader=document.getElementById("panchagavyaGhrutamLinkHeader");

const GauDantManjanLinkHeader=document.getElementById("GauDantManjanLinkHeader");

const gomayadiTailamLinkHeader=document.getElementById("gomayadiTailamLinkHeader");

const gauDharaLinkHeader=document.getElementById("gauDharaLinkHeader");
// const homeLink=document.getElementById("homeLink");
// const contactUsLink=document.getElementById("contactUsLink");
//-----form-----
const letsGetInTouch=document.getElementById("letsGetInTouch");
const sendMessage=document.getElementById("sendMessage");

    const setLanguage = (language) => {
      const content = translations[language] || translations.en;
      // h1.innerText = content.selct;
      // title.innerText = content.title;
      // para.innerText = content.pargr;
       // ----------footer language--------
     productsHeadingFooter.innerText=content.productsHeadingFooter;
     GauDharaInFooter.innerText=content.GauDharaInFooter;
     gomayadiTailamInFooter.innerText=content.gomayadiTailamInFooter;
     gauDantManjanFooter.innerText=content.gauDantManjanFooter;
     panchagavyaGhrutamFooter.innerText=content.panchagavyaGhrutamFooter;
     amruthaDharaFooter.innerText=content.amruthaDharaFooter;
     sahajaKunkumaFooter.innerText=content.sahajaKunkumaFooter;
     addressContentFooter.innerText=content.addressContentFooter;
     addressHeadingFooter.innerText=content.addressHeadingFooter;
     phoneHeadingFooter.innerText=content.phoneHeadingFooter;
     emailHeadingFooter.innerText=content.emailHeadingFooter;
     // ----------footer language--------
     //----------scroll bar---------
    // scrollBarSententce.innerText=content.scrollBarSententce;
    //-----header---
    logoBrundavanam.innerText=content.logoBrundavanam;
    contactUsPageTitle.innerText=content.contactUsPageTitle;
    homeLinkHeader.innerText=content.homeLinkHeader;
    productsLinkHeader.innerText=content.productsLinkHeader;
    visionLinkHeader.innerText=content.visionLinkHeader;
    contactUsLinkHeader.innerText=content.contactUsLinkHeader;
    sahajaKunkumaLinkHeader.innerText=content.sahajaKunkumaLinkHeader;
    amruthaDharaLinkHeader.innerText=content.amruthaDharaLinkHeader;
    panchagavyaGhrutamLinkHeader.innerText=content.panchagavyaGhrutamLinkHeader;
    GauDantManjanLinkHeader.innerText=content.GauDantManjanLinkHeader;
    gomayadiTailamLinkHeader.innerText=content.gomayadiTailamLinkHeader;
    gauDharaLinkHeader.innerText=content.gauDharaLinkHeader;
    // homeLink.innerText=content.homeLink;
    // contactUsLink.innerText=content.contactUsLink;
    //---form--
    letsGetInTouch.innerText=content.letsGetInTouch;
    sendMessage.innerText=content.sendMessage;
  

    };

    const updateAnchorLinks = (language) => {
      anchors.forEach((anchor) => {
        const page = anchor.getAttribute("data-page");
        anchor.href = `${page}.html?lang=${language}`;
      });
    };

    const getQueryParam = (param) => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    };

    const language = getQueryParam("lang") || "en";
    languageSelect.value = language;
    setLanguage(language);
    updateAnchorLinks(language);

    languageSelect.addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;
      setLanguage(selectedLanguage);
      updateAnchorLinks(selectedLanguage);
    });
  });