import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="Image" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2024</span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
            rerum!
          </h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          reiciendis recusandae deleniti, nobis vel autem laborum repellendus
          voluptate! Commodi rem quae iusto deleniti! Vero, debitis?
        </p>
        <Link href="/">Read more</Link>
      </div>
    </div>
  );
};

export default Card;
