import Menu from '@/components/menu/Menu';
import Comments from '@/components/comments/Comments';
import styles from './singlePage.module.css';
import Image from 'next/image';

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src='/p1.jpeg' alt='' fill className={styles.avatar} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>26.03.2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={styles.image} />
            </div>
        </div>
        <div className={styles.context}>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque dolorum nostrum suscipit molestias. Possimus dolores quam alias optio, ex omnis architecto natus placeat aut id animi nihil voluptatum labore.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque dolorum nostrum suscipit molestias. Possimus dolores quam alias optio, ex omnis architecto natus placeat aut id animi nihil voluptatum labore.
                    </p>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque dolorum nostrum suscipit molestias. Possimus dolores quam alias optio, ex omnis architecto natus placeat aut id animi nihil voluptatum labore.
                    </p>
                </div>
                <div className={styles.comments}>
                    <Comments />
                </div>
            </div>
            <Menu />
        </div>

    </div>
  )
}

export default SinglePage