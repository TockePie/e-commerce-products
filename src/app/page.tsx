import { Suspense, lazy } from "react";
import styles from "./page.module.css";
import Loading from "./@products/loading";

const ProductsPage = lazy(
  () =>
    new Promise<{ default: React.ComponentType }>((resolve) =>
      setTimeout(
        async () =>
          resolve({ default: (await import("./@products/page")).default }),
        3000
      )
    )
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
