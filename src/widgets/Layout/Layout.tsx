import { Footer } from "./Footer";
import { Header } from "./Header";

interface ILayout {
  children: React.ReactNode;
  type?: 'login' | 'profile' ;
}

export default function Layout({ children }: ILayout) {
  return (
    <article>
      <Header />
        {children}
      <Footer />
    </article>
  )
}
// 