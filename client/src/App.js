import React from "react";
import Layout from "./components/layout/Layout";
import Dashboard from "./container/Dashboard";
import ListingPage from './container/website/ComponentListing';

function App() {
  return (
    <Layout>
      {/* <Dashboard/> */}
      <ListingPage/>
    </Layout>
  );
}

export default App;
