import { Toast } from '@components/toast';
import { formInitialize } from './formInitialization';

type handleResultProps = { isError: boolean; data: string };
const form = document.getElementById('addNewUser') as HTMLFormElement;
//1. first we initialize the form with all fields and areas
formInitialize(form);
//2. Collect all data to send them further
const getPickedTab = () => {
  const tabs = document.getElementsByClassName('tabArea')[0].children;
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].className === 'active')
      return (tabs[i] as HTMLElement).dataset.name;
  }
};
const collectData = () => {
  //ideally, all data's stored in a global store
  const formList = form.elements;
  const tab = getPickedTab();
  return {
    email: formList['email'].value,
    jobTitle: formList['jobTitle'].value,
    secondName: formList['secondName'].value,
    middleName: formList['middleName'].value,
    firstName: formList['firstName'].value,
    groupAccess: formList['groupAccess'].checked,
    tab,
  };
};
//3. Checkin all requires data and send them further
const checkEmailAddress = (data: string) => {
  const email = data?.trim().toLowerCase();
  if (!email)
    return { isError: true, data: 'Поле email не должно быть пустым' };
  if (!/^\S+@\S+\.\S+$/.test(email))
    return { isError: true, data: 'Введите корректный email' };
  return { isError: false, data: email };
};
const getSuccess = (wrapper: HTMLElement) => {
  collectData();
  const message =
    'Пользователь добавлен в организацию и получил письмо, в котором может принять приглашение';
  Toast({ message, type: 'success', element: wrapper });
};
const getFailure = (message: string, wrapper: HTMLElement) => {
  return Toast({ message, type: 'error', element: wrapper });
};
const handleResult = (result: handleResultProps) => {
  const wrapper = document.getElementById('messageArea')!;
  const { isError, data } = result;
  isError ? getFailure(data, wrapper) : getSuccess(wrapper);
};

const onSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const email = form.elements.email.value;
  // here we check the data only for email, because the name (first and second), as well as the position are taken from some data and stay unchanged. Middle name is not required.
  const checkResult = checkEmailAddress(email);
  handleResult(checkResult);
};
form.addEventListener('submit', onSubmit);
