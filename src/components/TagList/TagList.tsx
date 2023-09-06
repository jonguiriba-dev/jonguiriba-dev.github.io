import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import './TagList.css';
const TagList = (props:{data:string[]}) => {
  return (
    <ul className="tag-list">
        {
            props.data.map((e: string)=>{
                return <li key={e} className="tag">{e}</li>
            })
        }
    </ul>
  );
};

export default TagList;