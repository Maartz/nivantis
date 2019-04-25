<template>
    <vs-row vs-justify="center">
        <vs-col :key="index"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6">
            <vs-card class="dr-card">
                <div slot="header">
                    <h1>Discount Rate</h1>
                    <br>
                    <p>This is the discount rate: {{ discount }}</p>
                </div>
                <vs-col vs-type="flex"
                        vs-justify="center"
                        vs-align="center"
                        vs-w="12">
                    <vs-row>
                        <form class="centerx labelx">
                            <vs-row>
                                <vs-col vs-type="flex"
                                        vs-justify="center" vs-align="center" vs-w="6">
                                    <vs-input label="Prix d'achat net" v-model="netPrice"/>
                                </vs-col>
                                <vs-col vs-type="flex"
                                        vs-justify="center" vs-align="center" vs-w="6">
                                    <vs-input label="Taux de remise" v-model="discountRate"/>
                                </vs-col>
                                <vs-col vs-type="flex"
                                        vs-justify="center" vs-align="center" vs-w="6">
                                    <vs-input label="Prix de vente net" v-model="sellPrice"/>
                                </vs-col>
                                <vs-col vs-type="flex"
                                        vs-justify="center" vs-align="center" vs-w="6">
                                    <vs-input label="Coefficient multiplicateur" v-model="coeff"/>
                                </vs-col>
                            </vs-row>
                        </form>
                    </vs-row>
                </vs-col>
                <vs-button :color="colorx" :gradient-color-secondary="colorx2"
                           type="gradient"
                           v-on:click="getDiscountRate">Calculer
                </vs-button>
                <vs-button color="dark" type="flat" v-on:click="emptyFields">Effacer</vs-button>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class DiscountRate extends Vue {
        public index: number = 0;

        public coeff: number = 0;
        public netPrice: number = 0;
        public discountRate: number = 0;
        public sellPrice: number = 0;
        public rawPrice: number = 0;
        public discount: number = 0;

        // CSS purpose

        public colorx: string = '#3dd495';
        public colorx2: string = '#5252e8';

        public getDiscountRate(netPrice: number, rawPrice: number) {
            const ds: number =  ( 1 - netPrice / rawPrice ) * 100;
            // console.log({ds});
        }

        public emptyFields() {
            this.coeff = 0;
            this.netPrice = 0;
            this.discountRate = 0;
            this.sellPrice = 0;
        }

    }
</script>

<style scoped lang="scss">

    .dr-card {
        padding: 0 0 1.5em 0;
    }

    form {
        padding-bottom: 30px;
    }

    .vs-button {
        margin-right: 15px;
    }
</style>
