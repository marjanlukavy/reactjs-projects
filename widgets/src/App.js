import { useState } from 'react';
import Accordian from './components.js/Accordian';
import Dropdown from './components.js/Dropdown';
import Search from './components.js/Search';

const items = [
  {
    title: 'rser',
    content: 'Lorem ipsum dolor sit aipsum dolor sitmet.',
  },
  {
    title: 'dasdas',
    content: 'Loripsum doipsum dolor sitlor sitem ipsum dolor sit amet.',
  },
  {
    title: 'rgfdgser',
    content: 'Lorem ipsum dolipsum dolor sitor sit amet.',
  },
  {
    title: 'olasd',
    content: 'Lorem iipsum dolor sitipsum dolor sitpsum dolor sit amet.',
  },
  {
    title: 'adasd',
    content: 'Lorem Loremipsum dolor sit, ipsum dolor.',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  },
];

/* <Accordian items={items} /> */
// return <Search />;

  /* <Dropdown
  selected={selected}
  onSelectedChange={setSelected}
  options={options}
/>; */

const 

function App() {
  // const [selected, setSelected] = useState(options[0]);
  return <Search />;
}

export default App;
