import Homie from "../components/homie";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <main className="min-h-[80vh] flex justify-center items-center">
          <Homie />
        </main>
      </Layout>
    </>
  );
}
