import { getServiceImages } from "../data/imageLibrary";

const servicesData = {
  "residential-interior-design": {
    category: "INTERIOR DESIGNING",
    number: "01",
    title: "Residential Interior Designing Service",
    shortTitle: "Residential Interior Design",
    description:
      "Interior planning and designing solutions for residential spaces, developed around the requirements of everyday living.",
    image: getServiceImages("residential-interior-design")[0],
    overview:
      "Residential interiors require a balance between functionality, comfort and visual character. Mahadev Engineering provides interior designing solutions focused on understanding the space and developing an approach suited to the requirements of the home.",
    applications: [
      "Living spaces",
      "Bedrooms",
      "Residential interiors",
      "Space planning",
    ],
    process: [
      ["01", "Understand", "Understand the space, requirements and intended use."],
      ["02", "Plan", "Develop the spatial and functional planning approach."],
      ["03", "Design", "Develop the interior direction around the requirements."],
      ["04", "Coordinate", "Coordinate the relevant requirements for execution."],
    ],
  },

  "bedroom-interior-design": {
    category: "INTERIOR DESIGNING",
    number: "02",
    title: "Bedroom Interior Designing Services",
    shortTitle: "Bedroom Interior Design",
    description:
      "Bedroom interior design solutions focused on creating practical, comfortable and visually balanced personal spaces.",
    image: getServiceImages("bedroom-interior-design")[0],
    overview:
      "A bedroom needs to work as both a functional and comfortable personal environment. Our bedroom interior designing service considers spatial planning, furniture requirements, finishes and the overall character of the room.",
    applications: [
      "Master bedrooms",
      "Guest bedrooms",
      "Bedroom planning",
      "Interior design",
    ],
    process: [
      ["01", "Understand", "Understand the room, lifestyle and functional requirements."],
      ["02", "Plan", "Organize the available space around its intended use."],
      ["03", "Design", "Develop the visual and functional interior direction."],
      ["04", "Coordinate", "Coordinate the requirements for implementation."],
    ],
  },

  "banquet-interior-decoration": {
    category: "INTERIOR DESIGNING",
    number: "03",
    title: "Banquet Interior Decoration Services",
    shortTitle: "Banquet Interior Decoration",
    description:
      "Interior decoration solutions for banquet and event spaces with attention to layout, visual character and functionality.",
    image: getServiceImages("banquet-interior-decoration")[0],
    overview:
      "Banquet environments need to accommodate people, movement and events while maintaining a defined visual character. Our service addresses the interior requirements of banquet and event-oriented spaces.",
    applications: [
      "Banquet spaces",
      "Event areas",
      "Reception areas",
      "Interior decoration",
    ],
    process: [
      ["01", "Understand", "Understand the venue, capacity and intended use."],
      ["02", "Plan", "Develop the spatial and functional layout."],
      ["03", "Design", "Create the interior and decoration direction."],
      ["04", "Coordinate", "Coordinate requirements for implementation."],
    ],
  },

  "ductable-air-conditioner-installation": {
    category: "HVAC & AIR CONDITIONING",
    number: "04",
    title: "Ductable Air Conditioner Installation Service",
    shortTitle: "Ductable AC Installation",
    description:
      "Installation services for ductable air-conditioning systems designed around project requirements and space configuration.",
    image: getServiceImages("ductable-air-conditioner-installation")[0],
    overview:
      "Ductable air-conditioning systems require careful consideration of space, duct routing and system requirements. Our installation service supports projects requiring ducted air-conditioning solutions.",
    applications: [
      "Ductable AC",
      "Commercial spaces",
      "Large spaces",
      "Air-conditioning installation",
    ],
    process: [
      ["01", "Assess", "Understand the space and air-conditioning requirements."],
      ["02", "Plan", "Plan the installation and relevant system requirements."],
      ["03", "Install", "Carry out the required installation work."],
      ["04", "Coordinate", "Coordinate the system with the project environment."],
    ],
  },

  "22-ton-duct-ac": {
    category: "HVAC & AIR CONDITIONING",
    number: "05",
    title: "22 Ton Duct AC Service",
    shortTitle: "22 Ton Duct AC",
    description:
      "Service support for 22 ton ducted air-conditioning requirements across applicable project environments.",
    image: getServiceImages("22-ton-duct-ac")[0],
    overview:
      "Large-capacity ducted air-conditioning systems require appropriate service and technical attention. This service addresses requirements associated with 22 ton duct AC systems.",
    applications: [
      "22 ton duct AC",
      "Large commercial spaces",
      "Ducted systems",
      "AC service",
    ],
    process: [
      ["01", "Assess", "Review the system and understand the service requirement."],
      ["02", "Inspect", "Inspect relevant components and operating conditions."],
      ["03", "Service", "Address the identified service requirements."],
      ["04", "Check", "Review system operation after service."],
    ],
  },

  "daikin-ducted-ac-repair": {
    category: "HVAC & AIR CONDITIONING",
    number: "06",
    title: "Daikin Ducted Air Conditioner Repairing Service",
    shortTitle: "Daikin Ducted AC Repair",
    description:
      "Repairing service for Daikin ducted air-conditioning systems based on the identified system requirement.",
    image: getServiceImages("daikin-ducted-ac-repair")[0],
    overview:
      "Ducted air-conditioning systems require systematic inspection when performance or operation issues occur. Our service focuses on identifying the relevant requirement and carrying out appropriate repair support.",
    applications: [
      "Daikin ducted AC",
      "Ducted air-conditioning",
      "AC repair",
      "System inspection",
    ],
    process: [
      ["01", "Inspect", "Inspect the system and understand the reported issue."],
      ["02", "Identify", "Identify the relevant service requirement."],
      ["03", "Repair", "Carry out the required repair work."],
      ["04", "Check", "Check system operation after repair."],
    ],
  },

  "hvac-system-installation": {
    category: "HVAC & AIR CONDITIONING",
    number: "07",
    title: "HVAC Air Conditioning System Installation Service",
    shortTitle: "HVAC System Installation",
    description:
      "HVAC and air-conditioning system installation solutions for project environments requiring coordinated technical planning.",
    image: getServiceImages("hvac-system-installation")[0],
    overview:
      "HVAC installation involves coordination between equipment, space requirements and project conditions. Our service supports the installation requirements of air-conditioning and HVAC systems.",
    applications: [
      "HVAC systems",
      "Air-conditioning",
      "Commercial spaces",
      "System installation",
    ],
    process: [
      ["01", "Assess", "Understand the project and HVAC requirements."],
      ["02", "Plan", "Develop the relevant installation approach."],
      ["03", "Install", "Execute the required HVAC installation."],
      ["04", "Coordinate", "Coordinate the system with the project environment."],
    ],
  },

  "pharma-hvac-installation": {
    category: "HVAC & AIR CONDITIONING",
    number: "08",
    title: "HVAC System Pharma Industry Installation Service",
    shortTitle: "Pharma HVAC Installation",
    description:
      "HVAC installation services for pharmaceutical industry environments with attention to project-specific technical requirements.",
    image: getServiceImages("pharma-hvac-installation")[0],
    overview:
      "Pharmaceutical environments can involve specific HVAC and environmental requirements. Our service supports HVAC installation projects in pharma industry environments based on the project's technical requirements.",
    applications: [
      "Pharma environments",
      "HVAC installation",
      "Air-conditioning systems",
      "Industrial facilities",
    ],
    process: [
      ["01", "Understand", "Understand the project and technical requirements."],
      ["02", "Plan", "Plan the HVAC installation approach."],
      ["03", "Install", "Execute the required installation activities."],
      ["04", "Coordinate", "Coordinate HVAC requirements with the project."],
    ],
  },

  "school-interior-turnkey": {
    category: "TURNKEY PROJECTS",
    number: "09",
    title: "School Interior Turnkey Services",
    shortTitle: "School Interior Turnkey",
    description:
      "Turnkey interior solutions for school environments, bringing planning, interior requirements and execution together.",
    image: getServiceImages("school-interior-turnkey")[0],
    overview:
      "Educational spaces need to support learning, movement and day-to-day activity. Our school interior turnkey service brings relevant interior and project requirements together through a coordinated approach.",
    applications: [
      "Schools",
      "Classrooms",
      "Educational spaces",
      "Institutional interiors",
    ],
    process: [
      ["01", "Understand", "Understand the space and educational requirements."],
      ["02", "Plan", "Plan the interior and project requirements."],
      ["03", "Execute", "Coordinate the required project execution."],
      ["04", "Deliver", "Move the project towards completion."],
    ],
  },

  "hospital-interior-turnkey": {
    category: "TURNKEY PROJECTS",
    number: "10",
    title: "Hospital Interior Turnkey Service",
    shortTitle: "Hospital Interior Turnkey",
    description:
      "Turnkey interior solutions for hospital environments with coordinated planning and execution requirements.",
    image: getServiceImages("hospital-interior-turnkey")[0],
    overview:
      "Hospital environments involve specialized spatial and functional requirements. Our turnkey approach brings interior planning and project execution requirements together around the needs of the environment.",
    applications: [
      "Hospitals",
      "Healthcare spaces",
      "Institutional interiors",
      "Turnkey execution",
    ],
    process: [
      ["01", "Understand", "Understand the environment and project requirements."],
      ["02", "Plan", "Develop the relevant interior and execution approach."],
      ["03", "Execute", "Coordinate project implementation."],
      ["04", "Deliver", "Move the project towards completion."],
    ],
  },

  "chemical-plant-interior-turnkey": {
    category: "TURNKEY PROJECTS",
    number: "11",
    title: "Chemical Plant Interior Turnkey Service",
    shortTitle: "Chemical Plant Turnkey",
    description:
      "Turnkey project solutions for chemical plant environments based on project-specific interior and execution requirements.",
    image: getServiceImages("chemical-plant-interior-turnkey")[0],
    overview:
      "Industrial environments require project planning that considers their specific operational context. Our chemical plant turnkey service addresses interior and project execution requirements through a coordinated approach.",
    applications: [
      "Chemical plants",
      "Industrial environments",
      "Plant interiors",
      "Turnkey projects",
    ],
    process: [
      ["01", "Understand", "Understand the plant environment and project requirements."],
      ["02", "Plan", "Structure the relevant project requirements."],
      ["03", "Execute", "Coordinate the required implementation."],
      ["04", "Deliver", "Move the project towards completion."],
    ],
  },

  "sales-lounge-turnkey": {
    category: "TURNKEY PROJECTS",
    number: "12",
    title: "Sales Lounge Turnkey Service",
    shortTitle: "Sales Lounge Turnkey",
    description:
      "Turnkey interior solutions for sales lounges combining spatial planning, design requirements and project execution.",
    image: getServiceImages("sales-lounge-turnkey")[0],
    overview:
      "A sales lounge needs to provide an organized environment for interaction and presentation. Our turnkey approach brings the relevant interior and execution requirements together.",
    applications: [
      "Sales lounges",
      "Customer areas",
      "Commercial interiors",
      "Turnkey execution",
    ],
    process: [
      ["01", "Understand", "Understand the space and intended customer experience."],
      ["02", "Plan", "Plan the spatial and functional requirements."],
      ["03", "Execute", "Coordinate interior project execution."],
      ["04", "Deliver", "Move the project towards completion."],
    ],
  },

  "turnkey-projects": {
    category: "TURNKEY PROJECTS",
    number: "13",
    title: "Turnkey Projects Services",
    shortTitle: "Turnkey Projects",
    description:
      "Integrated turnkey project solutions bringing relevant planning, interior and execution requirements together.",
    image: getServiceImages("turnkey-projects")[0],
    overview:
      "Turnkey projects require coordination between different project requirements. Mahadev Engineering provides turnkey project services designed around the specific scope and environment of each project.",
    applications: [
      "Commercial projects",
      "Institutional projects",
      "Industrial projects",
      "Interior projects",
    ],
    process: [
      ["01", "Understand", "Understand the complete project scope."],
      ["02", "Plan", "Structure the project requirements and approach."],
      ["03", "Coordinate", "Coordinate relevant project activities."],
      ["04", "Execute", "Support implementation towards delivery."],
    ],
  },

  "project-management-consultancy": {
    category: "CONSULTANCY",
    number: "14",
    title: "Project Management Consultants Service",
    shortTitle: "Project Management Consultancy",
    description:
      "Project management consultancy support for planning, coordination and structured project execution.",
    image: getServiceImages("project-management-consultancy")[0],
    overview:
      "Projects involve multiple requirements that need to be planned and coordinated. Our project management consultancy service supports structured project planning, coordination and monitoring.",
    applications: [
      "Project planning",
      "Project coordination",
      "Execution support",
      "Management",
    ],
    process: [
      ["01", "Assess", "Understand the project scope and requirements."],
      ["02", "Plan", "Develop the project planning approach."],
      ["03", "Coordinate", "Coordinate relevant project requirements."],
      ["04", "Monitor", "Support structured project progress."],
    ],
  },

  "management-consultancy": {
    category: "CONSULTANCY",
    number: "15",
    title: "Management Consultancy Service",
    shortTitle: "Management Consultancy",
    description:
      "Management consultancy support focused on understanding project requirements and developing practical approaches.",
    image: getServiceImages("management-consultancy")[0],
    overview:
      "Management consultancy involves understanding the requirements of a business or project and structuring an appropriate approach. Our service provides consultancy support based on the specific requirement.",
    applications: [
      "Management support",
      "Project requirements",
      "Planning",
      "Coordination",
    ],
    process: [
      ["01", "Understand", "Understand the requirement and project context."],
      ["02", "Assess", "Review the relevant requirements and considerations."],
      ["03", "Advise", "Develop a practical consultancy approach."],
      ["04", "Support", "Provide structured support around the requirement."],
    ],
  },
};

export default servicesData;