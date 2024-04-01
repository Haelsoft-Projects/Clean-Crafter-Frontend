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
  nin: yup
    .string()
    .matches(ninRegEx, "Nin is not valid")
    .max(12, "too long"),
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
          "Most people started to realize what cleaning supplies they needed. However, the price of regularly purchasing these cleaning supplies will increase with time. A cleaning business has its equipment and materials. You don't need to be concerned about the kind of sponges. Even before they reach your house, they are ready. Additionally, their supplies can be superior to yours. They also know which cleaning and sanitizing supplies work best.",
      },
      {
        available:
          "Living room, kitchen, bedrooms, bathrooms, carpets, and floor care",
        explanation:
          "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
      },
      {
        available: "Complete disinfecting",
        explanation:
          "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
      },
      {
        available: "7 days a week",
        explanation:
          "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
      },
    ],
  },
  {
    name: "Office Cleaning",
    details:
      "In the hustle and bustle of daily life, keeping our Offices clean and tidy can often fall by the wayside.",
    image: img2,
    meaning:
      "CleanCrafters is a professional office cleaning solution that offers a wide range of services that include general office cleaning, office disinfecting, carpet cleaning, window cleaning, and power washing. We also offer customized cleaning packages to fit the specific needs of our clients. Our team of highly trained and experienced commercial cleaners is background-checked and insured. We are dedicated to providing the highest level of customer satisfaction, and we guarantee our work. ",
    sub1: "Book Your Office Cleaning With CleanCrafters",

    sub1explanation:
      "A good cleaning schedule is essential to cleaning offices effectively. This will not only create a positive impression of your company in the eyes of clients and visitors, but it will also assist in keeping the office well organized. You can concentrate your time and energy on enhancing your company's operations, including the output and satisfaction of your staff, if you establish regular cleaning schedules.But as all your staff may be busy during working hours, there may be no time to clean your offices. Hence, there is a need to hire CleanCrafters to handle the sanitation and tidiness of your company.",

    availability: [
      {
        available: "Large or small offices",
        explanation:
          "You won't have the time or energy to clean your home after a long day at work if you're working hard. Many people may not leave for home straight away after work. You have folks to see or errands to run. As such, you won't have to rush home to finish your duties if you hire a cleaner. After working eight hours or longer, you deserve to relax.",
      },
      {
        available: "Offices, apartments, medical building",
        explanation:
          "Most people started to realize what cleaning supplies they needed. However, the price of regularly purchasing these cleaning supplies will increase with time. A cleaning business has its equipment and materials. You don't need to be concerned about the kind of sponges. Even before they reach your house, they are ready. Additionally, their supplies can be superior to yours. They also know which cleaning and sanitizing supplies work best.",
      },
      {
        available: "After-hours cleaning or during business hours",
        explanation:
          "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
      },
      {
        available: "Carpets, floors, and windows",
        explanation:
          "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
      },
      {
        available: "7 days a week",
        explanation:
          "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
      },
    ],
  },
];

