import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';

const OrgChart2 = () => {


    return (
        
        <>
        <h1>org chart 2</h1>
        <Tree
    lineWidth={'2px'}
    lineColor={'gray'}
    lineBorderRadius={'10px'}
    label={<div className='styleNode'>Bojan Bozic</div>}
  >
    <TreeNode label={<div className='styleNode'>Dejan Dinic</div>}>
      <TreeNode label={<div className='styleNode'>Grand Child</div>} />
    </TreeNode>
    <TreeNode label={<div className='styleNode'>Ivana Stojanovic</div>}>
      <TreeNode label={<div className='styleNode'>Grand Child</div>}>
        <TreeNode label={<div className='styleNode'>Great Grand Child 1</div>} />
        <TreeNode label={<div className='styleNode'>Great Grand Child 2</div>} />
      </TreeNode>
    </TreeNode>
    <TreeNode label={<div className='styleNode'>Marko Markovic</div>}>
      <TreeNode label={<div className='styleNode'>Grand Child 1</div>} />
      <TreeNode label={<div className='styleNode'>Grand Child 2</div>} />
    </TreeNode>
    <TreeNode label={<div className='styleNode'>Marko Markovic</div>}>
      <TreeNode label={<div className='styleNode'>Grand Child 1</div>} />
      <TreeNode label={<div className='styleNode'>Grand Child 2</div>} />
    </TreeNode>
  </Tree>
        </>
        
    )
}

export default OrgChart2;