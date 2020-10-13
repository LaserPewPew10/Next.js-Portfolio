import { Container, container } from "reactstrap";
import BaseLayout from "./layouts/BaseLayout";

const BasePage = (props) => {
  const { className = "", children } = props;
  return (
    <div className={`base-page ${className}`}>
      <Container>{children}</Container>
    </div>
  );
};

export default BasePage;
