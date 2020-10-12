import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";

class Portfolio extends React.Component {
  static async getIntialProps() {
    let posts = [];
    try {
      const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
      posts = res.data;
    } catch (e) {
      console.error(e);
    }

    return { posts: posts.slice(0, 10) };
  }

  renderPosts(posts) {
    return posts.map((post) => <li key={post.id}>{post.id}</li>);
  }

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1>I am Portfolio Page</h1>
        <ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>
    );
  }
}

export default Portfolio;
