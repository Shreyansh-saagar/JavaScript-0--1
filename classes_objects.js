/* The `class` keyword in JavaScript is used to define a new class. A class is a blueprint for creating
objects with similar properties and methods. It encapsulates data (properties) and functions
(methods) into a single unit. In the example provided, the `booking` class is defined with
properties like `name` and `movie`, and methods like `booked`, `cancel`, and `data`. */
class booking{
        booked =()=>{
                console.log(this.name + ": your booking is confirmed for movie: "+ this.movie);
        }
        cancel =()=>{
                console.log(this.name + ": your booking is cancelled for movie: "+ this.movie);
        }
        data =(name, movie)=>{
                /* `this.name = name;` is assigning the value of the `name` parameter to the `name`
                property of the current instance of the `booking` class. This allows each instance
                of the class to have its own unique `name` property. */
                this.name = name;
                this.movie = movie;
        }
}

let shreyansh = new booking()
shreyansh.data("Shreyansh","YJHD")

shreyansh.booked()
let adi = new booking()
adi.data("Adi","DDLJ")
adi.booked()
adi.cancel()