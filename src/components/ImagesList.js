import { useEffect, useState } from "react";
import instance from "../helpers/axios";
import Button from './Button';
import List from "./List";

const ImagesList = ( ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const getMorePages = () => {
        instance.get(`/list`, {params: { page: `${page}`, limit: 10 }}).then((data) => {
            setImages([...images, ...data]);
            setLoading(false);
        });

    }

    const handleClick = () => {
        setPage((page) => page + 1);
    };

    useEffect( () => { getMorePages() }, [page]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
        <List>
            {images.map(({ id,download_url }) => (
                 <li className="imageslist__item" key={id}> <img className="imageslist__image" src={download_url}/></li>
            ))}
        </List>
        <Button color="primary" size="large" onClick={handleClick}>Show More</Button>
        </>
    );

};

export default ImagesList;