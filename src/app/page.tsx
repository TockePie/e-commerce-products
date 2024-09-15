import { Suspense, lazy } from "react";
import styles from "./page.module.css";
import Loading from "./@products/loading";

const ProductsPage = lazy(() =>
  import("./@products/page").then((module) => ({
    default: module.default,
  }))
);

export default function Home() {
  return (
    <div className={styles.page}>
      <Suspense fallback={<Loading />}>
        <ProductsPage />
      </Suspense>
    </div>
  );
}
