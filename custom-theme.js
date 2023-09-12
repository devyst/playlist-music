/*===== THEME SHOW =====*/
const navCustom = document.getElementById('nav-custom'),
    navTheme = document.getElementById('custom-theme')
    navThemeClose = document.getElementById('close-theme')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navTheme){
    navTheme.addEventListener('click', () =>{
        navCustom.classList.add('settings-menu-height')
    })
}
if(navThemeClose){
    navThemeClose.addEventListener('click', () =>{
        navCustom.classList.remove('settings-menu-height')
    })
}
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span')
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
})

}
colorPalette.forEach(color => {
color.addEventListener('click', () => {
    let primary;
    changeActiveColorClass();
    if(color.classList.contains('color-1')){
        primaryHue = 250;
    } else if(color.classList.contains('color-2')){
        primaryHue = 282;
    } else if(color.classList.contains('color-3')){
        primaryHue = 340;
    } else if(color.classList.contains('color-4')){
        primaryHue = 142;
    } else if(color.classList.contains('color-5')){
        primaryHue = 202;
    }
    color.classList.add('active');
    root.style.setProperty('--hue', primaryHue);
    })
})