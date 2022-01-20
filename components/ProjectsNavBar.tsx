import React, { FunctionComponent } from 'react';
import { Category } from '../type';


export const NavItem:FunctionComponent<{
    value:Category| 'all',
    handleFilterCategory:Function,
    active:string
}> = ({
    value,handleFilterCategory,active
}) => {

    let className="capitalize cursor-pointer hover:text-green "
    if(active===value){
        className+=" text-green"
    }
  return <li className={className} onClick={()=>handleFilterCategory(value)}>{value}</li>;
};

const ProjectsNavBar = (props) => {
  return <div className='flex px-3 py-3 space-x-3 overflow-x-auto list-none'>
      <NavItem value='all' {...props}/>
      <NavItem value='flutter' {...props}/>
      <NavItem value='firebase' {...props}/>
      <NavItem value='react'{...props}/>

  </div>;
};

export default ProjectsNavBar;
