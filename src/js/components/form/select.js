import SlimSelect from 'slim-select';

const formSelect = () => {
  new SlimSelect({
    select: '#selectForm',
    settings: {
      showSearch: false,
      placeholderText: 'Выберите книгу',
    },
  })
};
formSelect();
