export default function decorate(block) {
  console.log(block);
  Array.from(block.children).forEach((row, index) => {
    row.classList.add(`row-${index + 1}`);
    Array.from(row.children).forEach((col, colindex) => {
      col.classList.add(`row-${index + 1}col-${colindex + 1}`);
    });
  });
}
