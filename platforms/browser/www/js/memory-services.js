'use strict';

(function () {

    var employees = [
            {"id": 1, "businessName": "Woolworths",  "expectedAmount": "SUPER HUGE DONATION", "address": "123 plaza",  "officePhone": "781-000-0001", "email": "jking@fakemail.com",  "pic": "cheese.jpg" },
            {"id": 2,  "businessName": "Woolworths",   "expectedAmount": "SUPER HUGE DONATION", "address": "123 plaza",  "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com",  "pic": "eggs.jpg" },
            {"id": 3,  "businessName": "Woolworths",  "expectedAmount": "SUPER HUGE DONATION", "address": "123 plaza",   "officePhone": "781-000-0003", "email": "elee@fakemail.com",  "pic": "potato-chips.jpg"  },
            {"id": 4,  "businessName": "Woolworths",   "expectedAmount": "SUPER HUGE DONATION", "address": "123 plaza",   "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com",  "pic": "rice.jpg" },
            {"id": 5,  "businessName": "Woolworths",   "expectedAmount": "SUPER HUGE DONATION", "address": "123 plaza",   "officePhone": "781-000-0005", "email": "rmoore@fakemail.com",  "pic": "strawberries.png"}

        ],

        findById = function (id) {
            var employee = null,
                l = employees.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (employees[i].id === id) {
                    employee = employees[i];
                    break;
                }
            }
            return employee;
        },

        findByManager = function (managerId) {
            var results = employees.filter(function (element) {
                return managerId === element.managerId;
            });
            return results;
        };


    angular.module('myApp.memoryServices', [])
        .factory('Employee', [
            function () {
                return {
                    query: function () {
                        return employees;
                    },
                    get: function (employee) {
                        return findById(parseInt(employee.employeeId));
                    }
                }

            }])
        .factory('Report', [
            function () {
                return {
                    query: function (employee) {
                        return findByManager(parseInt(employee.employeeId));
                    }
                }

            }]);

}());