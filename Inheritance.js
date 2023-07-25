class details{
        constructor(name,age,address,city,state,job,joblocation){
                this.name=name;
                this.age=age;
                this.address=address;
                this.city=city;
                this.state=state;
                this.job=job;
                this.joblocation=joblocation;
        }
        homeDetail=()=>{
                console.log(`${this.name} is ${this.age} old and belongs from ${this.address} , ${this.city}, ${this.state}`);
        }
        professionalDetail=()=>{
                console.log(`${this.name} work as ${this.job} at ${this.joblocation}`);
        }
}

class person extends details {
        equipment(equipment){
                this.equipment=equipment;
                console.log(`${this.name} has ${this.equipment}`);
        }
}

let abhi = new person("abhi",21,"S-21","Patna","Bihar","Web-Developer","Bangalore");
abhi.professionalDetail()
abhi.homeDetail()
abhi.equipment("ASUS")
