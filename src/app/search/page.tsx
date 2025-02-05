import { Suspense } from "react";
import SearchPageContent from "../components/SearchPageContent";

const SearchPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  );
};

export default SearchPage;
