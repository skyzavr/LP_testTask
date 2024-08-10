type props = {
  message: string;
  type: string;
  element: HTMLElement;
};
type icons = { [key: string]: string };
export const Toast = ({ message, type, element }: props) => {
  const icons: icons = {
    error: '<i class="bi bi-exclamation"></i>',
    success: '<i class="bi bi-check-lg"></i>',
  };
  element.innerHTML = `
    <div class="toastArea ${type}">
        <div class="message">
            <div class="icon">
                <div>${icons[type]}</div>
            </div>
            <div>${message}</div>
        </div>
        <span class="close" >
            <i class="bi bi-x-lg"></i>
        </span>
    </div>`;
  document.getElementsByClassName('close')[0].addEventListener('click', () => {
    element.innerHTML = '';
  });
};
