import { useState, useMemo } from "react";
import useDataFetch from "../utils/useDataFetch";

const FilterSort = () => {
    const [category, setCategory] = useState("All");
    const [sortOrder, setSortOrder] = useState("asc");
    const products = useDataFetch();

    // Memoized Filtered Products
    const filteredProducts = useMemo(() => {
        console.log("filteredProducts")
        return category === "All"
            ? products
            : products.filter((p) => p.category === category);
    }, [products, category]);

    // Memoized Sorted Products
    const sortedProducts = useMemo(() => {
        console.log("sortedProducts")
        return [...filteredProducts].sort((a, b) =>
            sortOrder === "asc" ? a.price - b.price : b.price - a.price
        );
    }, [filteredProducts, sortOrder]);

    return (
        <div className="mt-10">
            <h1>Products</h1>

            <div className="mt-5">
                <h1 className="mt-5">Filter Products By Category</h1>
                <label className="ml-4">Category</label>
                <select
                    className="p-2 bg-gray-200 rounded ml-4 mt-2"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="beauty">Beauty</option>
                    <option value="fragrances">Fragrances</option>
                </select>

                <label className="ml-4">Sort By Price</label>
                <select
                    className="p-2 bg-gray-200 rounded ml-4 mt-2"
                    id="sortOrder"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="asc">Low To High</option>
                    <option value="dsc">High To Low</option>
                </select>

                <div className="p-2 border text-start mt-10 rounded shadow-lg">
                    {sortedProducts.map((p, index) => (
                        <div key={p.id}>
                            {index + 1}. {p.title} - ${p.price}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterSort;
