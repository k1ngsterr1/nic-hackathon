import { ProductsPage } from "@/pages/ProductsPage";
import Layout from "@/widgets/Layout/Layout";

export default function ListOfProducts() {
  return (
    <Layout>
      <main className="container pt-[72px]">
        <ProductsPage />
      </main>
    </Layout>
  )
}