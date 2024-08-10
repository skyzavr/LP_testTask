import { tabsDataTs } from '@data/tabs';
import { createDivElement } from '@helpers/divElement';

type props = { data: tabsDataTs[] };

export const Tabs = ({ data }: props) => {
  const tab = createDivElement({
    className: 'tabArea',
    dataAttribute: '',
  });
  tab.id = 'tabArea';
  for (let i = 0; i < data.length; i++) {
    const { title: content, name: dataAttribute, isActive } = data[i];
    const className = isActive ? 'active' : 'passive';
    const insideDiv = createDivElement({ className, dataAttribute, content });
    tab.appendChild(insideDiv);
  }

  return tab;
};
