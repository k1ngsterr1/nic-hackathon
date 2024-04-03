import { BasketPage } from "@/pages/BasketPage.tsx";
import Layout from "@/widgets/Layout/Layout";

export default function Basket() {
  return (
    <Layout>
      <main className="py-[60px] container mt-[60px] mb-[146px]">
        <BasketPage />
      </main>
    </Layout>
  );
}
