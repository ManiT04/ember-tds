let datas = [
  {
    name: 'Web Development',
    price: 300,
    active: true,
  },
  {
    name: 'Design',
    price: 400,
    active: false,
  },
  {
    name: 'Integration',
    price: 250,
    active: false,
  },
  {
    name: 'Formation',
    price: 220,
    active: false,
  },
];
let promos = {
  B22: 0.05,
  AZ: 0.01,
  UBOAT: 0.02,
};
/*Pour un objet ces deux écritures sont possibles :
* promos.B22;
* promos['B22'];
* promos[codePromo];
* mais promos.codePromo impossible; !!! */
export { datas, promos };
