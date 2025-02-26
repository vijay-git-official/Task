/* eslint-disable react/prop-types */



const ProductCard = ({ title, image }) => {


    return (

        <div className="border rounded shadow-md flex flex-col items-center p-3">
    <img src={image} alt={title} className="w-full" />
    <p className="mt-2 font-semibold">{title}</p>
</div>
    )
}

export default ProductCard;