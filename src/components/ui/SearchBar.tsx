import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { services } from "@/ui/testDatas";
import { useState } from "react";

// Assurez-vous d'inclure tailwind.css dans votre projet pour utiliser les classes utilitaires

const SearchBar = () => {
  const [content, setContent] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className="search_bar w-full sm:w-[455px] z-[1000] flex items-center space-x-2 py-1 px-2 sm:p-2 bg-white shadow-lg rounded-lg">
      <select
        name=""
        id=""
        className={`border border-gray-300 rounded-[.2rem] sm:rounded-lg p-1 sm:p-2 focus:outline-none w-[120px] text-[14px] capitalize font-[300] sm:w-auto ${
          content !== "" ? "hidden" : "flex"
        }`}
      >
        <option value="">selectionnez</option>
        {services.map((service, index) => (
          <option
            onClick={() => setContent(service.title)}
            key={index}
            value=""
          >
            {service.title}
          </option>
        ))}
      </select>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Rechercher un service..."
        className="flex-1 border-none text-[15px] text-gray-400 p-1 sm:p-2 focus:outline-none font-[400] w-[50px] sm:w-auto"
        value={content}
        onChange={handleInputChange}
      />
      <div className="submit_search border-solid border-l-[1px] hover:text-midnight-blue ">
        <button
          type="submit"
          className=" rounded-lg p-2 hover:bg-blue-600 focus:outline-none"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
