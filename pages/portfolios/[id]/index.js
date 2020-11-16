import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";

import { useGetUser } from "@/actions/user";
import PortfolioApi from "@/lib/api/portfolios";

const Portfolio = ({ portfolio }) => {
  const { data: dataU, loading: loadingU } = useGetUser();

   // TODO: Provide proper stylings!!!
  return (
    <BaseLayout user={dataU} loading={loadingU}>
       <BasePage
        title={`${portfolio.title} - Justin Ramirez`}
        header="Portfolio Detail"
        metaDescription={portfolio.description}>{JSON.stringify(portfolio)}</BasePage>
    </BaseLayout>
  );
};

// This function is executed at the build time
export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  // Get the paths we want pre-render based on portfolio ID
  const paths = portfolios.map((portfolio) => {
    return {
      params: { id: portfolio._id },
    };
  });
  // Fallback : false means that "not found pages" will be resolved in 404 page
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: { portfolio } };
}

export default Portfolio;
