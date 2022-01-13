import { toast } from "react-toastify";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Searchar, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';

function Searchbar ({onSubmit}) {
  const [imageName, setImageName] = useState('');

  const handleNameChange = (event) => {
    setImageName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (imageName.trim() === "") {
      toast.warn("Enter a search query");
      return;
    }

    onSubmit(imageName);
    setImageName('');
  };

  return (
    <Searchar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          type="text"
          placeholder="Search images and photos"
          value={imageName}
          onChange={handleNameChange}
        />
      </SearchForm>
    </Searchar>
  );
}

export default Searchbar;