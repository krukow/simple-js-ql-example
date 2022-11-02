function writeImpl() {
    document.write("<script>alert()</script>");
}
function writeIt() {
    writeImpl();
}

document["write"]("<script>alert()</script>");