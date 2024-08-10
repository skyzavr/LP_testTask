export const createBtn = (className: string, placeholder: string) => {
  const btn = document.createElement('input');
  btn.type = 'submit';
  btn.value = placeholder;
  btn.className = `customBtn ${className}`;
  return btn;
};
