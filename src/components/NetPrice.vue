<template>
	<vs-row vs-justify="center">
		<vs-col :key="index"
		        vs-type="flex"
		        vs-justify="center"
		        vs-align="center"
		        vs-w="6">
			<vs-card class="dr-card">
				<div slot="header">
					<h1>Net Price</h1>
					<br>
					<p>This is the net price: {{ netPrice }}</p>
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
									<vs-input label="Prix d'achat brut" v-model="rawPrice" type="number"
									          @change="calculateNetPrice"/>
								</vs-col>
								<vs-col vs-type="flex"
								        vs-justify="center" vs-align="center" vs-w="6">
									<vs-input label="Taux de remise" v-model="discountRate" type="number" step="0.1"
									          @change="calculateNetPrice"/>
								</vs-col>
								<vs-col vs-type="flex"
								        vs-justify="center" vs-align="center" vs-w="6">
									<vs-input label="Prix d'achat net" v-model="netPrice" type="number"
									          @change="calculateRawPrice"/>
								</vs-col>
							</vs-row>
						</form>
					</vs-row>
				</vs-col>
				<vs-button color="dark" type="flat" v-on:click="emptyFields">Effacer</vs-button>
			</vs-card>
		</vs-col>
	</vs-row>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class NetPrice extends Vue {
        @Prop({default: 0}) public rawPrice !: number; // PRIX D'ACHAT BRUT
        @Prop({default: 0}) public discountRate !: number; // TAUX DE REMISE
        @Prop({default: 0}) public netPrice !: number; // PRIX D'ACHAT NET


        public getRawPrice(netPrice: number, discountRate: number) {
            const rawPrice: number = netPrice / (1 - discountRate);
            return rawPrice;
        }

        public getDiscountRate(netPrice: number, rawPrice: number) {
            const discountRate: number = 1 - netPrice / rawPrice;
            return discountRate;
        }

        public getNetPrice(rawPrice: number, discountRate: number) {
            const netPrice: number = rawPrice * (1 - discountRate);
            return netPrice;
        }

        public calculateNetPrice() {
            this.netPrice = this.getNetPrice(this.rawPrice, this.discountRate);
        }

        public calculateRawPrice() {
            this.rawPrice = this.getRawPrice(this.netPrice, this.discountRate);
        }

        public emptyFields() {
            this.rawPrice = 0;
            this.netPrice = 0;
            this.discountRate = 0;
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
