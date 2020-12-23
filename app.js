new Vue({
    el:"#app",
    data:{
        username : "",
        user:{

        },
    },
    methods : {
        getUser : function(){
            fetch(`https://api.github.com/users/${this.username}`)
            .then(user=>user.json())
            .then(user=>this.user=user)
        }
    }
    
})