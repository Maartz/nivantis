import { shallowMount } from '@vue/test-utils';
import DiscountRate from '@/components/DiscountRate.vue';

describe('DiscountRate.vue', () => {
    const discount = 50;
    it('should give a discount rate back', async () => {
        const wrapper = shallowMount(DiscountRate);
        const DR = await (wrapper.vm as any).getDiscountRate(6.5, 13);
        expect(DR).toBe(discount);
    });
});
