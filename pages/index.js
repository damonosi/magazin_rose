import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  console.log(session);
  return <div className={styles.container}>{session.user.email}</div>;
};
export default Home;
