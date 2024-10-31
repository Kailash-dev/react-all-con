import { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}

export default DataFetcher;
