import React from "react";
import Homie from "../components/homie";
import Layout from "../components/Layout";

function Home() {
  return (
    <div>
      <Layout>
        <main className="min-h-[80vh] flex justify-center items-center">
          <Homie />
        </main>
      </Layout>
    </div>
  );
}

export default Home;
