import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { Row, Col } from 'reactstrap';
import { useGetUser } from '@/actions/user';
import { SlateView } from 'slate-simple-editor';
import Avatar from 'components/shared/Avatar';
import {useRouter} from 'next/router';


import BlogApi from 'lib/api/blogs';

const BlogDetail = ({blog, author}) => {
  const { data, loading } = useGetUser();
  const router = useRouter();


  if (router.isFallback) {
    return <h1>Your page is getting served</h1>
  }


  return (
    <BaseLayout user={data} loading={loading}>
     <BasePage
        title={`${blog.title} - Justin Ramirez`}
        metaDescription={blog.subTitle}
        className="slate-container">
        <Row>
          <Col md={{size: 8, offset: 2}}>
          <Avatar
              title={author.name}
              image={author.picture}
              date={blog.createdAt}
            />
            <hr/>
            <SlateView initialContent={blog.content}/>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticPaths() {
  const { data } = await new BlogApi().getAll();
  const paths = data.map(({blog}) => ({params: { slug: blog.slug}}));
    return { paths, fallback: true};
  }
  
  export async function getStaticProps({params}) {
    const { data: {blog, author}} = await new BlogApi().getBySlug(params.slug);
    return {props: {blog, author}}
  }




export default BlogDetail;