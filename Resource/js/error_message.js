(function () {
    'use strict';

    angular
        .module('error_message', [])
        .controller('errorMessageController', myctrl)

    //myctrl.$inject = ['$scope'];

    function myctrl($scope) {
        var $ctrl = this;
        $ctrl.titlesapp = "Thông tin sinh viên";
        $ctrl.sv = {
            username: "teonv",
            password: "123",
            fullname: "Nguyễn Văn Tèo",
            email: "teonv@gmail.com",
            gender: true,
            birthday: '2004-03-24',
            schoolfee: 122222222,
            mark: 8
        }

    }
}());