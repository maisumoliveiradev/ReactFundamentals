import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, src}) {
    // const hasBorder = props.hasBorder != false; modo para tornar valor padrão

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />
    )
}