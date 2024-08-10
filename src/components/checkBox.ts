type props = {
  uId: string;
  isActive: boolean;
};
export const CheckBox = ({ uId, isActive }: props) => {
  const isAct = isActive && 'checked';
  return `
  <div>
      <input type="checkbox" class="chkBox" data-id="${uId}" id="${uId}" ${isAct}/>
      <label for="${uId}"></label>
  </div>`;
};
