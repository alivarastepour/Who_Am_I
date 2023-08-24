import styles from "@/styles/quote.module.scss";

const Quote = () => {
  return (
    <>
      <div className={styles["quote-wrapper"]}>
        <div className={styles["quote"]}>
          Well, this is the reason. We bow to the inevitable. We're not wheat,
          we're buckwheat! When a storm comes along it flattens ripe wheat
          because it's dry and can't bend with the wind. But ripe buckwheat's
          got sap in it and it bends. And when the wind has passed, it springs
          up almost as straight and strong as before. We aren't a stiff-necked
          tribe. We're mighty limber when a hard wind's blowing, because we know
          it pays to be limber. When trouble comes we bow to the inevitable
          without any mouthing, and we work and we smile and we bide our time...
          That, my child, is the secret of the survival.
        </div>
        <div className={styles["author"]}>
          -gone with the wind, Margaret Mitchell
        </div>
      </div>
    </>
  );
};

export default Quote;
