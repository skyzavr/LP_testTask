import { Tabs } from '@components/tabs';
import { tabsData } from '@data/tabs';

export const Click = (e: MouseEvent) => {
  const tabValue = document.getElementsByClassName('tabValue');
  const { target, currentTarget } = e;
  if (target === currentTarget) return;

  const currentElement = tabsData.find(
    (el) => el.name === (target as HTMLDivElement).dataset.name
  );
  if (!currentElement || !tabValue) return;

  tabsData.map((el) => (el.isActive = false));
  currentElement.isActive = true;

  const children = document.getElementById('tabArea')!.children;
  for (let i = 0; i < children.length; i++) children[i].className = 'passive';
  (target as HTMLDivElement).className = 'active';
  tabValue[0].innerHTML = currentElement.value;
};

export const TabWidget = ({ element }: { element: HTMLElement }) => {
  const tabsList = Tabs({ data: tabsData });
  const value = tabsData.find((el) => el.isActive === true)?.value;

  element.innerHTML += `<div class="Tabs" id="tabs">
  <h3>Запрос по КБК</h3>
  ${tabsList.outerHTML}
  <div class="tabValue">${value}</div>
  </div>`;
};
