import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { Main } from '../components/main/Main';
import { ThemeToggler } from '../components/themeToggler/themeToggler';

export default function HomePage() {
  return (
    <>
      <Header />
      <ThemeToggler />
      <main className="main">
        <Main />
      </main>
      <Footer />
    </>
  );
}
