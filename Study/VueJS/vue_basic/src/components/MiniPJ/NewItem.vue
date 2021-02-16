<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                <label for="">U can saying</label>
                <textarea class="form-group" v-model="item"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                <div class="btn btn-success" @click.prevent="create">Add</div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item: '',
        };
    },
    props: {
        createNew: Function,
    },
    methods: {
        create() {
            this.createNew(this.item);
            this.item = '';
        },
    },
};
</script>

<style></style>
