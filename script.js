function menudisplay() {
    let dis = window.document.getElementById('links');
    if (dis.style.display === 'none' || dis.style.display === '') {
        dis.style.display = 'block';
    } else{
        dis.style.display = 'none';
    }
}
