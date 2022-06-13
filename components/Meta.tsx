import React from 'react';
import Head from 'next/head';

type MetaProps = {
  title?: string;
  keywords?: string;
  description?: string;
};

const Meta: React.FC<MetaProps> = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='UTF-8' />
      <link rel='icon' href='/favicon.ico' />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Volvo Car Shop',
  keywords: 'cars, EV, electric vehicles, shop',
  description: 'Volvo Car web Store',
};

export default Meta;
