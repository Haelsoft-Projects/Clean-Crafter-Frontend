import * as yup from "yup";
import axios from "axios";
axios.defaults.baseURL = "https://real-vn5y.onrender.com";
export const baseURL:string ="https://real-vn5y.onrender.com"
import img1 from "@/assets/servicesimages/image1.png";
import img2 from "@/assets/servicesimages/image2.png";
import img3 from "@/assets/servicesimages/image3.png";
const phoneRegExp =
  /^((\+[0-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#;:])[A-Za-z\d@$!%*?&#;:]{8,}$/;
  const ninRegEx=/^[a-zA-Z0-9]{16}$/;
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

type service = {
  name: string;
  details: string;
  image: any;
  meaning?: string;
  process?: string;
  reason_note: string;
  reason: Array<object>;
  data?:string
};

export const data: Array<service> = [
  {
    name: "Home Cleaning",
    details:
      "In the hustle and bustle of daily life, keeping our homes clean and tidy can often fall by the wayside.",
    image: img1,
    data:"Dirty Houses Are Our Specialty! We Can Fix Them",
    meaning:
      "CleanCrafters understands the need for a clean and tidy home to relax and bond with family. So we provide a professional home cleaning solution to make your burden of cleaning your living room, kitchen, bedrooms, bathrooms, and other rooms ours. We tailor our services to your preference with different packages to get you connected with our trained and experienced cleaners. At CleanCrafter, we are not short of impressing our clients because their satisfaction is our pride.",
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
