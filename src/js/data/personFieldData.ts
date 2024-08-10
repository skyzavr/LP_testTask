export const fieldsInitialize = (form: HTMLElement, div: HTMLElement) => {
  return [
    {
      name: 'email',
      text: 'Эл. почта',
      type: 'text',
      isRequired: true,
      isDisabled: false,
      placeholder: 'введите свой email',
      element: form,
    },
    {
      name: 'jobTitle',
      text: 'Роль',
      type: 'text',
      isRequired: true,
      isDisabled: true,
      placeholder: 'Менеджер организации',
      element: form,
    },
    {
      name: 'secondName',
      text: 'Фамилия',
      type: 'text',
      isRequired: true,
      isDisabled: true,
      placeholder: 'Константинов',
      element: div,
    },
    {
      name: 'firstName',
      text: 'Имя',
      type: 'text',
      isRequired: true,
      isDisabled: true,
      placeholder: 'Константин',
      element: div,
    },
    {
      name: 'middleName',
      text: 'Отчество',
      type: 'text',
      isRequired: false,
      isDisabled: false,
      placeholder: 'Иванович',
      element: div,
    },
  ];
};
