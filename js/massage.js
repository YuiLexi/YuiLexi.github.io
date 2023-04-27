new Vue({
    data: function () {
        this.$notify({
            title: "嘿嘿，🖨️复制🖨️成功！",
            message: "小伙子，扒源记住要遵循GPL协议！",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "warning",
            duration: 3000
        });
    }
})