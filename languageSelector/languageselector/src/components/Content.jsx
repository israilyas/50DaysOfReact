import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Content = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <div className=" p-6 rounded-2xl shadow-lg max-w-lg mx-auto mt-6">
      <h2 className="text-3xl font-semibold text-blue-500 mb-4">
        {translations[language].heading}
      </h2>
      <p className="text-gray-400 text-xl">{translations[language].description}</p>
      <ul className="mt-4 space-y-2 text-gray-500 text-lg pl-5">
        <li>{translations[language].point1}</li>
        <li>{translations[language].point2}</li>
        <li >{translations[language].point3}</li>
      </ul>
    </div>
  );
};

export default Content;
