import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Home = () => {
  const { data: session, status } = useSession();
  const route = useRouter();
  if (status === "authenticated") {
    route.push("/spaces");
  }
  return (
    <>
      {status === "loading" && <h1>Loading...</h1>}
      {status === "unauthenticated" && (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </>
  );
};

export default Home;
