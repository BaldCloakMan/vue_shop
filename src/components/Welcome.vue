<template>
    <div>
        <h3>Welcome</h3>
    </div>
</template>
<script>
    export default {
        data(){
            return{ 
                a:{
                    id:1,
                    name: "nihao",
                    age:18
                }
            }
        },
        created() {
            const { name: res} = this.a
            console.log(res)
            const { age: ress} = this.a
            console.log(ress)
        }
    }
</script>