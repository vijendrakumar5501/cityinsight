
const mongoose=require('mongoose')
const URL=process.env.m_url

mongoose.connect(URL,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(()=>{
    console.log('mongodb connected')
}).catch((error)=>{
    console.log(`mongodb not connected ${error}`)
})