export const data: any = [
  {
    name: "Office Cleaning",
    details:
      "In the hustle and bustle of daily life, keeping our homes clean and tidy can often fall by the wayside.",
    image: img2,
    meaning:
      "Residential cleaning involves the process of cleaning homes and apartments, which includes cleaning the kitchens and bathrooms as well as vacuuming, dusting, and mopping. This process is essential for homeowners as it maintains the property's value, adds to the visual appeal, and fosters a clean and healthy living environment.This type of cleaning is essential for more reasons than merely keeping the home neat and orderly; it also helps to protect the residents' health and well-being. The risk of illnesses and allergies is decreased by routine cleaning, which lowers the amount of dust, allergens, and microorganisms that cause sickness. Additionally, having a clean home promotes physical and mental relaxation, making it a cozy and inviting place for residents and visitors.",
    process:
      "Residential cleaning is a meticulous and in-depth procedure that covers several sections of the house to guarantee that every nook and cranny is cleaned and sanitized. This entails beginning with the bigger chores, such as vacuuming and mopping the floors, and then on to the more intricate ones, like dusting furniture and cleaning appliances.",
    reason_note:
      "While cleaning the house can be stressful and time-consuming, hiring a residential cleaning service would be a better option. These are reasons why you may need one.",
    reason: [
      {
        reason: "Busy Schedules",
        explanation:
          "You won't have the time or energy to clean your home after a long day at work if you're working hard. Many people may not leave for home straight away after work. You have folks to see or errands to run. As such, you won't have to rush home to finish your duties if you hire a cleaner. After working eight hours or longer, you deserve to relax.",
      },
      {
        reason: "Cost-Effectivenes",
        explanation:
          "Most people started to realize what cleaning supplies they needed. However, the price of regularly purchasing these cleaning supplies will increase with time. A cleaning business has its equipment and materials. You don't need to be concerned about the kind of sponges. Even before they reach your house, they are ready. Additionally, their supplies can be superior to yours. They also know which cleaning and sanitizing supplies work best.",
      },
      {
        reason: "Professional Cleaning Service",
        explanation:
          "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
      },
    ],
  },
  {
    name: "Residential Cleaning",
    details:
      "In the hustle and bustle of daily life, keeping our homes clean and tidy can often fall by the wayside.",
    image: img3,
    meaning:
      "Residential cleaning involves the process of cleaning homes and apartments, which includes cleaning the kitchens and bathrooms as well as vacuuming, dusting, and mopping. This process is essential for homeowners as it maintains the property's value, adds to the visual appeal, and fosters a clean and healthy living environment.This type of cleaning is essential for more reasons than merely keeping the home neat and orderly; it also helps to protect the residents' health and well-being. The risk of illnesses and allergies is decreased by routine cleaning, which lowers the amount of dust, allergens, and microorganisms that cause sickness. Additionally, having a clean home promotes physical and mental relaxation, making it a cozy and inviting place for residents and visitors.",
    process:
      "Residential cleaning is a meticulous and in-depth procedure that covers several sections of the house to guarantee that every nook and cranny is cleaned and sanitized. This entails beginning with the bigger chores, such as vacuuming and mopping the floors, and then on to the more intricate ones, like dusting furniture and cleaning appliances.",
    reason_note:
      "While cleaning the house can be stressful and time-consuming, hiring a residential cleaning service would be a better option. These are reasons why you may need one.",
    reason: [
      {
        reason: "Busy Schedules",
        explanation:
          "You won't have the time or energy to clean your home after a long day at work if you're working hard. Many people may not leave for home straight away after work. You have folks to see or errands to run. As such, you won't have to rush home to finish your duties if you hire a cleaner. After working eight hours or longer, you deserve to relax.",
      },
      {
        reason: "Cost-Effectivenes",
        explanation:
          "Most people started to realize what cleaning supplies they needed. However, the price of regularly purchasing these cleaning supplies will increase with time. A cleaning business has its equipment and materials. You don't need to be concerned about the kind of sponges. Even before they reach your house, they are ready. Additionally, their supplies can be superior to yours. They also know which cleaning and sanitizing supplies work best.",
      },
      {
        reason: "Professional Cleaning Service",
        explanation:
          "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
      },
    ],
  },
  {
    name: "Deep Cleaning",
    details:
      "In the hustle and bustle of daily life, keeping our homes clean and tidy can often fall by the wayside.",
    image: img1,
    meaning:
      "Residential cleaning involves the process of cleaning homes and apartments, which includes cleaning the kitchens and bathrooms as well as vacuuming, dusting, and mopping. This process is essential for homeowners as it maintains the property's value, adds to the visual appeal, and fosters a clean and healthy living environment.This type of cleaning is essential for more reasons than merely keeping the home neat and orderly; it also helps to protect the residents' health and well-being. The risk of illnesses and allergies is decreased by routine cleaning, which lowers the amount of dust, allergens, and microorganisms that cause sickness. Additionally, having a clean home promotes physical and mental relaxation, making it a cozy and inviting place for residents and visitors.",
    process:
      "Residential cleaning is a meticulous and in-depth procedure that covers several sections of the house to guarantee that every nook and cranny is cleaned and sanitized. This entails beginning with the bigger chores, such as vacuuming and mopping the floors, and then on to the more intricate ones, like dusting furniture and cleaning appliances.",
    reason_note:
      "While cleaning the house can be stressful and time-consuming, hiring a residential cleaning service would be a better option. These are reasons why you may need one.",
    reason: [
      {
        reason: "Busy Schedules",
        explanation:
          "You won't have the time or energy to clean your home after a long day at work if you're working hard. Many people may not leave for home straight away after work. You have folks to see or errands to run. As such, you won't have to rush home to finish your duties if you hire a cleaner. After working eight hours or longer, you deserve to relax.",
      },
      {
        reason: "Cost-Effectivenes",
        explanation:
          "Most people started to realize what cleaning supplies they needed. However, the price of regularly purchasing these cleaning supplies will increase with time. A cleaning business has its equipment and materials. You don't need to be concerned about the kind of sponges. Even before they reach your house, they are ready. Additionally, their supplies can be superior to yours. They also know which cleaning and sanitizing supplies work best.",
      },
      {
        reason: "Professional Cleaning Service",
        explanation:
          "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
      },
    ],
  },
  {
    name: "Janitorial Cleaning",
    details:
      "In the hustle and bustle of daily life, keeping our homes clean and tidy can often fall by the wayside.",

    image: img2,
    meaning:
      "Residential cleaning involves the process of cleaning homes and apartments, which includes cleaning the kitchens and bathrooms as well as vacuuming, dusting, and mopping. This process is essential for homeowners as it maintains the property's value, adds to the visual appeal, and fosters a clean and healthy living environment.This type of cleaning is essential for more reasons than merely keeping the home neat and orderly; it also helps to protect the residents' health and well-being. The risk of illnesses and allergies is decreased by routine cleaning, which lowers the amount of dust, allergens, and microorganisms that cause sickness. Additionally, having a clean home promotes physical and mental relaxation, making it a cozy and inviting place for residents and visitors.",
    process:
      "Residential cleaning is a meticulous and in-depth procedure that covers several sections of the house to guarantee that every nook and cranny is cleaned and sanitized. This entails beginning with the bigger chores, such as vacuuming and mopping the floors, and then on to the more intricate ones, like dusting furniture and cleaning appliances.",
    reason_note:
      "While cleaning the house can be stressful and time-consuming, hiring a residential cleaning service would be a better option. These are reasons why you may need one.",
    reason: [
      {
        reason: "Busy Schedules",
        explanation:
          "You won't have the time or energy to clean your home after a long day at work if you're working hard. Many people may not leave for home straight away after work. You have folks to see or errands to run. As such, you won't have to rush home to finish your duties if you hire a cleaner. After working eight hours or longer, you deserve to relax.",
      },
      {
        reason: "Cost-Effectivenes",
        explanation:
          "Most people started to realize what cleaning supplies they needed. However, the price of regularly purchasing these cleaning supplies will increase with time. A cleaning business has its equipment and materials. You don't need to be concerned about the kind of sponges. Even before they reach your house, they are ready. Additionally, their supplies can be superior to yours. They also know which cleaning and sanitizing supplies work best.",
      },
      {
        reason: "Professional Cleaning Service",
        explanation:
          "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
      },
    ],
  },
  {
    name: "Window Cleaning",
    details:
      "In the hustle and bustle of daily life, keeping our homes clean and tidy can often fall by the wayside.",
    image: img3,
    meaning:
      "Residential cleaning involves the process of cleaning homes and apartments, which includes cleaning the kitchens and bathrooms as well as vacuuming, dusting, and mopping. This process is essential for homeowners as it maintains the property's value, adds to the visual appeal, and fosters a clean and healthy living environment.This type of cleaning is essential for more reasons than merely keeping the home neat and orderly; it also helps to protect the residents' health and well-being. The risk of illnesses and allergies is decreased by routine cleaning, which lowers the amount of dust, allergens, and microorganisms that cause sickness. Additionally, having a clean home promotes physical and mental relaxation, making it a cozy and inviting place for residents and visitors.",
    process:
      "Residential cleaning is a meticulous and in-depth procedure that covers several sections of the house to guarantee that every nook and cranny is cleaned and sanitized. This entails beginning with the bigger chores, such as vacuuming and mopping the floors, and then on to the more intricate ones, like dusting furniture and cleaning appliances.",
    reason_note:
      "While cleaning the house can be stressful and time-consuming, hiring a residential cleaning service would be a better option. These are reasons why you may need one.",
    reason: [
      {
        reason: "Busy Schedules",
        explanation:
          "You won't have the time or energy to clean your home after a long day at work if you're working hard. Many people may not leave for home straight away after work. You have folks to see or errands to run. As such, you won't have to rush home to finish your duties if you hire a cleaner. After working eight hours or longer, you deserve to relax.",
      },
      {
        reason: "Cost-Effectivenes",
        explanation:
          "Most people started to realize what cleaning supplies they needed. However, the price of regularly purchasing these cleaning supplies will increase with time. A cleaning business has its equipment and materials. You don't need to be concerned about the kind of sponges. Even before they reach your house, they are ready. Additionally, their supplies can be superior to yours. They also know which cleaning and sanitizing supplies work best.",
      },
      {
        reason: "Professional Cleaning Service",
        explanation:
          "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
      },
    ],
  },
  {
    name: "Post-Construction Cleaning",
    details:
      "In the hustle and bustle of daily life, keeping our homes clean and tidy can often fall by the wayside.",
    image: img1,
    meaning:
      "Residential cleaning involves the process of cleaning homes and apartments, which includes cleaning the kitchens and bathrooms as well as vacuuming, dusting, and mopping. This process is essential for homeowners as it maintains the property's value, adds to the visual appeal, and fosters a clean and healthy living environment.This type of cleaning is essential for more reasons than merely keeping the home neat and orderly; it also helps to protect the residents' health and well-being. The risk of illnesses and allergies is decreased by routine cleaning, which lowers the amount of dust, allergens, and microorganisms that cause sickness. Additionally, having a clean home promotes physical and mental relaxation, making it a cozy and inviting place for residents and visitors.",
    process:
      "Residential cleaning is a meticulous and in-depth procedure that covers several sections of the house to guarantee that every nook and cranny is cleaned and sanitized. This entails beginning with the bigger chores, such as vacuuming and mopping the floors, and then on to the more intricate ones, like dusting furniture and cleaning appliances.",
    reason_note:
      "While cleaning the house can be stressful and time-consuming, hiring a residential cleaning service would be a better option. These are reasons why you may need one.",
    reason: [
      {
        reason: "Busy Schedules",
        explanation:
          "You won't have the time or energy to clean your home after a long day at work if you're working hard. Many people may not leave for home straight away after work. You have folks to see or errands to run. As such, you won't have to rush home to finish your duties if you hire a cleaner. After working eight hours or longer, you deserve to relax.",
      },
      {
        reason: "Cost-Effectivenes",
        explanation:
          "Most people started to realize what cleaning supplies they needed. However, the price of regularly purchasing these cleaning supplies will increase with time. A cleaning business has its equipment and materials. You don't need to be concerned about the kind of sponges. Even before they reach your house, they are ready. Additionally, their supplies can be superior to yours. They also know which cleaning and sanitizing supplies work best.",
      },
      {
        reason: "Professional Cleaning Service",
        explanation:
          "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
      },
    ],
  },
  {
    name: "Domestic Cleaning",
    details:
      "In the hustle and bustle of daily life, keeping our homes clean and tidy can often fall by the wayside.",
    image: img2,
    meaning:
      "Residential cleaning involves the process of cleaning homes and apartments, which includes cleaning the kitchens and bathrooms as well as vacuuming, dusting, and mopping. This process is essential for homeowners as it maintains the property's value, adds to the visual appeal, and fosters a clean and healthy living environment.This type of cleaning is essential for more reasons than merely keeping the home neat and orderly; it also helps to protect the residents' health and well-being. The risk of illnesses and allergies is decreased by routine cleaning, which lowers the amount of dust, allergens, and microorganisms that cause sickness. Additionally, having a clean home promotes physical and mental relaxation, making it a cozy and inviting place for residents and visitors.",
    process:
      "Residential cleaning is a meticulous and in-depth procedure that covers several sections of the house to guarantee that every nook and cranny is cleaned and sanitized. This entails beginning with the bigger chores, such as vacuuming and mopping the floors, and then on to the more intricate ones, like dusting furniture and cleaning appliances.",
    reason_note:
      "While cleaning the house can be stressful and time-consuming, hiring a residential cleaning service would be a better option. These are reasons why you may need one.",
    reason: [
      {
        reason: "Busy Schedules",
        explanation:
          "You won't have the time or energy to clean your home after a long day at work if you're working hard. Many people may not leave for home straight away after work. You have folks to see or errands to run. As such, you won't have to rush home to finish your duties if you hire a cleaner. After working eight hours or longer, you deserve to relax.",
      },
      {
        reason: "Cost-Effectivenes",
        explanation:
          "Most people started to realize what cleaning supplies they needed. However, the price of regularly purchasing these cleaning supplies will increase with time. A cleaning business has its equipment and materials. You don't need to be concerned about the kind of sponges. Even before they reach your house, they are ready. Additionally, their supplies can be superior to yours. They also know which cleaning and sanitizing supplies work best.",
      },
      {
        reason: "Professional Cleaning Service",
        explanation:
          "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
      },
    ],
  },
  {
    name: "Housekeeping",
    details:
      "In the hustle and bustle of daily life, keeping our homes clean and tidy can often fall by the wayside.",
    image: img3,
    meaning:
      "Residential cleaning involves the process of cleaning homes and apartments, which includes cleaning the kitchens and bathrooms as well as vacuuming, dusting, and mopping. This process is essential for homeowners as it maintains the property's value, adds to the visual appeal, and fosters a clean and healthy living environment.This type of cleaning is essential for more reasons than merely keeping the home neat and orderly; it also helps to protect the residents' health and well-being. The risk of illnesses and allergies is decreased by routine cleaning, which lowers the amount of dust, allergens, and microorganisms that cause sickness. Additionally, having a clean home promotes physical and mental relaxation, making it a cozy and inviting place for residents and visitors.",
    process:
      "Residential cleaning is a meticulous and in-depth procedure that covers several sections of the house to guarantee that every nook and cranny is cleaned and sanitized. This entails beginning with the bigger chores, such as vacuuming and mopping the floors, and then on to the more intricate ones, like dusting furniture and cleaning appliances.",
    reason_note:
      "While cleaning the house can be stressful and time-consuming, hiring a residential cleaning service would be a better option. These are reasons why you may need one.",
    reason: [
      {
        reason: "Busy Schedules",
        explanation:
          "You won't have the time or energy to clean your home after a long day at work if you're working hard. Many people may not leave for home straight away after work. You have folks to see or errands to run. As such, you won't have to rush home to finish your duties if you hire a cleaner. After working eight hours or longer, you deserve to relax.",
      },
      {
        reason: "Cost-Effectivenes",
        explanation:
          "Most people started to realize what cleaning supplies they needed. However, the price of regularly purchasing these cleaning supplies will increase with time. A cleaning business has its equipment and materials. You don't need to be concerned about the kind of sponges. Even before they reach your house, they are ready. Additionally, their supplies can be superior to yours. They also know which cleaning and sanitizing supplies work best.",
      },
      {
        reason: "Professional Cleaning Service",
        explanation:
          "A professional cleaner can clean your house better than you can. They are equipped with the right tools and skills to perform thorough cleaning. The cleaners of today also provide disinfecting services. Knowing that most bacteria and viruses in your house are being eliminated gives you peace of mind. Reputable cleaning firms also use advanced cleaning supplies. ",
      },
    ],
  },
];
