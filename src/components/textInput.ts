type props = {
  name: string;
  type: string;
  text: string;
  isRequired: boolean;
  isDisabled: boolean;
  placeholder: string;
  element: HTMLElement | null;
};
export const textInput = (props: props) => {
  const { name, type, text, isRequired, isDisabled, placeholder, element } =
    props;
  if (!element) return;
  const req = isRequired ? '<span>*</span>' : '';
  const isDis = isDisabled ? 'disabled' : '';
  const value = isDis ? placeholder : '';
  const input = `
   <div class="inputBlock ${isDis}"><label for="${name}">${text}${req}</label>
      <input type="${type}" id="${name}" name="${name}" placeholder="${placeholder}" value="${value}" ${isDis}/><br></div>`;
  element.innerHTML += input;
};
