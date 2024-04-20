import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: "http://localhost:8080/", // Replace with your GraphQL endpoint
  headers:{
    authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIwMjEyMjkxQGl0bGEuZWR1LmRvIiwiaWF0IjoxNzEzNTU4MTI1LCJleHAiOjE3NDUxMTU3MjV9.y9ZUL3nDHBazcTpUUFmE4xFrx8EG4HedV9iifCd88ac',
  },
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
