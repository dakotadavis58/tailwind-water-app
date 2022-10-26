import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <main className="relative h-5/6 flex justify-center items-center">
        <section className="">
          <div className="z-30">
            <Image
              src="https://i.imgur.com/Br64KJU.png"
              alt="Picture of the author"
              width={300}
              height={500}
            />
          </div>
          <div className="absolute top-[46%] left-[20%] z-50">
            <Image
              src="https://i.imgur.com/lUCXgGo.png"
              alt="Picture of the author"
              width={180}
              height={125}
            />
          </div>
          <div className="water h-[300px] w-[250px] absolute bg-blue-300 left-[20px] bottom-[105px] -z-50 "></div>
          <div className="relative">
            <div className="waterBlock absolute h-[300px] w-[100px] bottom-[10px] -left-[54px] -rotate-[7.5deg] -z-10"></div>
            <div className="waterBlock absolute h-[300px] w-[100px] bottom-[10px] -right-[51px] rotate-[7.5deg] -z-10"></div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
