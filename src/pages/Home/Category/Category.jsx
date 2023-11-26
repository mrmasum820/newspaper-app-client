import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";


const Category = () => {
    const { id } = useParams();
    const newsCategory = useLoaderData()

    // console.log(newsCategory);

    return (
        <div>
            {id && <h3>{newsCategory.name}</h3>}
            {
                newsCategory.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;