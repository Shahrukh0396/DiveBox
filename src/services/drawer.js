let drawer;
function drawerInitialize(d) {
  drawer = d;
}
function openDrawer() {
  drawer._root.open();
}
function closeDrawer() {
  drawer._root.close();
}
export {openDrawer, drawerInitialize, closeDrawer};
