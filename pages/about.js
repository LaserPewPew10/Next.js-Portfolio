import { useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { Row, Col } from 'reactstrap';

const About = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    };
  });

  const createFadeInClass = () => {
    if (typeof window !== 'undefined') {
      return window.__isAboutLoaded ? '' : 'fadein';
    }

    return 'fadein';
  };

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage title="About Me - Justin Ramirez" className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
              <h4 className={`subtitle ${createFadeInClass()}`}>
                To my About Page
              </h4>
              <p className={`subsubTitle ${createFadeInClass()}`}>
                Feel free to read a short description about me.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass()}`}>
              <p>
                My name is Justin Ramirez and I am an experienced software
                engineer and freelance developer.{' '}
              </p>
              <p>
                A passionate Full Stack Web Developer leveraging Mechanical
                Engineering experience for building detailed orientated
                applications for users on the web. I have developed a strong
                attention to detail and I adapt quickly to dynamic environments,
                both of which would make me an asset to a team.
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
