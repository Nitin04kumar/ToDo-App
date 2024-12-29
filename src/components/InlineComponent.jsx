import styles from "./InlineComponent.module.css";

export default function InlineComponent(){
    return (<div>
        <h1 className={styles.header}>Inline Style</h1>
    </div>);
}