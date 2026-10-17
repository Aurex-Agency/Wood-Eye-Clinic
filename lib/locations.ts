import { clinic } from "@/lib/site";

/*
 * Local SEO landing pages: one per community we serve. Each page needs enough
 * unique, genuinely useful content (route, drive time, local context) to rank
 * for "eye doctor near {city} MS" searches without reading as boilerplate.
 */
export type ClinicLocation = {
  slug: string;
  city: string;
  state: string;
  /** True only for Pontotoc, where the clinic actually is. */
  isHome?: boolean;
  /** e.g. "about 25 minutes" */
  driveTime: string;
  /** e.g. "roughly 18 miles" */
  distance: string;
  /** Plain-English route from the city to the clinic. */
  route: string;
  headline: string;
  metaDescription: string;
  intro: string;
  paragraphs: string[];
  faqs: { question: string; answer: string }[];
};

const destination = encodeURIComponent(
  `${clinic.name}, ${clinic.address.street}, ${clinic.address.city}, ${clinic.address.state} ${clinic.address.zip}`
);

export function directionsUrl(location: ClinicLocation) {
  const origin = encodeURIComponent(`${location.city}, ${location.state}`);
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
}

export const locations: ClinicLocation[] = [
  {
    slug: "pontotoc-ms",
    city: "Pontotoc",
    state: "MS",
    isHome: true,
    driveTime: "right here at home",
    distance: "on Main Street downtown",
    route:
      "You will find us at 26 S Main Street in the heart of downtown Pontotoc, with convenient parking right outside the door.",
    headline: "Your hometown eye doctors in Pontotoc, MS",
    metaDescription:
      "Wood Eye Clinic has been Pontotoc's hometown eye clinic since 1981. Comprehensive eye exams, contact lenses, designer eyewear, and an onsite optical lab at 26 S Main Street.",
    intro:
      "Wood Eye Clinic has called downtown Pontotoc home since November 1981. For more than four decades, the families of Pontotoc County have trusted us with their vision, and many patients who first visited us as children now bring in children of their own.",
    paragraphs: [
      "Dr. William Terry Wood was born and raised in Pontotoc, and he opened the clinic with a simple promise: advanced eye care, delivered the way neighbors treat neighbors. Today Dr. Wood, Dr. Miranda Maynard, and Dr. Joseph Caleb Warren carry that promise forward with comprehensive exams, diabetic eye care, glaucoma management, vision therapy, and specialty contact lenses.",
      "Everything is under one roof on Main Street: a boutique full of designer frames, advanced diagnostic technology, and an onsite optical lab that gets you your eyewear faster. When you walk in, we know your name, and we plan to keep it that way.",
    ],
    faqs: [
      {
        question: "Where is Wood Eye Clinic located in Pontotoc?",
        answer:
          "We are at 26 S Main Street in downtown Pontotoc, MS 38863, with convenient parking nearby. Call (662) 489-5907 or book online any time.",
      },
      {
        question: "Is Wood Eye Clinic accepting new patients in Pontotoc?",
        answer:
          "Yes. We welcome new patients of every age, from a child's first eye exam to senior eye care, and we can usually see you quickly.",
      },
      {
        question: "Can I get glasses made in Pontotoc the same week?",
        answer:
          "Often, yes. Our onsite optical lab lets us cut and fit many prescriptions much faster than clinics that send lenses away.",
      },
    ],
  },
  {
    slug: "tupelo-ms",
    city: "Tupelo",
    state: "MS",
    driveTime: "about 25 minutes",
    distance: "roughly 18 miles",
    route:
      "From Tupelo, follow US-278 W / MS-6 W straight into Pontotoc, then turn onto S Main Street. We are downtown at number 26.",
    headline: "An eye doctor worth the short drive from Tupelo, MS",
    metaDescription:
      "Looking for an eye doctor near Tupelo, MS? Wood Eye Clinic in Pontotoc is about 25 minutes away, with comprehensive eye exams, contact lenses, designer eyewear, and small-town care since 1981.",
    intro:
      "Plenty of Tupelo families make the easy 25 minute drive down Highway 6 to Pontotoc for their eye care, and they have been doing it for decades. At Wood Eye Clinic, you trade big-clinic waiting rooms for doctors who know you by name.",
    paragraphs: [
      "Our three optometrists, Dr. Wood, Dr. Maynard, and Dr. Warren, provide everything Tupelo patients expect from a full-service practice: comprehensive exams, diabetic eye care, glaucoma and eye disease management, vision therapy, and specialty contact lens fittings, all with advanced diagnostic technology.",
      "The drive from Tupelo is a straight shot west on US-278, and it comes with a bonus: an optical boutique stocked with designer frames and an onsite lab, so your new glasses are often ready sooner than you would expect.",
    ],
    faqs: [
      {
        question: "How far is Wood Eye Clinic from Tupelo, MS?",
        answer:
          "About 18 miles, or roughly a 25 minute drive west on US-278 / MS-6 from Tupelo to downtown Pontotoc.",
      },
      {
        question: "Why do Tupelo patients choose Wood Eye Clinic?",
        answer:
          "Personal care from the same doctors at every visit, shorter waits, advanced diagnostics, and an onsite optical lab, all about 25 minutes from Tupelo.",
      },
      {
        question: "Do you see children from the Tupelo area?",
        answer:
          "Yes. Children's eye exams are one of our specialties, and we also offer vision therapy led by Dr. Maynard.",
      },
    ],
  },
  {
    slug: "oxford-ms",
    city: "Oxford",
    state: "MS",
    driveTime: "about 35 minutes",
    distance: "roughly 26 miles",
    route:
      "From Oxford, take MS-6 E / US-278 E toward Pontotoc, then exit for downtown and turn onto S Main Street. We are at number 26.",
    headline: "Trusted eye care just east of Oxford, MS",
    metaDescription:
      "Searching for an eye doctor near Oxford, MS? Wood Eye Clinic in Pontotoc is an easy 35 minute drive on Highway 6, offering eye exams, contacts, eyewear, and personal care since 1981.",
    intro:
      "Oxford and Ole Miss families who want eye care with a personal touch make the easy drive east on Highway 6 to Wood Eye Clinic in downtown Pontotoc. It is about 35 minutes from the Square, and patients tell us the difference is worth every mile.",
    paragraphs: [
      "Whether you are a student who needs a fast contact lens refill, a professor due for a comprehensive exam, or a family managing diabetic eye care, our three optometrists take the time to get it right. We fit specialty lenses for hard-to-fit eyes and manage glaucoma, cataracts, and macular degeneration close to home.",
      "Our optical boutique carries designer frames you would otherwise drive to Memphis for, and our onsite lab often has your lenses ready days sooner. One trip down Highway 6 and you will see why generations of North Mississippi families call us their eye clinic.",
    ],
    faqs: [
      {
        question: "How far is Wood Eye Clinic from Oxford, MS?",
        answer:
          "About 26 miles. Take MS-6 / US-278 east from Oxford and you will reach downtown Pontotoc in roughly 35 minutes.",
      },
      {
        question: "Do you see Ole Miss students?",
        answer:
          "Absolutely. We are happy to care for students, including contact lens exams, fittings, and quick turnaround on glasses from our onsite lab.",
      },
      {
        question: "Can you manage eye disease for Oxford patients?",
        answer:
          "Yes. We diagnose and manage glaucoma, cataracts, macular degeneration, and diabetic eye disease, with referrals coordinated whenever surgery is needed.",
      },
    ],
  },
  {
    slug: "new-albany-ms",
    city: "New Albany",
    state: "MS",
    driveTime: "about 30 minutes",
    distance: "roughly 21 miles",
    route:
      "From New Albany, head south on MS-15 straight into Pontotoc. Turn left onto Oxford Street, then right onto S Main Street.",
    headline: "Family eye care a straight shot south of New Albany, MS",
    metaDescription:
      "Need an eye doctor near New Albany, MS? Wood Eye Clinic is about 30 minutes south on Highway 15 in downtown Pontotoc. Eye exams, contacts, eyewear, and hometown care since 1981.",
    intro:
      "From New Albany, Wood Eye Clinic is a simple drive straight down Highway 15, about 30 minutes door to door. Families from Union County have trusted us for decades because we treat every patient like a neighbor, not a number.",
    paragraphs: [
      "All three of our optometrists provide comprehensive exams for every age, along with diabetic eye care, glaucoma management, dry eye treatment, and vision therapy. If you or your child has struggled with hard-to-fit contacts, our specialty lens fittings are worth the trip alone.",
      "While you are here, browse a boutique full of designer frames and let our onsite optical lab handle your lenses. Many New Albany patients pick up their new glasses faster than clinics that outsource their lab work.",
    ],
    faqs: [
      {
        question: "How far is Wood Eye Clinic from New Albany, MS?",
        answer:
          "About 21 miles. Drive south on MS-15 and you will be in downtown Pontotoc in roughly 30 minutes.",
      },
      {
        question: "Do you take new patients from New Albany?",
        answer:
          "Yes, we welcome new patients from New Albany and all of Union County, from children's first exams to senior eye care.",
      },
      {
        question: "Can I order contact lenses online between visits?",
        answer:
          "Yes. Once we have your prescription on file, you can reorder your contacts online any time and have them shipped to your door.",
      },
    ],
  },
  {
    slug: "ripley-ms",
    city: "Ripley",
    state: "MS",
    driveTime: "about 45 minutes",
    distance: "roughly 38 miles",
    route:
      "From Ripley, take MS-15 S through New Albany straight into Pontotoc, then turn onto S Main Street downtown.",
    headline: "Comprehensive eye care south of Ripley, MS",
    metaDescription:
      "Looking for an eye doctor near Ripley, MS? Wood Eye Clinic in Pontotoc is a straight drive down Highway 15, offering comprehensive exams, contact lenses, eyewear, and eye disease care since 1981.",
    intro:
      "Ripley families who want a full-service eye clinic make one easy drive: straight down Highway 15 to downtown Pontotoc. In about 45 minutes you are in an exam chair with a doctor who will still be your doctor at next year's visit.",
    paragraphs: [
      "Wood Eye Clinic offers the complete range of care that is hard to find close by: comprehensive and pediatric exams, diabetic eye care, glaucoma and macular degeneration management, dry eye treatment, vision therapy, and specialty contact lenses.",
      "Because our optical lab is onsite, many prescriptions are cut and fitted right here in Pontotoc, which saves Ripley patients a second long trip. Pair your exam with a browse through our designer frame boutique and make one drive do it all.",
    ],
    faqs: [
      {
        question: "How far is Wood Eye Clinic from Ripley, MS?",
        answer:
          "About 38 miles. Take MS-15 south through New Albany and you will reach downtown Pontotoc in roughly 45 minutes.",
      },
      {
        question: "Is the drive from Ripley worth it for an eye exam?",
        answer:
          "Our patients think so. You get three experienced optometrists, advanced diagnostics, an onsite lab, and a designer frame boutique in one visit.",
      },
      {
        question: "Do you treat eye disease for Ripley area patients?",
        answer:
          "Yes. We manage glaucoma, cataracts, diabetic eye disease, and macular degeneration, and Dr. Wood offers YAG laser posterior capsulotomy.",
      },
    ],
  },
  {
    slug: "saltillo-ms",
    city: "Saltillo",
    state: "MS",
    driveTime: "about 30 minutes",
    distance: "roughly 24 miles",
    route:
      "From Saltillo, take US-45 S to Tupelo, then follow US-278 W / MS-6 W into Pontotoc and turn onto S Main Street.",
    headline: "Hometown eye care for Saltillo, MS families",
    metaDescription:
      "Searching for an eye doctor near Saltillo, MS? Wood Eye Clinic in Pontotoc is about 30 minutes away, with comprehensive eye exams, contacts, designer eyewear, and personal care since 1981.",
    intro:
      "Saltillo is one of the fastest growing communities in North Mississippi, and plenty of its families drive the half hour to Pontotoc for eye care that still feels like home. At Wood Eye Clinic, the doctor who examines your eyes this year will know your name next year.",
    paragraphs: [
      "We care for every stage of life: children's exams that catch what school screenings miss, contact lens fittings for teens and adults, diabetic eye care, and management of glaucoma, cataracts, and macular degeneration for parents and grandparents.",
      "The trip from Saltillo runs through Tupelo and west on Highway 6, an easy drive that ends at our Main Street clinic with its designer frame boutique and onsite optical lab. Most families are back home well within the morning.",
    ],
    faqs: [
      {
        question: "How far is Wood Eye Clinic from Saltillo, MS?",
        answer:
          "About 24 miles. Take US-45 south to Tupelo, then US-278 / MS-6 west into downtown Pontotoc, roughly 30 minutes in total.",
      },
      {
        question: "Do you offer children's eye exams for Saltillo families?",
        answer:
          "Yes. Pediatric exams are a specialty, and we also offer vision therapy for children whose eyes and brain need help working together.",
      },
      {
        question: "Can Saltillo patients book online?",
        answer:
          "Yes. Use the Book an Appointment button on any page to schedule online, or call us at (662) 489-5907.",
      },
    ],
  },
];
