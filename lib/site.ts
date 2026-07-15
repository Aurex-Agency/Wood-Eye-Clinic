/*
 * Canonical site origin used for SEO (canonical URLs, Open Graph, sitemap,
 * JSON-LD). Set NEXT_PUBLIC_SITE_URL in Vercel once the custom domain is
 * live; until then the production Vercel URL keeps every tag correct.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://wood-eye-clinic.vercel.app";

export const clinic = {
  name: "Wood Eye Clinic",
  tagline: "Caring for the vision of Pontotoc and North Mississippi since 1981.",
  phone: "(662) 489-5907",
  phoneHref: "tel:+16624895907",
  address: {
    street: "26 S Main Street",
    city: "Pontotoc",
    state: "MS",
    zip: "38863",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Wood+Eye+Clinic+26+S+Main+Street+Pontotoc+MS+38863",
  geo: { latitude: 34.2465, longitude: -88.9987 },
  // External patient-facing systems
  bookingUrl:
    "https://patron.solutionreach.com/uipatron/schedule/subscriber/bcdc301367849bc1/welcome?utm_campaign=sr-legacy-link-redirect",
  patientPortalUrl: "https://revolutionehr.com/patient-portal/login",
  orderContactsUrl: "https://portal.drcontactlens.com/",
  hours: [
    { day: "Monday", hours: "9:00 am to 5:00 pm" },
    { day: "Tuesday", hours: "9:00 am to 6:00 pm" },
    { day: "Wednesday", hours: "9:00 am to 5:00 pm" },
    { day: "Thursday", hours: "9:00 am to 12:00 pm" },
    { day: "Friday", hours: "9:00 am to 5:00 pm" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ],
};

export type TeamMember = {
  slug: string;
  name: string;
  shortName: string;
  role: string;
  isDoctor: boolean;
  joined: string;
  headline: string;
  intro: string;
  bio: string[];
  specialties: string[];
  funFact?: string;
  placeholder?: boolean;
  photo?: string;
};

export const doctors: TeamMember[] = [
  {
    slug: "dr-william-terry-wood",
    name: "Dr. William Terry Wood",
    shortName: "Dr. Wood",
    role: "Optometrist, Founder",
    isDoctor: true,
    photo: "/img/doctors/wood.webp",
    joined: "Founded the clinic in 1981",
    headline: "Serving the community that raised him for more than 45 years.",
    intro:
      "Dr. William Terry Wood founded Wood Eye Clinic in November 1981 and has spent his career helping the people of Pontotoc and North Mississippi protect one of their greatest gifts: their vision.",
    bio: [
      "Born and raised in Pontotoc, Dr. Wood believes exceptional eye care is built on trust, compassion, and treating every patient like family. Many of the patients he first cared for in the early years of his practice now bring their children and grandchildren to Wood Eye Clinic, a legacy he considers one of his greatest blessings.",
      "After graduating from Pontotoc High School in 1974, Dr. Wood attended Itawamba Community College and the University of Mississippi before earning both his Bachelor of Science and Doctor of Optometry degrees from Southern College of Optometry. He returned home to open Wood Eye Clinic with a vision of providing advanced eye care while serving the community that raised him.",
      "With more than 45 years of experience, Dr. Wood provides comprehensive eye care with advanced training in primary eye care, diabetic eye exams, glaucoma management, dry eye treatment, pediatric eye care, specialty contact lenses, and YAG posterior capsulotomy laser surgery. His commitment to continuing education and investing in the latest technology allows him to provide the highest level of care while maintaining the personal relationships that have always been at the heart of his practice.",
      "Outside the office, Dr. Wood enjoys photography, cycling, and traveling with his wife, Melinda. Together they cherish spending time with their children and grandchildren. He is grateful for the opportunity to serve the community that raised him and is honored by the trust generations of families have placed in him.",
    ],
    specialties: [
      "Primary eye care",
      "Diabetic eye exams",
      "Glaucoma management",
      "Dry eye treatment",
      "Pediatric eye care",
      "Specialty contact lenses",
      "YAG posterior capsulotomy laser surgery",
    ],
    funFact: "Enjoys photography, cycling, and traveling with his wife, Melinda.",
  },
  {
    slug: "dr-miranda-maynard",
    name: "Dr. Miranda Maynard",
    shortName: "Dr. Maynard",
    role: "Optometrist",
    isDoctor: true,
    photo: "/img/doctors/maynard.webp",
    joined: "Joined the clinic in 2008",
    headline: "Full-scope eye care with a special passion for vision therapy.",
    intro:
      "Dr. Miranda Maynard joined Wood Eye Clinic in 2008 and has been dedicated to providing compassionate, comprehensive eye care to patients throughout Pontotoc and the surrounding communities ever since.",
    bio: [
      "Dr. Maynard believes every patient deserves to feel heard, valued, and confident in their care, and she enjoys building lasting relationships with the families she serves.",
      "After graduating from Tupelo High School in 1999, Dr. Maynard earned her Bachelor of Science degree in Microbiology from Mississippi State University before receiving her Doctor of Optometry degree from Southern College of Optometry. During her training, she completed clinical rotations in ocular disease, primary eye care, contact lenses, low vision, and vision therapy. She is also certified in lasers and injections.",
      "As a full-scope optometrist, Dr. Maynard diagnoses and treats a wide variety of eye conditions, including cataracts, glaucoma, macular degeneration, dry eye disease, and other ocular disorders. She has a special passion for vision therapy, helping children with focusing, tracking, and binocular vision disorders that can impact learning and academic success. Seeing her young patients gain confidence both in and out of the classroom is one of the most rewarding aspects of her work.",
      "Outside the clinic, Dr. Maynard enjoys serving in the music ministry at her church, spending time outdoors, cooking, and making memories with her husband, Jon, and their two daughters. She is thankful for the opportunity to care for the people of Pontotoc and considers it a privilege to help patients enjoy a lifetime of healthy vision.",
    ],
    specialties: [
      "Comprehensive eye exams",
      "Vision therapy",
      "Cataract and glaucoma care",
      "Macular degeneration",
      "Dry eye disease",
      "Contact lenses",
      "Certified in lasers and injections",
    ],
    funFact:
      "Serves in the music ministry at her church and loves cooking and the outdoors.",
  },
  {
    slug: "dr-joseph-caleb-warren",
    name: "Dr. Joseph Caleb Warren",
    shortName: "Dr. Warren",
    role: "Optometrist",
    isDoctor: true,
    photo: "/img/doctors/warren.webp",
    joined: "Joined the clinic in June 2023",
    headline: "Committed to delivering advanced eye care with a personal touch.",
    intro:
      "Dr. Joseph Caleb Warren joined Wood Eye Clinic in June 2023 and is proud to provide compassionate, personalized eye care to patients throughout Pontotoc and the surrounding communities.",
    bio: [
      "Dr. Warren believes in taking the time to listen to each patient's concerns, answer their questions, and create a comfortable experience where every patient feels valued and confident in their care.",
      "After graduating from Pontotoc High School in 2014, Dr. Warren earned his Bachelor of Business Administration, with a minor in Biology, from Mississippi State University before receiving his Doctor of Optometry degree from the University of Missouri-St. Louis College of Optometry. His education provided extensive training in primary eye care, diabetic eye exams, glaucoma management, dry eye treatment, pediatric eye care, and specialty contact lenses. He is also certified in eyelid lesion removal and YAG posterior capsulotomy laser surgery.",
      "Dr. Warren enjoys caring for patients of all ages and providing comprehensive eye care tailored to each individual's needs. He is passionate about combining advanced technology with compassionate, personalized care to help patients achieve and maintain healthy vision throughout every stage of life. Building lasting relationships with his patients and serving his hometown community are among the most rewarding parts of his career.",
      "Outside the clinic, Dr. Warren enjoys spending time with his wife, Shelby, and their two daughters. Whether he is deer hunting, working out at the gym, or enjoying time with family and friends, he appreciates the close-knit community that makes Pontotoc such a special place to call home. He is grateful for the opportunity to care for the families of North Mississippi and looks forward to serving them for many years to come.",
    ],
    specialties: [
      "Primary eye care",
      "Diabetic eye exams",
      "Glaucoma management",
      "Dry eye treatment",
      "Pediatric eye care",
      "Specialty contact lenses",
      "Eyelid lesion removal",
      "YAG posterior capsulotomy laser surgery",
    ],
    funFact:
      "A Pontotoc native who enjoys spending time with his wife and daughters, deer hunting, and staying active in the gym.",
  },
];

/*
 * Wood Eye Clinic team members. Photos are optimized in /public/img/staff.
 * Bios are intentionally brief and can be expanded as the clinic provides more
 * detail for each person.
 */
