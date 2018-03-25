const buttons = Object.freeze({
    yes: Symbol(`Yes`),
    yesNo: Symbol(`No`),
    yesNoCancel: Symbol(`YesNoCancel`),
    ok: Symbol(`OK`),
    okCancel: Symbol(`OkCancel`),
    cancel: Symbol(`Cancel`)
});

const style = Object.freeze({
    normal: Symbol(`Normal`),
    info: Symbol(`Info`),
    warning: Symbol(`Warning`),
    question: Symbol(`Question`),
    error: Symbol(`Error`)
});

const Dialog = Object.freeze({ buttons, style });

export { Dialog };
export { Dialog as default };
