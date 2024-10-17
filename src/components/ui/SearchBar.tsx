import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { IService } from "@/ui/types";

const SearchBar = ({ services }: { services: IService[] }) => {
  const [content, setContent] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showErrorForSearch, setShowErrorForSurch] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setContent(inputValue);

    // Afficher les suggestions uniquement si l'utilisateur a saisi quelque chose
    if (inputValue.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  // Filtrer les services en fonction du contenu saisi par l'utilisateur
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(content.toLowerCase())
  );

  const handleSelectSuggestion = (suggestion: string) => {
    setContent(suggestion);
    setShowSuggestions(false); // Cacher le modal après la sélection
  };

  // Fonction pour mettre en évidence les lettres correspondantes
  const highlightMatch = (title: string, query: string) => {
    const startIndex = title.toLowerCase().indexOf(query.toLowerCase());
    if (startIndex === -1) return title;

    const beforeMatch = title.slice(0, startIndex); // Partie avant la correspondance
    const match = title.slice(startIndex, startIndex + query.length); // Correspondance
    const afterMatch = title.slice(startIndex + query.length); // Partie après la correspondance

    return (
      <>
        <span className="text-gray-400">{beforeMatch}</span>
        <span className="text-black font-semibold">{match}</span>
        <span className="text-gray-400">{afterMatch}</span>
      </>
    );
  };

  const handlesubmit = () => {
    if (content) {
      const isContentCorrect = services.some((service) =>
        service.title.toLowerCase().includes(content.toLowerCase())
      );

      if (isContentCorrect) {
        window.location.href = `/services/by-slug/${content}`;
      } else {
        setShowErrorForSurch(true);
      }
    }
  };

  return (
    <div className="relative w-full sm:w-[455px] z-[50]">
      <div className="search_bar flex items-center space-x-2 py-1 px-2 sm:p-2 bg-white shadow-lg rounded-lg">
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
          <div className="submit_search border-solid border-l-[1px] hover:text-midnight-blue ">
            <button
              type="button" // Changer le type à "button" pour éviter le comportement par défaut
              className="rounded-lg p-2 hover:bg-blue-600 focus:outline-none"
              onClick={handlesubmit} // Appel de la fonction de soumission
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal des suggestions */}
      {showSuggestions && filteredServices.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-lg rounded-b-lg mt-[-5px]">
          <ul className="max-h-[200px] overflow-y-auto">
            {filteredServices.map((service, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectSuggestion(service.title)}
              >
                {highlightMatch(service.title, content)}
              </li>
            ))}
          </ul>
        </div>
      )}
      {(showErrorForSearch || (content && filteredServices.length < 1)) && (
        <div className="absolute top-full left-0 w-full bg-gray-50 border border-t-white border-gray-300 shadow-lg rounded-b-lg mt-[-5px]">
          <div className="px-2 py-6 pt-2 font-Quicksand text-gray-400">
            Aucun résultat trouvé !!!
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
