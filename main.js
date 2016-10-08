const range = Object.freeze([...Array(2000).keys()]);

const elements = range.map(i =>
  `<div class="block" style="animation-delay: -${i * 20}ms"></div>`
);

document.writeln(`
  <div class="container">
    ${elements.join('\n')}
  </div>
`);
