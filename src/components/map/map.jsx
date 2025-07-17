// components/Map.js
import { useEffect } from "react";

export default function Map() {
  useEffect(() => {
    const ymapsScript = document.createElement("script");
    ymapsScript.src = "https://api-maps.yandex.ru/2.1/?apikey=ВАШ_API_КЛЮЧ&lang=ru_RU";
    ymapsScript.type = "text/javascript";
    ymapsScript.onload = () => {
      window.ymaps.ready(() => {
        const myMap = new window.ymaps.Map("map", {
          center: [43.321148739860554, 45.682593093917845],
          zoom: 19,
        });

        const placemark = new window.ymaps.Placemark(
          [43.32093467610699, 45.68228419577026],
          {},
          {
            iconLayout: "default#image",
            iconImageHref: "/img/Subtract.svg",
            iconImageSize: [52, 82],
            iconImageOffset: [-3, -42],
          }
        );

        myMap.geoObjects.add(placemark);
      });
    };
    document.body.appendChild(ymapsScript);
  }, []);

  return <div id="map" style={{ width: "100%", height: "750px", borderRadius: "16px" }}></div>;
}

