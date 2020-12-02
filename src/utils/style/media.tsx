const breakpoints = {
    xs: `576px`, // small
    mb: `767px`, // mobile
    // tb: `768px`, // table
    sm: `992px`, // large
    pc: `1200px` // desktop
};

export const device = {
    xs: `(max-width: ${breakpoints.xs})`,
    mb: `(max-width: ${breakpoints.mb})`,
    sm: `(max-width: ${breakpoints.sm})`,
    pc: `(max-width: ${breakpoints.pc})`
};
