import { useEffect, useState } from "react";
import axios from "axios";

function useCategories() {
  const [category, setCategory] = useState([]);

  useEffect(() => 
      axios
      .get("/api/categories")
      .then((response) => setCategory(response.data.products))
      .catch((err) => console.log(err)),
   []);
  return  category 
  
}
export { useCategories };