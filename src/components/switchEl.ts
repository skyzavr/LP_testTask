type props = {
  isOn: boolean;
  name: string;
  text: string;
  element: HTMLElement | null;
  isRequired: boolean;
};
export const SwitchEl = ({ isOn, name, text, element, isRequired }: props) => {
  if (!element) return;
  const req = isRequired ? '<span> * </span>' : '';

  const input = `
  <input class="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckChecked" 
  name="${name}" ${isOn && 'checked'} />`;

  const label = `
  <label class="form-check-label" for="flexSwitchCheckChecked">
    ${text}${req}
  </label>`;

  const hint = `
  <div class="hint">
    <span class="d-inline-block"  data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Какой-то текст при наведении">
      <i class="bi bi-question"></i>
    </span>
  </div>`;

  const switchElement = `
  <div class="form-check form-switch switchCustom">
    ${input}
    <div> ${label}${hint}</div>
  </div>`;
  element.innerHTML += switchElement;
};
