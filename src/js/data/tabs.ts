export const tabsData = [
  {
    name: 'all',
    title: 'По всем',
    value: 'Письмо  будет содержать запрос отчетов по всем организациям',
    isActive: false,
  },
  {
    name: 'few',
    title: 'По нескольким',
    value: 'Письмо не будет содержать запрос отчетов по некоторым организациям',
    isActive: false,
  },
  {
    name: 'none',
    title: 'Не запрашивать',
    value: 'Письмо не будет содержать запрос отчетов по указанной организации',
    isActive: true,
  },
];
export type tabsDataTs = {
  name: string;
  title: string;
  value: string;
  isActive: boolean;
};
