export function checkDependencies() {
    let vitestMissing = false;
    let vueTestUtilsMissing = false;

    try {
        require.resolve('vitest');
    } catch (e) {
        vitestMissing = true;
    }

    try {
        require.resolve('@vue/test-utils');
    } catch (e) {
        vueTestUtilsMissing = true;
    }

    if (vitestMissing && vueTestUtilsMissing) {
        console.error("Both vitest and @vue/test-utils are missing. Run: npm install -D vitest @vue/test-utils");
    } else if (vitestMissing) {
        console.error("vitest is missing. Run: npm install -D vitest");
    } else if (vueTestUtilsMissing) {
        console.error("@vue/test-utils is missing. Run: npm install -D @vue/test-utils");
    }
}