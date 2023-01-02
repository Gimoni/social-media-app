import {useState, useErrect, useEffect} from "react";
import {useParams,useNavigate} from "react-router-dom";
import ArticleTemplate from "./ArticleTemplate";
import fetchData from "../utils/fetchData";

export default function ArticleView() {
    const {articleId} = useParams();
    const [error, setError] = useState(null)
    const [article, setArticles] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate()

    // 게시물 가져오기 요청
    useEffect(() => {
        fetchData(`${process.env.REACT_APP_SERVER}/articles/${articleId}`)
        .then(data => {
            setArticles(data);
        })
        .catch(error => {
            console.log(error)
            setError(error)
        })
        .finally(() => setIsLoaded(true))
    }, [])

    function favorite(articleId) {

    }

    function unfavorite(articleId) {

    }

    function deleteArticle(articleId) {

    }

    if (error) {
        return <p>failed to fetch article</p>
    }
    if (!isLoaded) {
        return <p>fetching article...</p>
    }
    return(
        <ArticleTemplate
            article={article}
            favorite={favorite}
            unfavorite={unfavorite}
            deleteArticle={deleteArticle}
        />
    )
}