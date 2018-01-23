import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Script from 'react-load-script';
import AboutPage from '../templates/about-page.js'
import Navigation from '../components/Navigation'
import VideoCover from '../components/VideoCover'
import '../style/all.css'

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
      var blatoday = new Date()
      var thisYear = blatoday.getFullYear()

      const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark
    return (
        <div>
            <Script
                url="https://identity.netlify.com/v1/netlify-identity-widget.js"
                onLoad={this.handleScriptLoad.bind(this)}
            />
            <VideoCover />

            <div className="container">
                <Navigation/>
                <div className="content">
                    <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
                </div>
            <section>
                {posts.filter(post => post.node.frontmatter.templateKey === 'blog-post').map(({ node: post }) => {
                    console.log(post.frontmatter.date);
                    return (

                        <div className="content" style={{ border: '1px solid #eaecee', padding: '2em 4em' }} key={post.id}>
                            <p>
                                <Link className="has-text-primary" to={post.frontmatter.path}>
                                    {post.frontmatter.title}
                                    </Link>
                                <span> &bull; </span>
                                <small>{post.frontmatter.date}</small>
                            </p>
                            <p>
                                By the way, this is the current date: {thisYear}
                                </p>
                            <p>
                                {post.excerpt}
                                <br />
                                <br />
                                <Link className="button is-small" to={post.frontmatter.path}>
                                    Keep Reading →
                                </Link>
                            </p>
                        </div>
                    );
                })}

                </section>

                <section>
                    {posts.filter(post => post.node.frontmatter.templateKey === 'about-page').map(({ node: post }) => {
                    return (
                    <div className="content" style={{ border: '1px solid #eaecee', padding: '2em 4em' }} key={post.id}>
                        <p>
                            <Link className="has-text-primary" to={post.frontmatter.path}>
                                {post.frontmatter.title}
                            </Link>
                            <span> &bull; </span>
                        </p>
                        <p>
                            {post.excerpt}
                            <br />
                            <br />
                            <Link className="button is-small" to={post.frontmatter.path}>
                                Keep Reading →
                            </Link>
                        </p>
                    </div>
                    );
                    })}
                </section>
            </div>
        </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "YYYY")
            path
          }
        }
      }
    }
  }
`;
