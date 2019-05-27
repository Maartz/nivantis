<template>
    <div>
        <DMOCalcul/>
    </div>
</template>


<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import DMOCalcul from '@/components/DMO/DMOCalcul.vue';

    @Component({
        components: {
            DMOCalcul,
        },
    })
    export default class Calcul extends Vue {}
</script>

<style scoped>

</style>
