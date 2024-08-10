import { dataTs } from '@data/companies';
import { getCorrectDateString as correctDate } from '@helpers/workWithData';
import { CheckBox } from './checkBox';

export const listElement = (data: dataTs) => {
  const { name, id, code, inn, startData, endData, isActive, uId } = data;
  const handleElement = `
  <div class="listName">
        <div>${CheckBox({ uId, isActive })}
        </div>
        <div class="data"> 
            <div>${name}</div>
            <div>${id}</div>
        </div>
  </div>`;

  const list = `
  <ul class="listAreaList">
        <li>
            <div>Код НО</div>
            <div>${code}</div>
        </li>
        <li>
            <div>ИНН</div>
            <div>${inn}</div>
        </li>
        <li>
            <div>Действует</div>
            <div>${correctDate(startData)}-${correctDate(endData)}
            </div>
        </li>
    </ul>`;
  return `
  <div >
        ${handleElement}${list}
  </div>`;
};
