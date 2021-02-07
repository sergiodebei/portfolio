import React from "react"
import styled from 'styled-components';

// Layout
import Layout from '../layouts/home';

// Component 
import Cases from '../components/Cases';

const IndexPage = () => {

  return (
    <Layout
    // backgroundColor={bgColor}
    >
      <Cases />
    </Layout>
  );
};

export default IndexPage;
