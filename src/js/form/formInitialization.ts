import { listArea } from '@components/listArea';
import { SwitchEl } from '@components/switchEl';
import { textInput } from '@components/textInput';
import { Click, TabWidget } from '@widgets/TabWidget';
import { fieldsInitialize } from '@data/personFieldData';
import { createBtn } from '@helpers/btnElement';
import { createDivElement } from '@helpers/divElement';

const createBtnArea = (form: HTMLFormElement) => {
  const wrapper = createDivElement({
    className: 'formBtnsArea',
    dataAttribute: '',
  });
  const sendDataBtn = createBtn('filled', 'Добавить');
  const cancelBtn = createBtn('none', 'Отменить добавление');
  wrapper.appendChild(sendDataBtn);
  wrapper.appendChild(cancelBtn);
  cancelBtn.addEventListener('click', (e) => e.preventDefault());
  form.appendChild(wrapper);
};
const createPersonInfoArea = (form: HTMLFormElement) => {
  const div = createDivElement({ className: 'nameGroup', dataAttribute: '' });
  const [email, jobTitle, ...nameFields] = fieldsInitialize(form, div);
  textInput(email);
  form.appendChild(div);
  nameFields.forEach((element) => textInput(element));
  textInput(jobTitle);
};
const createSwitchArea = (form: HTMLFormElement) => {
  SwitchEl({
    isOn: false,
    name: 'groupAccess',
    text: 'Групповой доступ для направлений',
    element: form,
    isRequired: true,
  });
};
const createTabsArea = (form: HTMLFormElement) => {
  TabWidget({ element: form });
};
const createCardListArea = (form: HTMLFormElement) => {
  listArea({ element: form });
};
const activateTabs = () => {
  const tabDiv = document.getElementById('tabArea');
  tabDiv!.addEventListener('click', (e) => Click(e));
};
export const formInitialize = (form: HTMLFormElement) => {
  // initialize all required fields
  createPersonInfoArea(form);
  createSwitchArea(form);
  createTabsArea(form);
  createCardListArea(form);
  createBtnArea(form);
  //
  activateTabs();
};