export const staff: TeamMember[] = [
  {
    slug: "sarah-grace",
    name: "Sarah Grace Golden",
    shortName: "Sarah",
    role: "Office Manager",
    isDoctor: false,
    joined: "Front office & scheduling",
    headline: "Keeping every visit smooth, from the very first phone call.",
    intro:
      "Sarah oversees the front office and makes sure scheduling, paperwork, and insurance questions are handled with care so your visit is stress-free.",
    bio: [],
    specialties: ["Scheduling", "Insurance verification", "Patient support"],
    photo: "/img/staff/sarah-grace.webp",
  },
  {
    slug: "savannah-purdon",
    name: "Savannah Purdon",
    shortName: "Savannah",
    role: "Optical Manager",
    isDoctor: false,
    joined: "Optical boutique",
    headline: "Helping you find frames you feel confident wearing every day.",
    intro:
      "Savannah leads our optical boutique, guiding patients through frame styles, lens options, and precise measurements for a perfect fit.",
    bio: [],
    specialties: ["Frame styling", "Lens options", "Fittings"],
    photo: "/img/staff/savannah-purdon.webp",
  },
  {
    slug: "katelyn-maffett",
    name: "Katelyn Maffett",
    shortName: "Katelyn",
    role: "Optical Lab Manager",
    isDoctor: false,
    joined: "Onsite optical lab",
    headline: "Crafting and finishing your eyewear right here in our lab.",
    intro:
      "Katelyn runs our onsite optical lab, cutting and finishing lenses for faster turnaround and higher-quality eyewear.",
    bio: [],
    specialties: ["Lens finishing", "Quality control", "Repairs & adjustments"],
    photo: "/img/staff/katelyn-maffett.webp",
  },
  {
    slug: "christy-wallace",
    name: "Christi Wallace",
    shortName: "Christi",
    role: "Optometric Technician",
    isDoctor: false,
    joined: "Beside you at every exam",
    headline: "Gathering the measurements and imaging your doctor relies on.",
    intro:
      "Christy performs pretesting and diagnostic imaging so your doctor has a complete picture of your eye health before your exam.",
    bio: [],
    specialties: ["Pretesting", "Retinal imaging", "Patient comfort"],
    photo: "/img/staff/christy-wallace.webp",
  },
  {
    slug: "chloe-throne",
    name: "Chloe Thorne",
    shortName: "Chloe",
    role: "Glasses Technician",
    isDoctor: false,
    joined: "Optical boutique",
    headline: "Making sure your glasses fit just right.",
    intro:
      "Chloe helps fit, adjust, and fine-tune your eyewear so it feels as good as it looks, long after you leave the office.",
    bio: [],
    specialties: ["Frame fitting", "Adjustments", "Repairs"],
    photo: "/img/staff/chloe-throne.webp",
  },
  {
    slug: "shelby-knight",
    name: "Shelby Knight",
    shortName: "Shelby",
    role: "Clinical Scribe",
    isDoctor: false,
    joined: "Beside you at every exam",
    headline: "Capturing the details so your doctor can focus on you.",
    intro:
      "Shelby documents your exam and assists the doctor so your visit stays personal, accurate, and efficient.",
    bio: [],
    specialties: ["Exam documentation", "Patient assistance"],
    photo: "/img/staff/shelby-knight.webp",
  },
  {
    slug: "katelyn-inmon",
    name: "Katelyn Inmon",
    shortName: "Katelyn",
    role: "Clinical Scribe",
    isDoctor: false,
    joined: "Beside you at every exam",
    headline: "Supporting your exam from start to finish.",
    intro:
      "Katelyn assists our doctors during exams and keeps your records accurate and up to date.",
    bio: [],
    specialties: ["Exam documentation", "Patient assistance"],
    photo: "/img/staff/katelyn-inmon.webp",
  },
  {
    slug: "bailey-rhynes",
    name: "Bailey Rhynes",
    shortName: "Bailey",
    role: "Clinical Scribe",
    isDoctor: false,
    joined: "Beside you at every exam",
    headline: "A friendly face at every step of your exam.",
    intro:
      "Bailey assists the doctors and helps you feel comfortable and cared for throughout your visit.",
    bio: [],
    specialties: ["Exam documentation", "Patient assistance"],
    photo: "/img/staff/bailey-rhynes.webp",
  },
  {
    slug: "chelsea-conlee",
    name: "Chelsea Conlee",
    shortName: "Chelsea",
    role: "Optometric Receptionist",
    isDoctor: false,
    joined: "The first smile you see",
    headline: "The first smile you see when you arrive.",
    intro:
      "Chelsea welcomes patients, answers questions, and helps you get checked in with ease.",
    bio: [],
    specialties: ["Check-in", "Scheduling", "Patient support"],
    photo: "/img/staff/chelsea-conlee.webp",
  },
  {
    slug: "alana-wright",
    name: "Alana Wright",
    shortName: "Alana",
    role: "Optometric Receptionist",
    isDoctor: false,
    joined: "The first smile you see",
    headline: "Here to help before and after your visit.",
    intro:
      "Alana greets patients and helps with scheduling, benefits, and everything in between.",
    bio: [],
    specialties: ["Check-in", "Scheduling", "Patient support"],
    photo: "/img/staff/alana-wright.webp",
  },
];

