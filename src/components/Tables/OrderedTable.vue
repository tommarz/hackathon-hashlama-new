<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="מספר סידורי">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="שם צוות">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="כמות המוצרים">{{ item.salary }}</md-table-cell>
        <md-table-cell md-label="יחידה">{{ item.country }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          id: 1,
          name: "ארטמיס",
          salary: "11",
          country: "מצפן",
          city: "Oud-Turnhout"
        },
        {
          id: 2,
          name: "עוצמה",
          salary: "9",
          country: "ממרם",
          city: "Sinaai-Waas"
        },
        {
          id: 3,
          name: "אורניום",
          salary: "7",
          country: "מעוף",
          city: "Overland Park"
        },
        {
          id: 4,
          name: "גסטרונום",
          salary: "6",
          country: "מיוחדים",
          city: "Gloucester"
        }
      ]
    };
  }
};
</script>
