

export type FAQ = [question: string, answer: string];

export type ServicePage = {
  slug: string;
  title: string;
  heroTitle: string;
  heroText: string;
  includes: string[];
  needs: string[];
  matters: string;
  faqs: FAQ[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  readTime: string;
};

export type SEOConfig = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  schema?: any;
};

export const BUSINESS = {
  name: "Snoopys Auto Care",
  phoneDisplay: "718-873-9815",
  phoneHref: "tel:7188739815",
  address: "79-17 Cooper Ave, Middle Village, NY 11385",
  hours: "Mon–Fri 9:00 AM – 5:00 PM",
  tagline: "Precision ADAS Calibration & Advanced Auto Care for All Vehicle Makes",
  description:
    "Snoopys Auto Care is a specialized ADAS calibration center in Middle Village, NY, focused on precision, safety, and advanced auto care for all makes and models.",
  url: "https://snoopysautocare.com",
  logo: "/images/logo-main.png",
};

export const SEO_CONFIG: Record<string, SEOConfig> = {
  home: {
    title: "ADAS Calibration Experts in Middle Village, NY | Snoopys Auto Care",
    description: "Specialized ADAS calibration for all makes and models. Expert windshield, radar, and sensor recalibration in Middle Village, Queens. Fast, precise, and insurance-friendly.",
    keywords: ["ADAS calibration", "Middle Village auto care", "windshield calibration", "radar recalibration", "Queens ADAS center"],
    ogImage: "/og-home.jpg",
  },
  blog: {
    title: "Auto Care & Calibration Insights | Snoopys Blog",
    description: "Learn about the latest in ADAS technology, vehicle safety, and advanced auto maintenance from our experts in Middle Village.",
  },
  "adas-calibration": {
    title: "Precision ADAS Calibration Services | Snoopys Auto Care",
    description: "Factory-accurate calibration for your vehicle's safety systems. We specialize in camera, radar, and sensor alignment for modern safety features.",
  },
  "about-us": {
    title: "About Us | ADAS Calibration Specialists in Middle Village",
    description: "Learn about Snoopys Auto Care, Middle Village's premier center for ADAS calibration, windshield recalibration, and specialized auto repair services.",
  }
};

export const trustPoints = [
  "Factory-level calibration equipment",
  "All makes & models supported",
  "Fast turnaround",
  "Insurance & body shop friendly",
];

export const audience = [
  {
    title: "Body Shops",
    text: "Reliable post-repair calibration support with fast turnaround and referral-friendly service.",
  },
  {
    title: "Insurance Partners",
    text: "A dependable calibration center for safe, accurate, documentation-ready results.",
  },
  {
    title: "Everyday Drivers",
    text: "Professional calibration and advanced auto care for all makes and models in Middle Village.",
  },
];

export const calibrationTriggers = [
  "After windshield replacement",
  "After collision repairs",
  "After suspension or alignment work",
  "When cameras, sensors, or radar systems are affected",
];

