import { useState } from "react";

const Product=()=> {

    const [age, setAge]= useState(22);

    const handleclikeAge = ()=> {
        setAge(23);
    }

    return (
        <div className="Product">
            <p>my age is {age}</p>
            <button onClick={handleclikeAge}>click</button>
        </div>
    );
}

export default Product;