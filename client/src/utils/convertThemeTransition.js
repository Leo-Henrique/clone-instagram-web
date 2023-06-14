export default function convertThemeTransition(transition) {
    const duration = transition.duration / 1000;
    const ease = transition.timingFunction.replace(/(?:-)([a-z])/g, (match, p1) =>
        p1.toUpperCase()
    );

    return { duration, ease };
}
