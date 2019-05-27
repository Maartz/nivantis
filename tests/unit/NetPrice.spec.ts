import {shallowMount} from '@vue/test-utils';
import NetPrice from '@/components/NetPrice.vue';

describe('NetPrice.vue', () => {
    it('Component should calculate prices', async () => {
        const wrapper = shallowMount(NetPrice, {});

        const component = await (wrapper.vm as any);

        expect(component.getNetPrice(100, 0.5)).toEqual(50);
        expect(component.getRawPrice(50, 0.5)).toEqual(100);
        expect(component.getDiscountRate(50, 100)).toEqual(0.5);
    });
});
