<template>
    <el-container>
        <el-main>
            <AddUser></AddUser>
            <Users></Users>
        </el-main>
    </el-container>
</template>

<script>
import AddUser from './AddUser';
import Users from './Users';

export default {
    name: 'Home',
    components: {
        AddUser,
        Users,
    },
};
</script>
