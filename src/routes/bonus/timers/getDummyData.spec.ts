import { describe, it, expect, vi } from 'vitest';
import getDummyData from './getDummyData';

describe('getDummyData', () => {
	it('calls global Math', () => {
		const spy = vi.spyOn(Math, 'random');
		getDummyData();

		expect(spy).toHaveBeenCalledOnce();
	});

	it('returns the floor of a value', () => {
		vi.spyOn(Math, 'random').mockReturnValue(0.5);

		const result = getDummyData();

		expect(result).toEqual(500);
	});
});
