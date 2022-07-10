import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../../styles/Header.module.scss";

const Header = () => {
  console.log(process.env.EMAIL_SERVER_PASSWORD);
  const { data: session } = useSession();
  const { push, asPath } = useRouter();
  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/some" });
    push(data.url);
  };
  // const handleSignIn = () => {
  //   push(`/auth/signin?callbackUrl=${asPath}`);
  // };
  return (
    <div className={styles.headerContainer}>
      {session ? (
        <div>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button onClick={signIn}>Sign In</button>
        </div>
      )}
    </div>
  );
};
export const getServerSideProps = async (ctx) => {
  // Check if the user is authenticated from the server
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/api/auth/signin",
      },
      props: {},
    };
  }
  return {
    props: {
      session,
    },
  };
};

export default Header;
