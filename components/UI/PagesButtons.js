import { useRouter } from "next/router";
import styles from "./pagesButtons.module.sass";

export default function PagesButtons(props) {
  const router = useRouter()
  const buttons = [];
  for (let i = 1; i <= Math.ceil(props.itemsLength / 5); i++) {
    buttons.push(
      <button
        onClick={(e) =>
          router.push({
            pathname: router.pathname,
            query: {
              sortOrder: router.query.sortOrder || false,
              sortType: router.query.sortType || false,
              pageNumber: i,
            },
          })
        }
        className={`${
          i == router.query.pageNumber ? styles.pageButtonActive : ``
        } ${styles.pageButton}`}
        key={Math.random()}
      >
        {i}
      </button>
    );
  }
  return <div className={styles.pageButtons}>{buttons}</div>;
}
