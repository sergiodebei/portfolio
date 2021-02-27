import React, { useState, useContext } from 'react';

// Layout
import Layout from '../layouts/home';

// Component 
import Cases from '../components/Cases';
import ProjectImage from '../components/ProjectImage';
// import Cursor from '../components/Cursor';

const IndexPage = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [imgVisible, setImgVisible] = useState(false);
  const [imgSource, setImgSource] = useState(null);

  return (
    <Layout>
      <ProjectImage
        visible={imgVisible}
        src={imgSource}
      />
      <Cases
        hoveredItem={hoveredItem}
        setHoveredItem={setHoveredItem}
        setImgVisible={setImgVisible}
        setImgSource={setImgSource}
      />
      {/* <Cursor/> */}
    </Layout>

  );
};

export default IndexPage;
