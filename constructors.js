class booking{
        constructor(name,movie){
                this.name = name;
                this.movie = movie;
        }
        booked =()=>{
                console.log(this.name + ": your booking is confirmed for movie: "+ this.movie);
        }
        cancel =()=>{
                console.log(this.name + ": your booking is cancelled for movie: "+ this.movie);
        }
}

let shreyansh = new booking("Shreyansh","YJHD")

shreyansh.booked()
let adi = new booking("Adi","DDLJ")
adi.booked()
adi.cancel()