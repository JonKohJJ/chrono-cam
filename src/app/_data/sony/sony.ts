import { CameraDataset } from "../types";
import { SONY_A1 } from "./A1";
import { SONY_A6xxx } from "./A6xxx";
import { SONY_A7 } from "./A7";
import { SONY_A7C } from "./A7C";
import { SONY_A7R } from "./A7R";
import { SONY_A7S } from "./A7S";
import { SONY_A9 } from "./A9";
import { SONY_FX } from "./FX";
import { SONY_ZV } from "./ZV";

export const SONY_CAMERAS: CameraDataset = {
    ...SONY_A7,
    ...SONY_A7R,
    ...SONY_A7S,
    ...SONY_A6xxx,
    ...SONY_A9,
    ...SONY_FX,
    ...SONY_ZV,
    ...SONY_A7C,
    ...SONY_A1,
}