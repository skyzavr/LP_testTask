import { data, dataTs } from '@data/companies';
import { Buttons } from './buttons';
import { listElement } from './listElement';

export const listArea = ({ element }: { element: HTMLElement }) => {
  let isActivateAll = false;
  let dataInWork = JSON.parse(JSON.stringify(data));

  const getNewData = (query: string) =>
    data.filter((el) => el.id.includes(query));

  const printElements = (data: dataTs[]) => {
    let value = '';
    for (let i = 0; i < data.length; i++) value += listElement(data[i]);
    return value;
  };
  const onSearch = (e: MouseEvent) => {
    e.preventDefault();
    const value = (e.target as HTMLInputElement).value;
    const listArea = document.getElementsByClassName('listArea')[0];
    dataInWork = getNewData(value);
    if (value === '') dataInWork = JSON.parse(JSON.stringify(data));
    listArea.innerHTML =
      dataInWork.length === 0
        ? 'Результатов нет'
        : printElements(dataInWork).toString();
  };
  const onSetAllPicked = (e: MouseEvent) => {
    e.preventDefault();
    const listArea = document.getElementsByClassName('listArea')[0];
    const activateAllBtn = document.getElementsByClassName('activateAll')[0];
    //get new data
    const uId = dataInWork.map((el: dataTs) => el.uId);
    data.map((el) => (el.isActive = isActivateAll ? false : true));
    dataInWork = data.filter((el) => uId.includes(el.uId));
    isActivateAll = !isActivateAll;
    const result = printElements(dataInWork);
    //update ui (checkboxes and btn)
    listArea.innerHTML = result.toString();
    activateAllBtn.innerHTML = !isActivateAll
      ? 'Активировать все'
      : 'Деактивировать все';
  };
  const onSetPickedElement = (e: MouseEvent) => {
    const id = (e.target as HTMLDivElement).dataset.id;
    if (!id) return;
    const currentEl = data.filter((el) => el.uId === id)[0];
    currentEl.isActive = !currentEl.isActive;
  };
  const list = `
  <div class="list">
    <h3>Направления обмена организации</h3>
    <div class="handleElements">
        <div>
            <i class="bi bi-search"></i>
            <input type="text" placeholder="Идентификатор направления" id="search" class="search"/>
        </div>
        ${Buttons({
          text: 'Активировать все',
          className: 'activateAll outline',
        })}
      
    </div>
    <div class="listArea">
        ${printElements(dataInWork)}
    </div>
  </div>`;
  element.innerHTML += list;

  const search = document.getElementById('search')!;
  const activateAll = document.getElementsByClassName('activateAll')[0];
  const listArea = document.getElementsByClassName('listArea')[0];

  search.addEventListener('input', (e) => onSearch(e as MouseEvent));
  activateAll.addEventListener('click', (e) => onSetAllPicked(e as MouseEvent));
  listArea.addEventListener('click', (e) =>
    onSetPickedElement(e as MouseEvent)
  );
};
