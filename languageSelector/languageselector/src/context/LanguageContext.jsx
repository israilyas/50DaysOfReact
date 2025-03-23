import { createContext, useState } from "react"

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState("en")

    const translations = {
        en: {
          heading: "Explore New Ideas",
          description: "Dive into different topics and broaden your perspective.",
          point1: "Learn from real-world experiences.",
          point2: "Discover insights on various subjects.",
          point3: "Stay ahead with the latest knowledge."
        },
        ur: {
          heading: "نئے خیالات دریافت کریں",
          description: "مختلف موضوعات میں گہرائی میں جائیں اور اپنے نظریات کو وسیع کریں۔",
          point1: "حقیقی دنیا کے تجربات سے سیکھیں۔",
          point2: "مختلف موضوعات پر بصیرت حاصل کریں۔",
          point3: "تازہ ترین علم کے ساتھ آگے بڑھیں۔"
        },
        fr: {
          heading: "Explorez de nouvelles idées",
          description: "Plongez dans différents sujets et élargissez votre perspective.",
          point1: "Apprenez à partir d'expériences réelles.",
          point2: "Découvrez des insights sur divers sujets.",
          point3: "Restez en avance avec les dernières connaissances."
        }
      };
      
      

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    )

}

