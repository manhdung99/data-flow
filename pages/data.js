import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import getEnvironment from "../components/environment";
const query = graphql`
  query pagesFilmsQuery {
    allFilms {
      id
      director
      title
      characters {
        name
      }
    }
  }
`;
const Films = ({ error, allFilms = null }) => {
  if (error) return <div>Error! {error.message}</div>;
  if (!allFilms) return <div>Loading...</div>;
  return (
    <div>
      {allFilms.map((film) => (
        <div key={film.id}>
          <h1>{film.title}</h1>
          <p>Director: {film.director}</p>
          <p>Characters: {film.characters.map((c) => c.name).join(", ")}</p>
        </div>
      ))}
    </div>
  );
};
const Data = ({ props, records }) => (
  <div>
    <QueryRenderer
      environment={getEnvironment()}
      query={query}
      variables={{}}
      render={({ error, props }) => (
        <Films error={error} allFilms={props && props.allFilms} />
      )}
    />
  </div>
);
export default Data;
