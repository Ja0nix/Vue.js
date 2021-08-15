<!-- Vue component -->
<template>
    <div>
        <Chart 
            :def="def"
            :data="getChartData"
        ></Chart>
    </div>
</template>

<script>
// ссылка на гитхаб проекта: https://github.com/kumric/vue-chartless
import Chart from 'vue-chartless'

export default {
    components: {
      Chart
    },
    data: () => ({
        def : {
            type : 'pie'
        },

    }),
    props: {
        items: {
            type: Array,
            default: () => ([]),
        },
    },
    computed: {
        getChartData() {

            let dataForPie = [];

            for(let el of this.items){
                    let find = dataForPie.find(item => item.label === el.category);
                    if(find){
                        find.value = find.value + el.value;
                    } else {
                        let item = {
                            label: el.category,
                            value: el.value
                        };
                        dataForPie.push(item);
                    }
            
            }
            return dataForPie;
        }
    },
}
</script>