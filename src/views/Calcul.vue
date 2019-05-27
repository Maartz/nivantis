<template>
    <div>
        <h1>Calcul</h1>
        <DiscountRate/>
        <Coeff/>
        <NetPrice/>
        <ActualPrice/>
        <Coeff/>
    </div>
</template>


<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ActualPrice from '@/components/ActualPrice.vue'; // @ is an alias to /src
    import NetPrice from '@/components/NetPrice.vue';
    import DiscountRate from '@/components/DiscountRate.vue';
    import Coeff from '@/components/Coeff.vue';

    @Component({
        components: {
            DiscountRate,
            Coeff,
            NetPrice,
            ActualPrice,
            ActualPrice,
            Coeff
        }
    })
    export default class Calcul extends Vue {}
</script>

<style scoped>

</style>
