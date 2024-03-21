import Link from "next/link";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  const status = "no authenticated";
  return (
    <>
      {status === "no authenticated" ? (
        <Link href={'/'}>Login</Link>
      ) : (
        <>
          <Link src="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
