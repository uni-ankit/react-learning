import { useEffect, useState } from "react";

const useCustomFetch = (apiUrl) => {
    const [list, setList] = useState();

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setList(data));
    }, []);

    return list;
};

export default useCustomFetch;