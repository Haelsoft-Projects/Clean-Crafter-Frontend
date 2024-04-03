import * as yup from "yup";
import axios from "axios";
axios.defaults.baseURL = "https://real-vn5y.onrender.com";
export const baseURL: string = "https://real-vn5y.onrender.com";

import img1 from "@/assets/servicesimages/image1.png";
import img2 from "@/assets/servicesimages/image2.png";
import img3 from "@/assets/servicesimages/image3.png";
const phoneRegExp =
  /^((\+[0-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#;:])[A-Za-z\d@$!%*?&#;:]{8,}$/;
const ninRegEx = /^[0-9]{11}$/;
export const signUpValidate = yup.object().shape({
  firstName: yup.string().required("Please fill up this field"),
  lastName: yup.string().required("Please fill up this field"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  phoneNumber: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  nin: yup
    .string()
    .required("Please fill up this field")
    .matches(ninRegEx, "Nin is not valid")
    .max(12, "too long"),
  password: yup
    .string()
    .min(8, "password must containat least 8 characters ")
    .matches(
      passwordRegExp,
      "characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("Please fill up this field"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please fill up this field"),
});

export const signUpcleanersValidate = yup.object().shape({
  firstName: yup.string().required("Please fill up this field"),
  lastName: yup.string().required("Please fill up this field"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  phoneNumber: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  nin: yup
    .string()
    .required("Please fill up this field")
    .matches(ninRegEx, "Nin is not valid")
    .max(16, "too long"),
  password: yup
    .string()
    .min(8, "password must containat least 8 characters ")
    .matches(
      passwordRegExp,
      "characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("Please fill up this field"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please fill up this field"),
});

export const loginValidate = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  password: yup.string().required("Please fill up this field"),
});

export const updateUserValidate = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  nin: yup.string().matches(ninRegEx, "Nin is not valid").max(12, "too long"),
});

type service = {
  name: string;
  details: string;
  image: any;
  meaning?: string;
  process?: string;
  reason_note: string;
  reason: Array<object>;
  data?: string;
};

type newDeata = {
  name: string;
  details: string;
  image: any;
  meaning: string;
  sub1: string;
  sub1explanation: string;
  availability: Array<object>;
};
export const newData: Array<newDeata> = [
  {
    name: "Home Cleaning",
    details:
      "In the hustle and bustle of daily life, keeping our homes clean and tidy can often fall by the wayside.",
    image: img1,
    meaning:
      "CleanCrafters understands the need for a clean and tidy home to relax and bond with family. So we provide a professional home cleaning solution to make your burden of cleaning your living room, kitchen, bedrooms, bathrooms, and other rooms ours. We tailor our services to your preference with different packages to get you connected with our trained and experienced cleaners. At CleanCrafter, we are not short of impressing our clients because their satisfaction is our pride.",
    sub1: "Book Your Home Cleaning With CleanCrafters",
    sub1explanation:
      "A clean home resonates with the perception of people living in the house. It is also essential for good health. The advantages of routine cleaning are numerous. Your living situation directly impacts your family's physical and mental health. You can prevent allergies, respiratory issues, and illness by cleaning regularly. Careful upkeep and cleaning are even more crucial if you own pets. Cleaning improves indoor air quality and leaves the space smelling nice by removing dust and bacteria. Since the kitchen and bathroom are believed to be the two germiest spaces in a home, they typically need special attention. However, home cleaning may be stressful if you are already busy with family or work. This is why you need CleanCrafters to help keep your home clean, organized, and germ-free.",

    availability: [
      {
        available: "Homes or estate buildings",
        explanation:
          "You won't have the time or energy to clean your home after a long day at work if you're working hard. Many people may not leave for home straight away after work. You have folks to see or errands to run. As such, you won't have to rush home to finish your duties if you hire a cleaner. After working eight hours or longer, you deserve to relax.",
      },
      {
        available: "Odor elimination",
        explanation:
          "Our odor elimination services are designed to target a wide range of odors, including pet odors, smoke smells, cooking odors, and more. Using advanced techniques and professional-grade deodorizers, we don't just mask odors – we eliminate them at their source, leaving your environment smelling clean and inviting.",
      },
      {
        available:
          "Living room, kitchen, bedrooms, bathrooms, carpets, and floor care",
        explanation:
          "Our team of skilled professionals is equipped to handle all aspects of residential and estate building cleaning, ensuring every corner of your space is left sparkling clean and refreshed. Whether you're looking to maintain the pristine condition of your home or require meticulous care for estate buildings, you can trust us to deliver exceptional results. ",
      },
      {
        available: "Complete disinfecting",
        explanation:
          "Our complete disinfecting services are designed to eliminate harmful bacteria, viruses, and germs from every surface, helping to create a healthier environment for you and your loved ones. Using EPA-approved disinfectants and state-of-the-art equipment, we target high-touch areas such as doorknobs, light switches, countertops, and more, to effectively eradicate any potential threats to your health and well-being.",
      },
    ],
  },
  {
    name: "Deep Cleaning",
    details:
      "In the hustle and bustle of daily life, keeping our Offices clean and tidy can often fall by the wayside.",
    image: img2,
    meaning:
      "At CleanCrafters, our deep cleaning services are the go-to source for deep cleaning houses or commercial spaces. Our cleaning team offers professional deep cleaning services for homes and commercial properties for a pristine clean you can feel good about. Unlike an everyday regular clean, our deep home cleaning services get deep into the nooks and crannies, cleaning neglected areas for a like-new clean. Whether moving to a new place or wanting to give your current space a facelift, our deep clean does the trick.We rely on the latest tools and technologies, as well as best-in-class professional deep cleaning formulas, to ensure your space looks refreshed, no matter how long it has been between cleans.",
    sub1: "Book Your Deep Cleaning With CleanCrafters",

    sub1explanation:
      "Deep cleaning is an investment in creating a cleaner, healthier, and more inviting environment. So, let CleanCrafters provide a deep cleaning solution tailored to your needs and premises. Whether offices, healthcare, educational facilities, or other institutions, we are the master of the craft in spotless cleaning.",

    availability: [
      {
        available: "Steam cleaning",
        explanation:
          "You won't have the time or energy to clean your home after a long day at work if you're working hard. Many people may not leave for home straight away after work. You have folks to see or errands to run. As such, you won't have to rush home to finish your duties if you hire a cleaner. After working eight hours or longer, you deserve to relax.",
      },
      {
        available: "Pressure washing",
        explanation:
          "Our pressure washing services are ideal for removing dirt, grime, mold, mildew, and other contaminants from a variety of surfaces,",
      },
      {
        available: "Washrooms sanitation",
        explanation:
          "Our washroom sanitation services are designed to target bacteria, germs, and viruses that can thrive in high-moisture environments, creating a safe and hygienic space for users. We use EPA-approved disinfectants and specialized cleaning techniques to thoroughly sanitize all surfaces,",
      },
      {
        available: "Ceilings, vents, and fixtures cleaning",
        explanation:
          "Our ceilings, vents, and fixtures cleaning services are designed to target areas that are often overlooked but can accumulate dust, dirt, and grime over time. By thoroughly cleaning these areas, we not only improve the appearance of your space but also enhance indoor air quality and prevent the spread of allergens and contaminants. ",
      },
      {
        available: "Anti-viral fogging",
        explanation:
          "Our anti-viral fogging service utilizes state-of-the-art equipment to disperse a fine mist of EPA-approved disinfectants throughout your home or estate buildings. This fogging technique allows us to reach areas that are difficult to access with traditional cleaning methods, ensuring comprehensive coverage and effective disinfection. ",
      },
    ],
  },
  {
    name: "Office Cleaning",
    details:
      "In the hustle and bustle of daily life, keeping our Offices clean and tidy can often fall by the wayside.",
    image: img3,
    meaning:
      "CleanCrafters is a professional office cleaning solution that offers a wide range of services that include general office cleaning, office disinfecting, carpet cleaning, window cleaning, and power washing. We also offer customized cleaning packages to fit the specific needs of our clients. Our team of highly trained and experienced commercial cleaners is background-checked and insured. We are dedicated to providing the highest level of customer satisfaction, and we guarantee our work. ",
    sub1: "Book Your Office Cleaning With CleanCrafters",

    sub1explanation:
      "A good cleaning schedule is essential to cleaning offices effectively. This will not only create a positive impression of your company in the eyes of clients and visitors, but it will also assist in keeping the office well organized. You can concentrate your time and energy on enhancing your company's operations, including the output and satisfaction of your staff, if you establish regular cleaning schedules.But as all your staff may be busy during working hours, there may be no time to clean your offices. Hence, there is a need to hire CleanCrafters to handle the sanitation and tidiness of your company.",

    availability: [
      {
        available: "Large or small offices",
        explanation:
          "Our office cleaning services are fully customizable to accommodate the size and layout of your office, ensuring that every area receives the attention it deserves. Whether you operate in a sprawling corporate complex or a cozy boutique office, our team is equipped to handle the job with precision and efficiency",
      },
      {
        available: "Offices, apartments, medical building",
        explanation:
          "We understand the importance of maintaining clean and sanitary environments in these spaces, which is why we offer comprehensive cleaning solutions designed to ensure the health, safety, and comfort of your occupants.",
      },
      {
        available: "After-hours cleaning or during business hours",
        explanation:
          "Our after-hours cleaning services are ideal for businesses that prefer to have cleaning performed outside of regular business hours. With this option, our team can clean your office, apartment building, or medical facility after your employees, tenants, or patients have gone home for the day. This ensures minimal disruption to your operations and allows us to provide thorough and comprehensive cleaning without interfering with your daily activities. ",
      },
      {
        available: "Carpets, floors, and windows",
        explanation:
          "Our carpet,floors, and windows cleaning services are designed to remove dirt, stains, and allergens from your carpets, leaving them fresh, clean, and revitalized. Using state-of-the-art equipment and eco-friendly cleaning solutions, we'll lift away embedded dirt and grime to restore the beauty and freshness of your carpets. ",
      },
      {
        available: "7 days a week",
        explanation:
          "Our team of dedicated professionals is available to provide cleaning services every day of the week, including weekends and holidays. Whether you need a one-time cleaning or regular maintenance, we're here to accommodate your schedule and provide reliable service when you need it most. ",
      },
    ],
  },
  {
    name: "Janitorial Cleaning",
    details: "Maximize cleanliness and minimize distractions in your business.",
    image: img3,
    meaning:
      "We offer exceptional janitorial services to ensure a clean and sanitized workplace, crucial for maintaining productivity. With the current business climate, every facility must be regularly cleaned and disinfected to promote a safe and healthy environment. CleanCrafters has established a reputation as a trusted provider of high‑quality janitorial services.",
    sub1: "Book Your Janitorial Cleaning With CleanCrafters",

    sub1explanation:
      "CleanCrafers offers a wide range of janitorial cleaning services to meet the diverse needs of businesses in various industries. We have professional cleaners trained with state‑of‑the‑art equipment and eco‑friendly cleaning solutions to ensure thorough cleaning and disinfecting of your facility. We work closely with our clients to provide customized cleaning solutions for their special needs and schedules.",

    availability: [
      {
        available: "Office cleaning",
        explanation:
          "Our janitorial cleaning services cover a wide range of tasks to ensure every aspect of your office space is clean, sanitized, and well-maintained. From daily cleaning routines to periodic deep cleaning, our team of dedicated professionals is committed to delivering exceptional results with every visit.",
      },
      {
        available: "Hard surface floor cleaning and maintenance",
        explanation:
          "Our hard surface floor cleaning and maintenance services are designed to keep your floors looking their best while prolonging their lifespan. Whether you have tile, laminate, vinyl, or other hard surface flooring, our team of experienced professionals has the expertise and equipment to provide thorough cleaning and maintenance that meets your exact specifications.",
      },
      {
        available: "After-hours cleaning or during business hours",
        explanation:
          "Our dusting services are essential for maintaining a clean and healthy environment for your employees, clients, and visitors. Our team of experienced janitors will thoroughly dust all surfaces, including desks, shelves, countertops, and other furniture, to remove dust, dirt, and allergens. With attention to detail and careful precision, we'll ensure that every inch of your space is dust-free, promoting a healthier and more comfortable work environment.Clean windows can brighten up any space and enhance the overall appearance of your facility. Our window washing services are designed to leave your windows sparkling clean, allowing natural light to flood into your space and providing a clear view of the outside world. Using professional-grade equipment and eco-friendly cleaning solutions, our janitors will remove dirt, grime, and streaks from both the interior and exterior of your windows, leaving them crystal clear and streak-free. ",
      },
      {
        available: "Waste removal ",
        explanation:
          "Effective waste removal is essential for maintaining a clean and sanitary environment in your facility. Our team of experienced janitors will handle all aspects of waste removal, including emptying trash bins, disposing of waste properly, and ensuring that your space remains free of debris and clutter. Whether you operate a small office, a commercial building, or a medical facility, you can count on us to keep your space clean and well-maintained. ",
      },
      {
        available: "Complete disinfecting",
        explanation:
          "Our complete disinfecting services are designed to eliminate a wide range of bacteria, viruses, and germs from all surfaces in your facility. Using disinfectants and advanced cleaning techniques, our team will thoroughly sanitize all high-touch surfaces, including doorknobs, light switches, countertops, and more. We'll also disinfect common areas, restrooms, and other spaces to help reduce the risk of illness and infection among your employees, clients, and visitors. ",
      },
      {
        available: "7 days a week",
        explanation:
          "Our team of dedicated professionals is available to provide cleaning services every day of the week, including weekends and holidays. Whether you need a one-time cleaning or regular maintenance, we're here to accommodate your schedule and provide reliable service when you need it most. ",
      },
    ],
  },
  {
    name: "Post-Construction Cleaning",
    details: "We turn the messy chaos of construction into a tidy work of art.",
    image: img3,
    meaning:
      "Construction can sometimes surprise us with unexpected problems. But don't worry! CleanCrafters is up to the task of helping you reach your cleaning goals. We want your home or business to be sparkling, clean, and super neat for its grand opening day. We provide many different construction cleaning services designed for what you require after renovating or remodeling your space or even after a brand-new build. ",
    sub1: "Book Your Post-Construction Cleaning With CleanCrafters",

    sub1explanation:
      "CleanCrafters provides professional cleaning services for new construction projects. With our expertise in construction house cleaning, we ensure that your newly built space is immaculate and ready for occupancy. Our specialized team is well-equipped to handle the challenges of post-construction cleaning, including the removal of debris, dust, and other residues.We offer comprehensive drywall dust cleaning services, ensuring that every surface is thoroughly cleaned and polished. With our attention to detail and commitment to excellence, we deliver exceptional results that meet the highest standards.",

    availability: [
      {
        available: "Removing construction debris",
        explanation:
          "Construction projects can generate a significant amount of debris, including materials such as wood, drywall, metal, and concrete. Our team of experienced cleaners is equipped to handle the removal of construction debris, ensuring that your space remains clean, organized, and free of clutter. Whether you're completing a small renovation or a large-scale construction project, you can count on us to dispose of construction debris properly and efficiently.",
      },
      {
        available: "Dusting window sills and molding",
        explanation:
          "After construction or renovation work is completed, it's common for dust and debris to accumulate on window sills and molding. Our team of experienced cleaners is equipped to handle the meticulous task of dusting these areas, ensuring that your space is free of dust and ready for occupancy. ",
      },
      {
        available: "Spot cleaning walls ",
        explanation:
          "During construction or renovation projects, walls can accumulate a variety of blemishes, including paint splatters, scuff marks, and other stains. Our team of experienced cleaners is equipped with the knowledge and tools to carefully spot clean these imperfections, restoring the appearance of your walls to their pristine condition.",
      },
      {
        available: "Vacuuming carpets",
        explanation:
          "After construction or renovation work, carpets can accumulate dust, dirt, and debris, detracting from the overall cleanliness and appearance of your space. Our team of experienced cleaners is equipped with professional-grade vacuuming equipment and techniques to effectively remove all traces of construction residues from your carpets.",
      },
      {
        available: "Dust/damp mopping hard surfaces ",
        explanation:
          "After construction or renovation work, hard surfaces such as floors can accumulate dust and debris, detracting from the overall cleanliness of your space. Our team of experienced cleaners is trained to carefully dust and damp mop these surfaces, using specialized tools and techniques to achieve a pristine finish. ",
      },
      {
        available: "7 days a week",
        explanation:
          "Our team of dedicated professionals is available to provide cleaning services every day of the week, including weekends and holidays. Whether you need a one-time cleaning or regular maintenance, we're here to accommodate your schedule and provide reliable service when you need it most. ",
      },
    ],
  },
  {
    name: "Residential Cleaning",
    details:
      "Your home is your safe Haven, and we are available to keep it that way, clean.",
    image: img3,
    meaning:
      "A clean home or apartment is next to a healthy and happy living. Trust CleanCrafters to handle the goal of always having a tidy environment. From living room to kitchen and bedrooms to bathrooms, we provide an experience that gives you a dream picture of your home in orderliness. As a reputable professional cleaning company, we employ the latest equipment to ensure your floors, doors, walls, etc., are germ-free. ",
    sub1: "Book Your Residential Cleaning With CleanCrafters",

    sub1explanation:
      "Whether you are moving out or in, CleanCrafters provides a cleaning solution that exceeds your expectations. We are always happy to help make your transitions from space to the other seamless. Our company always recommends a move-in cleaning when packing into a new residence. This ensures that every room gets the attention needed to stay clean and pest-free.How much is a residential cleaning with CleanCrafters? It depends on the size of your residence and its condition at that time. But our operation is flexible, and our services are affordable.",

    availability: [
      {
        available: "Residential buildings",
        explanation:
          "Our residential cleaning services are tailored to meet the specific requirements of residential buildings, including apartments, condominiums, and townhouses. Whether you're a homeowner, tenant, or property manager, you can rely on us to deliver exceptional cleaning services that exceed your expectations.",
      },
      {
        available: "Odor elimination",
        explanation:
          "Unpleasant odors can linger in your home for various reasons, including cooking, pets, and environmental factors. Our team of experienced cleaners is equipped with the knowledge and tools to effectively eliminate odors and leave your home smelling its best.",
      },
      {
        available:
          "Living room, kitchen, bedrooms, bathrooms, carpets, and floor care",
        explanation:
          "we also specialize in providing comprehensive residential cleaning services tailored to meet the unique needs of your home. From the living room to the kitchen, bedrooms, bathrooms, carpets, and floors, we offer a full range of cleaning solutions to ensure every inch of your home is spotless and inviting.",
      },
      {
        available: "Vacuuming carpets",
        explanation:
          "After construction or renovation work, carpets can accumulate dust, dirt, and debris, detracting from the overall cleanliness and appearance of your space. Our team of experienced cleaners is equipped with professional-grade vacuuming equipment and techniques to effectively remove all traces of construction residues from your carpets.",
      },
      {
        available: "Complete disinfecting",
        explanation:
          "Our complete disinfecting services are designed to eliminate a wide range of bacteria, viruses, and germs from all surfaces in your home. Using EPA-approved disinfectants and advanced cleaning techniques, our team will thoroughly sanitize high-touch surfaces such as doorknobs, light switches, countertops, and more. We'll also disinfect common areas, bathrooms, and other spaces to help reduce the risk of illness and infection among your family members.",
      },
      {
        available: "7 days a week",
        explanation:
          "Our team of dedicated professionals is available to provide cleaning services every day of the week, including weekends and holidays. Whether you need a one-time cleaning or regular maintenance, we're here to accommodate your schedule and provide reliable service when you need it most. ",
      },
    ],
  },
  {
    name: "Domestic Cleaning",
    details:
      "Your home is your safe Haven, and we are available to keep it that way, clean.",
    image: img3,
    meaning:
      "A clean home or apartment is next to a healthy and happy living. Trust CleanCrafters to handle the goal of always having a tidy environment. From living room to kitchen and bedrooms to bathrooms, we provide an experience that gives you a dream picture of your home in orderliness. As a reputable professional cleaning company, we employ the latest equipment to ensure your floors, doors, walls, etc., are germ-free. ",
    sub1: "Book Your Domestic Cleaning With CleanCrafters",

    sub1explanation:
      "Whether you are moving out or in, CleanCrafters provides a cleaning solution that exceeds your expectations. We are always happy to help make your transitions from space to the other seamless. Our company always recommends a move-in cleaning when packing into a new residence. This ensures that every room gets the attention needed to stay clean and pest-free.How much is a residential cleaning with CleanCrafters? It depends on the size of your residence and its condition at that time. But our operation is flexible, and our services are affordable.",

    availability: [
      {
        available: "Residential buildings",
        explanation:
          "Our residential cleaning services are tailored to meet the specific requirements of residential buildings, including apartments, condominiums, and townhouses. Whether you're a homeowner, tenant, or property manager, you can rely on us to deliver exceptional cleaning services that exceed your expectations.",
      },
      {
        available: "Odor elimination",
        explanation:
          "Unpleasant odors can linger in your home for various reasons, including cooking, pets, and environmental factors. Our team of experienced cleaners is equipped with the knowledge and tools to effectively eliminate odors and leave your home smelling its best.",
      },
      {
        available:
          "Living room, kitchen, bedrooms, bathrooms, carpets, and floor care",
        explanation:
          "we also specialize in providing comprehensive residential cleaning services tailored to meet the unique needs of your home. From the living room to the kitchen, bedrooms, bathrooms, carpets, and floors, we offer a full range of cleaning solutions to ensure every inch of your home is spotless and inviting.",
      },
      {
        available: "Vacuuming carpets",
        explanation:
          "After construction or renovation work, carpets can accumulate dust, dirt, and debris, detracting from the overall cleanliness and appearance of your space. Our team of experienced cleaners is equipped with professional-grade vacuuming equipment and techniques to effectively remove all traces of construction residues from your carpets.",
      },
      {
        available: "Complete disinfecting",
        explanation:
          "Our complete disinfecting services are designed to eliminate a wide range of bacteria, viruses, and germs from all surfaces in your home. Using EPA-approved disinfectants and advanced cleaning techniques, our team will thoroughly sanitize high-touch surfaces such as doorknobs, light switches, countertops, and more. We'll also disinfect common areas, bathrooms, and other spaces to help reduce the risk of illness and infection among your family members.",
      },
      {
        available: "7 days a week",
        explanation:
          "Our team of dedicated professionals is available to provide cleaning services every day of the week, including weekends and holidays. Whether you need a one-time cleaning or regular maintenance, we're here to accommodate your schedule and provide reliable service when you need it most. ",
      },
    ],
  },
  {
    name: "Window Cleaning",
    details:
      "Your home is your safe Haven, and we are available to keep it that way, clean.",
    image: img3,
    meaning:
      "A clean home or apartment is next to a healthy and happy living. Trust CleanCrafters to handle the goal of always having a tidy environment. From living room to kitchen and bedrooms to bathrooms, we provide an experience that gives you a dream picture of your home in orderliness. As a reputable professional cleaning company, we employ the latest equipment to ensure your floors, doors, walls, etc., are germ-free. ",
    sub1: "Book Your Domestic Cleaning With CleanCrafters",

    sub1explanation:
      "Whether you are moving out or in, CleanCrafters provides a cleaning solution that exceeds your expectations. We are always happy to help make your transitions from space to the other seamless. Our company always recommends a move-in cleaning when packing into a new residence. This ensures that every room gets the attention needed to stay clean and pest-free.How much is a residential cleaning with CleanCrafters? It depends on the size of your residence and its condition at that time. But our operation is flexible, and our services are affordable.",

    availability: [
      {
        available: "Residential buildings",
        explanation:
          "Our residential cleaning services are tailored to meet the specific requirements of residential buildings, including apartments, condominiums, and townhouses. Whether you're a homeowner, tenant, or property manager, you can rely on us to deliver exceptional cleaning services that exceed your expectations.",
      },
      {
        available: "Odor elimination",
        explanation:
          "Unpleasant odors can linger in your home for various reasons, including cooking, pets, and environmental factors. Our team of experienced cleaners is equipped with the knowledge and tools to effectively eliminate odors and leave your home smelling its best.",
      },
      {
        available:
          "Living room, kitchen, bedrooms, bathrooms, carpets, and floor care",
        explanation:
          "we also specialize in providing comprehensive residential cleaning services tailored to meet the unique needs of your home. From the living room to the kitchen, bedrooms, bathrooms, carpets, and floors, we offer a full range of cleaning solutions to ensure every inch of your home is spotless and inviting.",
      },
      {
        available: "Vacuuming carpets",
        explanation:
          "After construction or renovation work, carpets can accumulate dust, dirt, and debris, detracting from the overall cleanliness and appearance of your space. Our team of experienced cleaners is equipped with professional-grade vacuuming equipment and techniques to effectively remove all traces of construction residues from your carpets.",
      },
      {
        available: "Complete disinfecting",
        explanation:
          "Our complete disinfecting services are designed to eliminate a wide range of bacteria, viruses, and germs from all surfaces in your home. Using EPA-approved disinfectants and advanced cleaning techniques, our team will thoroughly sanitize high-touch surfaces such as doorknobs, light switches, countertops, and more. We'll also disinfect common areas, bathrooms, and other spaces to help reduce the risk of illness and infection among your family members.",
      },
      {
        available: "7 days a week",
        explanation:
          "Our team of dedicated professionals is available to provide cleaning services every day of the week, including weekends and holidays. Whether you need a one-time cleaning or regular maintenance, we're here to accommodate your schedule and provide reliable service when you need it most. ",
      },
    ],
  },
  {
    name: "Housekeeping Cleaning",
    details:
      "Your home is your safe Haven, and we are available to keep it that way, clean.",
    image: img3,
    meaning:
      "A clean home or apartment is next to a healthy and happy living. Trust CleanCrafters to handle the goal of always having a tidy environment. From living room to kitchen and bedrooms to bathrooms, we provide an experience that gives you a dream picture of your home in orderliness. As a reputable professional cleaning company, we employ the latest equipment to ensure your floors, doors, walls, etc., are germ-free. ",
    sub1: "Book Your Housekeeping Cleaning With CleanCrafters",

    sub1explanation:
      "Whether you are moving out or in, CleanCrafters provides a cleaning solution that exceeds your expectations. We are always happy to help make your transitions from space to the other seamless. Our company always recommends a move-in cleaning when packing into a new residence. This ensures that every room gets the attention needed to stay clean and pest-free.How much is a residential cleaning with CleanCrafters? It depends on the size of your residence and its condition at that time. But our operation is flexible, and our services are affordable.",

    availability: [
      {
        available: "Residential buildings",
        explanation:
          "Our residential cleaning services are tailored to meet the specific requirements of residential buildings, including apartments, condominiums, and townhouses. Whether you're a homeowner, tenant, or property manager, you can rely on us to deliver exceptional cleaning services that exceed your expectations.",
      },
      {
        available: "Odor elimination",
        explanation:
          "Unpleasant odors can linger in your home for various reasons, including cooking, pets, and environmental factors. Our team of experienced cleaners is equipped with the knowledge and tools to effectively eliminate odors and leave your home smelling its best.",
      },
      {
        available: "Living room, kitchen, bedrooms, bathrooms, carpets, and floor care",
        explanation:
          "we also specialize in providing comprehensive residential cleaning services tailored to meet the unique needs of your home. From the living room to the kitchen, bedrooms, bathrooms, carpets, and floors, we offer a full range of cleaning solutions to ensure every inch of your home is spotless and inviting.",
      },
      {
        available: "Vacuuming carpets",
        explanation:
          "After construction or renovation work, carpets can accumulate dust, dirt, and debris, detracting from the overall cleanliness and appearance of your space. Our team of experienced cleaners is equipped with professional-grade vacuuming equipment and techniques to effectively remove all traces of construction residues from your carpets.",
      },
      {
        available: "Complete disinfecting",
        explanation:
          "Our complete disinfecting services are designed to eliminate a wide range of bacteria, viruses, and germs from all surfaces in your home. Using EPA-approved disinfectants and advanced cleaning techniques, our team will thoroughly sanitize high-touch surfaces such as doorknobs, light switches, countertops, and more. We'll also disinfect common areas, bathrooms, and other spaces to help reduce the risk of illness and infection among your family members.",
      },
      {
        available: "7 days a week",
        explanation:
          "Our team of dedicated professionals is available to provide cleaning services every day of the week, including weekends and holidays. Whether you need a one-time cleaning or regular maintenance, we're here to accommodate your schedule and provide reliable service when you need it most. ",
      },
    ],
  },
];
