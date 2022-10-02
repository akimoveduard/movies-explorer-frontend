import React from "react";

import '../SearchError/SearchError.css';

function SearchError({
  errorMessage,
}) {

  return(
    <p className="search-error__message">
      {errorMessage}
    </p>
  );
};

export default SearchError;