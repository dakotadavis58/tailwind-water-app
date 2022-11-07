import Homie from "../components/homie";
import Layout from "../components/Layout";
import { AppContextProvider } from "../context";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);
  // useEffect(() => {
  //   if (!session) {
  //     function pushSignIn() {
  //       router.push("/signin");
  //     }
  //     pushSignIn();
  //   }
  // }, []);

  return (
    <>
      <AppContextProvider>
        <Layout>
          <Homie />
        </Layout>
      </AppContextProvider>
    </>
  );
}
