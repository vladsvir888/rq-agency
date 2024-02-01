export default function createSlider(data) {
  if (!data.length) return;

  data.forEach((item) => {
    const slider = document.querySelector(item.selector);

    if (!slider) return;

    Object.assign(slider, item.options);

    slider.initialize();
  });
}
