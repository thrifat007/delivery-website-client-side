import { useEffect, useState } from "react";
import useFirebase from "./useFirebase"


const useCart = () => {
    const { user } = useFirebase();
    // const [selectedItem, setSelectedItem] = useState([]);
    const [services, setServices] = useState([]);
    const [allServices, setAllServices] = useState([]);
    const [selectedId, setSelectedId] = useState('');
    // const [cart, setCart] = useState([]);
    // let totalItem = [];

    useEffect(() => {
        const url = `https://wicked-ghost-54122.herokuapp.com/services/`
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setAllServices(data));

    }, []);


    // console.log(allServices);

    function myCart(id, selectedThing, userMail) {
        console.log('Clicked', id)
        setSelectedId(id)

        // console.log(selectedThing)
        const status = 'pending';

        const data = { selectedThing, userMail, status };

        fetch(`https://wicked-ghost-54122.herokuapp.com/addOrders`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    alert("add to cart");
                } else {
                    alert("add korte pari nai");
                }
            });

    }
    // console.log(selectedId);



    return { myCart };
}

export default useCart;