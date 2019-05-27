<template>
    <div>
        <h1>Calcul</h1>
        <DiscountRate/>
        <Coeff/>
        <NetPrice/>
        <ActualPrice/>
    </div>
</template>


<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import DiscountRate from '@/components/DiscountRate.vue'; // @ is an alias to /src
    import Coeff from '@/components/Coeff.vue';
    import ActualPrice from '@/components/ActualPrice.vue';
    import NetPrice from '@/components/NetPrice.vue';

    @Component({
        components: {
            DiscountRate,
            Coeff,
            NetPrice,
            ActualPrice
        }
    })
    export default class Calcul extends Vue {}
</script>

<style scoped>

</style>
