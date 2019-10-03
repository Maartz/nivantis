<template>
    <div>
        <h1>Calcul</h1>
        <DiscountRate/>
        <NetPrice/>
        <ActualPrice/>
        <Coeff/>
    </div>
</template>


<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ActualPrice from '@/components/DMO/ActualPrice.vue'; // @ is an alias to /src
    import NetPrice from '@/components/DMO/NetPrice.vue';
    import DiscountRate from '@/components/DMO/DiscountRate.vue';
    import Coeff from '@/components/DMO/Coeff.vue';

    @Component({
        components: {
            DiscountRate,
            Coeff,
            NetPrice,
            ActualPrice,
        },
    })
    export default class Calcul extends Vue {}
</script>

<style scoped>

</style>
