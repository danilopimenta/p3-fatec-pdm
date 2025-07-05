const xssSanitizer = (v) => {
    return String(v).replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
}

const validInput = (text) => {
    const parts = text.split(',').map(s => s.trim());
    return parts.length === 2 && parts.every(p => !isNaN(Number(p)));
};

export { xssSanitizer, validInput }
