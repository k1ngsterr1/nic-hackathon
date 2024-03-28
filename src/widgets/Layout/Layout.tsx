import { Header } from "./Header";
import { Footer } from "./Footer";

interface ILayout {
  children: React.ReactNode;
  type?: 'login' | 'profile' ;
}

export default function Layout({ children }: ILayout) {
  return <>
    <Header />
      {children}
    <Footer />
  </>
}