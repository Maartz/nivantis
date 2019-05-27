<template>
    <vs-row vs-justify="center">
        <vs-col :key="index"
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6">
            <vs-card class="dr-card">
                <div slot="header">
                    <h1>Coefficient</h1>
                    <br>
                    <p>Coefficient : {{ this.coeff }}</p>
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
                                    <vs-input label="Prix d'achat net" v-model.number="netBuyPrice"/>
                                </vs-col>
                                <vs-col vs-type="flex"
                                        vs-justify="center" vs-align="center" vs-w="6">
                                    <vs-input label="Prix de vente net" v-model.number="netSellPrice"/>
                                </vs-col>
                            </vs-row>
                        </form>
                    </vs-row>
                </vs-col>
                <vs-button :color="colorx" :gradient-color-secondary="colorx2"
                           type="gradient"
                           v-on:click="getCoeff(netSellPrice, netBuyPrice)">Calculer
                </vs-button>
                <vs-button color="dark" type="flat" v-on:click="emptyFields">Effacer</vs-button>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Coeff extends Vue {
        public index: number = 0;

        public netSellPrice: number = 0;
        public netBuyPrice: number = 0;
        public coeff: number = 0;

        // CSS purpose
        public colorx: string = '#3dd495';
        public colorx2: string = '#5252e8';

        public getCoeff(netSellPrice: number, netBuyPrice: number) {
            const coeff: number =  netSellPrice / netBuyPrice;
            return this.coeff = coeff;
        }

        public emptyFields() {
            this.netSellPrice = 0;
            this.netBuyPrice = 0;
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

