<template>
  <div>
    <v-container grid-list-xs>
      <!-- <div class="row">
        <div class="col-12">
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.nome }}</td>
              <td class="text-xs-right">{{ props.nome }}</td>
              <td class="text-xs-right">{{ props.nome }}</td>
              <td class="text-xs-right">{{ props.nome }}</td>
              <td class="text-xs-right">{{ props.nome }}</td>
            </template>
          </v-data-table>
        </div>
      </div> -->
      <div class="row">
        <div class="col-3">
          <v-card>
            <v-card-media src="src" height="200px"> </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Cliente</h3>
                <div>description</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="primary">text</v-btn>
              <v-btn flat color="primary">text</v-btn>
            </v-card-actions>
          </v-card>
        </div>

        <div class="col-3">
          <v-layout row wrap>
            <v-flex xs12>
              <v-card color="primary" class="red--text">
                <v-container fluid grid-list-lg>
                  <v-layout row>
                    <v-flex xs7>
                      <div>
                        <div class="headline">headline</div>
                        <div>description</div>
                      </div>
                    </v-flex>
                    <v-flex xs5>
                      <v-card-media
                        src="description"
                        height="125px"
                        contain
                      ></v-card-media>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div>
            <v-data-table
              :headers="headers"
              :items="desserts"
              item-key="name"
              class="elevation-1"
              :search="search"
            >
              <template v-slot:top>
                <v-text-field
                  v-model="search"
                  label="Pesquise"
                  class="mx-4"
                ></v-text-field>
              </template>
            </v-data-table>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      calories: "",
      desserts: [
        {
          name: "KitKat",
          calories: 518,
        },
      ],
      items: [
        {
          name: "KitKat",
          calories: 518,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: true,
          value: "name",
        },
        {
          text: "Calories",
          value: "calories",
        },
      ];
    },
  },
  methods: {},
};
</script>
