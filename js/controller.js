var myApp = angular.module('myApp', []);


myApp.controller('textoBloque', function($scope) {
  $scope.text = [
    {
      texto01: "- Lorem Ipsum has been the industry's standard01",

    },
    {
      texto01: "- Lorem Ipsum has been the industry's standard02",

    },
    {
      texto01: "- Lorem Ipsum has been the industry's standard03",

    },
    {
      texto01: "- Lorem Ipsum has been the industry's standard04",

    }

  ];
});

myApp.controller('textotabla', function($scope) {
  $scope.textable = [
    {
      texto01: "xxxxLorem Ipsumxxxxx",
      texto02: "xxxxLorem Ipsumxxxxx",
      texto03: "xxxxLorem Ipsumxxxxx",
      texto04: "xxxxLorem Ipsumxxxxx",
      texto05: "xxxxLorem Ipsumxxxxx",
      monto: "$ 2.000.000",
    },
    {
      texto01: "xxxxLorem Ipsumxxxxx",
      texto02: "xxxxLorem Ipsumxxxxx",
      texto03: "xxxxLorem Ipsumxxxxx",
      texto04: "xxxxLorem Ipsumxxxxx",
      texto05: "xxxxLorem Ipsumxxxxx",
      monto: "$ 1.000.000",
    },
    {
      texto01: "xxxxLorem Ipsumxxxxx",
      texto02: "xxxxLorem Ipsumxxxxx",
      texto03: "xxxxLorem Ipsumxxxxx",
      texto04: "xxxxLorem Ipsumxxxxx",
      texto05: "xxxxLorem Ipsumxxxxx",
      monto: "$ 900.000",
    },
    {
      texto01: "xxxxLorem Ipsumxxxxx",
      texto02: "xxxxLorem Ipsumxxxxx",
      texto03: "xxxxLorem Ipsumxxxxx",
      texto04: "xxxxLorem Ipsumxxxxx",
      texto05: "xxxxLorem Ipsumxxxxx",
      monto: "$ 3.000.000",
    },
    {
      texto01: "xxxxLorem Ipsumxxxxx",
      texto02: "xxxxLorem Ipsumxxxxx",
      texto03: "xxxxLorem Ipsumxxxxx",
      texto04: "xxxxLorem Ipsumxxxxx",
      texto05: "xxxxLorem Ipsumxxxxx",
      monto: "$ 400.000",
    },
    {
      texto01: "xxxxLorem Ipsumxxxxx",
      texto02: "xxxxLorem Ipsumxxxxx",
      texto03: "xxxxLorem Ipsumxxxxx",
      texto04: "xxxxLorem Ipsumxxxxx",
      texto05: "xxxxLorem Ipsumxxxxx",
      monto: "$ 2.000.000",
    },
    {
      texto01: "xxxxLorem Ipsumxxxxx",
      texto02: "xxxxLorem Ipsumxxxxx",
      texto03: "xxxxLorem Ipsumxxxxx",
      texto04: "xxxxLorem Ipsumxxxxx",
      texto05: "xxxxLorem Ipsumxxxxx",
      monto: "$ 1.000.000",
    },
    {
      texto01: "xxxxLorem Ipsumxxxxx",
      texto02: "xxxxLorem Ipsumxxxxx",
      texto03: "xxxxLorem Ipsumxxxxx",
      texto04: "xxxxLorem Ipsumxxxxx",
      texto05: "xxxxLorem Ipsumxxxxx",
      monto: "$ 900.000",
    },
    {
      texto01: "xxxxLorem Ipsumxxxxx",
      texto02: "xxxxLorem Ipsumxxxxx",
      texto03: "xxxxLorem Ipsumxxxxx",
      texto04: "xxxxLorem Ipsumxxxxx",
      texto05: "xxxxLorem Ipsumxxxxx",
      monto: "$ 3.000.000",
    },
    {
      texto01: "xxxxLorem Ipsumxxxxx",
      texto02: "xxxxLorem Ipsumxxxxx",
      texto03: "xxxxLorem Ipsumxxxxx",
      texto04: "xxxxLorem Ipsumxxxxx",
      texto05: "xxxxLorem Ipsumxxxxx",
      monto: "$ 400.000",
    },

  ];
});


myApp.controller('sCartCtrl', function($scope) {

            $scope.ngShowhide = false;
            $scope.ngShowhideFun = function(flag) {
                if (flag) {
                    $scope.ngShowhide = false;
                } else {
                    $scope.ngShowhide = true;
                }
            };
        });
