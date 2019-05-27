import {shallowMount} from "@vue/test-utils";
import ActualPrice from '@/components/ActualPrice.vue';

describe('ActualPrice.vue', () => {
    const prixDeVenteNet = 10;
    it('should give the actual selling price back', async () =>{
        const wrapper = shallowMount(ActualPrice);
        const AP = await (wrapper.vm as any).getActualSellPrice(5, 2);
        expect(AP).toBe(prixDeVenteNet);
    });
});