<template>
    <!-- <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <User />
            </div>
        </div>
    </div> -->
    <!-- <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <button class="btn btn-danger" @click="selectComponent = 'Car'">
                        Car
                    </button>
                    <button class="btn btn-danger" @click="selectComponent = 'About'">
                        About
                    </button>
                    <button class="btn btn-danger" @click="selectComponent = 'Contac2'">
                        Contac2
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div>
                        <p>{{ selectComponent }}</p>
                    </div>
                    <Car cardWords="Cat">
                        <template v-slot:title>
                            <h2>{{ cardTitle }}</h2>
                        </template>

                        <template v-slot:content>
                            <p>White Cat is so noobs</p>
                        </template>
                        <template #subTitles>
                            <p>Sub</p>
                        </template>
                    </Car>
                    <keep-alive>
                        <component v-bind:is="selectComponent"></component>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div> -->
    <!-- <div class="container">
        <NewItem :createNew="createNew" />
        <ItemsLayout :items="items" :removeItem="removeItem" />
    </div> -->
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <h1>Filter & Mixins</h1>
                <p>{{ text | toLowerCase }}</p>
                <List />
            </div>
        </div>
    </div>
</template>

<script>
// // import User from './components/User';
// import Car from './components/Car.vue';
// import Contac2 from './components/Contac2.vue';
// import About from './components/About.vue';
// import ItemsLayout from './components/MiniPJ/ItemsLayout.vue';
// import NewItem from './components/MiniPJ/NewItem.vue';
import List from './components/List.vue';

export default {
    name: 'App',
    components: {
        // User,
        // Car,
        // Contac2,
        // About,
        // ItemsLayout,
        // NewItem,
        List,
    },
    // data() {
    //     return {
    //         cardTitle: 'Yellow Cat',
    //         selectComponent: 'Car',
    //     };
    // },

    // data() {
    //     return {
    //         items: ['I Love You', 'You Can Say Hello With Me'],
    //         maxItems: 10,
    //     };
    // },
    // methods: {
    //     createNew(item) {
    //         this.items.push(item);
    //     },
    //     removeItem(index) {
    //         this.items.splice(index, 1);
    //     },
    // },

    data() {
        return {
            text: 'Xin chào mọi người, VueJS',
        };
    },
    filters: {
        toLowerCase(text) {
            return text.toLowerCase();
        },
    },
};
</script>

<style>
/* div.component {
    border: 1px solid black;
    padding: 30px;
} */
</style>
