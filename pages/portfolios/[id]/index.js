import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";

import { useGetUser } from "@/actions/user";
import PortfolioApi from "@/lib/api/portfolios";

const Portfolio = ({ portfolio }) => {
  const { data: dataU, loading: loadingU } = useGetUser();

   // TODO: Provide proper stylings!!!
  return (
    <BaseLayout
    navClass="transparent"
    user={dataU} loading={loadingU}>
       <BasePage
        noWrapper
        indexPage
        title={`${portfolio.title} - Justin Ramirez`}
        metaDescription={portfolio.description}>
            <div className="portfolio-detail">
          <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" class="inner page-cover">
              <h1 class="cover-heading">Title</h1>
              <p class="lead dates">dates</p>
              <p class="lead info mb-0">jobTitle | company | location</p>
              <p class="lead">description</p>
              <p class="lead">
                <a href="#" class="btn btn-lg btn-secondary">Visit Company</a>
              </p>
            </main>
          </div>
        </div>
        </BasePage>
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
