function writeImpl() {
    document.write("<script>alert()</script>");
}
function writeIt() {
    writeImpl();
}

document["writeln"]("<script>alert()</script>");