export const team: TeamMember[] = [...doctors, ...staff];

export type ServiceSection = {
  heading: string;
  body?: string[];
  list?: string[];
  note?: string;
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  summary: string;
  sections: ServiceSection[];
};

export const services: Service[] = [
  {
    slug: "comprehensive-eye-exams",
    name: "Comprehensive Eye Exams",
    short: "Eye Exams",
    icon: "eye",
    summary:
      "Thorough eye and vision exams for every age, from a child's first visit to routine care for adults and seniors.",
    sections: [
      {
        heading: "More Than Reading an Eye Chart",
        body: [
          "A comprehensive eye exam at Wood Eye Clinic evaluates far more than how clearly you see. Our doctors review your patient history, test your vision, assess how your eyes focus and move together, and evaluate the overall health of your eyes.",
          "We also test for conditions such as glaucoma, cataracts, and macular degeneration, many of which develop silently before you ever notice a change in your vision.",
        ],
      },
      {
        heading: "What Your Exam Includes",
        list: [
          "Review of your medical and vision history",
          "Visual acuity testing",
          "Eye focusing, teaming, and movement assessment",
          "Eye pressure measurement",
          "Evaluation of the retina and optic nerve",
          "Retinal imaging or photography when needed",
        ],
      },
      {
        heading: "Caring for Every Stage of Life",
        body: [
          "We believe healthy vision begins in childhood and continues throughout every stage of life. Whether you are scheduling your toddler's first eye exam, your teenager's annual checkup, or your own comprehensive exam, we are honored to care for your family's vision for generations to come.",
        ],
      },
    ],
  },
  {
    slug: "childrens-eye-exams",
    name: "Children's Eye Exams",
    short: "Kids' Exams",
    icon: "child",
    summary:
      "Healthy vision starts early. Comprehensive pediatric exams that catch what school screenings miss.",
    sections: [
      {
        heading: "Healthy Vision Starts Early",
        body: [
          "Clear vision plays an important role in a child's growth, learning, and development. Because children often do not realize they are having trouble seeing, vision problems can go unnoticed for years. Many children assume everyone sees the way they do, which makes regular comprehensive eye exams one of the best ways to protect their eye health and support their success both in and out of the classroom.",
          "At Wood Eye Clinic, we proudly provide comprehensive eye exams for patients of all ages, from infants and young children to adults and seniors. Whether it is your child's first eye exam or your own annual visit, our team is committed to providing personalized care in a comfortable, family-friendly environment.",
        ],
      },
      {
        heading: "Why Are Children's Eye Exams So Important?",
        body: [
          "Good vision is about much more than seeing the eye chart. Experts estimate that up to 80% of classroom learning is presented visually. Children rely on their eyes to read, write, focus, use digital devices, participate in sports, and interact with the world around them.",
          "A comprehensive eye exam evaluates much more than visual clarity. During your child's visit, we assess:",
        ],
        list: [
          "Visual acuity (how clearly your child sees)",
          "Eye health",
          "Eye teaming and coordination",
          "Eye tracking",
          "Focusing ability",
          "Depth perception",
          "Color vision",
          "Overall visual development",
        ],
        note: "These skills all work together to support comfortable, efficient vision.",
      },
      {
        heading: "School Vision Screenings Are Not Comprehensive Eye Exams",
        body: [
          "Many parents are surprised to learn that passing a school vision screening does not necessarily mean their child has healthy vision.",
          "School screenings typically check only distance vision. They often do not detect problems with eye teaming, focusing, tracking, depth perception, or other visual skills that are essential for reading and learning.",
          "A comprehensive eye exam provides a complete evaluation of your child's vision and eye health, allowing problems to be identified and treated early.",
        ],
      },
      {
        heading: "Signs Your Child May Need an Eye Exam",
        body: [
          "Some children never complain about their vision because they do not realize anything is wrong. Watch for signs such as:",
        ],
        list: [
          "Frequent headaches",
          "Squinting or covering one eye",
          "Holding books or screens very close",
          "Losing their place while reading",
          "Skipping words or lines",
          "Difficulty concentrating during schoolwork",
          "Complaints that words appear blurry or move on the page",
          "Excessive eye rubbing or blinking",
          "Poor hand-eye coordination",
          "Avoiding reading or close-up work",
          "Declining school performance",
        ],
        note: "If your child experiences any of these symptoms, a comprehensive eye exam can help determine whether vision is contributing to the problem.",
      },
    ],
  },
  {
    slug: "vision-therapy",
    name: "Vision Therapy",
    short: "Vision Therapy",
    icon: "target",
    summary:
      "A customized program led by Dr. Maynard that improves how the eyes and brain work together.",
    sections: [
      {
        heading: "When 20/20 Is Not the Whole Story",
        body: [
          "Some children have healthy eyesight and may even see 20/20 on a standard eye chart, yet still struggle with how their eyes work together. Issues with focusing, eye teaming, and eye tracking can make reading, learning, and everyday tasks more difficult and tiring.",
        ],
      },
      {
        heading: "Conditions We Treat",
        body: [
          "Dr. Miranda Maynard provides vision therapy for children with functional vision disorders, including:",
        ],
        list: [
          "Binocular vision dysfunction",
          "Eye tracking disorders",
          "Visual focusing disorders",
          "Other visual efficiency and visual processing concerns",
        ],
      },
      {
        heading: "How Vision Therapy Works",
        body: [
          "Vision therapy is a customized program designed to improve how the eyes and brain work together. Through guided in-office activities and prescribed home exercises, many children experience improvements in reading comfort, visual endurance, coordination, and confidence.",
          "Vision therapy is provided by Dr. Maynard at Wood Eye Clinic, in the same convenient location where your child's comprehensive eye exam is performed, making it easy for families to receive coordinated care in one familiar setting.",
          "If your child struggles with reading, attention, or visual tasks despite otherwise healthy eyes, Dr. Maynard can determine whether vision therapy may be appropriate.",
        ],
      },
      {
        heading: "Vision Therapy Financial Information",
        body: [
          "We understand that vision therapy is an investment in your child's future. Because vision therapy is considered a specialized treatment program, insurance does not apply to the cost of therapy. Before beginning treatment, we will review your child's individualized therapy plan, discuss all associated costs, and answer any questions you may have so you know exactly what to expect.",
        ],
      },
    ],
  },
  {
    slug: "diabetic-eye-care",
    name: "Diabetic Eye Care",
    short: "Diabetic Care",
    icon: "drop",
    summary:
      "Early detection and careful monitoring of diabetic eye disease to help preserve your vision.",
    sections: [
      {
        heading: "Comprehensive Care for Patients With Diabetes",
        body: [
          "If you are looking for a diabetic eye exam in Pontotoc, MS or North Mississippi, Wood Eye Clinic provides comprehensive eye care for patients with diabetes of all ages.",
          "Diabetes can affect your eyes long before you notice changes in your vision, which is why routine eye exams are essential for protecting long-term eye health. We help detect diabetic eye disease early and monitor changes over time to help preserve your vision.",
        ],
      },
      {
        heading: "Why Diabetic Eye Exams Are Important",
        body: [
          "Diabetes can cause damage to the small blood vessels in the eye, leading to conditions such as:",
        ],
        list: [
          "Diabetic retinopathy",
          "Diabetic macular edema (DME)",
          "Cataracts",
          "Glaucoma",
        ],
        note: "These conditions often develop slowly and may not cause noticeable symptoms at first. Regular eye exams are the best way to detect changes early, before vision loss occurs.",
      },
      {
        heading: "Eye Screenings vs. a Full Eye Exam",
        body: [
          "Some patients receive a basic vision or eye screening at their primary care physician's office. While these screenings can be helpful, a screening is not a substitute for a comprehensive eye exam.",
          "A full eye exam performed by an eye doctor evaluates the complete health of your eyes and is necessary for detecting early signs of diabetic eye disease.",
        ],
      },
      {
        heading: "What to Expect During Your Diabetic Eye Exam",
        list: [
          "Review of your medical history",
          "Vision testing",
          "Eye pressure measurement",
          "Evaluation of the retina and optic nerve",
          "Retinal imaging or photography if needed",
        ],
        note: "Our goal is to get a complete picture of your eye health and identify any early changes related to diabetes.",
      },
      {
        heading: "How Often Should You Have an Eye Exam?",
        body: [
          "Most patients with diabetes should have a comprehensive eye exam once a year, though some may need more frequent visits depending on their eye health and medical history. Our doctors will recommend a personalized schedule based on your needs.",
          "Diabetic eye disease is one of the leading causes of vision loss, but it is often manageable when detected early. Even if your vision seems normal, changes may already be developing. Regular eye exams are one of the most important steps you can take to protect your sight.",
        ],
      },
    ],
  },
  {
    slug: "eye-disease-management",
    name: "Eye Disease Management",
    short: "Eye Conditions",
    icon: "shield",
    summary:
      "Clear explanations and personalized treatment for glaucoma, cataracts, macular degeneration, and more.",
    sections: [
      {
        heading: "Understanding Your Eye Health",
        body: [
          "Hearing a diagnosis like glaucoma or cataracts can feel overwhelming. Our goal is to help you understand what these conditions mean, how they affect your vision, and what treatment options are available.",
          "At Wood Eye Clinic, we believe informed patients make the best decisions about their eye health. Below are some of the most common eye conditions we diagnose and manage.",
        ],
      },
      {
        heading: "Glaucoma",
        body: [
          "Glaucoma is a group of eye conditions that can damage the optic nerve, often due to increased eye pressure. It is one of the leading causes of vision loss, but it often develops slowly and without noticeable symptoms in the early stages.",
        ],
        list: [
          "Often has no early warning signs",
          "Can cause gradual loss of peripheral (side) vision",
          "Early detection is key to preventing vision loss",
          "Can be managed with eye drops, laser treatment, or surgery in some cases",
        ],
        note: "Because glaucoma progresses silently, routine eye exams are essential for early detection and long-term vision protection.",
      },
      {
        heading: "Cataracts",
        body: [
          "A cataract is a clouding of the eye's natural lens, which can cause blurry vision and difficulty seeing clearly, especially at night. Common symptoms include:",
        ],
        list: [
          "Blurry or cloudy vision",
          "Increased glare or sensitivity to light",
          "Difficulty driving at night",
          "Colors appearing faded or yellowed",
          "Frequent prescription changes",
        ],
        note: "Cataracts are very common, especially with age. When they begin to interfere with daily life, cataract surgery is a safe and effective treatment that replaces the cloudy lens with a clear artificial lens.",
      },
      {
        heading: "Macular Degeneration",
        body: [
          "Macular degeneration affects the central part of the retina, called the macula, which is responsible for sharp, detailed vision.",
        ],
        list: [
          "Most common in adults over 60",
          "Can affect reading and facial recognition",
          "Often progresses slowly",
          "Early detection helps preserve vision longer",
        ],
      },
      {
        heading: "When to Seek Care",
        body: ["You should schedule an eye exam if you notice:"],
        list: [
          "Sudden or gradual vision changes",
          "Blurry or distorted vision",
          "Difficulty seeing at night",
          "Loss of side vision",
          "Frequent changes in your glasses prescription",
        ],
        note: "A diagnosis is only the beginning of understanding your eye health, not the end of your vision story. Our team is here to monitor, manage, and guide you through every step of care with clear explanations and personalized treatment options.",
      },
    ],
  },
  {
    slug: "contact-lenses",
    name: "Contact Lenses",
    short: "Contacts",
    icon: "lens",
    summary:
      "Evaluations and fittings for every wearer, including specialty lenses for hard-to-fit eyes.",
    sections: [
      {
        heading: "Find the Right Lens for Your Life",
        body: [
          "Whether you are new to contact lenses or have worn them for years, our doctors are here to help you find the best option for your eyes and your lifestyle. We offer comprehensive contact lens evaluations and fittings for patients of all ages, using the latest technology to ensure a comfortable fit and healthy vision.",
          "From daily disposable lenses to specialty designs, we will work with you to find the lenses that provide the best combination of comfort, convenience, and clear vision.",
        ],
      },
      {
        heading: "Contact Lens Brands We Carry",
        body: [
          "We proudly offer contact lenses from today's leading manufacturers, including:",
        ],
        list: [
          "Johnson & Johnson Vision (ACUVUE, ACUVUE VITA)",
          "Alcon (Air Optix, DAILIES, Precision1, Precision7, Total30)",
          "Bausch & Lomb (ULTRA, INFUSE, Biotrue)",
          "CooperVision (Biofinity, MyDay, Proclear)",
        ],
        note: "Whether you wear daily disposable, bi-weekly, monthly, toric, multifocal, or specialty lenses, our doctors will help determine the best option for your prescription, eye health, and lifestyle.",
      },
      {
        heading: "Specialty and Hard-to-Fit Contact Lenses",
        body: [
          "Not every patient can wear standard soft contact lenses, and that is okay. We offer specialty contact lens fittings for patients with:",
        ],
        list: [
          "Keratoconus",
          "Irregular corneas",
          "High prescriptions",
          "Astigmatism",
          "Presbyopia",
          "Dry eye concerns",
          "Previous contact lens discomfort",
        ],
        note: "Our doctors have experience fitting specialty lenses that can improve comfort and provide excellent vision, even for patients who have been told they were not good candidates for contact lenses.",
      },
      {
        heading: "New to Contact Lenses?",
        body: [
          "Learning to wear contact lenses is easier than you might think. Whether you are trying contacts for the first time or returning after years without them, our experienced team will guide you through every step of the process. We will teach you how to:",
        ],
        list: [
          "Insert and remove your lenses",
          "Properly clean and care for your contacts",
          "Wear your lenses safely and comfortably",
          "Maintain healthy eyes while wearing contacts",
        ],
        note: "Please note: contact lens evaluations and fittings are separate from a comprehensive eye exam and require additional testing and measurements. There is an additional fee for contact lens exams and fittings, and our team will be happy to answer any questions about pricing before your appointment.",
      },
      {
        heading: "Availability and Ordering",
        body: [
          "Select contact lenses are kept in stock at our clinic for convenient pickup. Some lenses may need to be ordered directly from the manufacturer. In most cases, estimated shipping time is approximately one week, though delivery times may vary depending on availability and prescription requirements.",
          "Our team will always let you know what to expect at the time of your order and keep you updated if there are any delays.",
        ],
      },
    ],
  },
  {
    slug: "eyewear-and-glasses",
    name: "Eyewear & Glasses",
    short: "Eyewear",
    icon: "glasses",
    summary:
      "A curated optical boutique with designer frames, advanced lenses, and personalized styling.",
    sections: [
      {
        heading: "Eyewear You Feel Confident Wearing",
        body: [
          "At Wood Eye Clinic, we believe choosing eyewear should be a personal and enjoyable experience. Our optical boutique offers a carefully curated selection of frames and lenses designed to combine style, comfort, durability, and clear vision.",
          "Our optical team is here to help you find eyewear that fits your prescription, lifestyle, and personality, so you leave seeing clearly and feeling confident.",
        ],
      },
      {
        heading: "Frame Brands We Carry",
        list: [
          "Anne Klein",
          "Bulova",
          "Calvin Klein",
          "Coach",
          "Dolce & Gabbana",
          "Jonathan Cate",
          "Kendra Scott",
          "Klik",
          "Lilly Pulitzer",
          "Marc Jacobs",
          "Michael Kors",
          "Nike",
          "Nicole Miller",
          "Nifties",
          "Oakley",
          "Prada",
          "Ray-Ban",
          "SALT.",
          "Stepper",
          "Versace",
        ],
      },
      {
        heading: "Optical Lenses & Technology",
        body: [
          "We offer advanced lens options to help you get the most out of your eyewear, including:",
        ],
        list: [
          "Progressive lenses (no line)",
          "Straight top bifocal (line)",
          "Blue light protection lenses",
          "Thin and lightweight lens designs",
          "Anti-reflective coatings",
          "Transition (light-adaptive) lenses",
          "Sports and safety lenses",
        ],
        note: "Many of our frames can also be made into prescription sunglasses, allowing you to enjoy clear vision and UV protection in a style you already love.",
      },
      {
        heading: "Safety & Protective Eyewear",
        body: [
          "We offer a selection of safety glasses designed for work environments, sports, and activities that require additional eye protection. These frames combine durability, comfort, and vision correction when needed.",
        ],
      },
      {
        heading: "Personalized Frame Selection",
        body: [
          "With so many styles available, choosing the right pair of glasses can feel overwhelming, but you do not have to do it alone. Our opticians are here to help you find frames that not only fit your face, but also fit your life.",
          "Whether you prefer bold designer styles or subtle everyday frames, we will help you leave with eyewear you feel confident wearing every day.",
        ],
      },
    ],
  },
  {
    slug: "sunglasses",
    name: "Sunglasses",
    short: "Sunglasses",
    icon: "sun",
    summary:
      "Premium sunglass collections with advanced UV protection, available with prescription and polarized lenses.",
    sections: [
      {
        heading: "Protection That Looks as Good as It Feels",
        body: [
          "We carry premium sunglass brands known for performance, protection, and style:",
        ],
        list: [
          "Costa",
          "Kate Spade",
          "Kendra Scott",
          "Maui Jim",
          "Oakley",
          "Prada",
          "Ray-Ban",
          "Tory Burch",
        ],
        note: "These sunglasses provide advanced UV protection and are available with prescription lenses, including polarized options to reduce glare and improve visual clarity.",
      },
      {
        heading: "Prescription Sunglasses",
        body: [
          "Many of the frames in our optical boutique can be made into prescription sunglasses, so you can enjoy clear vision and UV protection in a style you already love. Ask our optical team about polarized and light-adaptive options at your next visit.",
        ],
      },
    ],
  },
  {
    slug: "computer-vision",
    name: "Computer Vision Care",
    short: "Digital Eye Strain",
    icon: "monitor",
    summary:
      "Relief for tired, dry, strained eyes in a world full of screens.",
    sections: [
      {
        heading: "Eyes That Work as Hard as You Do",
        body: [
          "Between work, school, and everyday life, most of us spend hours each day looking at computers, tablets, and phones. That screen time can lead to digital eye strain, with symptoms such as tired or burning eyes, blurred vision, dry eyes, headaches, and neck or shoulder discomfort.",
          "Our doctors can evaluate how your eyes focus and work together at screen distances and recommend solutions tailored to your daily routine.",
        ],
      },
      {
        heading: "How We Can Help",
        list: [
          "Comprehensive evaluation of your near and intermediate vision",
          "Computer and task-specific lens prescriptions",
          "Blue light protection lens options",
          "Dry eye evaluation and treatment",
          "Practical habits and workspace tips to reduce strain",
        ],
        note: "If your eyes feel exhausted at the end of the day, you do not have to accept it as normal. Schedule an exam and let us help you work in comfort.",
      },
    ],
  },
  {
    slug: "lasik-co-management",
    name: "LASIK Consultation & Co-Management",
    short: "LASIK",
    icon: "spark",
    summary:
      "Pre-operative exams, honest guidance, and post-operative care for laser vision correction.",
    sections: [
      {
        heading: "Thinking About LASIK?",
        body: [
          "LASIK is a popular surgical alternative for correcting nearsightedness, farsightedness, and astigmatism. While the procedure itself is performed by a surgeon, your journey starts and ends at Wood Eye Clinic.",
          "Our doctors provide thorough pre-operative exams to determine whether you are a good candidate, help you understand what to expect, and coordinate your care with trusted surgical partners.",
        ],
      },
      {
        heading: "Our Role in Your LASIK Journey",
        list: [
          "Candidacy evaluations and honest recommendations",
          "Pre-operative measurements and exams",
          "Coordination with experienced LASIK surgeons",
          "Post-operative exams and healing checkups close to home",
        ],
        note: "You get the convenience of local care in Pontotoc with the confidence of an experienced surgical team.",
      },
    ],
  },
  {
    slug: "onsite-optical-lab",
    name: "Onsite Optical Lab",
    short: "Optical Lab",
    icon: "lab",
    summary:
      "Many prescription lenses are crafted and finished right here in our clinic for faster turnaround.",
    sections: [
      {
        heading: "Faster, More Convenient Eyewear",
        body: [
          "At Wood Eye Clinic, we are proud to offer an onsite optical lab, allowing us to craft and finish many prescription lenses right here in our clinic. This means quicker turnaround times, greater quality control, and a more convenient experience for our patients.",
        ],
      },
      {
        heading: "What Our Onsite Lab Allows Us to Do",
        list: [
          "Process many prescription lenses locally",
          "Perform quality checks throughout the finishing process",
          "Reduce wait times for select eyewear",
          "Make certain adjustments more quickly when needed",
          "Provide more direct oversight of your finished glasses",
        ],
      },
      {
        heading: "Glasses Adjustments & Minor Repairs",
        body: [
          "We are here to help you keep your glasses fitting comfortably and working properly, even after you leave the office. We offer complimentary in-office assistance for:",
        ],
        list: [
          "Frame adjustments for a better fit",
          "Nose pad replacements or adjustments",
          "Tightening loose screws",
          "Minor realignments",
          "Restoring comfort if frames become uneven or loose",
        ],
        note: "If a repair requires replacement parts or more extensive work, our optical team will review options with you and recommend the best solution.",
      },
      {
        heading: "Quality You Can Trust",
        body: [
          "Because many lenses are processed on-site, some patients can receive their glasses significantly faster than traditional outside lab ordering. For more specialized prescriptions or lens designs, we may still use trusted outside laboratories. In these cases, typical turnaround time is usually about one week, depending on the prescription and lens type.",
          "With an onsite lab, our optical team closely monitors the finishing process to ensure accuracy, clarity, and comfort. Every pair of glasses is checked carefully before being dispensed to the patient.",
        ],
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "They make you feel like family. Everyone is so courteous and friendly. I wouldn't go anywhere else.",
  },
  {
    quote:
      "The staff is always nice and helpful. Dr. Maynard has helped me so much. I highly recommend Wood Eye Clinic.",
  },
  {
    quote: "Beautiful office, wonderful staff! The very best!",
  },
  {
    quote: "Local small-town service cannot be matched in quality.",
  },
];

export const visionInsurance = [
  "AlwaysCare",
  "Community Eye Care (CEC)",
  "Davis Vision",
  "EyeMed",
  "March Vision",
  "Opticare",
  "Spectera",
  "Superior Vision",
  "VSP",
  "Mississippi Medicaid",
];

export const medicalInsurance = [
  "Aetna",
  "Aetna Medicare Advantage",
  "Ambetter",
  "Blue Cross Blue Shield",
  "GEHA",
  "Humana",
  "Magnolia Health",
  "Mississippi Medicaid",
  "Medicare",
  "Molina Healthcare",
  "NRECA",
  "TRICARE",
  "UnitedHealthcare",
];

export const faqs = [
  {
    question: "Do you accept my insurance?",
    answer:
      "We participate with many major vision plans (including VSP, EyeMed, Davis Vision, Superior Vision, and Mississippi Medicaid) and medical plans (including Blue Cross Blue Shield, Medicare, Aetna, Humana, UnitedHealthcare, and TRICARE). If you do not see your plan listed on our insurance page, give us a call and we will be happy to verify your benefits before your visit.",
  },
  {
    question: "What is the difference between vision and medical insurance?",
    answer:
      "Routine eye exams, glasses, and contact lens services typically use vision insurance. Eye health concerns such as glaucoma, cataracts, infections, diabetes-related eye care, and injuries typically use medical insurance. Our team is happy to help determine how your visit will be processed before your appointment whenever possible.",
  },
  {
    question: "How often should I have an eye exam?",
    answer:
      "Most patients benefit from a comprehensive eye exam once a year. Patients with diabetes, glaucoma, or other eye conditions may need more frequent visits. Our doctors will recommend a personalized schedule based on your eye health and medical history.",
  },
  {
    question: "Do school vision screenings replace an eye exam for my child?",
    answer:
      "No. School screenings typically check only distance vision and often miss problems with eye teaming, focusing, tracking, and depth perception, all of which are essential for reading and learning. A comprehensive eye exam provides a complete evaluation of your child's vision and eye health.",
  },
  {
    question: "Is there an extra fee for contact lens fittings?",
    answer:
      "Yes. Contact lens evaluations and fittings are separate from a comprehensive eye exam and require additional testing and measurements, so there is an additional fee. We keep our fitting fees competitively priced, and our team is happy to answer pricing questions before your appointment.",
  },
  {
    question: "Is vision therapy covered by insurance?",
    answer:
      "Vision therapy is a specialized treatment program and is not covered by medical or vision insurance plans. Before beginning therapy, we will review all costs, discuss payment options, and answer any questions so you know exactly what to expect.",
  },
  {
    question: "How long does it take to get my glasses?",
    answer:
      "Thanks to our onsite optical lab, many prescription lenses are crafted and finished right here in our clinic, which means faster turnaround for select eyewear. More specialized prescriptions may be sent to a trusted outside laboratory, with a typical turnaround of about one week.",
  },
  {
    question: "Do you see children?",
    answer:
      "Absolutely. We provide comprehensive eye exams for patients of all ages, from infants and young children to adults and seniors. Dr. Maynard also provides vision therapy for children with focusing, tracking, and binocular vision disorders.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Please bring your current glasses or contact lenses, your vision and medical insurance cards, a list of any medications you take, and any questions you have about your vision. If you are a new patient, arriving a few minutes early helps us get your paperwork started.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Eyecare Services" },
  { href: "/contact", label: "Contact Us" },
];
