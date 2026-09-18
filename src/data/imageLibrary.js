// src/data/imageLibrary.js

export const images = {
    residential: [
      "/images/residential/Residential_Interior_Designing_Service_1.jpg",
      "/images/residential/Residential_Interior_Designing_Service_2.jpg",
      "/images/residential/Residential_Interior_Designing_Service_3.jpg",
      "/images/residential/Residential_Interior_Designing_Service_4.jpg",
    ],
  
    bedroom: [
      "/images/bedroom/Bedroom_Interior_Designing_Services_1.jpg",
      "/images/bedroom/Bedroom_Interior_Designing_Services_2.jpg",
    ],
  
    banquet: [
      "/images/banquet/Banquet_Interior_Decoration_Services_1.jpg",
      "/images/banquet/Banquet_Interior_Decoration_Services_2.jpg",
      "/images/banquet/Banquet_Interior_Decoration_Services_3.jpg",
    ],
  
    cafe: [
      "/images/cafe/Cafe_Interior_Designing_Service_1.jpg",
    ],
  
    chemicalPlant: [
      "/images/chemical-plant/Chemical_Plant_Interior_Turnkey_Service_1.jpg",
    ],
  
    cinema: [
      "/images/cinema/Multiplex_Cinema_Interior_Turnkey_Projects_1.jpg",
      "/images/cinema/Multiplex_Cinema_Interior_Turnkey_Projects_2.jpg",
      "/images/cinema/Multiplex_Cinema_Interior_Turnkey_Projects_3.jpg",
      "/images/cinema/Multiplex_Cinema_Interior_Turnkey_Projects_4.jpg",
      "/images/cinema/Multiplex_Cinema_Interior_Turnkey_Projects_5.jpg",
    ],
  
    daikinAC: [
      "/images/daikin-ac/Daikin_Ducted_Air_Conditioner_Repairing_Service_1.jpg",
      "/images/daikin-ac/Daikin_Ducted_Air_Conditioner_Repairing_Service_2.jpg",
      "/images/daikin-ac/Daikin_Ducted_Air_Conditioner_Repairing_Service_3.jpg",
    ],
  
    ductableAC: [
      "/images/ductable-ac/Ductable_Air_Conditioner_Installation_Service_1.jpg",
      "/images/ductable-ac/Ductable_Air_Conditioner_Installation_Service_2.jpg",
    ],
  
    hospital: [
      "/images/hospital/Hospital_Interior_TurnKey_Service_1.jpg",
      "/images/hospital/Hospital_Interior_TurnKey_Service_2.jpg",
      "/images/hospital/Hospital_Interior_TurnKey_Service_3.jpg",
      "/images/hospital/Hospital_Interior_TurnKey_Service_4.jpg",
    ],
  
    hvac: [
      "/images/hvac/Hvac_Air_Conditioning_System_Installation_Service_1.jpg",
      "/images/hvac/Hvac_Air_Conditioning_System_Installation_Service_2.jpg",
    ],
  
    school: [
      "/images/school/School_Interior_Turnkey_Services_1.jpg",
      "/images/school/School_Interior_Turnkey_Services_2.jpg",
      "/images/school/School_Interior_Turnkey_Services_3.jpg",
    ],
  
    officeDesign: [
      "/images/office-design/Office_Interior_Designing_Service_1.jpg",
      "/images/office-design/Office_Interior_Designing_Service_2.jpg",
    ],
  
    officeTurnkey: [
      "/images/office-turnkey/Office_Interior_Turnkey_Projects_1.jpg",
      "/images/office-turnkey/Office_Interior_Turnkey_Projects_2.jpg",
      "/images/office-turnkey/Office_Interior_Turnkey_Projects_3.jpg",
      "/images/office-turnkey/Office_Interior_Turnkey_Projects_4.jpg",
      "/images/office-turnkey/Office_Interior_Turnkey_Projects_5.jpg",
    ],
  };
  
  
  // --------------------------------------------------
  // SERVICE → CORRECT IMAGE GROUP
  // --------------------------------------------------
  
  export const serviceImages = {
    "residential-interior-design": images.residential,
  
    "bedroom-interior-design": images.bedroom,
  
    "banquet-interior-decoration": images.banquet,
  
    "ductable-air-conditioner-installation": images.ductableAC,
  
    "22-ton-duct-ac": images.ductableAC,
  
    "daikin-ducted-ac-repair": images.daikinAC,
  
    "hvac-system-installation": images.hvac,
  
    "pharma-hvac-installation": images.hvac,
  
    "school-interior-turnkey": images.school,
  
    "hospital-interior-turnkey": images.hospital,
  
    "chemical-plant-interior-turnkey": images.chemicalPlant,
  
    "sales-lounge-turnkey": images.officeDesign,
  
    "turnkey-projects": images.cinema,
  
    "project-management-consultancy": images.officeTurnkey,
  
    "management-consultancy": images.officeDesign,
  };
  
  
  // --------------------------------------------------
  // GET IMAGES FOR A SERVICE
  // --------------------------------------------------
  
  export function getServiceImages(slug) {
    return serviceImages[slug] || [];
  }
  
  
  // --------------------------------------------------
  // ALL IMAGES — FOR GALLERY
  // --------------------------------------------------
  
  export const allImages = Object.values(images).flat();