initMap ()

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                   center: [60.60899088785995,56.844341245492544],

                // Уровень масштабирования
                zoom: 17
            }
        }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
}