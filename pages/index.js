import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Home = () => {
  const { data: session, status } = useSession();
  const route = useRouter();
  if (status!=='loading') {
    route.push("/spaces");
  }
  return (
    <>
      {console.log(session,status)}
      {status === "loading" || session === null ? (
        <h1>Loading...</h1>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </>
  );
};

export default Home;
