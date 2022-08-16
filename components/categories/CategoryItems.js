import CategoryItem from './CategoryItem'
import styles from './CategoryItems.module.sass'

export default function CategoryItems(props){
    return <section className={styles.items}>
        <ul>
            <li><CategoryItem/></li>        
        </ul>
    </section>
}