import "./SingleArticle.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const articles = useSelector((state) => state.articleState.entries);
  let normalizedArticles = {};
  articles.forEach((article) => {
    normalizedArticles[article.id] = article;
  });
  const { id } = useParams();
  console.log(articles);
  console.log(id);
  console.log(normalizedArticles);

  return (
    <div className="singleArticle">
      <h1>{normalizedArticles[id].title}</h1>
      <img src={normalizedArticles[id].imageUrl} alt="home" />
      <p>{normalizedArticles[id].body}</p>
    </div>
  );
};

export default SingleArticle;
