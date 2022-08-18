const lkForm = document.querySelector('.lkForm');
// Код для личного кабинета
if (lkForm) {
  const { ymaps } = window;

  ymaps.ready(async () => {
    const myMap = await new ymaps.Map('map', {
      center: [55.753994, 37.622093],
      zoom: 9,
      // Добавим панель маршрутизации.
      controls: ['routePanelControl'],
    });

    const control = await myMap.controls.get('routePanelControl');

    // Зададим состояние панели для построения машрутов.
    await control.routePanel.state.set({
    // Тип маршрутизации.
      type: 'pedestrian',
      // Выключим возможность задавать пункт отправления в поле ввода.
      fromEnabled: true,
      // Адрес или координаты пункта отправления.
      from: [25.753994, 37.622093],
      // Включим возможность задавать пункт назначения в поле ввода.
      toEnabled: true,
      // Адрес или координаты пункта назначения.
      to: [55.753994, 37.622093],
   });

    // Зададим опции панели для построения машрутов.
    control.routePanel.options.set({
    // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
      allowSwitch: false,
      // Включим определение адреса по координатам клика.
      // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
      reverseGeocoding: true,
      // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
      types: { masstransit: true, pedestrian: true, taxi: true },
    });

    // Создаем кнопку, с помощью которой пользователи смогут менять местами начальную и конечную точки маршрута.
    const switchPointsButton = new ymaps.control.Button({
      data: { content: 'Поменять местами', title: 'Поменять точки местами' },
      options: { selectOnClick: false, maxWidth: 160 },
    });
    // Объявляем обработчик для кнопки.
    switchPointsButton.events.add('click', () => {
    // Меняет местами начальную и конечную точки маршрута.
      control.routePanel.switchPoints();
    });
    myMap.controls.add(switchPointsButton);
  document.body.addEventListener('submit', async (event) => {
      event.preventDefault();
      const response = await fetch('/lk/coord/', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({
          coord: control.routePanel.state._data,
        }),
      });

      const data = await response.json();

      document.querySelector('.addedCoord').innerHTML = 'Координаты успешно добавлены';
    });

    console.log(control.routePanel.state._data);
    console.log(control.routePanel.state._data);
    console.log(control.routePanel.state._data);
  });
} else { 
  // Код для страниц 
const bikeroutesId = document.querySelector('.bikerouteId').id;

async function Coord() {
  const response = await fetch(`/bikeroutes/${bikeroutesId}/info`, {
    method: 'GET',
  });

  const data = await response.json();

  const { ymaps } = window;

  ymaps.ready(() => {
    const myMap = new ymaps.Map('map', {
      center: [55.753994, 37.622093],
      zoom: 9,
      // Добавим панель маршрутизации.
      controls: ['routePanelControl'],
    });

    const control = myMap.controls.get('routePanelControl');

    // Зададим состояние панели для построения машрутов.
    control.routePanel.state.set({
    // Тип маршрутизации.
      type: 'masstransit',
      // Выключим возможность задавать пункт отправления в поле ввода.
      fromEnabled: true,
      // Адрес или координаты пункта отправления.
      from: [data.destLat, data.destLng],
      // Включим возможность задавать пункт назначения в поле ввода.
      toEnabled: true,
      // Адрес или координаты пункта назначения.
      to: [data.origLat, data.origLng],  
  });

    // Зададим опции панели для построения машрутов.
    control.routePanel.options.set({
    // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
      allowSwitch: false,
      // Включим определение адреса по координатам клика.
      // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
      reverseGeocoding: true,
      // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
      types: { masstransit: true, pedestrian: true, taxi: true },
    });

    // Создаем кнопку, с помощью которой пользователи смогут менять местами начальную и конечную точки маршрута.
    const switchPointsButton = new ymaps.control.Button({
      data: { content: 'Поменять местами', title: 'Поменять точки местами' },
      options: { selectOnClick: false, maxWidth: 160 },
    });
    // Объявляем обработчик для кнопки.
    switchPointsButton.events.add('click', () => {
    // Меняет местами начальную и конечную точки маршрута.
      control.routePanel.switchPoints();
    });
    myMap.controls.add(switchPointsButton);
    });
}

Coord();
  
}  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
