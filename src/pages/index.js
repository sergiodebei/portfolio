import React, { useState } from 'react';

// Layout
import Layout from '../layouts/home';

// Component 
import Cases from '../components/Cases';
import ProjectImage from '../components/ProjectImage';

const IndexPage = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  console.log("🚀 ~ file: index.js ~ line 12 ~ IndexPage ~ hoveredItem", hoveredItem)
  const [imgVisible, setImgVisible] = useState(false);
  const [imgSource, setImgSource] = useState(null);

  return (
    <Layout>
      <ProjectImage
        visible={imgVisible}
        src={imgSource}
      />
      <Cases
        hoveredIte m={hoveredItem}
        setHoveredItem={setHoveredItem}
        setImgVisible={setImgVisible}
        setImgSource={setImgSource}
      />
    </Layout>
  );
};

export default IndexPage;
