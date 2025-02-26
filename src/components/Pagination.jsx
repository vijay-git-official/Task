import { useState } from "react";
import useDataFetch from "../utils/useDataFetch";
import ProductCard from "./ProductCard";

const Pagination = () => {
    const products = useDataFetch();
    const [currentPage, setCurrentPage] = useState(0);

    const PAGE_SIZE = 10;
    const totalProducts = products.length;
    const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const handlePageChange = (n) => {
        setCurrentPage(n);
    };

    return (
        <>
            <div>
                <h1>Pagination</h1>
                
                {/* Current Page Indicator */}
                <p className="mt-2 font-semibold">Current Page: {currentPage + 1}</p>

                <div className="mt-5">
                    {[...Array(noOfPages).keys()].map((n) => (
                        <span 
                            className={`border rounded ml-2 p-1 cursor-pointer ${
                                currentPage === n ? "bg-blue-500 text-white" : ""
                            }`}  
                            key={n} 
                            onClick={() => handlePageChange(n)}
                        >
                            {n + 1}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-3 mt-5">
                    {products.slice(start, end).map((prod) => (
                        <ProductCard key={prod.id} title={prod.title} image={prod.thumbnail} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Pagination;
