import { QuantityHandlerButton } from "./QuantityHandlerBtn";
import { useState,useEffect } from "react";


export function QuantityHandler() {
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState("");
    useEffect(() => {
        if (quantity < 1) {
            setError("Quantity cannot be less than 1.");
            setQuantity(1);
        }
    }, [quantity]);
    return (
        <div className='flex flex-col justify-center items-center gap-2 absolute top-3 right-10'>
            <QuantityHandlerButton disabled={quantity >= 5} icon={"+"}
                onClick={() => setQuantity(prev => prev + 1)} />
            <h2>{quantity}</h2>
            <QuantityHandlerButton disabled={(quantity <= 1)} icon={"-"}
                onClick={() => setQuantity(prev => prev - 1)} />

        </div>
    );
}