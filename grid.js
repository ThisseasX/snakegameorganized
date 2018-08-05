function Grid(bundle) {
    let gs = bundle.gs;
    let tc = bundle.tc;

    return Object.create({gs, tc})
}