import  express  from "express";

const app = express()

const PORT =3000
//ejs template  engine

app.set('view engine','ejs' );

//static files middleware
app.use(express.static('public'))

app.get("/", (req,res) =>{
    res.render('index')
})
app.get('/about' , (req,res) =>{
    res.render('about');
})

app.listen(PORT,()=>{
    console.log(`Application running on port : ${PORT}`)
})