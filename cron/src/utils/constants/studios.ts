enum Studios {
    GINZA = 1,
    OMOTESANDO,
    EBISU,
    SHINJUKU,
    IKEBUKURO,
    UMEDA,
    NAGOYA,
}

export const StudiosIDs: string[] = Object.keys(Studios).filter(
    (studioId) => !isNaN(Number(studioId))
);

export default Studios;
