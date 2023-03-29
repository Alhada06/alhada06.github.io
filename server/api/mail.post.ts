import sendgrid from "@sendgrid/mail";


  sendgrid.setApiKey(process.env.NUXT_SENDGRID_API_KEY);

 const msg = {
  to: 'alhada06@gmail.com', // Change to your recipient
  from: {email:'alhada06+site@gmail.com',name:'contact from website'}, // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

export default defineEventHandler(async(event) => {
  // console.log(event)
  //   return {
  //     api: 'works'
  //   }
  const body= await readBody(event);
  console.log(body)

//   sendgrid.send(msg)
//    .then(() => {
//      console.log('Email sent')
//    return {api:'sent'}
//   })
//    .catch((error) => {
//      console.error(error)
//      return error
//    })
// }) 

 try {

  await sendgrid.send(msg)
return {message:'success'}
 } catch (error) {
   throw createError({
     statusCode: 400,
     statusMessage: 'woopsr',
   })
}

 })