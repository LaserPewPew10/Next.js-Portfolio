import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { Row, Col } from 'reactstrap';

const AboutMe = () => {
  const { data, loading } = useGetUser();

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        title="About Me - Justin Ramirez"
        className="about-page"
        canonicalPath="/about">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title`}>Hello, Welcome</h1>
              <h4 className={`subtitle`}>To About Page</h4>
              <p className={`subsubTitle`}>Feel free to read short description about me.</p>
            </div>
          </Col>
          <Col md="6">
            <div>
            <p>My name is Justin Ramirez and I am an experienced software engineer and freelance developer. </p>
              <p>
              A passionate Full Stack Web Developer leveraging Mechanical Engineering experience for building detailed orientated applications for users on the web. I have developed a strong attention to detail and I adapt quickly to dynamic environments, both of which would make me an asset to a team.
              </p>
              <p>
              Throughout my career, I have acquired advanced technical knowledge and the ability to explain
              programming topics clearly and in detail to a broad audience. I invite you to take my course,
              where I have put a lot of effort to explain web and software engineering concepts in a detailed,
              hands-on and understandable way.
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default AboutMe;
