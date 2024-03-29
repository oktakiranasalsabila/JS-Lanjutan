//tagged template -> bentuk yang lebih kompleks dari template literals memungkinkan kita untuk membaca template literals melalui sebuah function

///tagged templates

const nama = 'salsabila';
const umur = 22;

function tag(strings, ...values) {
    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i]|| ''}`;
    // });
    // return result;
    return strings.reduce((result, str, i) => `${result}${str}<span class ="hl">${values[i] || ''}</span>`, '');
}
const str = tag`hallo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// console.log(str);
document.body.innerHTML = str;

///tagged template
//1. Escaping HTML Tags
//2. Translation & Internationalization
//3. Styled Components
