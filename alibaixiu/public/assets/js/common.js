$('#logout').on('click', function() {
    //confirm()返回的是一个布尔值
    var isConfirm = confirm('您真的要退出吗？');
    if (isConfirm) {
        $.ajax({
            type: 'post',
            url: '/logout',
            success: function() {
                //退出成功，则跳转到登录界面
                location.href = 'login.html'
            },
            error: function() {
                alert('退出失败')
            }
        })
    }

})