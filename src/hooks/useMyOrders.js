import { useEffect, useState } from "react"


const useMyOrders = () => {
    const [selectedItems, setSeletctedItems] = useState([]);

    const cartLocation = `https://wicked-ghost-54122.herokuapp.com/addOrders`;

    useEffect(() => {
        fetch(cartLocation)
            .then(res => res.json())
            .then(data => setSeletctedItems(data));

    }, []);

    return { selectedItems };

}

export default useMyOrders;