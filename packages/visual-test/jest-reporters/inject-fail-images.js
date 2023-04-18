document.addEventListener('DOMContentLoaded', () => {
  [...document.querySelectorAll('.failureMsg')].forEach((fail, i) => {
    const imagePath = `__diff_output__/${
      (fail.textContent.split('__diff_output__/')[1] || '').split('png')[0]
    }png`;

    if (imagePath) {
      const div = document.createElement('div');
      div.style = 'margin-top: 16px';

      const a = document.createElement('a');
      a.href = `${imagePath}`;
      a.target = '_blank';

      const img = document.createElement('img');
      img.src = `${imagePath}`;
      img.style = 'width: 100%';

      a.appendChild(img);
      div.appendChild(a);
      fail.appendChild(div);
    }
  });
});
