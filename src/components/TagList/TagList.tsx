import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import './TagList.css';
const TagList = ({data}) => {
  return (
    <ul className="tag-list">
        {
            data.map((e: string)=>{
                return <li className="tag">{e}</li>
            })
        }
    </ul>
  );
};

export default TagList;