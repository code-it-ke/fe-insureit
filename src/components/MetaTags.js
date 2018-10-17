import { string, oneOfType, arrayOf } from 'prop-types';
import join from 'lodash/join';
import isArray from 'lodash/isArray';
import Head from 'next/head';

const MetaTags = ({ title, type, pageUrl, image, description }) => {
  let pageTitle;
  const titlePostfix = 'InsureIt';
  const FB_APP_ID = process.env.REACT_APP_FACEBOOK_APP_ID;

  if (isArray(title)) {
    pageTitle = `${join(title, ' | ')} | ${titlePostfix}`;
  } else {
    pageTitle = title ? title + ' | ' + titlePostfix : titlePostfix;
  }

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name='description' content={description} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image:src' content={image} />
      <meta name='twitter:title' content={pageTitle} />

      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:type' content={type} />
      <meta property='og:url' content={pageUrl} />

      <meta property='fb:app_id' content={FB_APP_ID} />
    </Head>
  );
};

MetaTags.propTypes = {
  description: string,
  image: string,
  pageUrl: string,
  title: oneOfType([string, arrayOf(string)]),
  type: string,
};

MetaTags.defaultProps = {
  description:'',
  pageUrl: '',
  title: null,
  image: '',
  type: 'website',
};

export default MetaTags;