import React from 'react';
import PageHeader from './PageHeader';

const Page = ({ children, name }) => {
  return (
    <div className={name.toLowerCase()}>
      <PageHeader className={`${name.toLowerCase()}__title page__title`}>
        {name}
      </PageHeader>
      <div className={`${name.toLowerCase()}__content page__content`}>
        {children}
      </div>
    </div>
  );
};

export default Page;
