/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/components/modal/Modal.tsx",
    "./src/components/table/Table.tsx",
    "./src/layout/Header.tsx",
    "./src/components/table/TableTitle.tsx",
    "./src/components/table/TableHeader.tsx",
    "./src/components/table/TableHeaderCell.tsx",
    "./src/components/table/TableRow.tsx",
    "./src/components/table/TableCell.tsx",
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
