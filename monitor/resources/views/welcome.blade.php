
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>

<script src="/js/app.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/iview/dist/styles/iview.css">
<!-- import iView -->
<script src="//unpkg.com/iview/dist/iview.min.js"></script>
<!-- import vue-resource -->
<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.0"></script>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" type="text/css" href="http://unpkg.com/iview/dist/styles/iview.css">
    <script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
    <script type="text/javascript" src="http://unpkg.com/iview/dist/iview.min.js"></script>
</head>
<body>
<div id="app" >



        <div v-for="user in list_user">


                @{{user.name}}
                <div v-if="user.percent >50" id="notgood">
                    <i-progress  :percent="user.percent" status="active"></i-progress>
                </div>
                <div v-else-if="user.percent <25" id="good">
                    <i-progress  :percent="user.percent" status="active"></i-progress>
                </div>
                <div v-else id="middlegood">
                    <i-progress  :percent="user.percent" status="active"></i-progress>
                </div>
        </div>


</div>


<style>
    #app{
        width: 50%;
    }
    #good .ivu-progress-active .ivu-progress-bg {
        background-color: rgb(43, 237, 33);
    }

    #middlegood .ivu-progress-active .ivu-progress-bg {
        background-color: rgb(237, 151, 32);
    }

    #notgood .ivu-progress-active .ivu-progress-bg {
        background-color: rgb(237, 38, 26);
    }


</style>
<script>
    Vue.prototype.$http = axios;



    new Vue({
        el: '#app',
        data: {
            responseapi: 0,
            list_user: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    province: 'America',
                    city: 'New York',
                    zip: 100000,
                    percent: 20
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'Washington, D.C. No. 1 Lake Park',
                    province: 'America',
                    city: 'Washington, D.C.',
                    zip: 100000,
                    percent: 12
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    province: 'Australian',
                    city: 'Sydney',
                    zip: 100000,
                    percent: 60
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    province: 'Canada',
                    city: 'Ottawa',
                    zip: 100000,
                    percent: 40
                }
            ]

        },
        methods: {
            loadData: function () {



                let axiosConfig = {
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8, application/x-www-form-urlencoded",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
                    }
                };

                this.$http.get('http://45.32.104.249:3000/emotion/1', axiosConfig)
                    .then(response => {
                        this.responseapi = response.responseapi;
                        console.log('loaddata');
                        console.log(this.responseapi);
                    });
                /*
                axios.get('/emotion/1', function (response) {
                    this.responseapi = response.responseapi;
                    console.log('loaddata');
                    console.log(this.responseapi);
                }.bind(this));*/
            }
        },
        mounted: function(){
            this.loadData();
            console.log('mounted');
        },
        ready: function () {
            this.loadData();

            setInterval(function () {
                this.loadData();
            }.bind(this), 5000);
        }
    })
</script>
</body>
</html>