import { shallowMount } from '@vue/test-utils';
import Coeff from '@/components/DMO/Coeff.vue';

describe('Coeff.vue', () => {
    it('should gives a coefficient back', async () => {
        const expectedCoeff: any = 20;
        const wrapper = shallowMount(Coeff);
        const inputCoeff =  await (wrapper.vm as any).getCoeff(200, 10);
        expect(inputCoeff).toBe(expectedCoeff);
    });
});
