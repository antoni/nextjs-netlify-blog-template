import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import { MDXProvider } from '@mdx-js/react';
import { DesktopApplicationGlobalStyles } from '@mbank-design/components-library/styles';
import { DesignSystemThemeProvider } from '@mbank-design/components-library/providers';
import { mBank } from '@mbank-design/components-library/themes';
import { Button } from '@mbank-design/components-library/components'

export default function Index() {
    return (
        <DesignSystemThemeProvider theme={mBank}>
            <MDXProvider
                components={{
                    wrapper: (props) => {
                        return (
                            <DesignSystemThemeProvider
                                theme={mBank}
                                {...props}
                            />
                        );
                    },
                }}
            >
            <Layout>
                <BasicMeta url={"/"}/>
                <OpenGraphMeta url={"/"}/>
                <TwitterCardMeta url={"/"}/>
                <Button>Click me</Button>
                <div className="container">
                    <div>
                        <h1>
                            Hi, We're Next.js & Netlify<span className="fancy">.</span>
                        </h1>
                        <span className="handle">@nextjs-netlify-blog</span>
                        <h2>A blog template with Next.js and Netlify.</h2>
                        <SocialList/>
                    </div>
                </div>
                <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
            </Layout>
            </MDXProvider>
        </DesignSystemThemeProvider>
    );
}
