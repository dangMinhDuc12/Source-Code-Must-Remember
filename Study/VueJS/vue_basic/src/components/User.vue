<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome Developer! I'm {{ name }} and {{ age }} years old</p>
        <button @click="onChangeName">Change My Name</button>
        <hr />
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <UserDetail
                    :name="name"
                    :age="age"
                    @resetName="resetName"
                    :resetNameCallBack="resetNameCallBack"
                />
            </div>
            <div class="col-xs-12 col-sm-6">
                <UserEdit :age="age" :editAge="editAge" />
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';

export default {
    components: {
        UserDetail,
        UserEdit,
    },
    data() {
        return {
            name: 'Đặng Minh Đức',
            age: 18,
        };
    },
    methods: {
        onChangeName() {
            this.name = 'Hgtvd12';
        },
        resetName(userDetail) {
            this.name = userDetail;
        },
        resetNameCallBack(userDetail) {
            this.name = userDetail;
        },
        editAge(age) {
            this.age = age;
        },
    },
};
</script>

<style scoped>
div {
    background-color: lightblue;
}
</style>
