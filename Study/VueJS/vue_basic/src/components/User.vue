<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome Developer! I'm {{ name }}</p>
        <button @click="onChangeName">Change My Name</button>
        <hr />
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <UserDetail :name="name" @resetName="resetName" />
            </div>
            <div class="col-xs-12 col-sm-6">
                <UserEdit />
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
        };
    },
    methods: {
        onChangeName() {
            this.name = 'Hgtvd12';
        },
        resetName(userDetail) {
            this.name = userDetail;
        },
    },
};
</script>

<style scoped>
div {
    background-color: lightblue;
}
</style>