export const servicePages: ServicePage[] = [
  {
    slug: "adas-calibration",
    title: "ADAS Calibration",
    heroTitle: "ADAS Calibration in Middle Village, NY",
    heroText:
      "Factory-precision calibration for cameras, radar, and sensor systems after repairs, replacement, or alignment-related service.",

    includes: [
      "Camera, radar, and safety-system calibration",
      "All makes and models supported",
      "Factory-accuracy restoration process",
      "Post-repair and post-replacement recalibration",
    ],
    needs: [
      "After collision repairs",
      "After windshield replacement",
      "After suspension or alignment work",
      "When ADAS warning lights or system issues appear",
    ],
    matters:
      "Modern vehicles depend on ADAS systems to support lane assistance, adaptive cruise control, and collision avoidance. Proper calibration helps restore system confidence and safety performance.",
    faqs: [
      [
        "What is ADAS calibration?",
        "It is the process of adjusting cameras, radar, and sensors to manufacturer-aligned specifications after service events that may affect their accuracy.",
      ],
      [
        "When is ADAS calibration required?",
        "It is commonly required after collision repairs, windshield replacement, suspension work, and wheel alignment.",
      ],
      [
        "Do all vehicles need the same calibration?",
        "No. Procedures vary by manufacturer, model, and installed safety systems.",
      ],
    ],
  },
  {
    slug: "front-windshield-calibration",
    title: "Front Windshield Calibration",
    heroTitle: "Front Windshield Calibration in Middle Village, NY",
    heroText:
      "Required after windshield replacement to keep forward-facing camera systems aligned and safety features working correctly.",

    includes: [
      "Forward camera recalibration",
      "Lane-assist and safety-system support",
      "Post-windshield replacement validation",
      "Factory-targeted adjustment workflow",
    ],
    needs: [
      "After windshield replacement",
      "After front camera disturbance",
      "If lane-departure or camera-related errors appear",
      "When manufacturer procedure requires recalibration",
    ],
    matters:
      "Many advanced safety features rely on a front-facing camera mounted near the windshield. Even small changes in angle or position can affect performance.",
    faqs: [
      [
        "Do I need calibration after every windshield replacement?",
        "Many modern vehicles do require it, especially if the windshield hosts a front-facing camera.",
      ],
      [
        "What features can be affected?",
        "Lane keeping, lane departure warning, collision alert, and other camera-based systems may be affected.",
      ],
      ["How long does it take?", "Timing depends on the vehicle and calibration procedure required."],
    ],
  },
  {
    slug: "radar-calibration",
    title: "Radar Calibration",
    heroTitle: "Radar Calibration in Middle Village, NY",
    heroText:
      "Front radar calibration for adaptive cruise control, emergency braking support, and advanced sensor-driven safety performance.",

    includes: [
      "Front radar sensor calibration",
      "Adaptive cruise control support",
      "Emergency braking system alignment",
      "System verification and setup",
    ],
    needs: [
      "After front-end repairs",
      "After bumper replacement",
      "When radar sensor position is affected",
      "If radar-based safety features behave inconsistently",
    ],
    matters:
      "Radar systems help vehicles interpret distance, movement, and obstacles ahead. Accurate calibration supports reliable driver-assistance behavior.",
    faqs: [
      [
        "What systems use radar calibration?",
        "Adaptive cruise control, forward collision systems, and some braking functions commonly depend on radar.",
      ],
      [
        "Can bumper work affect radar accuracy?",
        "Yes. Repairs or replacement near the radar sensor area may require recalibration.",
      ],
      [
        "Is radar calibration the same on every car?",
        "No. Each vehicle may have a different calibration process and setup requirement.",
      ],
    ],
  },
  {
    slug: "dynamic-radar-calibration",
    title: "Dynamic Radar Calibration",
    heroTitle: "Dynamic Radar Calibration in Middle Village, NY",
    heroText:
      "A real-world driving calibration process used when the manufacturer requires movement-based sensor validation and adjustment.",

    includes: [
      "Driving-condition calibration procedure",
      "Sensor validation in motion",
      "Manufacturer-specific workflow support",
      "Real-world accuracy refinement",
    ],
    needs: [
      "When manufacturer procedure specifies dynamic calibration",
      "After radar-related component work",
      "When static calibration alone is not sufficient",
      "For model-specific sensor reset requirements",
    ],
    matters:
      "Some vehicles require calibration during actual driving conditions so the system can relearn and confirm sensor behavior in motion.",
    faqs: [
      [
        "What does dynamic mean in this service?",
        "It means the calibration is performed or completed while the vehicle is driven under specific conditions.",
      ],
      [
        "Does every vehicle need dynamic calibration?",
        "No. It depends on the manufacturer and the ADAS system installed.",
      ],
      [
        "Can this be combined with static calibration?",
        "Yes. Some vehicles require a combination of both processes.",
      ],
    ],
  },
  {
    slug: "wheel-alignment",
    title: "Wheel Alignment",
    heroTitle: "Wheel Alignment in Middle Village, NY",
    heroText:
      "Precision alignment service that improves handling, protects tire life, and supports calibration accuracy for ADAS-equipped vehicles.",

    includes: [
      "Steering and wheel-angle adjustment",
      "Tire-wear improvement support",
      "Handling and stability refinement",
      "ADAS-related geometry support",
    ],
    needs: [
      "After suspension work",
      "After hitting potholes or curbs",
      "When the vehicle pulls to one side",
      "Before or after certain ADAS calibration procedures",
    ],
    matters:
      "Proper alignment is important for both vehicle handling and the overall geometry that some ADAS calibration processes depend on.",
    faqs: [
      [
        "Why is alignment related to ADAS?",
        "Some ADAS systems depend on correct vehicle geometry and ride direction for precise calibration.",
      ],
      [
        "What are common signs I need alignment?",
        "Uneven tire wear, steering pull, or an off-center steering wheel are common signs.",
      ],
      ["Does alignment improve tire life?", "Yes. Proper alignment can reduce uneven wear and help tires last longer."],
    ],
  },
  {
    slug: "maintenance-services",
    title: "Maintenance Services",
    heroTitle: "Auto Maintenance Services in Middle Village, NY",
    heroText:
      "Reliable factory-scheduled maintenance, inspections, and fluid service to keep your vehicle running smoothly over time.",

    includes: [
      "Factory scheduled maintenance",
      "Fluid checks and replacements",
      "General inspections",
      "Preventive service support",
    ],
    needs: [
      "At recommended mileage intervals",
      "Before long trips",
      "When dashboard reminders appear",
      "As part of long-term vehicle care",
    ],
    matters:
      "Routine maintenance helps reduce wear, protect performance, and keep vehicles in better condition between major repair events.",
    faqs: [
      [
        "What is included in maintenance services?",
        "It depends on the vehicle and mileage, but may include inspections, fluid service, and scheduled manufacturer recommendations.",
      ],
      ["How often should maintenance be done?", "Intervals vary by vehicle, but regular maintenance should follow manufacturer schedules."],
      [
        "Can maintenance be combined with calibration-related visits?",
        "Yes. Maintenance services can work well as a secondary service during a calibration visit.",
      ],
    ],
  },
  {
    slug: "oil-change",
    title: "Oil Change",
    heroTitle: "Oil Change Service in Middle Village, NY",
    heroText:
      "Quick, dependable oil change service with synthetic and conventional options to help protect engine life and performance.",

    includes: [
      "Full synthetic and conventional options",
      "Quick turnaround",
      "Basic fluid and condition check",
      "Engine-life support service",
    ],
    needs: [
      "At manufacturer-recommended intervals",
      "When oil-life alerts appear",
      "Before high-mileage travel",
      "As part of routine preventive care",
    ],
    matters:
      "Regular oil changes help reduce engine wear, support performance, and keep the vehicle operating more efficiently.",
    faqs: [
      ["Do you offer synthetic oil?", "Yes. Synthetic and conventional options can be offered depending on the vehicle."],
      ["Why are oil changes important?", "They help reduce engine wear and support long-term performance."],
      ["How long does an oil change take?", "Timing can vary, but the service is designed for quick turnaround."],
    ],
  },
  {
    slug: "pre-purchase-inspection",
    title: "Pre-Purchase Inspection",
    heroTitle: "Pre-Purchase Vehicle Inspection in Middle Village, NY",
    heroText:
      "A practical inspection service for buyers who want a clearer picture of a vehicle’s condition before making a purchase decision.",

    includes: [
      "General condition review",
      "Vehicle health summary",
      "Identification of hidden issues",
      "Buyer confidence support",
    ],
    needs: [
      "Before buying from a private seller",
      "Before purchasing a used vehicle",
      "When condition history is unclear",
      "To reduce surprise repair risk",
    ],
    matters:
      "A pre-purchase inspection can help reveal problems that are easy to miss during a casual review or test drive.",
    faqs: [
      [
        "What is the goal of a pre-purchase inspection?",
        "It helps a buyer better understand the vehicle’s condition before committing to a purchase.",
      ],
      ["Can it identify hidden issues?", "It can help uncover concerns that may not be obvious during a basic visual check."],
      ["Is this useful for private-party purchases?", "Yes. It is especially helpful when buying from private sellers."],
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-adas-calibration",
    title: "Why Your Car Needs ADAS Calibration After a Windshield Replacement",
    excerpt: "Modern safety systems rely on cameras and sensors. Even a 1-degree misalignment can lead to safety failures. Here's what you need to know.",
    date: "March 28, 2024",
    author: "Snoopys Team",
    category: "Safety",
    readTime: "5 min read",
    content: `
      <h2>The Importance of Precision</h2>
      <p>Modern vehicles are equipped with Advanced Driver Assistance Systems (ADAS) that help drivers stay safe on the road. These systems include features like lane departure warning, adaptive cruise control, and automatic emergency braking.</p>
      <p>When you replace your windshield, the camera mounted on it is often disturbed. Even a tiny misalignment can cause these safety features to malfunction, or worse, fail when you need them most.</p>
      
      <h3>What Happens During Calibration?</h3>
      <p>At Snoopys Auto Care, we use factory-grade equipment to ensure your cameras and sensors are aligned perfectly to manufacturer specifications. This process involves sophisticated software and physical targets to test and verify the accuracy of the systems.</p>
      
      <h3>Don't Compromise on Safety</h3>
      <p>If your vehicle has ADAS features, always ensure that your service provider performs a professional calibration after any work involving the front end or windshield of your car.</p>
    `
  },
  {
    slug: "radar-alignment-essentials",
    title: "Avoiding Adaptive Cruise Control Errors with Proper Radar Alignment",
    excerpt: "Experiencing 'Sensor Blocked' or inconsistent braking? Your front radar might be misaligned. Learn how precision calibration fixes it.",
    date: "March 22, 2024",
    author: "Snoopys Team",
    category: "Technical",
    readTime: "4 min read",
    content: `
      <h2>Radar Systems: Your Vehicle's Eyes</h2>
      <p>Radar sensors are typically located behind the front bumper or grille. They are responsible for measuring the distance to the vehicle in front of you, enabling features like Adaptive Cruise Control (ACC).</p>
      <p>Collision events, or even minor bumper repairs, can shift these sensors. This leads to errors or unpredictable behavior from your vehicle's safety systems.</p>
      
      <h3>Signs of Misalignment</h3>
      <ul>
        <li>Inconsistent adaptive cruise control braking</li>
        <li>Frequent 'Sensor Blocked' warnings without obvious obstructions</li>
        <li>Safety systems cutting out unexpectedly</li>
      </ul>
    `
  }
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
