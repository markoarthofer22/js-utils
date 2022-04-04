export function qs(selector: keyof HTMLElementTagNameMap, parent = document) {
    return parent.querySelector(selector);
}

export function qsa(selector: keyof HTMLElementTagNameMap, parent = document) {
    return [...Array(parent.querySelectorAll(selector))];
}
