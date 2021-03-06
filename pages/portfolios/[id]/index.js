import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { formatDate } from 'helpers/functions';
import PortfolioApi from "@/lib/api/portfolios";
import {Router, useRouter} from 'next/router';

const Portfolio = ({ portfolio }) => {
  const { data: dataU, loading: loadingU } = useGetUser();
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Your page is getting served</h1>
  }

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
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner page-cover">
            { router.isFallback && 
              <h1 className="cover-heading"> Your page is getting served...</h1>
            }
            { !router.isFallback && 
            <>
            <h1 className="cover-heading">{portfolio.title}</h1>
            <p className="lead dates">{formatDate(portfolio.startDate)} - {formatDate(portfolio.endDate) || 'Present'}</p>
              <p className="lead info mb-0">{portfolio.location}</p>
              <p className="lead">{portfolio.description}</p>
              <p className="lead">
              <a href={portfolio.projectWebsite} target="_" className="btn btn-lg btn-secondary">Visit Project</a>
              <a href={portfolio.codeWebsite} target="_" className="btn btn-lg btn-secondary">Visit Code</a>
              </p>
            </>
          }
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
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: { portfolio }, revalidate: 1 };
  
}

export default Portfolio;