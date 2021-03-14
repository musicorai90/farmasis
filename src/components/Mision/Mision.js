import styles from './Styles.module.css'

const Mision = () => {
    const clases = styles

    return (
        <div className={clases.container}>
            <div className={clases.box}>
                <h2>Mision</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro atque repellendus quae voluptate ducimus fugit hic corrupti eos, recusandae consequuntur accusantium soluta saepe magnam excepturi illo delectus eaque perferendis ullam?</p>
            </div>
        </div>
    )
}

export default Mision;
