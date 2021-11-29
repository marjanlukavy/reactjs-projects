import { useState } from 'react';

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <div style={{ border: '1px solid black' }} key={item.title}>
        <div
          style={{ backgroundColor: '#eaeaea', padding: '10px' }}
          onClick={() => onTitleClick(index)}
        >
          {item.title}
        </div>
        <br />
        <div>{activeIndex && item.content}</div>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordian;
