type btnProps = {
  text: string;
  className: string;
};
export const Buttons = ({ text, className }: btnProps) => {
  return ` <button class="customBtn ${className}">${text}</button>`;
};
