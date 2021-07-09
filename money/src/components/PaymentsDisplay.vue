<template>
  <div>
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Category</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr class="item"
            v-for="(item, idx) in items"
            :key="idx">
                <td>{{ idx + 1 }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.value }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>
 
<script>
export default {
   name: 'PaymentsDisplay',
   props: {
    items: {
        type: Array,
        default: () => ({}),
    },
    },

 }
</script>
 
<style lang="scss" scoped module>
    table {
        background: linear-gradient(45deg, #49a09d, #5f2c82);
        border-collapse: collapse;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0,0,0,0.1);
        margin: 30px auto;
        font-size: 16px;
    }

    th,
    td {
        padding: 15px;
        background-color: rgba(255,255,255,0.2);
        color: #fff;
    }

    th {
        text-align: left;
    }

    thead {
        th {
            background-color: #55608f;
        }
    }

    tbody {
        tr {
            &:hover {
                background-color: rgba(255,255,255,0.3);
            }
        }
        td {
            position: relative;
            &:hover {
                &:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: -9999px;
                    bottom: -9999px;
                    background-color: rgba(255,255,255,0.2);
                    z-index: -1;
                }
            }
        }
    }
</style>