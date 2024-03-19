function Height(height) {
    for (var i = 1; i <= height; i++) {
        for (var j = 1; j <= height - i; j++) {
            process.stdout.write("   ");
        }
        for (var k = 1; k <= 2 * i - 1; k++) {
            process.stdout.write(" * ");
        }
        console.log();
    }
}
Height(50);
