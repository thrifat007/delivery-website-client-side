import { useEffect, useState } from 'react';

const useData = () => {
    const [items, setItems] = useState([]);

    const dataLocation = 'https://wicked-ghost-54122.herokuapp.com/services';

    useEffect(() => {
        fetch(dataLocation)
            .then(res => res.json())
            .then(data => setItems(data));

    }, [])


    return { items };
};

export default useData;