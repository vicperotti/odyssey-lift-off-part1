import { gql, useQuery } from "@apollo/client";
import { Button } from "../styles";
import { Layout } from "../components";
import { Link } from "react-router-dom";

const GET_AUTHORS = gql`
query GetAuthors {
    authors { 
    name
    id
    photo
  }
}`

const AuthorStuff = () => {


/**
 * Quotes Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
  <Layout grid>
    {data?.authors?.map((author) => (
      <div key={author.id}>
        <h4>{author.name}</h4>
        <img src = {author.photo} style={{height: 200, width: 200}}></img>
        </div>
    ))}   
      <Link to="/addAuthor"><Button>Add a new author</Button></Link>
  </Layout>

  );
};

export default AuthorStuff;
