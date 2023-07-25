class student{
        constructor(name,Grade){
            this.name=name;
            this.Grade=Grade;
        }

        stuDetails(){
                console.log(`${this.name} is from this grade : ${this.Grade}`)
        }
        wantLeave(name,leave){
                console.log(`${name} want to ${leave} leave`)
        }
}

class emp extends student{
        wantLeave(name,leave){
                /* In the context of the code provided, `super` is used to call a method from the
                parent class. */
                super.wantLeave(name,leave + 1)
                console.log(`one extra leave also granted`)
        }
        wantStuDetails(stuname,grade){
                super.stuDetails()
        }
}

let avik = new student("avik",5)
avik.stuDetails()
let e = new emp()
e.wantLeave("Hello",3)
