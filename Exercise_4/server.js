const nm=require('nodemailer');
const sender=nm.createTransport(
    {
      
        service:'gmail',
      
        auth:{
            user:'sangervithu2002@gmail.com',
            pass:"wctdglnwgozymscq",
        }


    }
)

const composemail={
    from:'sangervithu2002@gmail.com',
    to:'vithurshansangaralingam@gmail.com',
    subject:'sendmail from nodejs',
    html:'<h1>suuccessfully</h1>',
}

sender.sendMail(composemail,(e,infor)=>{
    if(e){
        console.log("errordaa"+e)
    }
    else{
        console.log('succesdsa+'+infor.response);
    }
})