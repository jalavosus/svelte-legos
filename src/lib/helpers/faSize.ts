import type { SizeProp } from "@fortawesome/fontawesome-svg-core";

const faSizeMap = {
	"1x": 1,
	"2x": 2,
	"3x": 3,
	"4x": 4,
	"5x": 5,
	"6x": 6,
	"7x": 7,
	"8x": 8,
	"9x": 9,
	"10x": 10,
	"2xs": 0.625,
	xs: 0.75,
	sm: 0.875,
	lg: 1.25,
	xl: 1.5,
	"2xl": 2
} as const;

export default function faSize(size: SizeProp): number {
	return faSizeMap[size];
}
