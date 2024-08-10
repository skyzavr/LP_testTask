type params = { className: string; dataAttribute: string; content?: string };

export const createDivElement = (params: params) => {
  const { className, dataAttribute, content } = params;
  const div = document.createElement('div');
  if (className) div.className = className;
  if (content) div.innerHTML = content;
  if (dataAttribute) div.dataset.name = dataAttribute;
  return div;
};
