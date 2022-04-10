import axios from "axios";
import { useEffect, useState } from "react";

function useProduct() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/api/products").then((data) => {
            setData(data.data.products);
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    return { data };
}
export { useProduct };

