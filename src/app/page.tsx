import RootLayout from "./layout";
import Categorias from "./UI/Categorias";
import Filtros from "./UI/Filtros";
import MainBanner from "./UI/MainBanner";
import styles from './UI/Page.module.css'
export default function Home(): JSX.Element {
  return (
    <RootLayout>
      <MainBanner />
      <div className={styles.container}>
        <Filtros />
        <Categorias />
      </div>
    </RootLayout>
  );
}
